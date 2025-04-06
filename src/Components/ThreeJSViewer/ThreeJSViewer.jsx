import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import useThreeScene from '../../hooks/useThreeScene';
import useLightDrag from '../../hooks/useLightDrag';
import useObjectDrag from '../../hooks/useObjectDrag';
import ObjectControls from '../ObjectControls/ObjectControls';
import LightControls from '../LightControls/LightControls';
import ModelUploader from '../ModelUploader/ModelUploader';
import { createObject, addObjectHelpers, removeObjectHelpers } from '../../three/helpers';
import { loadGLTFModel } from '../../three/loaders/gltfLoader';
import { loadOBJModel } from '../../three/loaders/objLoader';

const ThreeJSViewer = () => {
  const mountRef = useRef(null);

  // UI state
  const [wireframe, setWireframe] = useState(false);
  const [objectType, setObjectType] = useState('cube');
  const [modelLoading, setModelLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Light state
  const [lightX, setLightX] = useState(3);
  const [lightY, setLightY] = useState(3.5);
  const [lightZ, setLightZ] = useState(1);
  const [lightIntensity, setLightIntensity] = useState(1);
  const [isDraggingLight, setIsDraggingLight] = useState(false);

  // Object dragging state
  const [isDraggingObject, setIsDraggingObject] = useState(false);

  // Helper visibility state
  const [showHelper, setShowHelper] = useState(true);
  const [showBounds, setShowBounds] = useState(true);
  const [showOrigin, setShowOrigin] = useState(true);
  const [showAxes, setShowAxes] = useState(true);

  // Get scene, camera, renderer, controls, light, and lightHelper from our custom hook
  const { scene, camera, renderer, controls, light, lightHelper } = useThreeScene(
    mountRef,
    { background: 0x2a3b4c, cameraZ: 5, lightX, lightY, lightZ, showHelper }
  );

  // Update light properties when state changes
  useEffect(() => {
    if (light) {
      light.position.set(lightX, lightY, lightZ);
      light.intensity = lightIntensity;
      const lightSphere = scene.getObjectByName('lightSphere');
      if (lightSphere) {
        lightSphere.position.copy(light.position);
      }
      if (lightHelper) lightHelper.update();
    }
  }, [light, lightX, lightY, lightZ, lightIntensity, lightHelper, scene]);

  // Attach drag hooks (they attach events once renderer is ready)
  useLightDrag(
    renderer,
    camera,
    light,
    lightHelper,
    controls,
    setLightX,
    setLightY,
    lightZ,
    isDraggingLight,
    setIsDraggingLight
  );
  useObjectDrag(renderer, camera, scene, controls, isDraggingObject, setIsDraggingObject);

  // (A) Only re-create object when objectType changes
  useEffect(() => {
    if (scene && objectType !== 'custom') {
      createObject(scene, objectType, wireframe);
      addObjectHelpers(scene);
    }
  }, [scene, objectType]);

  // (B) Update wireframe property on the existing mesh when wireframe changes
  useEffect(() => {
    if (!scene) return;
    const existingMesh = scene.getObjectByName('customMesh');
    if (existingMesh) {
      const updateMaterial = (material) => {
        if (!material) return;
        material.wireframe = wireframe;
        material.needsUpdate = true;
      };

      if (Array.isArray(existingMesh.material)) {
        existingMesh.material.forEach(updateMaterial);
      } else {
        updateMaterial(existingMesh.material);
      }
      existingMesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (Array.isArray(child.material)) {
            child.material.forEach(updateMaterial);
          } else {
            updateMaterial(child.material);
          }
        }
      });
    }
  }, [wireframe, scene]);

  // Update light helper "visibility" via opacity (so it remains interactive)
  useEffect(() => {
    if (lightHelper && lightHelper.material) {
      lightHelper.material.opacity = showHelper ? 1 : 0;
      lightHelper.material.transparent = true;
      lightHelper.update();
    }
  }, [lightHelper, showHelper]);

  // Update object helpers based on helper state
  useEffect(() => {
    if (scene) {
      const boxHelper = scene.getObjectByName('boundingBoxHelper');
      if (boxHelper) boxHelper.visible = showBounds;
      
      const originHelper = scene.getObjectByName('originHelper');
      if (originHelper && originHelper.material) {
        originHelper.material.opacity = showOrigin ? 0.8 : 0;
        originHelper.material.transparent = true;
      }
      
      const axesHelper = scene.getObjectByName('axesHelper');
      if (axesHelper) axesHelper.visible = showAxes;
    }
  }, [scene, showBounds, showOrigin, showAxes]);

  // File upload handling
  const handleFileUpload = (buffer, fileName) => {
    if (!scene) {
      setErrorMessage('Scene not ready');
      return;
    }
    setModelLoading(true);
    setErrorMessage('');

    const existingMesh = scene.getObjectByName('customMesh');
    if (existingMesh) {
      removeObjectHelpers(scene);
      scene.remove(existingMesh);
      if (existingMesh.geometry) existingMesh.geometry.dispose();
      if (existingMesh.material) {
        if (Array.isArray(existingMesh.material)) {
          existingMesh.material.forEach((m) => m.dispose());
        } else {
          existingMesh.material.dispose();
        }
      }
    }

    try {
      console.log('[ThreeJSViewer] Processing file:', fileName);
      
      const onSuccess = () => {
        setModelLoading(false);
        setObjectType('custom');
        addObjectHelpers(scene);
      };

      if (fileName.endsWith('.obj')) {
        loadOBJModel(
          buffer,
          scene,
          wireframe,
          (error) => {
            setModelLoading(false);
            setErrorMessage(`Error loading OBJ: ${error}`);
          },
          onSuccess
        );
      } else if (fileName.endsWith('.gltf') || fileName.endsWith('.glb')) {
        loadGLTFModel(
          buffer,
          scene,
          wireframe,
          (error) => {
            setModelLoading(false);
            setErrorMessage(`Error loading GLTF: ${error}`);
          },
          onSuccess
        );
      } else {
        setModelLoading(false);
        setErrorMessage('Unsupported file format');
      }
    } catch (error) {
      setModelLoading(false);
      setErrorMessage(`Error loading model: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
        <div className="mx-auto w-full max-w-4xl rounded-xl shadow-lg overflow-hidden bg-gray-800 relative" style={{ height: '600px' }}>
          <div ref={mountRef} className="w-full h-full relative">
            {modelLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                Loading model...
              </div>
            )}
          </div>
          <div className="absolute bottom-2 left-2 text-sm text-white/50 font-light pointer-events-none select-none">
            Created by Andrew Thomas
          </div>
        </div>
        {errorMessage && (
          <div className="mx-auto w-full max-w-4xl bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {errorMessage}
          </div>
        )}
        <div className="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <ObjectControls
            wireframe={wireframe}
            setWireframe={setWireframe}
            objectType={objectType}
            setObjectType={setObjectType}
            showBounds={showBounds}
            setShowBounds={setShowBounds}
            showOrigin={showOrigin}
            setShowOrigin={setShowOrigin}
            showAxes={showAxes}
            setShowAxes={setShowAxes}
            showHelper={showHelper}
            setShowHelper={setShowHelper}
            scene={scene}
          />
          <LightControls
            lightX={lightX}
            setLightX={setLightX}
            lightY={lightY}
            setLightY={setLightY}
            lightZ={lightZ}
            setLightZ={setLightZ}
            lightIntensity={lightIntensity}
            setLightIntensity={setLightIntensity}
          />
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <ModelUploader handleFileUpload={handleFileUpload} />
        </div>
        <div className="mx-auto w-full max-w-4xl text-sm bg-white p-3 rounded shadow">
          <p className="font-medium">Instructions:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Click and drag to rotate the object</li>
            <li>Scroll to zoom in/out</li>
            <li>Click and drag the light helper (yellow sphere) to move the light</li>
            <li>Upload your own 3D models in .gltf, .glb or .obj format</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThreeJSViewer;
