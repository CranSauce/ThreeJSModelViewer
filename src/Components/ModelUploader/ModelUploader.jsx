// src/components/ModelUploader.jsx
import React from 'react';

const ModelUploader = ({ handleFileUpload }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();
    console.log('[ModelUploader] File selected:', fileName, 'Size:', file.size, 'bytes');

    const reader = new FileReader();

    reader.onerror = (error) => {
      console.error('[ModelUploader] Error reading file:', error);
    };

    if (fileName.endsWith('.obj')) {
      // For OBJ files, read as text
      reader.readAsText(file);
    } else if (fileName.endsWith('.gltf') || fileName.endsWith('.glb')) {
      // For GLTF/GLB files, read as ArrayBuffer
      reader.readAsArrayBuffer(file);
    } else {
      console.error('[ModelUploader] Unsupported file format:', fileName);
      return;
    }

    reader.onload = (ev) => {
      console.log('[ModelUploader] File loaded successfully:', fileName);
      console.log('[ModelUploader] Result type:', typeof ev.target.result);
      console.log('[ModelUploader] Result length:', 
        ev.target.result instanceof ArrayBuffer ? ev.target.result.byteLength : ev.target.result.length);
      handleFileUpload(ev.target.result, fileName);
    };
  };

  return (
    <div className="space-y-1">
      <p className="text-sm">Upload 3D Model:</p>
      <p className="text-xs text-gray-500">Supported formats: .gltf, .glb, .obj</p>
      <input
        type="file"
        accept=".gltf,.glb,.obj"
        onChange={handleFileChange}
        className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white"
      />
    </div>
  );
};

export default ModelUploader;
