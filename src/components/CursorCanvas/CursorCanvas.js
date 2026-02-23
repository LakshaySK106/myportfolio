import { useEffect, useRef } from "react";

const CursorCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
      }
    }

    const numPoints = 30;
    const points = Array.from(
      { length: numPoints },
      () => new Point(mouse.x, mouse.y),
    );

    const history = [];
    const historyLength = 45; 

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      points[0].x = mouse.x;
      points[0].y = mouse.y;

      for (let i = 1; i < numPoints; i++) {
        const pt = points[i];
        const prevPt = points[i - 1];

        const dx = prevPt.x - pt.x;
        const dy = prevPt.y - pt.y;
        pt.vx += dx * 0.15;
        pt.vy += dy * 0.15;

        pt.vx *= 0.6;
        pt.vy *= 0.6;

        pt.x += pt.vx;
        pt.y += pt.vy;
      }

      history.push(points.map((p) => ({ x: p.x, y: p.y })));
      if (history.length > historyLength) {
        history.shift(); 
      }

      history.forEach((framePoints, index) => {
        ctx.beginPath();
        ctx.moveTo(framePoints[0].x, framePoints[0].y);

        for (let i = 1; i < numPoints - 1; i++) {
          const xc = (framePoints[i].x + framePoints[i + 1].x) / 2;
          const yc = (framePoints[i].y + framePoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(framePoints[i].x, framePoints[i].y, xc, yc);
        }
        const progress = index / history.length;

        const opacity = Math.pow(progress, 2);

        ctx.strokeStyle = `rgba(78, 74, 133, ${opacity})`;

        ctx.lineWidth = 1.0 + progress * 1.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default CursorCanvas;