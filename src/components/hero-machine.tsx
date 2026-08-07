import { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND_TEAL = 0x00727f;
const BRAND_TEAL_LIGHT = 0x5bc2ce;
const INK_NAVY = 0x2b3944;
const SAND = 0xf5f0e6;

const SNACK_COLORS = [
  [0xf97316, 0xef4444, 0xf59e0b, 0xf97316],
  [0x5bc2ce, 0x00727f, 0x5bc2ce, 0x00727f],
  [0xfcd34d, 0xf97316, 0xfcd34d, 0xef4444],
  [0x5bc2ce, 0xf97316, 0x5bc2ce, 0xfcd34d],
];

function makeSmileyTexture(): THREE.CanvasTexture {
  const size = 256;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size / 2;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#faf7f1";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = `#${BRAND_TEAL.toString(16).padStart(6, "0")}`;
  ctx.strokeStyle = ctx.fillStyle;
  ctx.lineCap = "round";
  ctx.lineWidth = 8;

  ctx.beginPath();
  ctx.arc(100, 48, 10, 0, Math.PI * 2);
  ctx.arc(156, 48, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(88, 78);
  ctx.quadraticCurveTo(128, 108, 168, 78);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export function HeroMachine() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.9, 6);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
    keyLight.position.set(3, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    keyLight.shadow.camera.left = -4;
    keyLight.shadow.camera.right = 4;
    keyLight.shadow.camera.top = 4;
    keyLight.shadow.camera.bottom = -4;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(BRAND_TEAL_LIGHT, 0.6);
    rimLight.position.set(-4, 2, -2);
    scene.add(rimLight);

    const disposables: Array<{ dispose: () => void }> = [];
    const track = <T extends { dispose: () => void }>(o: T): T => {
      disposables.push(o);
      return o;
    };

    const machine = new THREE.Group();
    scene.add(machine);

    const bodyMat = track(
      new THREE.MeshStandardMaterial({
        color: BRAND_TEAL,
        roughness: 0.35,
        metalness: 0.25,
      }),
    );
    const bodyGeo = track(new THREE.BoxGeometry(2.2, 3.4, 1.2));
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.castShadow = true;
    body.receiveShadow = true;
    machine.add(body);

    const innerMat = track(
      new THREE.MeshStandardMaterial({
        color: INK_NAVY,
        roughness: 0.9,
        metalness: 0.1,
      }),
    );
    const innerGeo = track(new THREE.BoxGeometry(1.5, 2.5, 0.05));
    const innerBack = new THREE.Mesh(innerGeo, innerMat);
    innerBack.position.set(-0.25, 0.35, 0.55);
    innerBack.receiveShadow = true;
    machine.add(innerBack);

    const snackGeo = track(new THREE.BoxGeometry(0.28, 0.42, 0.12));
    const rows = SNACK_COLORS.length;
    const cols = SNACK_COLORS[0].length;
    const shelfW = 1.4;
    const shelfH = 2.3;
    const startX = -0.25 - shelfW / 2 + shelfW / cols / 2;
    const startY = 0.35 + shelfH / 2 - shelfH / rows / 2;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const mat = track(
          new THREE.MeshStandardMaterial({
            color: SNACK_COLORS[r][c],
            roughness: 0.55,
            metalness: 0.05,
          }),
        );
        const snack = new THREE.Mesh(snackGeo, mat);
        snack.position.set(
          startX + c * (shelfW / cols),
          startY - r * (shelfH / rows),
          0.6,
        );
        snack.castShadow = true;
        machine.add(snack);
      }
    }

    const glassMat = track(
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 0,
        transmission: 0.92,
        thickness: 0.4,
        transparent: true,
        opacity: 0.35,
        ior: 1.45,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
      }),
    );
    const glassGeo = track(new THREE.PlaneGeometry(1.55, 2.55));
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(-0.25, 0.35, 0.62);
    machine.add(glass);

    const panelMat = track(
      new THREE.MeshStandardMaterial({
        color: INK_NAVY,
        roughness: 0.5,
        metalness: 0.4,
      }),
    );
    const panelGeo = track(new THREE.BoxGeometry(0.55, 2.55, 0.08));
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0.75, 0.35, 0.62);
    panel.castShadow = true;
    machine.add(panel);

    const screenMat = track(
      new THREE.MeshBasicMaterial({ color: BRAND_TEAL_LIGHT }),
    );
    const screenGeo = track(new THREE.PlaneGeometry(0.4, 0.28));
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0.75, 1.35, 0.67);
    machine.add(screen);

    const keyGeo = track(new THREE.BoxGeometry(0.11, 0.11, 0.04));
    const keyMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x8fa1ac,
        roughness: 0.4,
        metalness: 0.3,
      }),
    );
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) {
        const key = new THREE.Mesh(keyGeo, keyMat);
        key.position.set(0.62 + c * 0.13, 0.95 - r * 0.16, 0.67);
        machine.add(key);
      }
    }

    const slotMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x0f151a,
        roughness: 0.8,
        metalness: 0.1,
      }),
    );
    const slotGeo = track(new THREE.BoxGeometry(0.45, 0.16, 0.06));
    const slot = new THREE.Mesh(slotGeo, slotMat);
    slot.position.set(0.75, -0.55, 0.67);
    machine.add(slot);

    const smileyTex = track(makeSmileyTexture());
    const smileyMat = track(
      new THREE.MeshStandardMaterial({
        map: smileyTex,
        roughness: 0.65,
        metalness: 0,
      }),
    );
    const smileyGeo = track(new THREE.PlaneGeometry(2.0, 0.5));
    const smiley = new THREE.Mesh(smileyGeo, smileyMat);
    smiley.position.set(0, -1.35, 0.62);
    machine.add(smiley);

    const groundMat = track(
      new THREE.ShadowMaterial({ opacity: 0.35 }),
    );
    const groundGeo = track(new THREE.PlaneGeometry(20, 20));
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.72;
    ground.receiveShadow = true;
    scene.add(ground);

    machine.rotation.y = 0.15;

    const target = { rx: 0, ry: 0 };
    const current = { rx: 0, ry: 0 };

    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      target.ry = nx * 0.6;
      target.rx = -ny * 0.35;
    };
    const onLeave = () => {
      target.rx = 0;
      target.ry = 0;
    };
    if (!reduceMotion) {
      mount.addEventListener("pointermove", onMove);
      mount.addEventListener("pointerleave", onLeave);
    }

    let rafId = 0;
    const clock = new THREE.Clock();
    let elapsed = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      elapsed += dt;

      if (reduceMotion) {
        machine.rotation.y = 0.15;
      } else {
        current.rx += (target.rx - current.rx) * 0.08;
        current.ry += (target.ry - current.ry) * 0.08;
        machine.rotation.x = current.rx + Math.sin(elapsed * 0.8) * 0.02;
        machine.rotation.y = 0.15 + current.ry + Math.sin(elapsed * 0.5) * 0.05;
        machine.position.y = Math.sin(elapsed * 1.2) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      mount.removeEventListener("pointermove", onMove);
      mount.removeEventListener("pointerleave", onLeave);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-canvas relative mx-auto h-[440px] w-full max-w-[520px] md:h-[560px]"
      aria-hidden
    />
  );
}
