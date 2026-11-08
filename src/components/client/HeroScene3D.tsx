import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles, Compass } from 'lucide-react';

interface HeroScene3DProps {
  activeMode: 'cloud' | 'ai' | 'mobile' | 'enterprise';
  className?: string;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ activeMode, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // References to keep track of mutable Three.js objects across renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mainGroupRef = useRef<THREE.Group | null>(null);
  const activeMeshGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const dragRef = useRef({ isDown: false, startX: 0, startY: 0, rotX: 0, rotY: 0, targetRotX: 0, targetRotY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 400;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // 3. Renderer Setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL not supported or disabled', e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Clear previous children and append canvas
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting Rig (High-Contrast Cobalt & Specular Highlights)
    const ambientLight = new THREE.AmbientLight(0x0a1020, 2.5);
    scene.add(ambientLight);

    // Deep Cobalt Blue Key Light
    const keyLight = new THREE.DirectionalLight(0x2563eb, 3.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    // Cyan-Blue Rim Light
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 2.0);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    // Dynamic Cursor Tracking Point Light
    const pointLight = new THREE.PointLight(0x3b82f6, 4.0, 15);
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    // 5. Main Rotating Container Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    mainGroupRef.current = mainGroup;

    // Group for mode-specific geometry
    const activeMeshGroup = new THREE.Group();
    mainGroup.add(activeMeshGroup);
    activeMeshGroupRef.current = activeMeshGroup;

    // 6. Ambient Constellation Particle Field (Depth & Atmosphere)
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;

      // Color variation between deep blue, cyan, and crisp white
      const c = Math.random();
      if (c > 0.6) {
        colors[i * 3] = 0.38; // 60a5fa
        colors[i * 3 + 1] = 0.65;
        colors[i * 3 + 2] = 0.98;
      } else if (c > 0.3) {
        colors[i * 3] = 0.15; // 2563eb
        colors[i * 3 + 1] = 0.39;
        colors[i * 3 + 2] = 0.92;
      } else {
        colors[i * 3] = 0.9;
        colors[i * 3 + 1] = 0.9;
        colors[i * 3 + 2] = 1.0;
      }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // 7. Mouse & Touch Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;

      if (dragRef.current.isDown) {
        const deltaX = e.clientX - dragRef.current.startX;
        const deltaY = e.clientY - dragRef.current.startY;
        dragRef.current.targetRotY += deltaX * 0.008;
        dragRef.current.targetRotX += deltaY * 0.008;
        dragRef.current.startX = e.clientX;
        dragRef.current.startY = e.clientY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      dragRef.current.isDown = true;
      dragRef.current.startX = e.clientX;
      dragRef.current.startY = e.clientY;
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      dragRef.current.isDown = false;
      setIsDragging(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        dragRef.current.isDown = true;
        dragRef.current.startX = e.touches[0].clientX;
        dragRef.current.startY = e.touches[0].clientY;
        setIsDragging(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (dragRef.current.isDown && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - dragRef.current.startX;
        const deltaY = e.touches[0].clientY - dragRef.current.startY;
        dragRef.current.targetRotY += deltaX * 0.01;
        dragRef.current.targetRotX += deltaY * 0.01;
        dragRef.current.startX = e.touches[0].clientX;
        dragRef.current.startY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      dragRef.current.isDown = false;
      setIsDragging(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 8. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 9. Animation Loop with 60 FPS Smooth Inertia
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerping of mouse target
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Smooth lerping of manual drag rotation
      dragRef.current.rotX += (dragRef.current.targetRotX - dragRef.current.rotX) * 0.08;
      dragRef.current.rotY += (dragRef.current.targetRotY - dragRef.current.rotY) * 0.08;

      // Update Point Light position to follow cursor
      pointLight.position.x = mouseRef.current.x * 3.5;
      pointLight.position.y = mouseRef.current.y * 3.5;
      pointLight.position.z = 3.5 + Math.sin(elapsedTime * 2) * 0.5;

      // Rotate Main Group
      if (mainGroupRef.current) {
        if (autoRotate && !dragRef.current.isDown) {
          mainGroupRef.current.rotation.y = elapsedTime * 0.35 + dragRef.current.rotY;
          mainGroupRef.current.rotation.x = Math.sin(elapsedTime * 0.25) * 0.15 + dragRef.current.rotX + mouseRef.current.y * 0.2;
          mainGroupRef.current.rotation.z = Math.cos(elapsedTime * 0.2) * 0.08;
        } else {
          mainGroupRef.current.rotation.y = dragRef.current.rotY;
          mainGroupRef.current.rotation.x = dragRef.current.rotX + mouseRef.current.y * 0.2;
        }

        // Parallax slight offset
        mainGroupRef.current.position.x = mouseRef.current.x * 0.4;
        mainGroupRef.current.position.y = mouseRef.current.y * 0.4;
      }

      // Slowly rotate particle field
      if (particlesRef.current) {
        particlesRef.current.rotation.y = -elapsedTime * 0.04;
        particlesRef.current.rotation.x = elapsedTime * 0.02;
      }

      // Animate child elements inside mode group (orbiting rings, nodes, etc.)
      if (activeMeshGroupRef.current) {
        activeMeshGroupRef.current.children.forEach((child, index) => {
          if (child.name === 'orbitRing1') {
            child.rotation.z = elapsedTime * 0.5;
            child.rotation.x = Math.PI / 4 + Math.sin(elapsedTime * 0.5) * 0.1;
          } else if (child.name === 'orbitRing2') {
            child.rotation.y = -elapsedTime * 0.6;
            child.rotation.z = Math.PI / 3;
          } else if (child.name === 'pulsingCore') {
            const scale = 1 + Math.sin(elapsedTime * 3) * 0.06;
            child.scale.set(scale, scale, scale);
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      // Dispose three.js resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Mode & Wireframe Switcher Effect
  useEffect(() => {
    const activeGroup = activeMeshGroupRef.current;
    if (!activeGroup) return;

    // Clear existing children
    while (activeGroup.children.length > 0) {
      const child = activeGroup.children[0] as THREE.Mesh;
      child.geometry?.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => m.dispose());
      } else {
        child.material?.dispose();
      }
      activeGroup.remove(child);
    }

    // Common High-End Metallic Material
    const metallicMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: isWireframe,
      emissive: 0x1d4ed8,
      emissiveIntensity: isWireframe ? 0.35 : 0.12,
    });

    const glowWireMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.85,
    });

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.95,
      wireframe: false,
    });

    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
    });

    // Helper: Add orbiting satellites
    const createSatellite = (x: number, y: number, z: number, size = 0.09) => {
      const satGeo = new THREE.SphereGeometry(size, 16, 16);
      const satMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x60a5fa,
        emissiveIntensity: 1.2,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.position.set(x, y, z);
      return sat;
    };

    switch (activeMode) {
      case 'cloud': {
        // Mode 1: High-Concurrency Cloud (Geodesic Sphere + Dual Orbit Rings + Satellites)
        const sphereGeo = new THREE.IcosahedronGeometry(1.6, 2);
        const sphereMesh = new THREE.Mesh(sphereGeo, metallicMaterial);
        activeGroup.add(sphereMesh);

        // Outer Wireframe Cage
        const wireGeo = new THREE.WireframeGeometry(sphereGeo);
        const wireLines = new THREE.LineSegments(wireGeo, glowWireMaterial);
        wireLines.scale.set(1.02, 1.02, 1.02);
        activeGroup.add(wireLines);

        // Core Glowing Node
        const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
        const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
        coreMesh.name = 'pulsingCore';
        activeGroup.add(coreMesh);

        // Orbit Ring 1
        const ring1Geo = new THREE.RingGeometry(2.4, 2.45, 64);
        const ring1 = new THREE.LineLoop(ring1Geo, ringMaterial);
        ring1.name = 'orbitRing1';
        ring1.add(createSatellite(2.42, 0, 0));
        ring1.add(createSatellite(-2.42, 0, 0, 0.07));
        activeGroup.add(ring1);

        // Orbit Ring 2
        const ring2Geo = new THREE.RingGeometry(2.8, 2.84, 64);
        const ring2 = new THREE.LineLoop(ring2Geo, ringMaterial);
        ring2.name = 'orbitRing2';
        ring2.add(createSatellite(0, 2.82, 0));
        activeGroup.add(ring2);
        break;
      }

      case 'ai': {
        // Mode 2: Applied AI & Autonomous Agents (Neural Polyhedron + Synapse Cluster)
        const polyGeo = new THREE.DodecahedronGeometry(1.7, 0);
        const polyMesh = new THREE.Mesh(polyGeo, metallicMaterial);
        activeGroup.add(polyMesh);

        const wireGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.9, 1));
        const wireLines = new THREE.LineSegments(wireGeo, glowWireMaterial);
        activeGroup.add(wireLines);

        // Inner glowing core
        const coreGeo = new THREE.OctahedronGeometry(0.9, 0);
        const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
        coreMesh.name = 'pulsingCore';
        activeGroup.add(coreMesh);

        // Synaptic satellite nodes at vertices
        const points = [
          [2.1, 0, 0],
          [-2.1, 0, 0],
          [0, 2.1, 0],
          [0, -2.1, 0],
          [1.2, 1.2, 1.2],
          [-1.2, -1.2, 1.2],
          [1.2, -1.2, -1.2],
        ];
        points.forEach(([x, y, z]) => {
          activeGroup.add(createSatellite(x, y, z, 0.08));
        });

        const ringGeo = new THREE.RingGeometry(2.5, 2.54, 64);
        const ring = new THREE.LineLoop(ringGeo, ringMaterial);
        ring.name = 'orbitRing1';
        activeGroup.add(ring);
        break;
      }

      case 'mobile': {
        // Mode 3: Cross-Platform Mobile Engineering (Sleek Torus Knot + Gyro Rings)
        const knotGeo = new THREE.TorusKnotGeometry(1.3, 0.38, 100, 16);
        const knotMesh = new THREE.Mesh(knotGeo, metallicMaterial);
        activeGroup.add(knotMesh);

        const wireGeo = new THREE.WireframeGeometry(knotGeo);
        const wireLines = new THREE.LineSegments(wireGeo, glowWireMaterial);
        activeGroup.add(wireLines);

        const ring1Geo = new THREE.RingGeometry(2.5, 2.54, 64);
        const ring1 = new THREE.LineLoop(ring1Geo, ringMaterial);
        ring1.name = 'orbitRing1';
        ring1.add(createSatellite(2.52, 0, 0, 0.1));
        activeGroup.add(ring1);

        const ring2Geo = new THREE.RingGeometry(2.9, 2.94, 64);
        const ring2 = new THREE.LineLoop(ring2Geo, ringMaterial);
        ring2.name = 'orbitRing2';
        ring2.add(createSatellite(0, -2.92, 0, 0.08));
        activeGroup.add(ring2);
        break;
      }

      case 'enterprise': {
        // Mode 4: Enterprise Legacy Modernization (Distributed Octahedron Lattice + Grid Core)
        const octaGeo = new THREE.OctahedronGeometry(1.8, 1);
        const octaMesh = new THREE.Mesh(octaGeo, metallicMaterial);
        activeGroup.add(octaMesh);

        const wireGeo = new THREE.WireframeGeometry(octaGeo);
        const wireLines = new THREE.LineSegments(wireGeo, glowWireMaterial);
        wireLines.scale.set(1.03, 1.03, 1.03);
        activeGroup.add(wireLines);

        // Core Microservices Grid (Box inside)
        const boxGeo = new THREE.BoxGeometry(1.1, 1.1, 1.1);
        const boxMesh = new THREE.Mesh(boxGeo, coreMaterial);
        boxMesh.name = 'pulsingCore';
        activeGroup.add(boxMesh);

        const ring1Geo = new THREE.RingGeometry(2.6, 2.64, 64);
        const ring1 = new THREE.LineLoop(ring1Geo, ringMaterial);
        ring1.name = 'orbitRing1';
        ring1.add(createSatellite(2.62, 0, 0));
        ring1.add(createSatellite(0, 2.62, 0));
        activeGroup.add(ring1);
        break;
      }
    }
  }, [activeMode, isWireframe]);

  // Reset rotation view
  const handleResetView = () => {
    dragRef.current.targetRotX = 0;
    dragRef.current.targetRotY = 0;
  };

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing ${isDragging ? 'cursor-grabbing' : ''}`}
        title="Click and drag to rotate 3D system architecture"
      />

      {/* Floating 3D Control Pill & Hint (Styled as minimal corporate HUD) */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20 pointer-events-auto">
        {/* Wireframe toggle */}
        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className={`p-1.5 rounded-lg border text-xs transition-colors ${
            isWireframe
              ? 'bg-blue-600 text-white border-blue-500'
              : 'bg-[#111111]/80 text-neutral-400 hover:text-white border-[#262626]'
          }`}
          title="Toggle 3D wireframe mesh"
          aria-label="Toggle 3D wireframe mesh"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Auto-rotation toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-1.5 rounded-lg border text-xs transition-colors ${
            autoRotate
              ? 'bg-blue-600 text-white border-blue-500'
              : 'bg-[#111111]/80 text-neutral-400 hover:text-white border-[#262626]'
          }`}
          title={autoRotate ? 'Pause 3D rotation' : 'Resume 3D auto-rotation'}
          aria-label="Toggle auto-rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
        </button>

        {/* Reset View */}
        <button
          onClick={handleResetView}
          className="p-1.5 rounded-lg bg-[#111111]/80 hover:bg-[#1a1a1a] text-neutral-400 hover:text-white border border-[#262626] text-xs transition-colors"
          title="Reset 3D camera angle"
          aria-label="Reset 3D camera angle"
        >
          <Compass className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive Drag Hint (Bottom overlay) */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 z-20 pointer-events-none">
        <span className="px-2.5 py-1 rounded-md bg-[#0a0a0a]/85 border border-[#222222] text-[10px] font-mono text-neutral-400 flex items-center gap-1.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>Interactive 3D WebGL • Drag to rotate 360°</span>
        </span>
      </div>
    </div>
  );
};

