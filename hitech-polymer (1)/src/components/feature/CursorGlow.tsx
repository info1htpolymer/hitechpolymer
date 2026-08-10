import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.body.addEventListener('mouseleave', handleLeave);
    document.body.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseleave', handleLeave);
      document.body.removeEventListener('mouseenter', handleEnter);
    };
  }, [visible]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full transition-transform duration-75 ease-out"
        style={{
          width: 400,
          height: 400,
          left: pos.x - 200,
          top: pos.y - 200,
          background: 'radial-gradient(circle, oklch(var(--primary-400) / 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full transition-transform duration-100 ease-out"
        style={{
          width: 120,
          height: 120,
          left: pos.x - 60,
          top: pos.y - 60,
          background: 'radial-gradient(circle, oklch(var(--accent-400) / 0.12) 0%, oklch(var(--primary-400) / 0.05) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
}