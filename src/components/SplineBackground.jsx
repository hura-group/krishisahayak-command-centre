import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Spline Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div className="fixed inset-0 bg-[#020617]" />;
    }
    return this.props.children;
  }
}

const SplineBackground = () => {
  return (
    <div id="spline-canvas" style={{ zIndex: 0 }}>
      <SplineErrorBoundary>
        <Suspense fallback={<div className="fixed inset-0 bg-[#020617]" />}>
          <Spline 
            scene="https://prod.spline.design/ATp8xGghV6L-M2S5/scene.splinecode" 
          />
        </Suspense>
      </SplineErrorBoundary>
      {/* Overlay gradient - lowered opacity to ensure no visibility issues */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]/80 pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  );
};

export default SplineBackground;
