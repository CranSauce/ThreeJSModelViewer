// src/three/helpers.js
import * as THREE from 'three';

export const removeObjectHelpers = (scene) => {
  ['boundingBoxHelper', 'originHelper', 'axesHelper'].forEach((name) => {
    const helper = scene.getObjectByName(name);
    if (helper) {
      scene.remove(helper);
      if (helper.geometry) helper.geometry.dispose();
      if (helper.material) helper.material.dispose();
    }
  });
};

export const createObject = (scene, type, wireframe) => {
  // Remove existing helpers and mesh
  removeObjectHelpers(scene);
  const existingMesh = scene.getObjectByName('customMesh');
  if (existingMesh) {
    scene.remove(existingMesh);
  }

  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    wireframe,
  });

  let geometry;
  switch (type) {
    case 'sphere':
      geometry = new THREE.SphereGeometry(1.5, 32, 32);
      break;
    case 'torus':
      geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
      break;
    case 'cone':
      geometry = new THREE.ConeGeometry(1, 2, 32);
      break;
    default:
      geometry = new THREE.BoxGeometry(2, 2, 2);
  }

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'customMesh';
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // Position the mesh so it sits on the grid (using half its height)
  const box = new THREE.Box3().setFromObject(mesh);
  const size = box.getSize(new THREE.Vector3());
  mesh.position.y = size.y / 2;

  scene.add(mesh);
};

export const addObjectHelpers = (scene) => {
  const mesh = scene.getObjectByName('customMesh');
  if (!mesh) return;

  // Bounding box helper
  const boxHelper = new THREE.BoxHelper(mesh, 0xff0000);
  boxHelper.name = 'boundingBoxHelper';
  scene.add(boxHelper);

  // Origin helper (yellow sphere) – used for dragging the object.
  const originHelper = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xffff00,
      depthTest: false,
      transparent: true,
      opacity: 0.8,
    })
  );
  originHelper.name = 'originHelper';
  originHelper.position.copy(mesh.position);
  originHelper.renderOrder = 999; // Ensure it renders on top
  scene.add(originHelper);

  // Axes helper
  const axesHelper = new THREE.AxesHelper(2);
  axesHelper.name = 'axesHelper';
  axesHelper.position.copy(mesh.position);
  scene.add(axesHelper);
};
