// src/three/loaders/gltfLoader.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTFModel = (buffer, scene, wireframe, smoothing, onError, onSuccess = null) => {
  console.log('[GLTFLoader] Starting GLTF/GLB load...');
  const loader = new GLTFLoader();

  // Ensure buffer is an ArrayBuffer
  if (!(buffer instanceof ArrayBuffer)) {
    console.error('[GLTFLoader] Buffer is not an ArrayBuffer:', buffer);
    if (onError) onError('Buffer is not an ArrayBuffer');
    return;
  }

  loader.parse(buffer, '', (gltf) => {
    console.log('[GLTFLoader] GLTF parsed successfully');
    const model = gltf.scene;
    
    // Apply smoothing if enabled
    if (smoothing) {
      model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          child.geometry.computeVertexNormals();
        }
      });
    }

    // Apply wireframe setting to all materials
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.wireframe = wireframe);
        } else {
          child.material.wireframe = wireframe;
        }
      }
    });

    // Center and scale the model
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;
    model.scale.set(scale, scale, scale);
    model.position.sub(center.multiplyScalar(scale));

    // Name the model for later reference
    model.name = 'customMesh';
    scene.add(model);
    console.log('[GLTFLoader] GLTF model added to scene:', model);
    if (onSuccess) onSuccess();
  }, (error) => {
    console.error('[GLTFLoader] Error parsing GLTF:', error);
    if (onError) {
      onError(`Error parsing GLTF: ${error.message}`);
    }
  });
};
