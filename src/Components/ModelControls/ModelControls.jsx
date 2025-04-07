import React from 'react';

const ModelControls = ({ 
  smoothing, 
  setSmoothing,
  smoothingIntensity,
  setSmoothingIntensity 
}) => {
  return (
    <div className="space-y-3 flex flex-col items-center">
      <h3 className="text-lg font-medium">Model Controls</h3>
      
      {/* Smoothing Toggle */}
      <div className="flex flex-col items-center gap-2 w-full">
        <button
          onClick={() => setSmoothing(!smoothing)}
          className={`px-3 py-1 rounded text-white ${
            smoothing ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          Smoothing {smoothing ? 'ON' : 'OFF'}
        </button>
        
        {/* Intensity Slider (only shown when smoothing is ON) */}
        {smoothing && (
          <div className="w-full space-y-1">
            <label className="block text-sm text-center">
              Intensity: {smoothingIntensity.toFixed(1)}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={smoothingIntensity}
              onChange={(e) => setSmoothingIntensity(Number(e.target.value))}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelControls;
