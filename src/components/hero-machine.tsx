import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BRAND_TEAL = 0x00727f;
const BRAND_TEAL_LIGHT = 0x5bc2ce;
const INK_NAVY = 0x2b3944;

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

export function HeroMachine({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const section = sectionRef.current;
    if (!mount || !section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(4.2, 1.2, 4.6);
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

    type Snack = { mesh: THREE.Mesh; restY: number; order: number };
    const snacks: Snack[] = [];
    let order = 0;
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
        const restY = startY - r * (shelfH / rows);
        snack.position.set(startX + c * (shelfW / cols), restY, 0.6);
        snack.castShadow = true;
        machine.add(snack);
        snacks.push({ mesh: snack, restY, order: order++ });
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
        emissive: new THREE.Color(BRAND_TEAL_LIGHT),
        emissiveIntensity: 0,
      }),
    );
    const smileyGeo = track(new THREE.PlaneGeometry(2.0, 0.5));
    const smiley = new THREE.Mesh(smileyGeo, smileyMat);
    smiley.position.set(0, -1.35, 0.62);
    machine.add(smiley);

    const groundMat = track(new THREE.ShadowMaterial({ opacity: 0.35 }));
    const groundGeo = track(new THREE.PlaneGeometry(20, 20));
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.72;
    ground.receiveShadow = true;
    scene.add(ground);

    machine.rotation.y = -0.5;

    // Beat 1 initial state: snacks lifted above shelves, screen dim
    for (const s of snacks) {
      s.mesh.position.y = s.restY + 3.5;
      s.mesh.visible = false;
    }
    (screenMat.color as THREE.Color).setScalar(0.12);
    smileyMat.emissiveIntensity = 0;

    // Final composed state helper
    const applyFinalState = () => {
      camera.position.set(0, 0.9, 6);
      machine.rotation.y = 0.05;
      for (const s of snacks) {
        s.mesh.position.y = s.restY;
        s.mesh.visible = true;
      }
      (screenMat.color as THREE.Color).setHex(BRAND_TEAL_LIGHT);
      smileyMat.emissiveIntensity = 0.35;
    };

    // Render loop
    let rafId = 0;
    const clock = new THREE.Clock();
    let elapsed = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      elapsed += dt;
      // idle bob layered on top of scroll-driven rotation
      if (!reduceMotion) {
        machine.position.y = Math.sin(elapsed * 1.2) * 0.04;
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

    // ============ Scroll-driven timeline ============
    let scrollTrigger: ScrollTrigger | null = null;
    let timeline: gsap.core.Timeline | null = null;

    const headline = section.querySelector<HTMLElement>("[data-hero-headline]");
    const subhead = section.querySelector<HTMLElement>("[data-hero-subhead]");
    const badge = section.querySelector<HTMLElement>("[data-hero-badge]");
    const ctas = section.querySelector<HTMLElement>("[data-hero-ctas]");

    if (reduceMotion) {
      applyFinalState();
      [badge, headline, subhead, ctas].forEach((el) => {
        if (el) el.style.opacity = "1";
      });
    } else {
      // Set DOM start state
      [badge, headline, subhead, ctas].forEach((el) => {
        if (el) {
          el.style.opacity = "0";
          el.style.transform = "translateY(16px)";
        }
      });

      const stConfig: ScrollTrigger.Vars = isMobile
        ? {
            trigger: section,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          }
        : {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          };

      timeline = gsap.timeline({ scrollTrigger: stConfig, defaults: { ease: "power2.inOut" } });

      // Beat 1 (0 → 0.33): camera orbit + machine rotate + text arrives
      timeline
        .to(camera.position, { x: 0, y: 0.9, z: 6, duration: 0.33 }, 0)
        .to(machine.rotation, { y: 0.05, duration: 0.33 }, 0)
        .to(badge, { opacity: 1, y: 0, duration: 0.2 }, 0.05)
        .to(headline, { opacity: 1, y: 0, duration: 0.25 }, 0.1)
        .to(subhead, { opacity: 1, y: 0, duration: 0.25 }, 0.18);

      // Beat 2 (0.33 → 0.66): make snacks visible, drop them in with stagger
      timeline.call(
        () => {
          for (const s of snacks) s.mesh.visible = true;
        },
        undefined,
        0.33,
      );
      snacks.forEach((s) => {
        const localStart = 0.33 + (s.order / snacks.length) * 0.25;
        timeline!.to(
          s.mesh.position,
          { y: s.restY, duration: 0.08, ease: "power3.in" },
          localStart,
        );
      });

      // Screen lights up mid-beat-2
      timeline.to(
        (screenMat as THREE.MeshBasicMaterial).color,
        { r: 0.36, g: 0.76, b: 0.81, duration: 0.15 },
        0.55,
      );

      // Beat 3 (0.66 → 1): smiley glows, CTAs land, subtle camera settle
      timeline
        .to(smileyMat, { emissiveIntensity: 0.35, duration: 0.2 }, 0.7)
        .to(camera.position, { z: 5.6, duration: 0.2 }, 0.7)
        .to(ctas, { opacity: 1, y: 0, duration: 0.25 }, 0.75);

      scrollTrigger = timeline.scrollTrigger ?? null;

      // Refresh once fonts/layout settle
      const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

      return () => {
        window.clearTimeout(refreshId);
        cancelAnimationFrame(rafId);
        ro.disconnect();
        timeline?.kill();
        scrollTrigger?.kill();
        disposables.forEach((d) => d.dispose());
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [sectionRef]);

  return (
    <div
      ref={mountRef}
      className="hero-canvas relative mx-auto h-[440px] w-full max-w-[520px] md:h-[560px]"
      aria-hidden
    />
  );
}
