import React, { useEffect, useState } from 'react';

const AIVisualization = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Generate neural network nodes
    const nodeCount = 24;
    const newNodes = [];
    const newConnections = [];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * 2 * Math.PI;
      const radius = 150 + Math.sin(i * 0.5) * 50;
      const x = 350 + Math.cos(angle) * radius;
      const y = 350 + Math.sin(angle) * radius;
      
      newNodes.push({
        id: i,
        x,
        y,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.5 + 0.5,
        pulse: Math.random() * 2000 + 1000
      });
    }

    // Generate connections between nodes
    for (let i = 0; i < nodeCount; i++) {
      const connectionCount = Math.floor(Math.random() * 4) + 2;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodeCount);
        if (targetIndex !== i) {
          newConnections.push({
            id: `${i}-${targetIndex}`,
            from: newNodes[i],
            to: newNodes[targetIndex],
            opacity: Math.random() * 0.3 + 0.1
          });
        }
      }
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, []);

  return (
    <div style={{ 
      width: "700px", 
      height: "700px", 
      position: "relative",
      overflow: "hidden"
    }}>
      {/* AI Brain SVG */}
      <svg 
        width="700" 
        height="700" 
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Background grid pattern */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 255, 209, 0.1)" strokeWidth="1"/>
          </pattern>
          
          {/* Glowing filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Grid background */}
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3"/>
        
        {/* Neural network connections */}
        {connections.map((connection) => (
          <line
            key={connection.id}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="#00FFD1"
            strokeWidth="1"
            opacity={connection.opacity}
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values={`${connection.opacity * 0.2};${connection.opacity};${connection.opacity * 0.2}`}
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
        ))}
        
        {/* Neural network nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#00FFD1"
            opacity={node.opacity}
            filter="url(#glow)"
          >
            <animate
              attributeName="r"
              values={`${node.size};${node.size * 1.5};${node.size}`}
              dur={`${node.pulse}ms`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values={`${node.opacity * 0.3};${node.opacity};${node.opacity * 0.3}`}
              dur={`${node.pulse * 1.5}ms`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        
        {/* Central AI Brain */}
        <g transform="translate(350, 350)">
          {/* Brain outline */}
          <path
            d="M-80,-60 C-100,-80 -60,-100 -20,-90 C20,-95 60,-85 80,-60 C90,-40 85,0 70,30 C50,60 10,70 -30,65 C-70,60 -90,20 -80,-60 Z"
            fill="none"
            stroke="#00FFD1"
            strokeWidth="2"
            opacity="0.8"
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.4;0.8;0.4"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Brain circuits */}
          <g opacity="0.6">
            <path d="M-50,-30 L-20,-30 L-20,0 L10,0" stroke="#00FFD1" strokeWidth="1.5" fill="none"/>
            <path d="M-30,-10 L0,-10 L0,20 L30,20" stroke="#00FFD1" strokeWidth="1.5" fill="none"/>
            <path d="M-10,10 L20,10 L20,40" stroke="#00FFD1" strokeWidth="1.5" fill="none"/>
            <path d="M10,-20 L40,-20 L40,10" stroke="#00FFD1" strokeWidth="1.5" fill="none"/>
            
            {/* Circuit nodes */}
            <circle cx="-20" cy="-30" r="3" fill="#00FFD1"/>
            <circle cx="0" cy="-10" r="3" fill="#00FFD1"/>
            <circle cx="20" cy="10" r="3" fill="#00FFD1"/>
            <circle cx="40" cy="-20" r="3" fill="#00FFD1"/>
          </g>
          
          {/* Center core */}
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="rgba(0, 255, 209, 0.2)"
            stroke="#00FFD1"
            strokeWidth="2"
            filter="url(#glow)"
          >
            <animate
              attributeName="r"
              values="15;20;15"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Data flow particles */}
          <circle
            cx="0"
            cy="0"
            r="2"
            fill="#00FFD1"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="4s"
              repeatCount="indefinite"
            />
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M0,0 L50,0 A50,50 0 1,1 -50,0 A50,50 0 1,1 0,0"
            />
          </circle>
        </g>
      </svg>
      
      {/* Floating data elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        fontSize: '12px',
        color: '#00FFD1',
        opacity: '0.7',
        fontFamily: 'JetBrains Mono, monospace',
        animation: 'float 6s ease-in-out infinite'
      }}>
        &lt;AI_PROCESSING/&gt;
      </div>
      
      <div style={{
        position: 'absolute',
        top: '70%',
        right: '15%',
        fontSize: '10px',
        color: '#00FFD1',
        opacity: '0.5',
        fontFamily: 'JetBrains Mono, monospace',
        animation: 'float 4s ease-in-out infinite reverse'
      }}>
        neural_network.init()
      </div>
      
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '10%',
        fontSize: '11px',
        color: '#00FFD1',
        opacity: '0.6',
        fontFamily: 'JetBrains Mono, monospace',
        animation: 'float 5s ease-in-out infinite'
      }}>
        machine_learning.active
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default AIVisualization;