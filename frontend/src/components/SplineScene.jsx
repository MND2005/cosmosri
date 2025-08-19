import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  return (
    <div style={{ 
      width: "700px", 
      height: "700px", 
      overflow: "visible", 
      position: "relative" 
    }}>
      <Suspense fallback={
        <div className="flex items-center justify-center h-full">
          <div className="text-cyan-400 body-medium">Loading 3D Scene...</div>
        </div>
      }>
        <Spline 
          scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineScene;