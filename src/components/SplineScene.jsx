import React, { useEffect, useState } from 'react';

const SoftwareVisualization = () => {
  const [codeLines, setCodeLines] = useState([]);
  const [terminals, setTerminals] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Code snippets that will float around
    const codeSnippets = [
      'const app = new FastAPI()',
      'app.get("/api/users")',
      'return { success: true }',
      'import React from "react"',
      'const [data, setData] = useState()',
      'app.use(cors())',
      'mongoose.connect(DB_URL)',
      'export default function()',
      'async function fetchData()',
      'npm install express',
      'git commit -m "feature"',
      'docker build -t app .',
      'kubectl apply -f deploy.yaml',
      'SELECT * FROM users',
      'CREATE TABLE projects',
      'pip install fastapi',
      'yarn add react-router',
      'const response = await api()',
      'function handleSubmit()'
    ];

    const containerWidth = isMobile ? 350 : 700;
    const containerHeight = isMobile ? 400 : 700;

    const newCodeLines = codeSnippets.slice(0, isMobile ? 8 : 19).map((code, index) => ({
      id: index,
      text: code,
      x: Math.random() * (containerWidth - 200) + 50,
      y: Math.random() * (containerHeight - 100) + 50,
      delay: Math.random() * 5000,
      duration: (Math.random() * 3000) + 4000,
      fontSize: Math.random() * (isMobile ? 2 : 4) + (isMobile ? 10 : 12),
      opacity: Math.random() * 0.6 + 0.4
    }));

    // Terminal windows
    const terminalCommands = [
      ['$ npm run dev', '> Server running on :3000'],
      ['$ git status', '> On branch main'],
      ['$ docker ps', '> CONTAINER ID   IMAGE'],
      ['$ python main.py', '> * Running on :8000']
    ];

    const terminalCount = isMobile ? 2 : 4;
    const newTerminals = terminalCommands.slice(0, terminalCount).map((commands, index) => ({
      id: index,
      commands,
      x: isMobile ? 
          (index % 1) * (containerWidth - 200) + 50 : 
          50 + (index % 2) * 300,
      y: isMobile ? 
          80 + index * 120 : 
          100 + Math.floor(index / 2) * 250,
      width: isMobile ? 200 : 280,
      height: isMobile ? 100 : 160
    }));

    setCodeLines(newCodeLines);
    setTerminals(newTerminals);
  }, [isMobile]);

  const containerWidth = isMobile ? 350 : 700;
  const containerHeight = isMobile ? 400 : 700;

  return (
    <div style={{ 
      width: `${containerWidth}px`, 
      height: `${containerHeight}px`, 
      position: "relative",
      overflow: "hidden",
      background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%)',
      margin: '0 auto'
    }}>
      {/* Background Grid */}
      <svg width={containerWidth} height={containerHeight} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <defs>
          <pattern id="code-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 255, 209, 0.1)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#code-grid)"/>
      </svg>

      {/* Central Code Editor */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '280px' : '320px',
        height: isMobile ? '160px' : '200px',
        background: 'rgba(18, 18, 18, 0.9)',
        border: '1px solid #00FFD1',
        borderRadius: '8px',
        padding: isMobile ? '12px' : '16px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: isMobile ? '12px' : '14px',
        zIndex: 3,
        boxShadow: '0 0 20px rgba(0, 255, 209, 0.3)'
      }}>
        {/* Editor Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: isMobile ? '8px' : '12px',
          paddingBottom: isMobile ? '6px' : '8px',
          borderBottom: '1px solid rgba(0, 255, 209, 0.2)'
        }}>
          <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28ca42' }}></div>
          </div>
          <span style={{ color: '#00FFD1', fontSize: isMobile ? '10px' : '12px' }}>main.py</span>
        </div>

        {/* Code Content */}
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.4', fontSize: isMobile ? '10px' : '14px' }}>
          <div><span style={{ color: '#ff6b6b' }}>from</span> <span style={{ color: '#4ecdc4' }}>fastapi</span> <span style={{ color: '#ff6b6b' }}>import</span> <span style={{ color: '#ffe66d' }}>FastAPI</span></div>
          {!isMobile && (
            <div><span style={{ color: '#ff6b6b' }}>from</span> <span style={{ color: '#4ecdc4' }}>pydantic</span> <span style={{ color: '#ff6b6b' }}>import</span> <span style={{ color: '#ffe66d' }}>BaseModel</span></div>
          )}
          <div style={{ marginTop: '8px' }}></div>
          <div><span style={{ color: '#ffe66d' }}>app</span> = <span style={{ color: '#4ecdc4' }}>FastAPI</span>()</div>
          <div style={{ marginTop: '8px' }}></div>
          <div><span style={{ color: '#ff6b6b' }}>@app</span>.<span style={{ color: '#4ecdc4' }}>get</span>(<span style={{ color: '#95e1d3' }}>"/api/status"</span>)</div>
          <div><span style={{ color: '#ff6b6b' }}>async def</span> <span style={{ color: '#ffe66d' }}>status</span>():</div>
          <div style={{ paddingLeft: isMobile ? '10px' : '20px' }}><span style={{ color: '#ff6b6b' }}>return</span> {"{"}
            <span style={{ color: '#95e1d3' }}>"ok"</span>: <span style={{ color: '#95e1d3' }}>true</span>
          {"}"}</div>
        </div>

        {/* Typing cursor */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '15px' : '20px',
          left: isMobile ? '25px' : '36px',
          width: '2px',
          height: isMobile ? '12px' : '16px',
          background: '#00FFD1',
          animation: 'blink 1s infinite'
        }}></div>
      </div>

      {/* Terminal Windows */}
      {terminals.map((terminal) => (
        <div
          key={terminal.id}
          style={{
            position: 'absolute',
            top: `${terminal.y}px`,
            left: `${terminal.x}px`,
            width: `${terminal.width}px`,
            height: `${terminal.height}px`,
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(0, 255, 209, 0.3)',
            borderRadius: '6px',
            padding: isMobile ? '8px' : '12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: isMobile ? '10px' : '12px',
            zIndex: 2,
            animation: `fadeInUp ${2 + terminal.id * 0.5}s ease-out`
          }}
        >
          {/* Terminal Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: isMobile ? '6px' : '8px',
            paddingBottom: '4px',
            borderBottom: '1px solid rgba(0, 255, 209, 0.2)'
          }}>
            <div style={{ display: 'flex', gap: '4px', marginRight: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f57' }}></div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28ca42' }}></div>
            </div>
            <span style={{ color: '#00FFD1', fontSize: isMobile ? '8px' : '10px' }}>terminal</span>
          </div>

          {/* Terminal Commands */}
          {terminal.commands.map((command, idx) => (
            <div key={idx} style={{ 
              color: command.startsWith('$') ? '#00FFD1' : 'var(--text-secondary)',
              marginBottom: '4px',
              animation: `typeWriter ${1 + idx * 0.5}s ease-out`,
              fontSize: isMobile ? '8px' : '12px'
            }}>
              {command}
            </div>
          ))}
        </div>
      ))}

      {/* Floating Code Lines */}
      {codeLines.map((line) => (
        <div
          key={line.id}
          style={{
            position: 'absolute',
            top: `${line.y}px`,
            left: `${line.x}px`,
            color: '#00FFD1',
            fontSize: `${line.fontSize}px`,
            fontFamily: 'JetBrains Mono, monospace',
            opacity: line.opacity,
            animation: `float ${line.duration}ms ease-in-out infinite`,
            animationDelay: `${line.delay}ms`,
            zIndex: 1,
            pointerEvents: 'none',
            textShadow: '0 0 10px rgba(0, 255, 209, 0.5)'
          }}
        >
          {line.text}
        </div>
      ))}

      {/* Technology Stack Icons */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '20px' : '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: isMobile ? '8px' : '20px',
        zIndex: 2,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {['React', 'Node.js', 'Python', 'Docker', 'AWS'].slice(0, isMobile ? 3 : 5).map((tech, index) => (
          <div
            key={tech}
            style={{
              background: 'rgba(0, 255, 209, 0.1)',
              border: '1px solid #00FFD1',
              borderRadius: '6px',
              padding: isMobile ? '4px 8px' : '8px 12px',
              fontSize: isMobile ? '10px' : '12px',
              color: '#00FFD1',
              fontFamily: 'JetBrains Mono, monospace',
              animation: `pulse ${2 + index * 0.3}s ease-in-out infinite`
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-15px) translateX(5px); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-10px) translateX(-5px); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-20px) translateX(3px); 
            opacity: 0.6;
          }
        }

        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7;
          }
          50% { 
            transform: scale(1.05); 
            opacity: 1;
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes typeWriter {
          0% { 
            width: 0; 
            opacity: 0;
          }
          1% { 
            opacity: 1;
          }
          100% { 
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SoftwareVisualization;