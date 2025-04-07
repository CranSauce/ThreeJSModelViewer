// src/three/loaders/objLoader.js
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export const loadOBJModel = (buffer, scene, wireframe, smoothing, onError, onSuccess = null) => {
  console.log('[OBJLoader] Starting OBJ load...');
  if (!buffer || buffer.length === 0) {
    const error = '[OBJLoader] Buffer is empty';
    console.error(error);
    if (onError) onError(error);
    return;
  }
  if (!scene) {
    const error = '[OBJLoader] No scene provided';
    console.error(error);
    if (onError) onError(error);
    return;
  }

  try {
    const loader = new OBJLoader();
    console.log('[OBJLoader] Buffer received, first 200 characters:', buffer.substring(0, 200) + '...');
    const obj = loader.parse(buffer);
    console.log('[OBJLoader] OBJ parsed successfully');

    // Apply material and validate geometry on all meshes
    let totalVertices = 0;
    let totalFaces = 0;
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xF5F5DC, // Cream color
          wireframe: wireframe,
          roughness: 0.7, // Increased for softer highlights
          metalness: 0.0, // Set to 0 for non-metallic look
          side: THREE.DoubleSide,
          // Use flat shading if smoothing is false; otherwise smooth shading
          flatShading: smoothing,
          envMapIntensity: 0.2, // Added subtle environment reflection
        });
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.geometry) {
          const vertexCount = child.geometry.attributes.position ? child.geometry.attributes.position.count : 0;
          let faceCount = 0;
          if (child.geometry.index) {
            faceCount = child.geometry.index.count / 3;
          } else if (child.geometry.attributes.position) {
            faceCount = Math.floor(child.geometry.attributes.position.count / 3);
          }
          totalVertices += vertexCount;
          totalFaces += faceCount;
          if (!child.geometry.index && child.geometry.attributes.position) {
            const positions = child.geometry.attributes.position.array;
            const indices = [];
            for (let i = 0; i < positions.length / 3; i++) {
              indices.push(i);
            }
            child.geometry.setIndex(indices);
          }
          if (smoothing) {
            child.geometry.computeVertexNormals();
          }
          child.geometry.computeBoundingBox();
        }
      }
    });
    console.log('[OBJLoader] Total vertices:', totalVertices, 'Total faces:', totalFaces);

    if (totalVertices === 0 || totalFaces === 0) {
      throw new Error('[OBJLoader] Model has no valid geometry');
    }

    // Center and scale the model
    obj.rotation.set(0, 0, 0);
    obj.position.set(0, 0, 0);
    obj.scale.set(1, 1, 1);
    obj.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    console.log('[OBJLoader] Pre-transform bounding box:', box);

    // Center the model at the origin and adjust height
    obj.position.set(-center.x, -center.y, -center.z);
    obj.position.y += size.y / 2;
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 5 / maxDim;
    obj.scale.multiplyScalar(scale);
    obj.updateMatrixWorld(true);

    console.log('[OBJLoader] Final model state - position:', obj.position.toArray(), 'scale:', obj.scale.toArray());

    obj.name = 'customMesh';
    scene.add(obj);
    console.log('[OBJLoader] OBJ model added to scene');
    if (onSuccess) onSuccess();
  } catch (error) {
    console.error('[OBJLoader] Error loading OBJ:', error);
    if (onError) {
      onError(`Error loading OBJ: ${error.message}`);
    }
  }
};
