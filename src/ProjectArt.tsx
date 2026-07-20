import type { ProjectArtVariant } from './data'

/**
 * Generative SVG artwork for each project card — stylized system scenes
 * (dashboards, pipelines, agent graphs) rendered as lightweight inline SVG.
 * Each variant has its own color story; 'bank' and 'finops' use the
 * Emerald Ink (#064E3B) / Champagne (#F8E7C9) palette.
 */

const W = 460
const H = 168

interface Palette {
  from: string
  to: string
  accent: string
  soft: string
}

const palettes: Record<ProjectArtVariant, Palette> = {
  docs:    { from: '#1e1b4b', to: '#0b1020', accent: '#818cf8', soft: '#22d3ee' },
  finops:  { from: '#064E3B', to: '#0b1020', accent: '#34d399', soft: '#F8E7C9' },
  career:  { from: '#312e81', to: '#0b1020', accent: '#a78bfa', soft: '#22d3ee' },
  research:{ from: '#4c1d95', to: '#0b1020', accent: '#c4b5fd', soft: '#f0abfc' },
  bank:    { from: '#064E3B', to: '#052e24', accent: '#F8E7C9', soft: '#6ee7b7' },
  health:  { from: '#134e4a', to: '#0b1020', accent: '#5eead4', soft: '#fda4af' },
  gateway: { from: '#1e3a5f', to: '#0b1020', accent: '#38bdf8', soft: '#818cf8' },
  agents:  { from: '#3b0764', to: '#0b1020', accent: '#d8b4fe', soft: '#22d3ee' },
  graph:   { from: '#164e63', to: '#0b1020', accent: '#22d3ee', soft: '#a78bfa' },
  events:  { from: '#431407', to: '#0b1020', accent: '#fb923c', soft: '#fbbf24' },
}

function Chip({ x, y, w, label }: { x: number; y: number; w: number; label: string; p: Palette }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={20} rx={10} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" />
      <text x={x + w / 2} y={y + 13.5} textAnchor="middle" className="pa-chip">{label}</text>
    </g>
  )
}

function Doc({ x, y, p, lines = 3 }: { x: number; y: number; p: Palette; lines?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={54} height={68} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
      <path d={`M ${x + 40} ${y} v 12 h 14`} fill="none" stroke="rgba(255,255,255,0.2)" />
      {Array.from({ length: lines }).map((_, i) => (
        <rect key={i} x={x + 9} y={y + 22 + i * 11} width={i === lines - 1 ? 22 : 36} height={4} rx={2} fill={p.accent} opacity={0.55} />
      ))}
    </g>
  )
}

function Pulse({ cx, cy, r, fill, dur = 2.4, delay = 0 }: { cx: number; cy: number; r: number; fill: string; dur?: number; delay?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={fill} opacity="0.6">
        <animate attributeName="r" values={`${r};${r * 3.2}`} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
    </g>
  )
}

function Scene({ v, p }: { v: ProjectArtVariant; p: Palette }) {
  switch (v) {
    case 'docs':
      return (
        <>
          <Doc x={34} y={46} p={p} />
          <Doc x={58} y={58} p={p} lines={4} />
          <path d="M 130 92 C 170 92 175 84 210 84" className="pa-line" stroke={p.accent} />
          {[
            [244, 56], [282, 44], [318, 62], [268, 84], [306, 96], [342, 82],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={7} fill="rgba(255,255,255,0.06)" stroke={p.soft} strokeWidth="1.2" />
              <circle cx={cx} cy={cy} r={2.4} fill={p.soft} />
            </g>
          ))}
          <path d="M244 56 L282 44 L318 62 M268 84 L306 96 L342 82 M282 44 L306 96 M244 56 L268 84" stroke={p.soft} strokeWidth="0.8" opacity="0.45" fill="none" />
          <Pulse cx={210} cy={84} r={4} fill={p.accent} />
          <Chip x={332} y={124} w={96} label="hybrid search" p={p} />
          <Chip x={34} y={128} w={82} label="RAG · Q&A" p={p} />
        </>
      )
    case 'finops':
      return (
        <>
          {[
            [46, 62, 58], [82, 46, 74], [118, 74, 46], [154, 88, 32], [190, 96, 24],
          ].map(([x, y, h], i) => (
            <rect key={i} x={x} y={y} width={22} height={h} rx={4}
              fill={i < 2 ? 'rgba(248,231,201,0.28)' : p.accent} opacity={i < 2 ? 1 : 0.8} />
          ))}
          <path d="M 46 66 L 96 50 L 140 76 L 186 96 L 226 104" className="pa-line" stroke={p.soft} />
          <Pulse cx={226} cy={104} r={3.5} fill={p.soft} dur={2} />
          <text x={272} y={58} className="pa-big" fill={p.soft}>-38%</text>
          <text x={272} y={76} className="pa-small" fill="rgba(255,255,255,0.6)">cloud spend · 90 days</text>
          <Chip x={268} y={94} w={104} label="AI anomaly scan" p={p} />
          <Chip x={268} y={122} w={128} label="rightsizing approved ✓" p={p} />
        </>
      )
    case 'career':
      return (
        <>
          <circle cx={110} cy={84} r={26} fill="rgba(255,255,255,0.05)" stroke={p.accent} strokeWidth="1.4" />
          <text x={110} y={90} textAnchor="middle" className="pa-big" fill={p.accent}>SK</text>
          {[
            [210, 40, 'MCP tools'], [252, 84, 'skill graph'], [210, 128, 'evidence'],
          ].map(([cx, cy, label], i) => (
            <g key={i}>
              <path d={`M 136 84 C 165 84 170 ${cy} ${Number(cx) - 34} ${cy}`} className="pa-line" stroke={p.soft} opacity="0.7" />
              <Chip x={Number(cx) - 34} y={Number(cy) - 10} w={78} label={String(label)} p={p} />
            </g>
          ))}
          <Pulse cx={136} cy={84} r={3.5} fill={p.accent} />
          <Chip x={330} y={74} w={96} label="20+ MCP tools" p={p} />
        </>
      )
    case 'research':
      return (
        <>
          <circle cx={230} cy={84} r={20} fill="rgba(255,255,255,0.07)" stroke={p.accent} strokeWidth="1.4" />
          <text x={230} y={89} textAnchor="middle" className="pa-small" fill={p.accent}>orch</text>
          {[
            [120, 40], [120, 128], [340, 40], [340, 128], [230, 24],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <path d={`M 230 84 L ${cx} ${cy}`} className="pa-line" stroke={p.soft} opacity="0.55" />
              <circle cx={cx} cy={cy} r={11} fill="rgba(255,255,255,0.05)" stroke={p.soft} strokeWidth="1.1" />
              <text x={cx} y={cy + 3.5} textAnchor="middle" className="pa-tiny" fill={p.soft}>A{i + 1}</text>
              <circle r={2.4} fill={p.accent}>
                <animateMotion dur={`${2 + i * 0.4}s`} repeatCount="indefinite" path={`M 230 84 L ${cx} ${cy} L 230 84`} />
              </circle>
            </g>
          ))}
          <Chip x={30} y={70} w={70} label="verify ✓" p={p} />
          <Chip x={360} y={76} w={70} label="cite [12]" p={p} />
        </>
      )
    case 'bank':
      return (
        <>
          <path d="M 96 34 l 30 12 v 22 c 0 20 -13 32 -30 40 c -17 -8 -30 -20 -30 -40 v -22 z"
            fill="rgba(248,231,201,0.1)" stroke={p.accent} strokeWidth="1.5" />
          <path d="M 86 74 l 8 8 l 17 -18" fill="none" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={170} y={44 + i * 26} width={168} height={18} rx={5} fill="rgba(255,255,255,0.05)" stroke="rgba(248,231,201,0.25)" />
              <rect x={178} y={51 + i * 26} width={i === 1 ? 52 : 84} height={5} rx={2.5} fill={p.soft} opacity="0.7" />
              <rect x={288} y={49 + i * 26} width={40} height={9} rx={4.5} fill="rgba(248,231,201,0.22)" />
            </g>
          ))}
          <text x={170} y={132} className="pa-small" fill={p.accent} opacity="0.9">audit trail · PII redaction · KYC/AML grounded</text>
          <Pulse cx={96} cy={64} r={3} fill={p.accent} dur={3} />
          <Chip x={360} y={34} w={70} label="₹ · BFSI" p={p} />
        </>
      )
    case 'health':
      return (
        <>
          <path d="M 40 88 h 46 l 10 -26 l 14 48 l 12 -34 l 8 12 h 42" className="pa-line" stroke={p.soft} strokeWidth="2" />
          <Pulse cx={172} cy={88} r={3.5} fill={p.soft} dur={1.8} />
          <g>
            <rect x={214} y={38} width={92} height={96} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
            <rect x={226} y={54} width={68} height={5} rx={2.5} fill={p.accent} opacity="0.65" />
            <rect x={226} y={68} width={48} height={5} rx={2.5} fill="rgba(255,255,255,0.35)" />
            <rect x={226} y={82} width={58} height={7} rx={2} fill="rgba(255,255,255,0.14)" />
            <rect x={226} y={96} width={68} height={5} rx={2.5} fill={p.accent} opacity="0.65" />
            <rect x={226} y={110} width={38} height={7} rx={2} fill="rgba(255,255,255,0.14)" />
          </g>
          <g stroke={p.accent} strokeWidth="2.2" strokeLinecap="round">
            <path d="M 348 56 v 24 M 336 68 h 24" />
          </g>
          <circle cx={348} cy={68} r={20} fill="none" stroke={p.accent} strokeWidth="1.3" opacity="0.7" />
          <Chip x={324} y={104} w={104} label="PHI de-identified" p={p} />
          <Chip x={40} y={118} w={112} label="ICD-10 · SNOMED" p={p} />
        </>
      )
    case 'gateway':
      return (
        <>
          <rect x={200} y={56} width={64} height={56} rx={10} fill="rgba(255,255,255,0.06)" stroke={p.accent} strokeWidth="1.5" />
          <text x={232} y={80} textAnchor="middle" className="pa-small" fill={p.accent}>MCP</text>
          <text x={232} y={96} textAnchor="middle" className="pa-tiny" fill="rgba(255,255,255,0.55)">gateway</text>
          {[36, 78, 120].map((y, i) => (
            <g key={`l${i}`}>
              <circle cx={82} cy={y + 8} r={9} fill="rgba(255,255,255,0.05)" stroke={p.soft} />
              <path d={`M 94 ${y + 8} C 150 ${y + 8} 150 84 200 84`} className="pa-line" stroke={p.soft} opacity="0.55" />
              <circle r={2.4} fill={p.accent}>
                <animateMotion dur={`${2.2 + i * 0.5}s`} repeatCount="indefinite" path={`M 94 ${y + 8} C 150 ${y + 8} 150 84 200 84`} />
              </circle>
            </g>
          ))}
          {[36, 78, 120].map((y, i) => (
            <g key={`r${i}`}>
              <rect x={352} y={y} width={72} height={17} rx={5} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
              <path d={`M 264 84 C 316 84 316 ${y + 8} 352 ${y + 8}`} className="pa-line" stroke={p.accent} opacity="0.5" />
            </g>
          ))}
          <text x={388} y={47.5} textAnchor="middle" className="pa-tiny" fill="rgba(255,255,255,0.6)">APIs</text>
          <text x={388} y={89.5} textAnchor="middle" className="pa-tiny" fill="rgba(255,255,255,0.6)">data</text>
          <text x={388} y={131.5} textAnchor="middle" className="pa-tiny" fill="rgba(255,255,255,0.6)">docs</text>
          <Chip x={186} y={126} w={92} label="auth · audit" p={p} />
        </>
      )
    case 'agents':
      return (
        <>
          {[
            [120, 52, 'plan'], [232, 118, 'act'], [344, 52, 'verify'],
          ].map(([cx, cy, label], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={22} fill="rgba(255,255,255,0.05)" stroke={i === 2 ? p.soft : p.accent} strokeWidth="1.4" />
              <text x={cx} y={Number(cy) + 4} textAnchor="middle" className="pa-small" fill={i === 2 ? p.soft : p.accent}>{label}</text>
            </g>
          ))}
          <path d="M 138 66 C 170 92 190 104 210 112" className="pa-line" stroke={p.accent} />
          <path d="M 254 112 C 280 102 306 84 328 68" className="pa-line" stroke={p.accent} />
          <path d="M 328 40 C 280 16 180 16 138 40" className="pa-line dashed" stroke={p.soft} />
          <circle r={3} fill={p.accent}>
            <animateMotion dur="3.4s" repeatCount="indefinite"
              path="M 138 66 C 170 92 190 104 210 112 M 254 112 C 280 102 306 84 328 68" />
          </circle>
          <Chip x={196} y={30} w={76} label="critic loop" p={p} />
          <Chip x={30} y={118} w={110} label="human approval" p={p} />
        </>
      )
    case 'graph':
      return (
        <>
          {[
            [90, 60], [140, 36], [186, 68], [122, 104], [172, 122],
            [290, 46], [336, 70], [300, 108], [372, 100], [382, 44],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 8 : 5.5}
              fill="rgba(255,255,255,0.06)" stroke={i < 5 ? p.accent : p.soft} strokeWidth="1.2" />
          ))}
          <g stroke={p.accent} strokeWidth="0.9" opacity="0.5" fill="none">
            <path d="M90 60 L140 36 L186 68 L122 104 L90 60 M122 104 L172 122 L186 68" />
          </g>
          <g stroke={p.soft} strokeWidth="0.9" opacity="0.5" fill="none">
            <path d="M290 46 L336 70 L300 108 M336 70 L372 100 M336 70 L382 44" />
          </g>
          <path d="M 186 68 C 230 68 250 60 290 46" className="pa-line dashed" stroke="rgba(255,255,255,0.5)" />
          <Pulse cx={238} cy={62} r={3} fill={p.accent} dur={2.6} />
          <Chip x={64} y={132} w={112} label="community A" p={p} />
          <Chip x={296} y={128} w={104} label="community B" p={p} />
          <Chip x={188} y={22} w={104} label="multi-hop query" p={p} />
        </>
      )
    case 'events':
      return (
        <>
          {[48, 84, 120].map((y, lane) => (
            <g key={lane}>
              <path d={`M 40 ${y} H 420`} stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
              {[0, 1, 2].map((k) => (
                <rect key={k} width={16} height={10} rx={3} fill={lane === 1 ? p.soft : p.accent} opacity="0.9" y={y - 5}>
                  <animate attributeName="x" values="40;404" dur={`${3.2 + lane * 0.7}s`} begin={`${k * (1.1 + lane * 0.2)}s`} repeatCount="indefinite" />
                </rect>
              ))}
            </g>
          ))}
          <rect x={28} y={34} width={12} height={100} rx={4} fill="rgba(255,255,255,0.1)" />
          <rect x={420} y={34} width={12} height={100} rx={4} fill="rgba(255,255,255,0.1)" />
          <Chip x={56} y={138} w={92} label="Kafka topics" p={p} />
          <Chip x={306} y={138} w={122} label="circuit breakers ✓" p={p} />
        </>
      )
  }
}

export default function ProjectArt({ variant }: { variant: ProjectArtVariant }) {
  const p = palettes[variant]
  const gid = `pa-${variant}`
  return (
    <div className="project-art" aria-hidden>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={p.from} />
            <stop offset="1" stopColor={p.to} />
          </linearGradient>
        </defs>
        <rect width={W} height={H} fill={`url(#${gid})`} />
        <g opacity="0.25">
          {Array.from({ length: 10 }).map((_, i) => (
            <path key={`v${i}`} d={`M ${46 * (i + 1)} 0 V ${H}`} stroke="rgba(255,255,255,0.07)" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <path key={`h${i}`} d={`M 0 ${42 * (i + 1)} H ${W}`} stroke="rgba(255,255,255,0.07)" />
          ))}
        </g>
        <Scene v={variant} p={p} />
      </svg>
    </div>
  )
}
