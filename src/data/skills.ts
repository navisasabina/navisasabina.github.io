// Scrolling banner under the hero. `color` is the CSS variable for the flower after each skill.
export const marquee = [
  { label: 'IT Support', color: 'var(--accent)' },
  { label: 'UI/UX Design', color: 'var(--mintInk)' },
  { label: 'Business Analysis', color: 'var(--lavInk)' },
  { label: 'Data & Forecasting', color: 'var(--peachInk)' },
  { label: 'Cybersecurity', color: 'var(--skyInk)' },
  { label: 'Web Development', color: 'var(--butterInk)' },
];

// "My toolbox" cards. `icon` picks an icon from components/home/Toolbox.astro.
export const toolbox = [
  { title: 'IT Support', icon: 'monitor', bg: 'var(--sky)', ink: 'var(--skyInk)', tools: 'Hardware, software & network troubleshooting · Windows · Ubuntu · VirtualBox · VMware · Wireshark' },
  { title: 'Analysis & Data', icon: 'chart', bg: 'var(--accentSoft)', ink: 'var(--accent)', tools: 'Requirements gathering · Workflow analysis · SQL · PostgreSQL · Excel · Python · PySpark' },
  { title: 'UI/UX', icon: 'layout', bg: 'var(--lav)', ink: 'var(--lavInk)', tools: 'Figma · User flows · Wireframes · Prototypes · Canva' },
  { title: 'Web', icon: 'code', bg: 'var(--mint)', ink: 'var(--mintInk)', tools: 'HTML · CSS · JavaScript · Next.js · REST APIs · Git' },
] as const;
