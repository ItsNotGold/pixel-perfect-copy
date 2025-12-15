let ctx: AudioContext | null = null;

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  return ctx;
}

export function beep(frequency = 440, duration = 0.1, type: OscillatorType = 'sine', volume = 0.2) {
  const c = getCtx();
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.value = frequency;
  g.gain.value = volume;
  o.connect(g);
  g.connect(c.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + duration);
  setTimeout(() => {
    try { o.stop(); } catch {}
  }, duration * 1000 + 10);
}

export function playTick() {
  beep(880, 0.06, 'square', 0.06);
}

export function playDing() {
  beep(880, 0.16, 'sine', 0.18);
  setTimeout(() => beep(1320, 0.08, 'sine', 0.08), 120);
}

export function playSuccess() {
  beep(880, 0.08, 'sine', 0.12);
  setTimeout(() => beep(1100, 0.12, 'sine', 0.16), 70);
}

export function playFail() {
  beep(220, 0.12, 'sine', 0.12);
}
