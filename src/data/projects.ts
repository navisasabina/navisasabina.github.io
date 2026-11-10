// Big project cards in "Things I've built". Each one links to its own page in src/pages/.
// `color` picks the card colour pair from the theme (background + ink).
export interface Project {
  page: string;
  num: string;
  tag: string;
  title: string;
  summary: string;
  status: string;
  color: 'butter' | 'pink' | 'mint' | 'peach' | 'sky';
  wide?: boolean;
  image: string;
  aspect: string;
  fit?: 'cover' | 'contain';
  note?: string;
}

export const projects: Project[] = [
  {
    page: 'abita.html', num: '01', tag: 'Internship · HR system · 2026', title: 'ABiTA',
    summary: 'Interns and outsourced staff kept checking in for each other to cover secret shift swaps. So check-in now needs your own face (turn your head!), inside the hospital, during your shift, and swaps go through the unit head.',
    status: 'In testing', color: 'butter', wide: true, image: 'assets/abita-login.webp', aspect: '21 / 8',
    note: 'designed it from the very first wireframe!',
  },
  {
    page: 'ab-portal.html', num: '02', tag: 'Internship · IT operations · 2026', title: 'AB-Portal',
    summary: 'Daily IT checks used to mean jumping between too many separate links. Now the server room, CCTV, clear desks and user accounts are all cards in one portal, plus a tracker for every device the hospital owns.',
    status: 'In use', color: 'pink', wide: true, image: 'assets/abportal-dashboard.webp', aspect: '21 / 8',
  },
  {
    page: 'pharmatrack.html', num: '03', tag: 'Healthcare · 2026', title: 'PharmaTrack',
    summary: 'Pharmacists struggled to see which medicines were about to expire. We built them an expiry tracker, then a shop on top so customers can order too. I designed the screens in Figma.',
    status: 'Live', color: 'mint', image: 'assets/pharmatrack-hero.webp', aspect: '16 / 10',
  },
  {
    page: 'forecasting.html', num: '04', tag: 'Machine learning · 2025', title: 'Demand Forecasting',
    summary: '1M+ e-commerce transactions, 18 engineered features, XGBoost at R² 0.76, and SHAP to show why promos and holidays move sales.',
    status: 'Research', color: 'peach', image: 'assets/forecasting-shap.jpg', aspect: '16 / 10', fit: 'contain',
  },
  {
    page: 'planet-zeta.html', num: '05', tag: 'Educational game · 2025', title: 'Planet Zeta',
    summary: 'Kids want to play, so we let them, and slipped lessons about nature into the game. I drew the characters, designed the UI and ran the marketing.',
    status: 'Playable', color: 'sky', wide: true, image: 'assets/planetzeta-title.jpg', aspect: '21 / 8',
  },
];

// Smaller cards under "More projects" (external links).
export interface SideProject {
  href: string;
  num: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  coverBg: string;
  fit: 'cover' | 'contain';
  position?: string;
}

export const moreProjects: SideProject[] = [
  {
    href: 'https://github.com/navisasabina/dnm-pqc-vpn', num: '06', tag: 'Cybersecurity · 2026', title: 'Dark Network & VPN',
    summary: 'Team project on a secure mesh VPN. My part was load testing and monitoring.',
    image: 'assets/darknetwork-overview.jpg', alt: 'Dark Network VPN monitoring dashboard', coverBg: '#111418', fit: 'cover', position: 'top left',
  },
  {
    href: 'https://github.com/navisasabina/pyspark-demand-forecasting', num: '07', tag: 'Big data · 2025', title: 'SKU Demand Forecasting',
    summary: "Forecasts each product's demand two months ahead from 341,983 transactions in PySpark. Best of 3 models hit R² 0.92.",
    image: 'assets/sku-forecast.jpg', alt: 'SKU demand forecasting chart', coverBg: '#FFFFFF', fit: 'contain',
  },
  {
    href: 'https://navisasabina.github.io/CheckPass/', num: '08', tag: 'Web app · 2026', title: 'CheckPass',
    summary: 'Type a password, see how long it would take to crack. Runs fully in the browser, nothing gets sent anywhere.',
    image: 'assets/checkpass.jpg', alt: 'CheckPass password analyzer interface', coverBg: '#FBEFF4', fit: 'cover', position: 'top',
  },
  {
    href: 'https://docs.google.com/document/d/1jZgbtQC47B6rzavs4nkwe80EXfprEYO96QqRjcQypzA/edit?usp=sharing', num: '09', tag: 'Cyber risk · 2026', title: 'AllegroGRC',
    summary: 'Risk and audit platform built on OCTAVE Allegro. I was the QA tester and wrote the 41-page spec and user manual.',
    image: 'assets/allegrogrc.jpg', alt: 'AllegroGRC dashboard', coverBg: '#F6F6F8', fit: 'cover', position: 'top',
  },
];
