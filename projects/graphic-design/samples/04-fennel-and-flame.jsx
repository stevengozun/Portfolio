// 04 — Fennel & Flame — restaurant weekend special flyer
// Style: rich editorial. Burgundy + ochre + cream. Appetizing typography.
// Type: high-contrast didone (Bodoni-style) + grotesk caps.

function FennelAndFlame() {
  return (
    <div style={{
      width: 720,
      height: 1080,
      position: 'relative',
      background: '#fbf3e2',
      fontFamily: '"Inter", "Helvetica Neue", sans-serif',
      color: '#2a0e0b',
      overflow: 'hidden',
    }}>
      {/* burgundy header band */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 280,
        background: '#5a1a18',
        color: '#fbf3e2',
        padding: '32px 56px',
        boxSizing: 'border-box',
      }}>
        {/* top bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
          opacity: 0.85,
        }}>
          <span>Est. 2014</span>
          <span>· Autumn Menu · Vol. III ·</span>
          <span>Reservations · 312·555·0192</span>
        </div>

        <div style={{
          position: 'absolute', top: 70, left: 0, right: 0, textAlign: 'center',
        }}>
          <div style={{
            fontFamily: '"Bodoni Moda", "Didot", "Playfair Display", Georgia, serif',
            fontSize: 12, letterSpacing: '0.5em', textTransform: 'uppercase',
          }}>The House of</div>
          <div style={{
            fontFamily: '"Bodoni Moda", "Didot", "Playfair Display", Georgia, serif',
            fontSize: 92, lineHeight: 0.95, fontWeight: 400,
            letterSpacing: '-0.01em', marginTop: 6,
          }}>
            Fennel <span style={{ fontStyle: 'italic', fontWeight: 300 }}>&amp;</span> Flame
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            marginTop: 18, fontSize: 11, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#e8b75a',
          }}>
            <span>—</span>
            <span>A Weekend Tasting</span>
            <span>—</span>
          </div>
        </div>
      </div>

      {/* main title strip */}
      <div style={{
        position: 'absolute', top: 296, left: 0, right: 0, padding: '0 56px',
      }}>
        <div style={{
          fontFamily: '"Bodoni Moda", "Didot", Georgia, serif',
          fontSize: 56, fontStyle: 'italic', fontWeight: 400,
          color: '#5a1a18', textAlign: 'center', lineHeight: 1,
          marginTop: 32,
        }}>
          Five courses, <span style={{ fontStyle: 'normal' }}>hand-fired.</span>
        </div>
        <div style={{
          textAlign: 'center', marginTop: 14,
          fontSize: 13, color: '#7a3a25', maxWidth: 460, margin: '14px auto 0',
          lineHeight: 1.5,
        }}>
          Chef Mara's seasonal tasting menu lands Friday through Sunday.
          Wood-fired, locally rooted, ten guests per seating.
        </div>
      </div>

      {/* menu list */}
      <div style={{
        position: 'absolute', top: 510, left: 56, right: 56,
      }}>
        {[
          ['I',   'Charred fig & burrata',     'rosemary honey, sourdough crumb', '14'],
          ['II',  'Smoked corn velouté',       'brown butter, espelette',         '12'],
          ['III', 'Wood-fired branzino',       'fennel pollen, preserved lemon',  '32'],
          ['IV',  'Lamb shoulder confit',      'salsa verde, charred shallot',    '36'],
          ['V',   'Olive oil cake',            'mascarpone, blood orange',        '11'],
        ].map(([n, name, sub, price], i) => (
          <div key={n} style={{
            display: 'flex', alignItems: 'baseline', gap: 16,
            padding: '9px 0',
            borderBottom: i < 4 ? '1px solid rgba(90,26,24,0.18)' : 'none',
          }}>
            <div style={{
              fontFamily: '"Bodoni Moda", Georgia, serif',
              fontSize: 22, fontStyle: 'italic',
              color: '#b8732a', width: 40, flexShrink: 0,
            }}>{n}.</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: '"Bodoni Moda", Georgia, serif',
                fontSize: 22, fontWeight: 500, color: '#2a0e0b',
                letterSpacing: '-0.005em',
              }}>{name}</div>
              <div style={{
                fontSize: 12, color: '#7a3a25', marginTop: 2,
                fontStyle: 'italic',
              }}>{sub}</div>
            </div>
            <div style={{
              fontFamily: '"Bodoni Moda", Georgia, serif',
              fontSize: 20, color: '#5a1a18', minWidth: 36, textAlign: 'right',
            }}>${price}</div>
          </div>
        ))}
      </div>

      {/* big-ticket prix-fixe */}
      <div style={{
        position: 'absolute', top: 905, left: 56, right: 56,
        background: '#2a0e0b', color: '#fbf3e2',
        padding: '20px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
            color: '#e8b75a',
          }}>The Full Table</div>
          <div style={{
            fontFamily: '"Bodoni Moda", Georgia, serif',
            fontSize: 28, fontStyle: 'italic', marginTop: 4, lineHeight: 1,
          }}>Tasting + pairing</div>
        </div>
        <div style={{
          fontFamily: '"Bodoni Moda", Georgia, serif',
          fontSize: 56, lineHeight: 1, color: '#e8b75a', fontWeight: 400,
        }}>$95</div>
      </div>

      {/* footer */}
      <div style={{
        position: 'absolute', bottom: 28, left: 56, right: 56,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
        color: '#7a3a25',
      }}>
        <span>Fri · Sat · Sun</span>
        <span>Two Seatings · 6pm · 8:30pm</span>
        <span>fennelandflame.co</span>
      </div>
    </div>
  );
}

window.FennelAndFlame = FennelAndFlame;
