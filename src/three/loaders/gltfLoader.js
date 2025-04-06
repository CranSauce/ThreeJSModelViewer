// src/three/loaders/gltfLoader.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTFModel = (buffer, scene, wireframe, onError, onSuccess = null) => {
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
    if (!model) {
      console.error('[GLTFLoader] No scene found in GLTF');
      if (onError) onError('No scene found in GLTF');
      return;
    }

    // Apply material to all meshes
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x00ff00,
          wireframe: wireframe,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // Log the bounding box before transformation
    const box = new THREE.Box3().setFromObject(model);
    console.log('[GLTFLoader] Model bounding box before centering:', box);

    // Center and scale model
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
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
