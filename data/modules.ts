export interface Module {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  tags: string[];
  icon: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string[];
  quickCheck?: QuickCheck;
}

export interface QuickCheck {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const modules: Module[] = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting Basics',
    slug: 'budgeting-basics',
    description: 'Learn how to track your income and expenses, create a simple budget, and make your money work for you.',
    difficulty: 'Beginner',
    estimatedTime: '20 min',
    tags: ['Beginner', 'High School', 'College'],
    icon: 'Wallet',
    lessons: [
      {
        id: 'what-is-budget',
        title: 'What is a Budget?',
        content: [
          'A budget is simply a plan for your money. It helps you see where your money comes from and where it goes.',
          'Think of it like a game plan for your finances. Just like you plan your day or week, you can plan how to use your money.',
          'The basic formula is simple: Income - Expenses = What\'s Left. Your goal is to make sure "What\'s Left" is a positive number!'
        ],
        quickCheck: {
          question: 'What is the main purpose of a budget?',
          options: [
            'To restrict yourself from spending money',
            'To plan how to use your money wisely',
            'To impress your friends',
            'To calculate taxes'
          ],
          correctIndex: 1,
          explanation: 'A budget is a tool to help you plan and manage your money effectively, not to restrict you unnecessarily.'
        }
      },
      {
        id: '50-30-20-rule',
        title: 'The 50/30/20 Rule',
        content: [
          'This is a simple budgeting framework that divides your after-tax income into three categories:',
          '50% for Needs: rent, food, utilities, transportation',
          '30% for Wants: entertainment, dining out, hobbies',
          '20% for Savings & Debt: emergency fund, retirement, paying off loans'
        ],
        quickCheck: {
          question: 'If you earn $1,000 per month, how much should go to savings according to the 50/30/20 rule?',
          options: ['$100', '$200', '$300', '$500'],
          correctIndex: 1,
          explanation: '20% of $1,000 is $200, which should go towards savings and debt repayment.'
        }
      }
    ]
  },
  {
    id: 'credit-cards-scores',
    title: 'Credit Cards & Scores',
    slug: 'credit-cards-scores',
    description: 'Understand how credit cards work, how to build credit responsibly, and why your credit score matters.',
    difficulty: 'Beginner',
    estimatedTime: '25 min',
    tags: ['Beginner', 'College'],
    icon: 'CreditCard',
    lessons: [
      {
        id: 'credit-basics',
        title: 'Credit Card Basics',
        content: [
          'A credit card lets you borrow money from a bank to make purchases. You promise to pay it back later.',
          'Unlike a debit card (which uses money you already have), a credit card is a short-term loan.',
          'If you pay your full balance by the due date, you pay no interest. If you don\'t, you\'ll be charged interest on what you owe.'
        ],
        quickCheck: {
          question: 'What happens if you only pay the minimum amount due on your credit card?',
          options: [
            'You avoid all interest charges',
            'You pay interest on the remaining balance',
            'Your credit score increases',
            'The bank gives you a reward'
          ],
          correctIndex: 1,
          explanation: 'When you don\'t pay the full balance, you\'re charged interest on what remains, which can add up quickly.'
        }
      }
    ]
  },
  {
    id: 'student-loans-debt',
    title: 'Student Loans & Debt',
    slug: 'student-loans-debt',
    description: 'Navigate student loans, understand interest rates, and learn strategies for managing education debt.',
    difficulty: 'Intermediate',
    estimatedTime: '30 min',
    tags: ['Intermediate', 'College'],
    icon: 'GraduationCap',
    lessons: [
      {
        id: 'types-of-loans',
        title: 'Types of Student Loans',
        content: [
          'Federal loans come from the government and usually have lower interest rates and better repayment options.',
          'Private loans come from banks or credit unions. They often have higher interest rates and fewer protections.',
          'Subsidized loans don\'t charge interest while you\'re in school. Unsubsidized loans start charging interest right away.'
        ]
      }
    ]
  },
  {
    id: 'saving-compound-interest',
    title: 'Saving & Compound Interest',
    slug: 'saving-compound-interest',
    description: 'Discover the power of compound interest and why starting to save early makes a huge difference.',
    difficulty: 'Beginner',
    estimatedTime: '20 min',
    tags: ['Beginner', 'High School', 'College'],
    icon: 'PiggyBank',
    lessons: [
      {
        id: 'compound-interest',
        title: 'The Magic of Compound Interest',
        content: [
          'Compound interest means you earn interest on your interest. It\'s like a snowball rolling downhill, getting bigger as it goes.',
          'Example: If you save $100 and earn 5% interest, after one year you\'ll have $105. In year two, you earn 5% on $105, not just $100.',
          'Starting early is key! Even small amounts can grow significantly over time thanks to compounding.'
        ]
      }
    ]
  },
  {
    id: 'taxes-101',
    title: 'Taxes 101',
    slug: 'taxes-101',
    description: 'Learn the basics of income taxes, deductions, and how to file your first tax return.',
    difficulty: 'Intermediate',
    estimatedTime: '25 min',
    tags: ['Intermediate', 'College'],
    icon: 'FileText',
    lessons: [
      {
        id: 'what-are-taxes',
        title: 'Understanding Income Taxes',
        content: [
          'Income tax is money you pay to the government based on what you earn.',
          'Your employer usually withholds taxes from your paycheck automatically.',
          'Each year, you file a tax return to report your income and calculate if you owe more or get a refund.'
        ]
      }
    ]
  },
  {
    id: 'side-hustles-income',
    title: 'Side Hustles & Income',
    slug: 'side-hustles-income',
    description: 'Explore ways to earn extra income as a student and learn about managing multiple income sources.',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    tags: ['Beginner', 'High School', 'College'],
    icon: 'Briefcase',
    lessons: [
      {
        id: 'side-hustle-ideas',
        title: 'Student-Friendly Side Hustles',
        content: [
          'Tutoring: Share your knowledge in subjects you excel at.',
          'Freelancing: Offer skills like writing, graphic design, or coding online.',
          'Gig economy: Drive for rideshare, deliver food, or do task-based work.'
        ]
      }
    ]
  }
];
