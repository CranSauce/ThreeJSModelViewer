import React from 'react';

const ModelUploader = ({ handleFileUpload }) => {
  return (
    <div className="space-y-1">
      <p className="text-sm">Upload 3D Model:</p>
      <p className="text-xs text-gray-500">Supported formats: .gltf, .glb, .obj</p>
      <input
        type="file"
        accept=".gltf,.glb,.obj"
        onChange={(e) => {
          const file = e.target.files[0];
          if (!file) return;
          const fileName = file.name.toLowerCase();
          const reader = new FileReader();
          reader.onload = (ev) => {
            console.log('File loaded:', fileName);
            handleFileUpload(ev.target.result, fileName);
          };
          if (fileName.endsWith('.obj')) {
            reader.readAsText(file);
          } else {
            reader.readAsArrayBuffer(file);
          }
        }}
        className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white"
      />
    </div>
  );
};

export default ModelUploader;
