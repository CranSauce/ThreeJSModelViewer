import React from 'react';

const LightControls = ({
  lightX,
  setLightX,
  lightY,
  setLightY,
  lightZ,
  setLightZ,
  lightIntensity,
  setLightIntensity,
}) => {
  return (
    <div className="space-y-3 flex flex-col items-center">
      <h3 className="text-lg font-medium">Light Controls</h3>
      <p className="text-xs text-center">
        Drag the light helper directly in the scene or use sliders below
      </p>
      <div className="space-y-2 w-full">
        <div className="space-y-1">
          <label className="block text-sm text-center">
            X Position: {lightX.toFixed(2)}
          </label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.1"
            value={lightX}
            onChange={(e) => setLightX(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm text-center">
            Y Position: {lightY.toFixed(2)}
          </label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.1"
            value={lightY}
            onChange={(e) => setLightY(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm text-center">
            Z Position: {lightZ.toFixed(2)}
          </label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.1"
            value={lightZ}
            onChange={(e) => setLightZ(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm text-center">
            Intensity: {lightIntensity.toFixed(2)}
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={lightIntensity}
            onChange={(e) => setLightIntensity(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LightControls;
