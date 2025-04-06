// src/hooks/useLightDrag.js
import { useEffect } from 'react';
import * as THREE from 'three';

const useLightDrag = (
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
) => {
  useEffect(() => {
    if (!renderer || !camera || !light) return;
    const domElement = renderer.domElement;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseDown = (event) => {
      event.preventDefault();
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      // Use light helper if its material opacity > 0; otherwise, fallback to lightSphere
      let targetObject;
      if (lightHelper && lightHelper.material && lightHelper.material.opacity > 0) {
        targetObject = lightHelper;
      } else {
        targetObject = light.getObjectByName('lightSphere');
      }
      if (targetObject) {
        const intersects = raycaster.intersectObject(targetObject, true);
        if (intersects.length > 0) {
          setIsDraggingLight(true);
          if (controls) controls.enabled = false;
        }
      }
    };

    const onMouseMove = (event) => {
      if (!isDraggingLight) return;
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);
      setLightX(intersectPoint.x);
      setLightY(intersectPoint.y);
      light.position.set(intersectPoint.x, intersectPoint.y, lightZ);
      if (lightHelper) lightHelper.update();
    };

    const onMouseUp = () => {
      if (isDraggingLight) {
        setIsDraggingLight(false);
        if (controls) controls.enabled = true;
      }
    };

    domElement.addEventListener('mousedown', onMouseDown);
    domElement.addEventListener('mousemove', onMouseMove);
    domElement.addEventListener('mouseup', onMouseUp);
    return () => {
      domElement.removeEventListener('mousedown', onMouseDown);
      domElement.removeEventListener('mousemove', onMouseMove);
      domElement.removeEventListener('mouseup', onMouseUp);
    };
  }, [
    renderer,
    camera,
    light,
    lightHelper,
    controls,
    setLightX,
    setLightY,
    lightZ,
    isDraggingLight,
    setIsDraggingLight,
  ]);
};

export default useLightDrag;
