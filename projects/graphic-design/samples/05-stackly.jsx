// 05 — Stackly SaaS hero
// Style: sleek, professional, tech-forward. Indigo-near-black + violet-blue
// accent + warm off-white. Type: clean grotesk + monospace details.

function Stackly() {
  return (
    <div style={{
      width: 1440,
      height: 900,
      position: 'relative',
      background: '#0e1024',
      fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
      color: '#e8e6f5',
      overflow: 'hidden',
    }}>
      {/* radial glow */}
      <div style={{
        position: 'absolute', top: -200, left: '40%', width: 900, height: 900,
        background: 'radial-gradient(circle, rgba(118,99,255,0.35) 0%, rgba(74,52,200,0.18) 30%, transparent 60%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      {/* dot grid */}
      <svg width="1440" height="900" style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
        <defs>
          <pattern id="dotgrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(180,170,240,0.18)" />
          </pattern>
        </defs>
        <rect width="1440" height="900" fill="url(#dotgrid)" />
      </svg>

      {/* TOP NAV */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 76,
        padding: '0 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(180,170,240,0.08)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            <rect x="4" y="4" width="20" height="6" rx="1.5" fill="#7c6bff" />
            <rect x="6" y="12" width="16" height="6" rx="1.5" fill="#b4a8ff" opacity="0.7" />
            <rect x="8" y="20" width="12" height="4" rx="1" fill="#e8e6f5" opacity="0.5" />
          </svg>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>Stackly</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, fontSize: 14, color: 'rgba(232,230,245,0.75)' }}>
          <span>Product</span>
          <span>Solutions</span>
          <span>Integrations</span>
          <span>Docs</span>
          <span>Pricing</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13 }}>
          <span style={{ color: 'rgba(232,230,245,0.7)' }}>Sign in</span>
          <button style={{
            background: '#e8e6f5', color: '#0e1024', border: 'none',
            padding: '10px 18px', borderRadius: 8, fontWeight: 600, cursor: 'pointer',
            fontFamily: 'inherit', fontSize: 13,
          }}>Get Stackly →</button>
        </div>
      </div>

      {/* LEFT — copy */}
      <div style={{
        position: 'absolute', top: 200, left: 64, width: 620,
      }}>
        {/* announcement pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '6px 6px 6px 14px', borderRadius: 999,
          background: 'rgba(124,107,255,0.12)',
          border: '1px solid rgba(124,107,255,0.3)',
          fontSize: 13, color: '#b4a8ff',
        }}>
          <span style={{
            background: '#7c6bff', color: '#0e1024',
            padding: '2px 8px', borderRadius: 999,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
          }}>NEW</span>
          <span>Stackly 4.0 — workflows with AI handoff</span>
          <span style={{ opacity: 0.6, marginRight: 6 }}>→</span>
        </div>

        <h1 style={{
          margin: '24px 0 0',
          fontSize: 76, lineHeight: 1.02, fontWeight: 700,
          letterSpacing: '-0.035em',
          color: '#f5f3ff',
        }}>
          Every workflow,<br />
          <span style={{
            background: 'linear-gradient(90deg, #7c6bff 0%, #c4b8ff 60%, #e8e6f5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
          }}>one source of truth.</span>
        </h1>

        <p style={{
          marginTop: 24, fontSize: 19, lineHeight: 1.55,
          color: 'rgba(232,230,245,0.7)', maxWidth: 540,
        }}>
          Stackly unifies your docs, tickets, and product specs into a single
          living workspace — with AI that drafts, routes, and ships work
          across every team.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 36 }}>
          <button style={{
            background: '#7c6bff', color: '#fff', border: 'none',
            padding: '16px 26px', borderRadius: 10, fontSize: 15, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: '0 8px 24px rgba(124,107,255,0.4)',
          }}>Start free → 14 days</button>
          <button style={{
            background: 'transparent', color: '#e8e6f5',
            border: '1px solid rgba(232,230,245,0.25)',
            padding: '16px 22px', borderRadius: 10, fontSize: 15, fontWeight: 500,
            cursor: 'pointer', fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{
              display: 'inline-block', width: 18, height: 18, borderRadius: '50%',
              border: '1px solid currentColor', position: 'relative',
            }}>
              <span style={{
                position: 'absolute', top: '50%', left: '52%',
                transform: 'translate(-50%, -50%)',
                borderLeft: '6px solid currentColor',
                borderTop: '4px solid transparent',
                borderBottom: '4px solid transparent',
              }} />
            </span>
            Watch 90s demo
          </button>
        </div>

        {/* trust row */}
        <div style={{ marginTop: 60 }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(232,230,245,0.45)', marginBottom: 18,
          }}>Trusted by teams at</div>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', color: 'rgba(232,230,245,0.55)', fontWeight: 600, fontSize: 16 }}>
            <span style={{ letterSpacing: '0.1em' }}>NORTHWIND</span>
            <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>Halcyon</span>
            <span>◆ Lattice</span>
            <span style={{ letterSpacing: '0.3em', fontSize: 13 }}>P R I S M</span>
            <span style={{ fontWeight: 800 }}>Vector/</span>
          </div>
        </div>
      </div>

      {/* RIGHT — product visual: layered app card */}
      <div style={{ position: 'absolute', top: 152, right: 64, width: 680, height: 580 }}>
        {/* back card */}
        <div style={{
          position: 'absolute', top: 40, right: 40, width: 600, height: 460,
          background: 'rgba(124,107,255,0.12)',
          border: '1px solid rgba(124,107,255,0.25)',
          borderRadius: 16,
          backdropFilter: 'blur(8px)',
        }} />

        {/* main card */}
        <div style={{
          position: 'absolute', top: 0, right: 80, width: 600, height: 460,
          background: '#171a3a',
          border: '1px solid rgba(180,170,240,0.18)',
          borderRadius: 16,
          padding: 0,
          overflow: 'hidden',
          boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
        }}>
          {/* window chrome */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '14px 16px',
            borderBottom: '1px solid rgba(180,170,240,0.1)',
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#ff5f57' }} />
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#febc2e' }} />
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#28c840' }} />
            </div>
            <div style={{
              flex: 1, textAlign: 'center',
              fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
              color: 'rgba(232,230,245,0.5)',
            }}>stackly.app / workspace / launch-q3</div>
          </div>

          <div style={{ display: 'flex', height: 'calc(100% - 41px)' }}>
            {/* sidebar */}
            <div style={{
              width: 160, padding: '14px 12px',
              borderRight: '1px solid rgba(180,170,240,0.1)',
              fontSize: 12, color: 'rgba(232,230,245,0.7)',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(232,230,245,0.4)', textTransform: 'uppercase', margin: '4px 4px 6px' }}>WORKSPACE</div>
              {[['◆', 'Inbox', '12'], ['◇', 'Launch Q3', '4'], ['☰', 'Roadmap'], ['▤', 'Docs'], ['⏳', 'Sprints']].map(([i, n, c], k) => (
                <div key={k} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '7px 8px', borderRadius: 6,
                  background: k === 1 ? 'rgba(124,107,255,0.18)' : 'transparent',
                  color: k === 1 ? '#c4b8ff' : 'inherit',
                  fontWeight: k === 1 ? 600 : 400,
                }}>
                  <span style={{ opacity: 0.7 }}>{i}</span>
                  <span style={{ flex: 1 }}>{n}</span>
                  {c ? <span style={{ fontSize: 10, background: 'rgba(180,170,240,0.15)', padding: '1px 6px', borderRadius: 8 }}>{c}</span> : null}
                </div>
              ))}
            </div>

            {/* board area */}
            <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#f5f3ff' }}>Launch Q3 / Board</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ fontSize: 10, padding: '4px 8px', borderRadius: 6, background: 'rgba(124,107,255,0.18)', color: '#c4b8ff' }}>AI · 3 drafts</span>
                  <span style={{ fontSize: 10, padding: '4px 8px', borderRadius: 6, background: 'rgba(180,170,240,0.1)', color: 'rgba(232,230,245,0.7)' }}>+ Add</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, flex: 1 }}>
                {[
                  ['Draft', '#8a83b5', [['API auth refresh', 'P1'], ['Onboarding copy', 'P2']]],
                  ['In flight', '#7c6bff', [['Billing v2 rollout', 'P0'], ['Webhooks beta', 'P1'], ['Docs site', 'P2']]],
                  ['Shipped', '#5fd28f', [['SAML & SSO', 'P0'], ['Audit log', 'P1']]],
                ].map(([title, c, items]) => (
                  <div key={title} style={{
                    background: 'rgba(14,16,36,0.6)',
                    border: '1px solid rgba(180,170,240,0.08)',
                    borderRadius: 10, padding: 10,
                    display: 'flex', flexDirection: 'column', gap: 6,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 3, background: c }} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#e8e6f5' }}>{title}</span>
                      <span style={{ fontSize: 10, color: 'rgba(232,230,245,0.4)', marginLeft: 'auto' }}>{items.length}</span>
                    </div>
                    {items.map(([n, p], i) => (
                      <div key={i} style={{
                        background: 'rgba(124,107,255,0.06)',
                        border: '1px solid rgba(180,170,240,0.08)',
                        borderRadius: 7, padding: '8px 9px',
                        fontSize: 11, color: '#e8e6f5',
                        display: 'flex', flexDirection: 'column', gap: 4,
                      }}>
                        <span>{n}</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 9, color: 'rgba(232,230,245,0.5)' }}>
                          <span style={{ color: p === 'P0' ? '#ff8b7c' : p === 'P1' ? '#febc2e' : '#7c6bff' }}>{p}</span>
                          <span>● ● ●</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* floating AI toast */}
        <div style={{
          position: 'absolute', top: 380, left: -20, width: 280,
          background: '#1d2048',
          border: '1px solid rgba(124,107,255,0.4)',
          borderRadius: 14,
          padding: 14,
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, #7c6bff, #c4b8ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 14, flexShrink: 0,
          }}>✦</div>
          <div>
            <div style={{ fontSize: 11, color: '#c4b8ff', fontWeight: 600, marginBottom: 2 }}>Stackly AI</div>
            <div style={{ fontSize: 12, lineHeight: 1.4, color: '#e8e6f5' }}>
              Routed <b>3 P0 tickets</b> to Billing and drafted release notes — review?
            </div>
          </div>
        </div>
      </div>

      {/* bottom metric strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 64,
        borderTop: '1px solid rgba(180,170,240,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
        color: 'rgba(232,230,245,0.55)', letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        <span><b style={{ color: '#c4b8ff', fontFamily: 'Inter, sans-serif', fontSize: 16, marginRight: 8 }}>40k+</b> teams shipping</span>
        <span><b style={{ color: '#c4b8ff', fontFamily: 'Inter, sans-serif', fontSize: 16, marginRight: 8 }}>99.99%</b> uptime SLA</span>
        <span><b style={{ color: '#c4b8ff', fontFamily: 'Inter, sans-serif', fontSize: 16, marginRight: 8 }}>SOC 2</b> · HIPAA · GDPR</span>
        <span><b style={{ color: '#c4b8ff', fontFamily: 'Inter, sans-serif', fontSize: 16, marginRight: 8 }}>180+</b> integrations</span>
      </div>
    </div>
  );
}

window.Stackly = Stackly;
