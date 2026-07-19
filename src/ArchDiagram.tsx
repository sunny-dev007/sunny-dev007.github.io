/**
 * Animated enterprise-AI architecture diagram rendered in the hero.
 * Pure SVG + SMIL: data packets flow Clients → MCP Gateway → Orchestrator
 * → (LLM / Vector DB / Graph / APIs). No runtime JS cost.
 */

interface NodeProps {
  x: number
  y: number
  w: number
  h?: number
  title: string
  sub?: string
  accent?: boolean
}

function Node({ x, y, w, h = 44, title, sub, accent }: NodeProps) {
  return (
    <g className={`ad-node${accent ? ' accent' : ''}`}>
      <rect x={x} y={y} width={w} height={h} rx={10} />
      <text x={x + w / 2} y={y + (sub ? 19 : h / 2 + 4)} className="ad-title" textAnchor="middle">
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 33} className="ad-sub" textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  )
}

function Flow({ d, dur, delay = 0 }: { d: string; dur: number; delay?: number }) {
  return (
    <>
      <path className="ad-edge" d={d} />
      <circle className="ad-packet" r={3.2}>
        <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={d} />
      </circle>
    </>
  )
}

export default function ArchDiagram() {
  return (
    <div className="arch-card">
      <div className="arch-card-bar">
        <span className="wd r" /><span className="wd y" /><span className="wd g" />
        <span className="arch-card-title">enterprise-ai · architecture · live</span>
      </div>
      <svg viewBox="0 0 470 350" role="img" aria-label="Enterprise AI architecture diagram">
        {/* edges + packets */}
        <Flow d="M 235 64 L 235 92" dur={2.2} />
        <Flow d="M 235 140 L 235 168" dur={2.2} delay={0.7} />
        <Flow d="M 175 216 C 120 240 75 244 62 262" dur={2.6} delay={0.2} />
        <Flow d="M 215 216 C 200 236 185 244 178 262" dur={2.6} delay={1.1} />
        <Flow d="M 255 216 C 270 236 285 244 292 262" dur={2.6} delay={0.5} />
        <Flow d="M 295 216 C 350 240 395 244 408 262" dur={2.6} delay={1.6} />
        {/* guardrail side links */}
        <path className="ad-edge dashed" d="M 313 116 L 368 116" />
        <path className="ad-edge dashed" d="M 157 116 L 102 116" />

        {/* nodes */}
        <Node x={160} y={20} w={150} title="Clients" sub="Web · Mobile · IDE · Chat" />
        <Node x={157} y={92} w={156} h={48} title="MCP Gateway" sub="authN/Z · audit · rate-limit" accent />
        <Node x={12} y={96} w={90} h={40} title="Guardrails" />
        <Node x={368} y={96} w={90} h={40} title="Telemetry" />
        <Node x={157} y={168} w={156} h={48} title="Agent Orchestrator" sub="plan · act · verify" accent />
        <Node x={12} y={262} w={100} title="LLM" sub="Azure OpenAI" />
        <Node x={128} y={262} w={100} title="Vector DB" sub="hybrid retrieval" />
        <Node x={242} y={262} w={100} title="Knowledge Graph" sub="Graph RAG" />
        <Node x={358} y={262} w={100} title="Enterprise APIs" sub="tools · data" />

        {/* status line */}
        <text x={235} y={338} textAnchor="middle" className="ad-status">
          ● all systems grounded · citations on · humans in the loop
        </text>
      </svg>
    </div>
  )
}
