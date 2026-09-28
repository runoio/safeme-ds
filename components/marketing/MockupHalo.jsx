import React from 'react';

/**
 * MockupHalo — the "guardian pulse" behind phone mockups: a breathing blue
 * glow plus two expanding ripple rings. Communicates calm, active protection.
 * Always action blue — never red (a red pulse reads as an alarm).
 * Wrap the mockup image as children; decorative layers are aria-hidden.
 * Honours prefers-reduced-motion: animations stop and the rings are hidden.
 */
export function MockupHalo({
  children,
  intensity = 0.35,
  tempo = 4.5,
  reach = 1.7,
  color = '#5BADFF',
  style = {},
  ...rest
}) {
  const uid = React.useId().replace(/:/g, '');
  const halo = `safeme-halo-${uid}`;
  const ripple = `safeme-ripple-${uid}`;
  const still = useReducedMotion();

  const circle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    aspectRatio: '1',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  };

  const ringBase = {
    ...circle,
    opacity: still ? 0 : undefined,
    animation: still ? 'none' : `${ripple} ${tempo}s ease-out infinite`,
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', ...style }} {...rest}>
      <span
        aria-hidden="true"
        style={{
          ...circle,
          background: `radial-gradient(circle, ${hexA(color, intensity)} 0%, ${hexA(color, 0.12)} 65%, transparent 100%)`,
          filter: 'blur(32px)',
          animation: still ? 'none' : `${halo} 5s ease-in-out infinite alternate`,
        }}
      />
      <span aria-hidden="true" style={{ ...ringBase, border: `3px solid ${hexA(color, 0.5)}` }} />
      <span aria-hidden="true" style={{ ...ringBase, border: `1.5px solid ${hexA(color, 0.4)}`, animationDelay: still ? undefined : `${tempo / 2}s` }} />
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', filter: 'drop-shadow(0 24px 48px rgba(14, 19, 83, 0.35))' }}>
        {children}
      </span>
      <style>{`@keyframes ${halo}{from{transform:translate(-50%,-50%) scale(0.92);opacity:0.75}to{transform:translate(-50%,-50%) scale(1.04);opacity:1}}@keyframes ${ripple}{from{transform:translate(-50%,-50%) scale(0.7);opacity:0.55}to{transform:translate(-50%,-50%) scale(${reach});opacity:0}}`}</style>
    </div>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

function hexA(hex, alpha) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
