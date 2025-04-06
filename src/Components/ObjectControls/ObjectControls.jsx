import React from 'react';

const ObjectControls = ({
  wireframe,
  setWireframe,
  objectType,
  setObjectType,
  showBounds,
  setShowBounds,
  showOrigin,
  setShowOrigin,
  showAxes,
  setShowAxes,
  showHelper,
  setShowHelper,
}) => {
  return (
    <div className="space-y-3 flex flex-col items-center">
      <h3 className="text-lg font-medium">Object Controls</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`px-3 py-1 rounded text-white ${
            wireframe ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          {wireframe ? 'Solid Mode' : 'Wireframe Mode'}
        </button>
        <button
          onClick={() => setShowHelper(!showHelper)}
          className={`px-3 py-1 rounded text-white ${
            showHelper ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          {showHelper ? 'Hide Light' : 'Show Light'}
        </button>
        <button
          onClick={() => setShowBounds(!showBounds)}
          className={`px-3 py-1 rounded text-white ${
            showBounds ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          {showBounds ? 'Hide Bounds' : 'Show Bounds'}
        </button>
        <button
          onClick={() => setShowOrigin(!showOrigin)}
          className={`px-3 py-1 rounded text-white ${
            showOrigin ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          {showOrigin ? 'Hide Origin' : 'Show Origin'}
        </button>
        <button
          onClick={() => setShowAxes(!showAxes)}
          className={`px-3 py-1 rounded text-white ${
            showAxes ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          {showAxes ? 'Hide Axes' : 'Show Axes'}
        </button>
      </div>
      <div className="space-y-1 text-center">
        <p className="text-sm">Object Type:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setObjectType('cube')}
            className={`px-3 py-1 rounded text-white ${
              objectType === 'cube' ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            Cube
          </button>
          <button
            onClick={() => setObjectType('sphere')}
            className={`px-3 py-1 rounded text-white ${
              objectType === 'sphere' ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            Sphere
          </button>
          <button
            onClick={() => setObjectType('torus')}
            className={`px-3 py-1 rounded text-white ${
              objectType === 'torus' ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            Torus
          </button>
          <button
            onClick={() => setObjectType('cone')}
            className={`px-3 py-1 rounded text-white ${
              objectType === 'cone' ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            Cone
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectControls;
