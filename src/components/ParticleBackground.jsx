import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export default function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // CONFIG
    const COUNT = 20000;
    const SPEED_MULT = 1;
    const AUTO_SPIN = true;

    // SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.01);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = AUTO_SPIN;
    controls.autoRotateSpeed = 2.0;
    controls.enableZoom = false; // Prevent zooming while scrolling page

    // POST PROCESSING
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.strength = 1.8;
    bloomPass.radius = 0.4;
    bloomPass.threshold = 0;
    composer.addPass(bloomPass);

    // SWARM OBJECTS
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const target = new THREE.Vector3();

    // INSTANCED MESH
    const geometry = new THREE.TetrahedronGeometry(0.25);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, COUNT);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(instancedMesh);

    // DATA ARRAYS
    const positions = [];
    for (let i = 0; i < COUNT; i++) {
      positions.push(new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100));
      instancedMesh.setColorAt(i, color.setHex(0x00ff88)); // Init Color
    }

    // CONTROL STUBS & PARAMS
    const PARAMS = { "loopSec": 20, "turns": 4, "sc": 1.73, "glow": 0.672, "hue": 0.53, "beam": 1 };
    const addControl = (id, label, min, max, val) => {
      return PARAMS[id] !== undefined ? PARAMS[id] : val;
    };
    const setInfo = () => {};
    const annotate = () => {};

    // ANIMATION LOOP
    const clock = new THREE.Clock();
    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * SPEED_MULT;

      // Shader Time Update
      if (material.uniforms && material.uniforms.uTime) {
        material.uniforms.uTime.value = time;
      }

      controls.update();

      // SWARM LOGIC
      const count = COUNT;
      for (let i = 0; i < COUNT; i++) {
        // USER CODE INJECTION START
        const loopSec = Math.round(addControl("loopSec", "Loop Seconds", 4, 20, 12));
        const turns = Math.round(addControl("turns", "Coil Spin Turns", 0, 4, 1));
        const sc = addControl("sc", "Core Scale", 0.5, 2, 1.0);
        const glow = addControl("glow", "Core Glow", 0.2, 1, 0.85);
        const hue = addControl("hue", "Core Hue", 0, 1, 0.54);
        const beam = addControl("beam", "Energy Beam", 0, 1, 0.8);
        const TAU = 6.2831853;
        const lp = (time % loopSec) / loopSec * TAU;
        const u = i / count;
        const a = (i * 0.6180339887) % 1;
        const b = (i * 0.7548776662) % 1;
        const c = (i * 0.3819660113) % 1;
        const rot = lp * turns;
        let x = 0;
        let y = 0;
        let z = 0;
        let h = 0;
        let s = 0;
        let l = 0;

        if (u < 0.20) {
          const ang = a * TAU;
          const phi = b * TAU;
          const rad = 30 + 3.4 * Math.cos(phi);
          x = rad * Math.cos(ang);
          y = rad * Math.sin(ang);
          z = 2.8 * Math.sin(phi);
          h = 0.58;
          s = 0.12;
          l = 0.3 + 0.18 * Math.abs(Math.sin(ang * 12.0)) + 0.1 * Math.max(0, Math.cos(phi));
        } else if (u < 0.30) {
          const ang = a * TAU;
          const r = 14 + b * 15;
          x = r * Math.cos(ang);
          y = r * Math.sin(ang);
          z = -1.8 + (c - 0.5) * 0.8;
          h = 0.6;
          s = 0.2;
          l = 0.1 + 0.07 * Math.abs(Math.sin(ang * 10.0 + rot));
        } else if (u < 0.56) {
          const k = i % 10;
          const ang = k * TAU / 10.0 + rot + (b - 0.5) * 0.42;
          const r = 15 + a * 12;
          x = r * Math.cos(ang);
          y = r * Math.sin(ang);
          z = 0.4 + c * 3.2;
          h = hue;
          s = 0.75 - 0.35 * c;
          l = glow * (0.4 + 0.3 * Math.sin(lp * 3.0 + k * 0.6283) + 0.25 * c);
        } else if (u < 0.66) {
          const ang = a * TAU;
          const phi = b * TAU;
          const rad = 12 + 1.5 * Math.cos(phi);
          x = rad * Math.cos(ang);
          y = rad * Math.sin(ang);
          z = 1.2 + 1.5 * Math.sin(phi);
          h = hue;
          s = 0.45;
          l = glow * (0.65 + 0.2 * Math.sin(lp * 2.0 + ang * 3.0));
        } else if (u < 0.78) {
          const r = Math.sqrt(a) * 10.5;
          const ang = b * TAU;
          x = r * Math.cos(ang);
          y = r * Math.sin(ang);
          z = 0.8 + 0.3 * Math.sin(r * 0.8 - lp * 2.0);
          h = hue;
          s = 0.85 * (r / 10.5);
          l = Math.min(1, glow * (0.95 - 0.35 * r / 10.5 + 0.12 * Math.sin(r * 1.2 - lp * 4.0)));
        } else if (u < 0.88) {
          const ang = a * TAU + lp * 2.0;
          const r = 36 + 10 * b;
          x = r * Math.cos(ang);
          y = r * Math.sin(ang);
          z = (c - 0.5) * 8.0 * Math.sin(a * 17.0);
          h = hue;
          s = 0.8;
          l = glow * 0.5 * Math.max(0, Math.sin(a * 60.0 + lp * 3.0));
        } else {
          const t = (a + lp / TAU * 2.0) % 1;
          const ang = c * TAU;
          const r = (1.0 - t) * 7.0 * b;
          x = r * Math.cos(ang);
          y = r * Math.sin(ang);
          z = 2.0 + t * 45.0;
          h = hue;
          s = 0.6 + 0.4 * t;
          l = beam * glow * (1.0 - t) * 0.9;
        }

        const yaw = Math.sin(lp) * 0.6;
        const cyw = Math.cos(yaw);
        const syw = Math.sin(yaw);
        const px = x * cyw + z * syw;
        const pz = -x * syw + z * cyw;
        const tl = 0.2;
        const ct = Math.cos(tl);
        const st = Math.sin(tl);
        const py = y * ct - pz * st;
        const qz = y * st + pz * ct;
        const pulse = 1.0 + 0.02 * Math.sin(lp * 3.0);
        target.set(px * sc * pulse, py * sc * pulse, qz * sc * pulse);
        color.setHSL(h, Math.min(1, Math.max(0, s)), Math.min(1, Math.max(0, l)));

        if (i === 0) {
          setInfo("Energy Core", "Original ring shaped power core made of particles. Seamless loop of " + loopSec + " seconds. Record exactly one loop for Canva.");
          annotate("top", new THREE.Vector3(0, 48 * sc, 0), "Energy Core");
        }
        // USER CODE INJECTION END

        // LERP & UPDATE
        positions[i].lerp(target, 0.1);
        dummy.position.copy(positions[i]);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        instancedMesh.setColorAt(i, color);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

      composer.render();
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
    />
  );
}