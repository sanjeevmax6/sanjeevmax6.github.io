import React, { useEffect, useRef, useState } from "react";

const animatedRoles = [
  "Fullstack",
  "Frontend",
  "Fullstack",
  "Backend",
  "Machine Learning"
];

const sparkVectors = [
  { x: "56px", y: "-14px" },
  { x: "48px", y: "28px" },
  { x: "16px", y: "50px" },
  { x: "-34px", y: "40px" },
  { x: "-56px", y: "-8px" },
  { x: "-18px", y: "-48px" },
  { x: "24px", y: "-52px" }
];

const CYCLE_MS = 3200;
const BURST_MS = 520;
const BUBBLE_HALF_WIDTH_DESKTOP = 128;
const BUBBLE_HALF_WIDTH_MOBILE = 96;
const BUBBLE_HALF_HEIGHT = 34;

const randBetween = (min, max) => min + Math.random() * (max - min);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function generateBubblePosition(stageRect, anchorRect) {
  if (!stageRect || !anchorRect) return { x: 0, y: -80 };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const bubbleHalfWidth = isMobile ? BUBBLE_HALF_WIDTH_MOBILE : BUBBLE_HALF_WIDTH_DESKTOP;
  const sidePadding = 12;
  const bandMin = isMobile ? 12 : 16;
  const bandMax = isMobile ? 42 : 62;

  const stageCenterX = stageRect.width / 2;
  const stageCenterY = stageRect.height / 2;
  const anchorCenterX = anchorRect.left - stageRect.left + anchorRect.width / 2;
  const anchorCenterY = anchorRect.top - stageRect.top + anchorRect.height / 2;
  const anchorHalfW = anchorRect.width / 2;
  const anchorHalfH = anchorRect.height / 2;

  const xMin = clamp(
    anchorCenterX - anchorHalfW + bubbleHalfWidth + 6,
    bubbleHalfWidth + sidePadding,
    stageRect.width - bubbleHalfWidth - sidePadding
  );
  const xMax = clamp(
    anchorCenterX + anchorHalfW - bubbleHalfWidth - 6,
    bubbleHalfWidth + sidePadding,
    stageRect.width - bubbleHalfWidth - sidePadding
  );

  const topYMax = anchorCenterY - anchorHalfH - bandMin;
  const topYMin = Math.max(BUBBLE_HALF_HEIGHT + 6, topYMax - bandMax);
  const bottomYMin = anchorCenterY + anchorHalfH + bandMin;
  const bottomYMax = Math.min(stageRect.height - BUBBLE_HALF_HEIGHT - 6, bottomYMin + bandMax);

  const useTop = Math.random() > 0.5 || bottomYMin >= bottomYMax;
  const targetY = useTop ? randBetween(topYMin, topYMax) : randBetween(bottomYMin, bottomYMax);
  const targetX = xMin < xMax ? randBetween(xMin, xMax) : (xMin + xMax) / 2;

  return {
    x: Math.round(targetX - stageCenterX),
    y: Math.round(targetY - stageCenterY)
  };
}

function RoleBubbleOrbit({ anchorRef }) {
  const stageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bursting, setBursting] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: -80 });
  const burstTimeoutRef = useRef(null);

  const placeBubble = () => {
    if (!stageRef.current || !anchorRef?.current) return;
    const stageRect = stageRef.current.getBoundingClientRect();
    const anchorRect = anchorRef.current.getBoundingClientRect();
    setPosition(generateBubblePosition(stageRect, anchorRect));
  };

  useEffect(() => {
    placeBubble();
    const handleResize = () => placeBubble();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval = setInterval(() => {
      setBursting(true);

      burstTimeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % animatedRoles.length);
        placeBubble();
        setBursting(false);
        setBubbleKey((prev) => prev + 1);
      }, BURST_MS);
    }, CYCLE_MS);

    return () => {
      clearInterval(interval);
      if (burstTimeoutRef.current) {
        clearTimeout(burstTimeoutRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const bubbleVars = {
    "--bx": `${position.x}px`,
    "--by": `${position.y}px`
  };

  return (
    <div className="bubble-stage2 bubble-stage2-media" aria-hidden="true" ref={stageRef}>
      <span
        key={`${activeIndex}-${bubbleKey}`}
        className={`role-bubble2 ${bursting ? "is-bursting" : ""}`}
        style={bubbleVars}
      >
        {animatedRoles[activeIndex]}
      </span>

      <span
        className={`bubble-pop-ring2 ${bursting ? "is-active" : ""}`}
        style={bubbleVars}
      />

      {sparkVectors.map((spark, index) => (
        <span
          className={`bubble-spark2 ${bursting ? "is-active" : ""}`}
          style={{
            ...bubbleVars,
            "--sx": spark.x,
            "--sy": spark.y,
            "--sd": `${index * 12}ms`
          }}
          key={`spark-${index}`}
        />
      ))}
    </div>
  );
}

export default RoleBubbleOrbit;
