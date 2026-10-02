import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Pythia AI development roadmap - from local inference to planetary-scale distributed intelligence.",
};

const phases = [
  {
    phase: "Phase 1",
    name: "Local Topsi",
    status: "CURRENT",
    description: "Today Pythia runs as a standalone service. This phase covers a single-device Active Inference engine with local model training and basic decision-making.",
    milestones: [
      { text: "Active Inference core implementation", done: false },
      { text: "Local model training pipeline", done: false },
      { text: "Task allocation decision engine", done: false },
      { text: "Integration with Omega Router", done: false },
      { text: "Basic metrics dashboard", done: false },
    ]
  },
  {
    phase: "Phase 2",
    name: "Sync Topsi",
    status: "NEXT",
    description: "Multi-device synchronization enabling Pythia instances to share learnings while preserving privacy.",
    milestones: [
      { text: "Encrypted gradient sharing", done: false },
      { text: "CRDT-based state sync", done: false },
      { text: "Peer discovery protocol", done: false },
      { text: "Federated model aggregation", done: false },
      { text: "Network consensus layer", done: false },
    ]
  },
  {
    phase: "Phase 3",
    name: "Learning Topsi",
    status: "LATER",
    description: "Collective intelligence emergence through coordinated learning across the mesh network.",
    milestones: [
      { text: "Multi-tier gossip protocol", done: false },
      { text: "Differential privacy integration", done: false },
      { text: "Hierarchical model architecture", done: false },
      { text: "Cross-cluster optimization", done: false },
      { text: "Token integration (design only)", done: false },
    ]
  },
  {
    phase: "Phase 4",
    name: "Pythia AI",
    status: "LATER",
    description: "The long-term goal: planetary-scale coordination with satellite connectivity. Planned, not built.",
    milestones: [
      { text: "Spectrum Galactic integration", done: false },
      { text: "Global task marketplace", done: false },
      { text: "Automated resource management", done: false },
      { text: "Third-party developer API", done: false },
      { text: "Governance automation", done: false },
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Development <span className="text-gradient-gold">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            From local inference to planetary-scale distributed intelligence.
            Phases are listed in order, without dates.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                {/* Connection line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-[var(--dark-border)] hidden md:block" />
                )}

                <div className="grid md:grid-cols-[120px_1fr] gap-6">
                  {/* Phase indicator */}
                  <div className="hidden md:block">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                      ${phase.status === "CURRENT"
                        ? "bg-[var(--gold)] text-[var(--dark-bg)]"
                        : "bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--text-muted)]"
                      }
                    `}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`
                    card
                    ${phase.status === "CURRENT" ? "border-[var(--gold)] glow-gold" : ""}
                  `}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-[var(--text-muted)]">{phase.phase}</span>
                      <h3 className="text-2xl font-bold text-[var(--gold)]">{phase.name}</h3>
                      <span className={`
                        text-xs px-2 py-1 rounded-full font-medium
                        ${phase.status === "CURRENT"
                          ? "bg-[var(--gold)]/20 text-[var(--gold)]"
                          : phase.status === "NEXT"
                          ? "bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]"
                          : "bg-[var(--dark-surface)] text-[var(--text-muted)]"
                        }
                      `}>
                        {phase.status}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">
                      {phase.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.milestones.map((milestone, i) => (
                        <div
                          key={i}
                          className={`
                            flex items-center gap-3 text-sm
                            ${milestone.done ? "text-[var(--accent-green)]" : "text-[var(--text-muted)]"}
                          `}
                        >
                          <span className="flex-shrink-0">
                            {milestone.done ? "&#10003;" : "&#9675;"}
                          </span>
                          <span className={milestone.done ? "line-through opacity-70" : ""}>
                            {milestone.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Current Focus</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We&apos;re building the foundation for distributed intelligence, starting
              with robust local inference capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl mb-4">&#128187;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Core Engine</h3>
              <p className="text-[var(--text-secondary)]">
                Implementing the Active Inference decision loop with support for
                task execution and compute allocation.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">&#128279;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Hardware Integration</h3>
              <p className="text-[var(--text-secondary)]">
                Deep integration with Omega Router for real-time network state
                monitoring and compute resource management.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">&#128176;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Economic Model</h3>
              <p className="text-[var(--text-secondary)]">
                Designing the incentive structure that aligns individual node
                operators with collective network health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Pythia AI is at an early stage. Follow Alpha Protocol for updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.alphaprotocol.network/join" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get updates
            </a>
            <a
              href="https://www.okbventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit OKB Ventures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
