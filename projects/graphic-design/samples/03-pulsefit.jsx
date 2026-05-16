// 03 — PulseFit fitness app promo
// Style: dynamic, high-contrast, athletic. Carbon black + electric lime + bone.
// Type: heavy condensed display + clean grotesk numerics.

function PulseFit() {
  return (
    <div style={{
      width: 1080,
      height: 1080,
      position: 'relative',
      background: '#0c0d0a',
      fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
      color: '#f3f1e9',
      overflow: 'hidden',
    }}>
      {/* diagonal lime block */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 700, height: 1080,
        background: '#c8ff3a',
        clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)',
      }} />
      {/* tiny grid texture on lime */}
      <svg width="1080" height="1080" style={{ position: 'absolute', inset: 0, mixBlendMode: 'multiply', opacity: 0.18 }}>
        <defs>
          <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0c0d0a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="500" width="580" height="1080" fill="url(#grid3)" />
      </svg>

      {/* TOP NAV */}
      <div style={{
        position: 'absolute', top: 40, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* logomark — bolt pulse */}
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="#c8ff3a" />
            <path d="M 18 6 L 9 18 L 15 18 L 13 26 L 23 13 L 17 13 Z" fill="#0c0d0a" />
          </svg>
          <span style={{ fontWeight: 800, letterSpacing: '0.18em', fontSize: 14, color: '#f3f1e9' }}>PULSEFIT</span>
        </div>
        <div style={{ color: 'rgba(243,241,233,0.6)' }}>
          <span style={{ color: '#c8ff3a' }}>●</span> &nbsp; v3.0 — out now
        </div>
      </div>

      {/* eyebrow */}
      <div style={{
        position: 'absolute', top: 140, left: 56,
        fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase',
        color: '#c8ff3a', fontWeight: 600,
      }}>
        14-day challenge · starts monday
      </div>

      {/* MASSIVE HEADLINE */}
      <div style={{
        position: 'absolute', top: 180, left: 56, right: 380,
        fontFamily: '"Anton", "Bebas Neue", "Oswald", "Arial Narrow", sans-serif',
        fontSize: 200, lineHeight: 0.86, fontWeight: 900,
        letterSpacing: '-0.025em', textTransform: 'uppercase',
        color: '#f3f1e9',
      }}>
        <div>SWEAT</div>
        <div style={{ color: '#c8ff3a' }}>IS THE</div>
        <div style={{ fontStyle: 'italic', WebkitTextStroke: '2px #f3f1e9', color: 'transparent' }}>RECEIPT.</div>
      </div>

      {/* SUB */}
      <div style={{
        position: 'absolute', top: 800, left: 56, width: 380,
        fontSize: 18, lineHeight: 1.4, color: 'rgba(243,241,233,0.75)',
      }}>
        AI-coached strength sessions, live HR zones, and a community
        that doesn't skip leg day. Train smarter for 14 days — free.
      </div>

      {/* CTA stack */}
      <div style={{
        position: 'absolute', top: 920, left: 56,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <button style={{
          background: '#c8ff3a', color: '#0c0d0a', border: 'none',
          padding: '20px 32px', fontSize: 16, fontWeight: 800,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          cursor: 'pointer', borderRadius: 0,
          fontFamily: 'inherit',
        }}>Start free trial →</button>
        <button style={{
          background: 'transparent', color: '#f3f1e9',
          border: '2px solid #f3f1e9',
          padding: '18px 28px', fontSize: 14, fontWeight: 700,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          cursor: 'pointer', borderRadius: 0,
          fontFamily: 'inherit',
        }}>▶ Watch</button>
      </div>

      {/* PHONE — front-and-center on lime panel */}
      <div style={{
        position: 'absolute', top: 200, right: 70,
        width: 320, height: 660,
        background: '#0c0d0a',
        borderRadius: 44,
        padding: 8,
        boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.2)',
        transform: 'rotate(-4deg)',
      }}>
        <div style={{
          width: '100%', height: '100%',
          background: '#16170f',
          borderRadius: 36,
          padding: '20px 18px',
          color: '#f3f1e9',
          fontSize: 11,
          display: 'flex', flexDirection: 'column', gap: 14,
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* notch */}
          <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 90, height: 22, background: '#0c0d0a', borderRadius: 12 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.6, paddingTop: 6 }}>
            <span>9:41</span>
            <span>•••• ▮</span>
          </div>
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 11, color: 'rgba(243,241,233,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Today · day 06</div>
            <div style={{ fontSize: 28, fontWeight: 800, marginTop: 4, fontFamily: '"Anton", sans-serif', letterSpacing: '0.02em' }}>UPPER · PUSH</div>
          </div>

          {/* ring */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="76" fill="none" stroke="rgba(243,241,233,0.1)" strokeWidth="10" />
              <circle cx="90" cy="90" r="76" fill="none" stroke="#c8ff3a" strokeWidth="10"
                strokeDasharray="477" strokeDashoffset="120" strokeLinecap="round"
                transform="rotate(-90 90 90)" />
              <text x="90" y="86" textAnchor="middle" fontSize="38" fontWeight="800" fill="#f3f1e9" fontFamily='"Anton", sans-serif'>74%</text>
              <text x="90" y="108" textAnchor="middle" fontSize="9" fill="rgba(243,241,233,0.5)" letterSpacing="2">COMPLETE</text>
            </svg>
          </div>

          {/* stat row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {[['BPM', '142'], ['KCAL', '318'], ['MIN', '24']].map(([l, v]) => (
              <div key={l} style={{ background: '#1f2014', padding: '10px 8px', borderRadius: 10 }}>
                <div style={{ fontSize: 8, opacity: 0.5, letterSpacing: 1.5 }}>{l}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#c8ff3a', marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>

          {/* exercise list */}
          <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ['✓', 'Bench press', '4×8'],
              ['✓', 'Incline DB', '3×10'],
              ['●', 'Push press', '4×6'],
              ['○', 'Triceps', '3×12'],
            ].map(([s, n, r], i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '7px 10px', background: i === 2 ? '#c8ff3a' : 'rgba(243,241,233,0.05)',
                color: i === 2 ? '#0c0d0a' : '#f3f1e9',
                borderRadius: 8, fontSize: 11, fontWeight: 600,
              }}>
                <span style={{ width: 14, opacity: i === 3 ? 0.4 : 1 }}>{s}</span>
                <span style={{ flex: 1 }}>{n}</span>
                <span style={{ opacity: 0.7 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom-right metric chip */}
      <div style={{
        position: 'absolute', bottom: 48, right: 56,
        background: '#0c0d0a', color: '#c8ff3a',
        padding: '14px 22px',
        fontSize: 11, letterSpacing: '0.3em',
        textTransform: 'uppercase', fontWeight: 700,
      }}>
        2.4M ATHLETES · 4.9★
      </div>
    </div>
  );
}

window.PulseFit = PulseFit;
