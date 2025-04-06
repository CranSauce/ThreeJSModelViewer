// src/hooks/useThreeScene.js
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const useThreeScene = (mountRef, initialSettings = {}) => {
  // Persist core objects via refs
  const sceneRef = useRef();
  const cameraRef = useRef();
  const lightRef = useRef();
  const lightHelperRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();

  // Use state to signal when renderer and controls are ready
  const [renderer, setRenderer] = useState(null);
  const [controls, setControls] = useState(null);

  // Create scene and camera only once
  if (!sceneRef.current) {
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(initialSettings.background || 0x2a3b4c);
  }
  if (!cameraRef.current) {
    cameraRef.current = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    cameraRef.current.position.set(7, 4, 7);
    cameraRef.current.lookAt(0, 1, 0);
  }
  if (!lightRef.current) {
    lightRef.current = new THREE.PointLight(0xffffff, 1, 100);
    lightRef.current.position.set(
      initialSettings.lightX || 5,
      initialSettings.lightY || 10,
      initialSettings.lightZ || 7
    );
    lightRef.current.castShadow = true;
    sceneRef.current.add(lightRef.current);
  }
  // Create a light sphere for interaction; add it directly to the scene
  let lightSphere = sceneRef.current.getObjectByName('lightSphere');
  if (!lightSphere) {
    lightSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    lightSphere.name = 'lightSphere';
    lightSphere.position.copy(lightRef.current.position);
    sceneRef.current.add(lightSphere);
  }
  if (!lightHelperRef.current) {
    // Create a point light helper and set its material to be transparent
    lightHelperRef.current = new THREE.PointLightHelper(lightRef.current, 0.1);
    lightHelperRef.current.name = 'lightHelper';
    if (lightHelperRef.current.material) {
      lightHelperRef.current.material.transparent = true;
      lightHelperRef.current.material.opacity =
        initialSettings.showHelper !== undefined && !initialSettings.showHelper ? 0 : 1;
    }
    sceneRef.current.add(lightHelperRef.current);
  }
  // Add ambient light and grid helper once
  if (!sceneRef.current.getObjectByName('ambientLight')) {
    const ambientLight = new THREE.AmbientLight(0x808080, 1);
    ambientLight.name = 'ambientLight';
    sceneRef.current.add(ambientLight);
  }
  if (!sceneRef.current.getObjectByName('gridHelper')) {
    const gridHelper = new THREE.GridHelper(20, 20);
    gridHelper.name = 'gridHelper';
    gridHelper.position.y = 0;
    sceneRef.current.add(gridHelper);
  }

  useEffect(() => {
    if (!mountRef.current) return;
    // Create renderer
    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
    });
    rendererRef.current.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    rendererRef.current.shadowMap.enabled = true;
    // Create controls
    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.minDistance = 3;
    controlsRef.current.maxDistance = 20;
    controlsRef.current.maxPolarAngle = Math.PI / 2;
    controlsRef.current.target.set(0, 1, 0);

    // Attach renderer to DOM
    mountRef.current.appendChild(rendererRef.current.domElement);
    // Update state so dependent hooks re-run
    setRenderer(rendererRef.current);
    setControls(controlsRef.current);

    // Handle WebGL context events
    const handleContextLost = (event) => {
      event.preventDefault();
      console.log('WebGL context lost. Attempting to restore...');
    };
    const handleContextRestored = () => {
      console.log('WebGL context restored.');
      if (rendererRef.current && mountRef.current) {
        rendererRef.current.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }
    };
    rendererRef.current.domElement.addEventListener('webglcontextlost', handleContextLost);
    rendererRef.current.domElement.addEventListener('webglcontextrestored', handleContextRestored);
    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      if (rendererRef.current) {
        rendererRef.current.setSize(width, height);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.domElement.removeEventListener('webglcontextlost', handleContextLost);
        rendererRef.current.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
        if (mountRef.current && rendererRef.current.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [mountRef]);

  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer,
    controls,
    light: lightRef.current,
    lightHelper: lightHelperRef.current,
  };
};

export default useThreeScene;
