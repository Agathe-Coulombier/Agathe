'use client';

import {useEffect, useRef} from 'react';
import * as THREE from 'three';
// typed helpers for the examples API:
import {Font, FontLoader, TextGeometry} from 'three-stdlib';

export default function ACLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;     // 👈 guard for StrictMode/double mount
    let raf = 0;

    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3.2);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(3, 4, 5);
    scene.add(dir);

    // Group to hold our logo
    const group = new THREE.Group();
    scene.add(group);

    // Material
    const material = new THREE.MeshPhysicalMaterial({
      color: '#2CB1BC',
      roughness: 0.25,
      metalness: 0.15,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1
    });

    // Load font and build text
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_bold.typeface.json', (font: Font) => {
      if (disposed) return;                 // 👈 ignore if unmounted

      const geo = new TextGeometry('AC', {
        font,
        size: 0.9,
        height: 0.22,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.02,
        curveSegments: 24
      });

      geo.computeBoundingBox();
      geo.center();

      const mesh = new THREE.Mesh(geo, material);
      group.add(mesh);

      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({color: '#0A0E1A'})
      );
      group.add(line);
    });

    // Resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // Animate
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!disposed && !prefersReducedMotion) {
        const t = clock.getElapsedTime();
        group.rotation.y = Math.sin(t * 0.25) * 0.08;
        group.rotation.x = Math.cos(t * 0.18) * 0.03;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      disposed = true;                      // 👈 prevents late callbacks
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);

      renderer.dispose();
      scene.traverse((obj: any) => {
        obj.geometry?.dispose?.();
        const m = obj.material;
        if (Array.isArray(m)) m.forEach((mm: any) => mm?.dispose?.());
        else m?.dispose?.();
      });

      renderer.domElement.remove();
    };
  }, []);

  // Reserve space to avoid layout shift
  return <div ref={containerRef} className="h-56 w-full md:h-64" aria-hidden="true" />;
}
