// Experience timeline, newest first. Use `points` for a bullet list or `text` for one line.
export interface LogEntry {
  dates: string;
  current?: boolean;
  role: string;
  place: string;
  points?: string[];
  text?: string;
}

export const logbook: LogEntry[] = [
  {
    dates: 'SEP–DEC 2026',
    current: true,
    role: 'IT Intern',
    place: 'RS Awal Bros Botania, Batam',
    points: [
      'Handle hardware, software and network issues for staff across 9 floors, and keep the issue log that helps the team fix repeat problems faster.',
      'Designed AB-Portal from scratch, the daily monitoring portal the IT unit uses for routine checks.',
      'Designed ABiTA, the face + GPS attendance app for interns and outsourced staff, from the first wireframe.',
    ],
  },
  {
    dates: 'AUG–DEC 2025',
    role: 'Exchange semester',
    place: 'INTI International University, Malaysia',
    points: [
      'Partner-Based Mobility Scholarship.',
      'Two forecasting projects: 1M+ e-commerce transactions with XGBoost and SHAP, and 341,983 SKU records in PySpark (best R² 0.92).',
    ],
  },
  {
    dates: 'OCT 2024–JUL 2026',
    role: 'Vice Director of Business Development',
    place: 'PUMA Informatics',
    points: [
      'Ran 100+ merchandise orders, from planning and pricing to sales and delivery.',
      'Public relations for 4 campus events, including PIC for the company visit to CTI Group and a guest lecture with BSSN.',
    ],
  },
  {
    dates: '2024–2027',
    role: 'B.CS Information Technology',
    place: 'President University',
    text: 'GPA 3.64 / 4.00 · 75% academic scholarship · graduating Aug 2027',
  },
];
