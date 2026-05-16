// 01 — Brew & Bean Co. coffee poster
// Style: warm, cozy, artisanal. Cream + espresso brown + burnt sienna.
// Type: Fraunces-style display serif paired with a stamp-y monospace.

function BrewAndBean() {
  return (
    <div style={{
      width: 720,
      height: 960,
      position: 'relative',
      background: '#f4ead8',
      fontFamily: '"Fraunces", "Cormorant Garamond", Georgia, serif',
      color: '#2a1a10',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 80px rgba(120,70,30,0.08)',
    }}>
      {/* paper grain */}
      <svg width="720" height="960" style={{ position: 'absolute', inset: 0, opacity: 0.18, mixBlendMode: 'multiply' }}>
        <filter id="grain1"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" /><feColorMatrix values="0 0 0 0 0.4 0 0 0 0 0.25 0 0 0 0 0.1 0 0 0 0.4 0" /></filter>
        <rect width="720" height="960" filter="url(#grain1)" />
      </svg>

      {/* top stamp row */}
      <div style={{
        position: 'absolute', top: 36, left: 36, right: 36,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#5a3520',
      }}>
        <span>EST · 2019 · ROASTED DAILY</span>
        <span>VOL. 07 — AUTUMN MENU</span>
      </div>
      <div style={{ position: 'absolute', top: 64, left: 36, right: 36, height: 1, background: '#5a3520', opacity: 0.4 }}></div>

      {/* logo mark — circular badge */}
      <div style={{ position: 'absolute', top: 96, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="none" stroke="#2a1a10" strokeWidth="1.2" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="#2a1a10" strokeWidth="0.6" />
          {/* coffee bean */}
          <ellipse cx="60" cy="60" rx="14" ry="22" fill="#2a1a10" />
          <path d="M 60 40 Q 54 60 60 80" stroke="#f4ead8" strokeWidth="1.5" fill="none" />
          {/* curved text */}
          <defs>
            <path id="topCurve" d="M 18 60 A 42 42 0 0 1 102 60" />
            <path id="botCurve" d="M 18 60 A 42 42 0 0 0 102 60" />
          </defs>
          <text fontFamily='"JetBrains Mono", monospace' fontSize="8" letterSpacing="3" fill="#2a1a10">
            <textPath href="#topCurve" startOffset="50%" textAnchor="middle">SLOW · ROAST · CO.</textPath>
          </text>
          <text fontFamily='"JetBrains Mono", monospace' fontSize="8" letterSpacing="3" fill="#2a1a10">
            <textPath href="#botCurve" startOffset="50%" textAnchor="middle">— SINCE 2019 —</textPath>
          </text>
        </svg>
      </div>

      {/* wordmark */}
      <div style={{ position: 'absolute', top: 236, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{
          fontSize: 96, lineHeight: 0.9, fontWeight: 500,
          fontStyle: 'italic', letterSpacing: '-0.02em',
        }}>Brew <span style={{ fontStyle: 'normal', fontWeight: 400, color: '#a85a2a' }}>&amp;</span></div>
        <div style={{
          fontSize: 96, lineHeight: 0.9, fontWeight: 500,
          letterSpacing: '-0.02em', marginTop: 4,
        }}>Bean Co.</div>
      </div>

      {/* tagline */}
      <div style={{
        position: 'absolute', top: 444, left: 0, right: 0, textAlign: 'center',
        fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
        letterSpacing: '0.32em', textTransform: 'uppercase', color: '#5a3520',
      }}>
        — slow mornings, good beans —
      </div>

      {/* hero — product photo */}
      <div style={{
        position: 'absolute', top: 492, left: 110, width: 500, height: 260,
        borderRadius: 4, overflow: 'hidden',
        background: '#d8c8b0',
      }}>
        <img
          src="https://images.unsplash.com/photo-1577261123774-950d1eb58038?w=1200&auto=format&fit=crop&q=80"
          alt="Drink"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* feature ribbon */}
      <div style={{
        position: 'absolute', top: 776, left: 60, right: 60,
        background: '#2a1a10', color: '#f4ead8',
        padding: '20px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
            letterSpacing: '0.3em', opacity: 0.7,
          }}>THIS WEEK'S POUR</div>
          <div style={{ fontSize: 32, fontStyle: 'italic', fontWeight: 500, marginTop: 4, lineHeight: 1 }}>
            Maple Oat Cortado
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 44, fontWeight: 500, lineHeight: 1, color: '#e8a45a' }}>$5</div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
            letterSpacing: '0.2em', opacity: 0.7, marginTop: 2,
          }}>FRI · SAT · SUN</div>
        </div>
      </div>

      {/* footer */}
      <div style={{
        position: 'absolute', bottom: 36, left: 36, right: 36,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
        letterSpacing: '0.2em', color: '#5a3520',
      }}>
        <span>112 ASHLAND ST.</span>
        <span>OPEN 7–4 DAILY</span>
        <span>@BREWANDBEANCO</span>
      </div>
    </div>
  );
}

window.BrewAndBean = BrewAndBean;
