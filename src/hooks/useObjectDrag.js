// src/hooks/useObjectDrag.js
import { useEffect } from 'react';
import * as THREE from 'three';

const useObjectDrag = (renderer, camera, scene, controls, isDraggingObject, setIsDraggingObject) => {
  useEffect(() => {
    if (!renderer || !camera || !scene) return;
    const domElement = renderer.domElement;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onMouseDown = (event) => {
      if (event.button !== 0) return; // only left-click
      event.preventDefault();
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const originHelper = scene.getObjectByName('originHelper');
      if (originHelper) {
        const intersects = raycaster.intersectObject(originHelper);
        if (intersects.length > 0) {
          setIsDraggingObject(true);
          if (controls) controls.enabled = false;
        }
      }
    };

    const onMouseMove = (event) => {
      if (!isDraggingObject) return;
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);
      const mesh = scene.getObjectByName('customMesh');
      if (mesh) {
        mesh.position.set(intersectPoint.x, mesh.position.y, intersectPoint.z);
        const originHelper = scene.getObjectByName('originHelper');
        const axesHelper = scene.getObjectByName('axesHelper');
        const boxHelper = scene.getObjectByName('boundingBoxHelper');
        if (originHelper) originHelper.position.copy(mesh.position);
        if (axesHelper) axesHelper.position.copy(mesh.position);
        if (boxHelper) boxHelper.update();
      }
    };

    const onMouseUp = () => {
      if (isDraggingObject) {
        setIsDraggingObject(false);
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
  }, [renderer, camera, scene, controls, isDraggingObject, setIsDraggingObject]);
};

export default useObjectDrag;
