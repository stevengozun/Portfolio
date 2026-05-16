// 02 — Luminé Botanicals skincare ad
// Style: modern, elegant, soft pastel. Eggshell + blush + sage.
// Type: refined high-contrast serif (Playfair-style) + clean grotesk.

function LumineBotanicals() {
  return (
    <div style={{
      width: 1080,
      height: 720,
      position: 'relative',
      background: '#f6efe7',
      fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
      color: '#2d2a26',
      overflow: 'hidden',
      display: 'flex',
    }}>
      {/* LEFT panel — copy */}
      <div style={{
        width: 540, height: '100%', padding: '64px 56px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative',
      }}>
        {/* top: wordmark */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 22 22">
              <circle cx="11" cy="11" r="10" fill="none" stroke="#2d2a26" strokeWidth="0.8" />
              <path d="M 6 12 Q 11 6 16 12 Q 11 16 6 12 Z" fill="#2d2a26" />
            </svg>
            <div style={{
              fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
              fontSize: 22, fontStyle: 'italic', letterSpacing: '0.02em', fontWeight: 500,
            }}>Luminé</div>
            <div style={{
              fontSize: 10, letterSpacing: '0.4em',
              color: '#7a8a72', marginLeft: 2, marginTop: 4,
            }}>BOTANICALS</div>
          </div>
        </div>

        {/* center: headline */}
        <div>
          <div style={{
            fontSize: 11, letterSpacing: '0.35em',
            color: '#b08a82', marginBottom: 22, textTransform: 'uppercase',
          }}>New · Restorative Series</div>
          <h1 style={{
            margin: 0,
            fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
            fontSize: 72, lineHeight: 1.02, fontWeight: 400,
            letterSpacing: '-0.015em', color: '#2d2a26',
          }}>
            Quiet skin,<br />
            <span style={{ fontStyle: 'italic', color: '#7a8a72' }}>by morning.</span>
          </h1>
          <p style={{
            marginTop: 28, marginBottom: 0, maxWidth: 380,
            fontSize: 14.5, lineHeight: 1.6, color: '#5a544c',
          }}>
            A weightless overnight serum infused with sea fennel,
            niacinamide and cold-pressed camellia. Drift off — wake
            soft, even, luminous.
          </p>
        </div>

        {/* bottom: benefits + CTA */}
        <div>
          <div style={{
            display: 'flex', gap: 36, marginBottom: 32,
            borderTop: '1px solid rgba(45,42,38,0.15)', paddingTop: 22,
          }}>
            {[
              ['01', 'Hydrates', '24h moisture barrier'],
              ['02', 'Brightens', 'Even, ambient tone'],
              ['03', 'Calms', 'Reduces redness'],
            ].map(([n, t, s]) => (
              <div key={n} style={{ flex: 1 }}>
                <div style={{
                  fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
                  fontSize: 14, color: '#b08a82', marginBottom: 6,
                }}>{n}</div>
                <div style={{ fontSize: 13.5, fontWeight: 500, marginBottom: 3 }}>{t}</div>
                <div style={{ fontSize: 11.5, color: '#7a746a', lineHeight: 1.4 }}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <button style={{
              background: '#2d2a26', color: '#f6efe7', border: 'none',
              padding: '14px 28px', fontSize: 12, letterSpacing: '0.25em',
              textTransform: 'uppercase', cursor: 'pointer', borderRadius: 0,
              fontFamily: 'inherit', fontWeight: 500,
            }}>Shop the ritual →</button>
            <span style={{ fontSize: 12, color: '#7a746a' }}>
              <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 15, color: '#2d2a26' }}>$58</span>
              {' · 30ml · vegan + cruelty-free'}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT panel — product hero */}
      <div style={{
        flex: 1, height: '100%', position: 'relative',
        background: 'linear-gradient(160deg, #e8d8cf 0%, #d4c4be 60%, #b8a89e 100%)',
        overflow: 'hidden',
      }}>
        {/* soft sun */}
        <div style={{
          position: 'absolute', top: -120, right: -120, width: 360, height: 360,
          borderRadius: '50%', background: 'radial-gradient(circle, #f3d8c4 0%, #e8c4b0 50%, transparent 75%)',
          filter: 'blur(8px)',
        }} />
        {/* botanical leaves */}
        <svg width="540" height="720" style={{ position: 'absolute', inset: 0, opacity: 0.6 }}>
          <g stroke="#7a8a72" strokeWidth="1" fill="none">
            <path d="M 80 600 Q 60 500 90 400 Q 110 380 100 360" />
            <ellipse cx="78" cy="500" rx="22" ry="8" transform="rotate(-30 78 500)" fill="#9aaa92" opacity="0.5" />
            <ellipse cx="98" cy="460" rx="20" ry="7" transform="rotate(25 98 460)" fill="#9aaa92" opacity="0.5" />
            <ellipse cx="86" cy="420" rx="18" ry="6" transform="rotate(-20 86 420)" fill="#9aaa92" opacity="0.5" />
          </g>
          <g stroke="#7a8a72" strokeWidth="1" fill="none">
            <path d="M 460 680 Q 480 580 450 480 Q 430 460 440 440" />
            <ellipse cx="468" cy="580" rx="22" ry="8" transform="rotate(30 468 580)" fill="#9aaa92" opacity="0.5" />
            <ellipse cx="448" cy="540" rx="20" ry="7" transform="rotate(-25 448 540)" fill="#9aaa92" opacity="0.5" />
            <ellipse cx="460" cy="500" rx="18" ry="6" transform="rotate(20 460 500)" fill="#9aaa92" opacity="0.5" />
          </g>
        </svg>

        {/* bottle — product photo */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 340, height: 520,
          borderRadius: 4, overflow: 'hidden',
        }}>
          <img
            src="https://images.unsplash.com/photo-1696025522422-aa9a74e4f3d5?w=900&auto=format&fit=crop&q=80"
            alt="Serum bottle"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* dewdrops */}
        <svg style={{ position: 'absolute', inset: 0 }} width="540" height="720">
          <circle cx="120" cy="180" r="3" fill="rgba(255,255,255,0.7)" />
          <circle cx="420" cy="220" r="2" fill="rgba(255,255,255,0.7)" />
          <circle cx="80" cy="310" r="4" fill="rgba(255,255,255,0.7)" />
          <circle cx="460" cy="380" r="3" fill="rgba(255,255,255,0.7)" />
          <circle cx="380" cy="120" r="2" fill="rgba(255,255,255,0.7)" />
        </svg>

        {/* corner tag */}
        <div style={{
          position: 'absolute', top: 36, right: 36,
          fontSize: 10, letterSpacing: '0.3em', color: '#2d2a26',
          textTransform: 'uppercase', textAlign: 'right', lineHeight: 1.8,
        }}>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontStyle: 'italic', letterSpacing: 0, textTransform: 'none' }}>
            No. 04
          </div>
          <div>Night Serum</div>
        </div>
      </div>
    </div>
  );
}

window.LumineBotanicals = LumineBotanicals;
