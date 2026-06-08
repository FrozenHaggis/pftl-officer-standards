import { useState, useEffect } from "react";

const ROLES = [
  {
    id: "tactics",
    label: "Tactics Officer",
    short: "Tactics",
    icon: "🗺",
    color: "#5B9BD5",
    glow: "rgba(91,155,213,0.4)",
    tagline: "The raid's brain before the pull",
    summary:
      "The Tactics Officer does the intellectual heavy lifting so the raid team can execute. They consume world first content, digest it, and translate it into assignments the guild can act on. With only two raid nights a week, every pull must count — no one enters a boss without knowing their job cold.",
    inside: [
      {
        area: "Progression Preparation",
        duties: [
          "Watch and analyse all available world first PoV footage before the guild reaches each boss",
          "Prepare a written tactics document for every boss: role assignments, cooldown timings, positioning maps",
          "Post strats in Discord minimum 48 hours before the guild's first pull on a new boss",
          "Run a pre-pull briefing on voice comms — max 5 minutes, no rambling",
          "Maintain a shared tactics sheet accessible to all raiders at all times",
          "With only two nights a week, strats must be tight before the first pull — there is no learning-on-the-fly budget",
        ],
      },
      {
        area: "In-Raid Execution",
        duties: [
          "Call the pull. Call the wipe. Own the tempo of the raid night",
          "Adjust assignments on the fly based on pull data — never be rigid when the strat isn't working",
          "Review Warcraft Logs between pulls for positioning and mechanic execution failures",
          "Identify which player is failing which mechanic and relay to the relevant lead privately",
          "Keep a prog log: what changed each night, what worked, what didn't",
        ],
      },
      {
        area: "Post-Raid Analysis",
        duties: [
          "Post a written debrief to Discord within 2 hours of each raid session",
          "Highlight mechanical trends — individual mistakes flagged privately, not publicly",
          "Update the tactic doc after each session based on what was learned",
          "Track pull count and phase progression to forecast CE timeline — two nights a week means no wasted weeks",
        ],
      },
    ],
    outside: [
      {
        area: "Research & Development",
        duties: [
          "Follow world first race streams and VODs — Method, Echo, Liquid are required watching",
          "Maintain relationships in the wider theorycrafting community for strategy sharing",
          "Monitor WarcraftLogs rankings to identify what setups top guilds are using on each boss",
          "Stay current on class tuning — patch notes affect strats and composition",
        ],
      },
      {
        area: "Content & Knowledge Sharing",
        duties: [
          "Produce or curate a pre-tier boss preview document before the raid tier opens",
          "Share learning resources with the raid team: relevant YouTube guides, sim results, BiS lists",
        ],
      },
    ],
  },
  {
    id: "recruitment",
    label: "Recruitment Officer",
    short: "Recruit",
    icon: "📋",
    color: "#58C49A",
    glow: "rgba(88,196,154,0.4)",
    tagline: "The guild's talent pipeline",
    summary:
      "A CE guild that neglects recruitment dies between tiers. The Recruitment Officer ensures the roster is never a crisis — depth is built during farm, not during progression. With two raid nights per week the margin for roster gaps is razor thin, so this role is the most proactive in the guild.",
    inside: [
      {
        area: "Trial Management",
        duties: [
          "Own the entire trial pipeline: application intake, eval criteria, outcome communication",
          "Assign a mentor officer to every incoming trial within 24 hours of their first raid",
          "Run a formal mid-trial check-in at the 1-week mark — document findings",
          "Deliver a written verdict to the trial within 48 hours of their eval period ending",
          "Maintain a recruitment tracker: applicants, status, notes, decision, outcome",
        ],
      },
      {
        area: "Roster Health",
        duties: [
          "Maintain a minimum bench depth of 3 raiders per role type at all times",
          "Raise a roster shortage flag to the GM the moment any role drops below 2 in depth",
          "Track player burnout risk — identify raiders showing attendance or performance decline early",
          "Conduct exit interviews with every player who leaves the guild voluntarily",
          "Report roster health status to the officer team weekly",
          "Two raid nights means one absence can break a comp — depth is not optional, it is survival",
        ],
      },
    ],
    outside: [
      {
        area: "Active Recruitment",
        duties: [
          "Post and maintain recruitment threads on official WoW forums and Reddit r/wowguilds weekly",
          "Keep the WoWProgress and Raider.IO recruitment listings current and compelling",
          "Proactively scout PuG content — M+ groups, alt raids, community discords",
          "Reach out to high-performing players who are guildless or in declining guilds",
          "Maintain a prospect watchlist: players to approach next time a spot opens",
        ],
      },
      {
        area: "Guild Brand",
        duties: [
          "Ensure the guild's recruitment post is well-written, accurate, and updated each tier",
          "Respond to all recruitment enquiries within 24 hours — slow replies lose good players",
          "Build relationships with community hubs: class discords, spec Discord servers",
          "Represent the guild professionally in all external recruitment interactions",
        ],
      },
    ],
  },
  {
    id: "role",
    label: "Role Lead",
    short: "Role Lead",
    icon: "⚔",
    color: "#B47FD4",
    glow: "rgba(180,127,212,0.4)",
    tagline: "The expert voice for their group",
    summary:
      "Role Leads own the performance of their group — healers, tanks, ranged, or melee. They are the bridge between the officer team and the players, the first call for performance issues, spec questions, and role-specific tactics. On a two-night schedule, underperformance within a role group cannot be allowed to persist across multiple resets.",
    inside: [
      {
        area: "Performance Management",
        duties: [
          "Review Warcraft Logs for every player in their role group after each raid session",
          "Identify underperformance and deliver direct, private feedback within 48 hours",
          "Set clear, measurable improvement expectations with a defined review timeline",
          "Report persistent underperformers to the GM — never let a problem fester across resets",
          "Recognise and highlight standout performance to the officer team for promotion consideration",
        ],
      },
      {
        area: "Spec & Tactical Expertise",
        duties: [
          "Maintain current knowledge of all specs within their role — not just their own",
          "Advise the Tactics Officer on role-specific assignments, cooldown timings, and positioning",
          "Provide spec-specific guidance to every raider in their group on request",
          "Run role-specific prep sessions before major progression bosses if needed",
          "Flag any spec that is critically underperforming to the GM for roster consideration",
        ],
      },
      {
        area: "Culture & Communication",
        duties: [
          "Be the first point of contact for any concern raised by a player in their role group",
          "Conduct monthly 1-to-1 check-ins with each player in their group — performance and wellbeing",
          "Foster healthy competition within the role group — never allow resentment to build",
          "Advocate for their players in officer meetings when they deserve it",
        ],
      },
    ],
    outside: [
      {
        area: "Theorycrafting & Community",
        duties: [
          "Actively participate in the relevant class and spec Discord servers",
          "Monitor and share patch notes, hotfixes, and tuning changes that affect their role group",
          "Test and sim gear, talent, and conduit changes on PTR and report findings to the team",
          "Build relationships with Role Leads at peer guilds — share non-sensitive strategic knowledge",
          "Stay aware of emerging top-performing players in their spec for recruitment referrals",
        ],
      },
    ],
  },
  {
    id: "community",
    label: "Community Officer",
    short: "Community",
    icon: "🌐",
    color: "#E8A838",
    glow: "rgba(232,168,56,0.4)",
    tagline: "The glue between raid nights",
    summary:
      "With only two raid nights per week, the community officer's job is disproportionately critical. Five days pass between sessions — the Community Officer keeps the guild alive, engaged, and cohesive during that time. Retention is cheaper than recruitment, and retention is built here.",
    inside: [
      {
        area: "Discord & Social Management",
        duties: [
          "Maintain Discord server structure — channels organised, pins current, roles assigned correctly",
          "Moderate all channels: enforce the code of conduct consistently and without favouritism",
          "Run weekly non-raid guild events: M+ nights, alt raids, community games, quiz nights",
          "Celebrate member milestones: CE kills, IRL achievements, guild anniversaries",
          "Maintain a welcoming atmosphere for new recruits from day one — first impressions matter",
        ],
      },
      {
        area: "Retention & Engagement",
        duties: [
          "Identify and reach out to members who have gone quiet or reduced activity",
          "Organise off-tier content to maintain engagement between raid tiers",
          "Gather member feedback periodically — anonymous polls on guild satisfaction",
          "Flag early burnout signals to the GM before they become departures",
          "Coordinate guild bank access, tabs, and resources — keep it tidy and useful",
          "Two nights a week means five days of silence without active community management — fill that gap",
        ],
      },
    ],
    outside: [
      {
        area: "Public Presence",
        duties: [
          "Manage the guild's presence on any public social platforms the guild maintains",
          "Post CE kills, progression milestones, and recruitment news publicly",
          "Engage positively in the wider WoW community on behalf of the guild",
          "Represent the guild at community events or in cross-guild Discord partnerships",
          "Monitor the guild's Raider.IO reviews and reputation scores — address legitimate concerns",
        ],
      },
    ],
  },
];

const PRINCIPLES = [
  {
    icon: "⚔",
    title: "Officers are held to a higher standard, not a lower one",
    body: "Every rule that applies to raiders applies doubly to officers. An officer who turns up late, underperforms, or creates drama is more damaging than any raider doing the same. The rank comes with scrutiny, not protection.",
  },
  {
    icon: "🔒",
    title: "What's said in officer channels stays in officer channels",
    body: "Roster decisions, performance conversations — none of this leaves the officer team. Officers who leak internal discussions to raiders, even close friends, are removed immediately.",
  },
  {
    icon: "🎯",
    title: "Own your domain completely",
    body: "Every officer owns a specific function. That function cannot be neglected, delegated upward, or quietly dropped. If you cannot fulfil your role, tell the GM and step aside. A half-functioning officer is worse than no officer.",
  },
  {
    icon: "📣",
    title: "Disagree in private, execute in public",
    body: "Officers debate decisions in the officer channel. Once a decision is made, every officer presents it as a unified front. Undermining a decision publicly — even subtly — destroys the trust raiders have in leadership.",
  },
  {
    icon: "📊",
    title: "Document everything",
    body: "Decisions without documentation become disputed. Every significant action — a demotion, a trial verdict, a conduct warning — is written down with context and reasoning. If it's not documented, it didn't happen.",
  },
  {
    icon: "🔄",
    title: "Officer rank is reviewed every tier",
    body: "There is no tenure. Officers who stop performing their function, go inactive, or damage guild culture are stepped down. The GM reviews every officer role at the end of each raid tier — non-negotiable.",
  },
];

export default function OfficerApp() {
  const [activeRole, setActiveRole] = useState("tactics");
  const [view, setView] = useState("roles");
  const [expandedSection, setExpandedSection] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const role = ROLES.find((r) => r.id === activeRole);

  return (
    <div style={s.root}>
      <div style={s.gridBg} />
      <div style={s.vignette} />

      <header style={s.header}>
        <div style={s.headerLeft}>
          <div style={s.emblem}>◈</div>
          <div>
            <div style={s.headerTitle}>OFFICER CHARTER</div>
            <div style={s.headerSub}>Standards of Command — Two Night CE Guild</div>
          </div>
        </div>
        <div style={s.navPills}>
          <button
            style={{ ...s.pill, ...(view === "roles" ? s.pillActive : {}) }}
            onClick={() => setView("roles")}
          >
            Officer Roles
          </button>
          <button
            style={{ ...s.pill, ...(view === "principles" ? s.pillActive : {}) }}
            onClick={() => setView("principles")}
          >
            Core Principles
          </button>
        </div>
      </header>

      <main style={s.main}>
        {view === "roles" ? (
          <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s" }}>
            <div style={s.layout}>
              <div style={s.sidebar}>
                <div style={s.sidebarLabel}>SELECT ROLE</div>
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => { setActiveRole(r.id); setExpandedSection(null); }}
                    style={{
                      ...s.sidebarBtn,
                      ...(activeRole === r.id
                        ? {
                            background: `linear-gradient(90deg, ${r.color}22, transparent)`,
                            borderLeft: `3px solid ${r.color}`,
                            color: r.color,
                          }
                        : {}),
                    }}
                  >
                    <span style={s.sidebarIcon}>{r.icon}</span>
                    <div style={s.sidebarText}>
                      <div style={s.sidebarName}>{r.label}</div>
                      <div style={s.sidebarTagline}>{r.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div style={s.content}>
                <div
                  style={{
                    ...s.roleHero,
                    borderBottom: `1px solid ${role.color}44`,
                    background: `linear-gradient(135deg, ${role.color}0d 0%, transparent 60%)`,
                  }}
                >
                  <div style={s.roleHeroTop}>
                    <span
                      style={{
                        ...s.roleHeroIcon,
                        color: role.color,
                        textShadow: `0 0 30px ${role.glow}`,
                      }}
                    >
                      {role.icon}
                    </span>
                    <div>
                      <h2 style={{ ...s.roleTitle, color: role.color }}>{role.label}</h2>
                      <div style={s.roleTagline}>{role.tagline}</div>
                    </div>
                  </div>
                  <p style={s.roleSummary}>{role.summary}</p>
                </div>

                <div style={s.section}>
                  <div style={s.sectionLabel}>
                    <span style={{ ...s.sectionDot, background: role.color }} />
                    INSIDE THE GUILD
                  </div>
                  {role.inside.map((block) => {
                    const key = `in-${block.area}`;
                    const open = expandedSection === key;
                    return (
                      <div
                        key={key}
                        style={{
                          ...s.block,
                          borderColor: open ? role.color + "66" : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <button
                          style={s.blockHeader}
                          onClick={() => setExpandedSection(open ? null : key)}
                        >
                          <span style={{ ...s.blockTitle, color: open ? role.color : "#c8bfa8" }}>
                            {block.area}
                          </span>
                          <span style={{ ...s.blockCount, color: role.color }}>
                            {block.duties.length} duties
                          </span>
                          <span style={{ color: role.color, fontSize: 11 }}>
                            {open ? "▲" : "▼"}
                          </span>
                        </button>
                        {open && (
                          <ul style={s.dutyList}>
                            {block.duties.map((d, i) => (
                              <li key={i} style={s.dutyItem}>
                                <span style={{ ...s.dutyArrow, color: role.color }}>▸</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div style={s.section}>
                  <div style={s.sectionLabel}>
                    <span style={{ ...s.sectionDot, background: "#888" }} />
                    OUTSIDE THE GUILD
                  </div>
                  {role.outside.map((block) => {
                    const key = `out-${block.area}`;
                    const open = expandedSection === key;
                    return (
                      <div
                        key={key}
                        style={{
                          ...s.block,
                          borderColor: open ? role.color + "66" : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <button
                          style={s.blockHeader}
                          onClick={() => setExpandedSection(open ? null : key)}
                        >
                          <span style={{ ...s.blockTitle, color: open ? role.color : "#c8bfa8" }}>
                            {block.area}
                          </span>
                          <span style={{ ...s.blockCount, color: role.color }}>
                            {block.duties.length} duties
                          </span>
                          <span style={{ color: role.color, fontSize: 11 }}>
                            {open ? "▲" : "▼"}
                          </span>
                        </button>
                        {open && (
                          <ul style={s.dutyList}>
                            {block.duties.map((d, i) => (
                              <li key={i} style={s.dutyItem}>
                                <span style={{ ...s.dutyArrow, color: role.color }}>▸</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s" }}>
            <p style={s.principlesIntro}>
              These principles govern every officer regardless of role. A guild with great players
              and bad officers will always underperform a guild with good players and great officers.
              On two nights a week the officer team must be exceptionally tight — there is no margin
              for dysfunction.
            </p>
            <div style={s.principlesGrid}>
              {PRINCIPLES.map((p, i) => (
                <div key={i} style={s.principleCard}>
                  <div style={s.principleIcon}>{p.icon}</div>
                  <h3 style={s.principleTitle}>{p.title}</h3>
                  <p style={s.principleBody}>{p.body}</p>
                </div>
              ))}
            </div>

            <div style={s.tableWrap}>
              <div style={s.tableTitle}>Officer Accountability Overview</div>
              <div style={s.table}>
                <div style={s.tableHead}>
                  <div style={s.thCell}>Role</div>
                  <div style={s.thCell}>Primary Domain</div>
                  <div style={s.thCell}>Key Deliverable</div>
                  <div style={s.thCell}>Review Cadence</div>
                </div>
                {[
                  ["🗺 Tactics Officer", "Strategy, progression tempo", "Strat doc posted 48hrs before each boss", "Each tier"],
                  ["📋 Recruitment Officer", "Roster depth, trial pipeline", "Zero roster crises during prog", "Monthly"],
                  ["⚔ Role Lead", "Role-group performance", "Monthly 1-to-1s completed", "Monthly"],
                  ["🌐 Community Officer", "Retention, social engagement", "Weekly event cadence maintained", "Monthly"],
                ].map(([role, domain, deliverable, cadence], i) => (
                  <div
                    key={i}
                    style={{
                      ...s.tableRow,
                      background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    }}
                  >
                    <div style={{ ...s.tdCell, fontWeight: 600, color: "#d8d4c8" }}>{role}</div>
                    <div style={s.tdCell}>{domain}</div>
                    <div style={s.tdCell}>{deliverable}</div>
                    <div style={{ ...s.tdCell, color: "#F5C842" }}>{cadence}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const s = {
  root: {
    minHeight: "100vh",
    background: "#080a0e",
    backgroundImage:
      "radial-gradient(ellipse at 70% 0%, rgba(15,30,60,0.8) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(40,15,10,0.5) 0%, transparent 50%)",
    color: "#c8bfa8",
    fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
    position: "relative",
    overflow: "hidden",
  },
  gridBg: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none",
    zIndex: 0,
  },
  vignette: {
    position: "fixed",
    inset: 0,
    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
    pointerEvents: "none",
    zIndex: 1,
  },
  header: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    padding: "18px 32px",
    background: "rgba(5,7,12,0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(245,200,66,0.12)",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  emblem: {
    fontSize: 32,
    color: "#F5C842",
    textShadow: "0 0 20px rgba(245,200,66,0.5)",
    lineHeight: 1,
    fontFamily: "monospace",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.28em",
    color: "#F5C842",
    textShadow: "0 0 16px rgba(245,200,66,0.35)",
    textTransform: "uppercase",
  },
  headerSub: {
    fontSize: 10,
    letterSpacing: "0.16em",
    color: "rgba(200,190,168,0.45)",
    textTransform: "uppercase",
    marginTop: 2,
  },
  navPills: {
    display: "flex",
    gap: 6,
  },
  pill: {
    padding: "7px 18px",
    border: "1px solid rgba(255,200,100,0.15)",
    borderRadius: 2,
    background: "transparent",
    color: "rgba(200,185,150,0.6)",
    cursor: "pointer",
    fontFamily: "'Palatino Linotype', serif",
    fontSize: 12,
    letterSpacing: "0.1em",
    transition: "all 0.2s",
  },
  pillActive: {
    background: "rgba(245,200,66,0.1)",
    borderColor: "rgba(245,200,66,0.4)",
    color: "#F5C842",
  },
  main: {
    position: "relative",
    zIndex: 5,
    maxWidth: 1100,
    margin: "0 auto",
    padding: "28px 24px 64px",
  },
  layout: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
  },
  sidebar: {
    width: 220,
    flexShrink: 0,
    position: "sticky",
    top: 24,
  },
  sidebarLabel: {
    fontSize: 9,
    letterSpacing: "0.22em",
    color: "rgba(200,185,150,0.3)",
    marginBottom: 10,
    paddingLeft: 12,
    textTransform: "uppercase",
  },
  sidebarBtn: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "10px 12px",
    background: "transparent",
    border: "none",
    borderLeft: "3px solid transparent",
    cursor: "pointer",
    color: "rgba(200,185,150,0.5)",
    textAlign: "left",
    transition: "all 0.2s",
    borderRadius: "0 4px 4px 0",
    marginBottom: 2,
  },
  sidebarIcon: {
    fontSize: 18,
    lineHeight: 1,
    marginTop: 1,
    flexShrink: 0,
  },
  sidebarText: { minWidth: 0 },
  sidebarName: {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "0.02em",
  },
  sidebarTagline: {
    fontSize: 10,
    opacity: 0.6,
    marginTop: 2,
    lineHeight: 1.3,
    letterSpacing: "0.02em",
  },
  content: {
    flex: 1,
    minWidth: 0,
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 8,
    overflow: "hidden",
  },
  roleHero: { padding: "24px 28px" },
  roleHeroTop: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 14,
  },
  roleHeroIcon: {
    fontSize: 44,
    lineHeight: 1,
    flexShrink: 0,
  },
  roleTitle: {
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: "0.06em",
  },
  roleTagline: {
    fontSize: 12,
    color: "rgba(200,185,150,0.45)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginTop: 4,
  },
  roleSummary: {
    margin: 0,
    fontSize: 13.5,
    lineHeight: 1.8,
    color: "rgba(210,200,180,0.75)",
  },
  section: {
    padding: "20px 28px",
    borderTop: "1px solid rgba(255,255,255,0.04)",
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "rgba(200,185,150,0.4)",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  sectionDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    flexShrink: 0,
  },
  block: {
    border: "1px solid",
    borderRadius: 5,
    marginBottom: 8,
    overflow: "hidden",
    transition: "border-color 0.2s",
  },
  blockHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "13px 16px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
  },
  blockTitle: {
    flex: 1,
    fontSize: 13.5,
    fontWeight: 600,
    letterSpacing: "0.04em",
    transition: "color 0.2s",
    fontFamily: "'Palatino Linotype', serif",
  },
  blockCount: {
    fontSize: 10,
    letterSpacing: "0.1em",
    opacity: 0.7,
  },
  dutyList: {
    listStyle: "none",
    margin: 0,
    padding: "4px 16px 16px 16px",
  },
  dutyItem: {
    display: "flex",
    gap: 10,
    fontSize: 13,
    lineHeight: 1.65,
    color: "rgba(210,200,180,0.78)",
    marginBottom: 8,
    alignItems: "flex-start",
  },
  dutyArrow: {
    fontSize: 10,
    marginTop: 4,
    flexShrink: 0,
  },
  principlesIntro: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "rgba(200,190,170,0.7)",
    marginBottom: 28,
    maxWidth: 680,
  },
  principlesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
    marginBottom: 40,
  },
  principleCard: {
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 6,
    padding: "20px 22px",
  },
  principleIcon: { fontSize: 26, marginBottom: 12 },
  principleTitle: {
    margin: "0 0 10px",
    fontSize: 14,
    fontWeight: 700,
    color: "#d8d4c8",
    lineHeight: 1.4,
    letterSpacing: "0.02em",
  },
  principleBody: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.75,
    color: "rgba(200,190,170,0.65)",
  },
  tableWrap: {
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 6,
    overflow: "hidden",
  },
  tableTitle: {
    padding: "14px 20px",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(200,185,150,0.4)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  table: { width: "100%" },
  tableHead: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1.6fr 2fr 1fr",
    padding: "10px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.02)",
  },
  thCell: {
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(200,185,150,0.35)",
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1.6fr 2fr 1fr",
    padding: "12px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.03)",
  },
  tdCell: {
    fontSize: 13,
    color: "rgba(200,190,170,0.65)",
    lineHeight: 1.4,
    paddingRight: 12,
  },
};
