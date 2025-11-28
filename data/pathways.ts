export interface Pathway {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
  href: string;
}

export const pathways: Pathway[] = [
  {
    id: 'starting-college',
    title: 'Starting College',
    icon: 'GraduationCap',
    description: 'Master the financial basics every college student needs to know.',
    highlights: [
      'Understanding student loans',
      'Creating your first budget',
      'Managing a checking account'
    ],
    href: '/learn'
  },
  {
    id: 'first-job',
    title: 'First Job & Paycheck',
    icon: 'Briefcase',
    description: 'Make the most of your first income and understand your pay stub.',
    highlights: [
      'Reading your pay stub',
      'Understanding taxes and deductions',
      'Setting up direct deposit'
    ],
    href: '/learn'
  },
  {
    id: 'build-credit',
    title: 'Build Your Credit',
    icon: 'TrendingUp',
    description: 'Establish and maintain a strong credit score for your future.',
    highlights: [
      'How credit scores work',
      'Getting your first credit card',
      'Avoiding common credit mistakes'
    ],
    href: '/learn'
  },
  {
    id: 'investing-beginner',
    title: 'Investing Beginner',
    icon: 'LineChart',
    description: 'Start growing your wealth with simple investing strategies.',
    highlights: [
      'Understanding compound interest',
      'Index funds vs individual stocks',
      'Starting with small amounts'
    ],
    href: '/learn'
  }
];
