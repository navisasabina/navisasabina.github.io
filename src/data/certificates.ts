// Certificates grid. `type` must match one of the filter keys in `certificateFilters`.
export type CertType = 'course' | 'role' | 'program';

export interface Certificate {
  type: CertType;
  title: string;
  issuer: string;
  year: number;
  image: string;
}

export const certificateFilters: { key: 'all' | CertType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'course', label: 'Courses' },
  { key: 'role', label: 'Event roles' },
  { key: 'program', label: 'Programs' },
];

export const certificates: Certificate[] = [
  { type: 'course', title: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', year: 2025, image: 'assets/cert-cisco.jpg' },
  { type: 'course', title: 'Data Fundamentals', issuer: 'IBM SkillsBuild', year: 2026, image: 'assets/cert-ibm-data-fundamentals.jpg' },
  { type: 'course', title: 'Data Classification', issuer: 'IBM SkillsBuild', year: 2026, image: 'assets/cert-ibm-data-classification.jpg' },
  { type: 'course', title: 'Data Preparation for Analysis', issuer: 'IBM SkillsBuild', year: 2026, image: 'assets/cert-ibm-data-preparation.jpg' },
  { type: 'course', title: 'Workshop: How Enterprises Run IT Today', issuer: 'ManageEngine', year: 2026, image: 'assets/cert-manageengine.jpg' },
  { type: 'program', title: 'Student Mobility Program', issuer: 'INTI International University', year: 2025, image: 'assets/cert-inti.jpg' },
  { type: 'role', title: 'Company Visit to BSSN · Public Relations', issuer: 'PUMA Informatics', year: 2026, image: 'assets/cert-bssn.jpg' },
  { type: 'role', title: 'Guest Lecture with BSSN · Public Relations', issuer: 'PUMA Informatics', year: 2026, image: 'assets/cert-guest-lecture.jpg' },
  { type: 'role', title: 'Company Visit to CTI Group · PIC Public Relations', issuer: 'PUMA Informatics', year: 2025, image: 'assets/cert-cti.jpg' },
  { type: 'role', title: 'Everybody Can Dance · Public Relations Internal', issuer: 'PRIME, President University', year: 2026, image: 'assets/cert-ecd.jpg' },
  { type: 'role', title: 'Temu Alumni · Public Relations', issuer: 'PUMA Informatics', year: 2025, image: 'assets/cert-temu-alumni.jpg' },
  { type: 'role', title: 'Informatics Connect · PIC Food & Beverage x Fund Raising', issuer: 'PUMA Informatics', year: 2025, image: 'assets/cert-informatics-connect.jpg' },
  { type: 'role', title: 'Oil Cycle · Documentation & Design', issuer: 'Social Project', year: 2025, image: 'assets/cert-oilcycle.jpg' },
  { type: 'program', title: 'LOVEYOUth · Participant', issuer: 'AIESEC in PU', year: 2025, image: 'assets/cert-aiesec.jpg' },
  { type: 'role', title: 'Voice of the Rojak', issuer: 'Music Club', year: 2025, image: 'assets/cert-voice-of-rojak.jpg' },
];
