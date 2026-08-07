import { useEffect, useRef } from "react";

const SNACK_ROWS = [
  ["#F97316", "#EF4444", "#F59E0B", "#F97316"],
  ["#5BC2CE", "#00727F", "#5BC2CE", "#00727F"],
  ["#FCD34D", "#F97316", "#FCD34D", "#EF4444"],
  ["#5BC2CE", "#F97316", "#5BC2CE", "#FCD34D"],
];

export function HeroMachine() {
  const stageRef = useRef<HTMLDivElement>(null);
  const machineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const machine = machineRef.current;
    if (!stage || !machine) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      targetY = (px - 0.5) * 24;
      targetX = (0.5 - py) * 14;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      machine.style.setProperty("--mx", `${currentY.toFixed(2)}deg`);
      machine.style.setProperty("--my", `${currentX.toFixed(2)}deg`);
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="hero-stage relative mx-auto flex h-[440px] w-full max-w-[420px] items-center justify-center md:h-[520px]"
      aria-hidden
    >
      <div className="hero-glow absolute inset-0" />

      <span className="hero-bubble hero-bubble--1" />
      <span className="hero-bubble hero-bubble--2" />
      <span className="hero-bubble hero-bubble--3" />
      <span className="hero-bubble hero-bubble--4" />

      <div ref={machineRef} className="hero-machine">
        <div className="hero-machine__shadow" />

        <div className="hero-machine__body">
          <div className="hero-machine__back" />

          <div className="hero-machine__shelves">
            {SNACK_ROWS.map((row, i) => (
              <div key={i} className="hero-machine__shelf">
                {row.map((color, j) => (
                  <span
                    key={j}
                    className="hero-machine__snack"
                    style={{ background: color }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="hero-machine__panel">
            <div className="hero-machine__screen" />
            <div className="hero-machine__keys">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <div className="hero-machine__slot" />
          </div>

          <div className="hero-machine__glass" />

          <div className="hero-machine__face">
            <span className="hero-machine__eye" />
            <span className="hero-machine__eye" />
            <svg viewBox="0 0 40 20" className="hero-machine__smile">
              <path
                d="M4 6 Q20 22 36 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
