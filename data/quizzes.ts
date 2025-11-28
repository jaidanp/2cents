export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  slug: string;
  description: string;
  estimatedTime: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: 'budgeting-quiz',
    title: 'Budgeting Quiz',
    slug: 'budgeting-quiz',
    description: 'Test your knowledge of budgeting basics and money management.',
    estimatedTime: '5 min',
    questions: [
      {
        question: 'What percentage of income should go to savings according to the 50/30/20 rule?',
        options: ['10%', '20%', '30%', '50%'],
        correctIndex: 1,
        explanation: 'The 50/30/20 rule suggests 20% of your income should go to savings and debt repayment.'
      },
      {
        question: 'Which of these is considered a "need" rather than a "want"?',
        options: ['Netflix subscription', 'Concert tickets', 'Rent payment', 'Designer sneakers'],
        correctIndex: 2,
        explanation: 'Rent is a basic necessity for housing, while the others are discretionary "wants".'
      },
      {
        question: 'What\'s the first step in creating a budget?',
        options: [
          'Cut all unnecessary expenses',
          'Track your current income and spending',
          'Open a savings account',
          'Get a credit card'
        ],
        correctIndex: 1,
        explanation: 'You need to know where your money currently goes before you can make a plan to improve it.'
      },
      {
        question: 'An emergency fund should ideally cover how many months of expenses?',
        options: ['1-2 months', '3-6 months', '12 months', '24 months'],
        correctIndex: 1,
        explanation: 'Financial experts recommend saving 3-6 months of expenses for emergencies.'
      },
      {
        question: 'What does it mean to "pay yourself first"?',
        options: [
          'Buy yourself treats before paying bills',
          'Put money into savings before spending on other things',
          'Pay off credit cards before rent',
          'Invest in crypto before anything else'
        ],
        correctIndex: 1,
        explanation: 'Paying yourself first means prioritizing savings by setting money aside before spending on other expenses.'
      }
    ]
  },
  {
    id: 'credit-debt-quiz',
    title: 'Credit & Debt Quiz',
    slug: 'credit-debt-quiz',
    description: 'Challenge yourself on credit cards, credit scores, and managing debt.',
    estimatedTime: '5 min',
    questions: [
      {
        question: 'What is a credit score used for?',
        options: [
          'To determine your bank account balance',
          'To measure your trustworthiness as a borrower',
          'To calculate your income',
          'To track your spending habits'
        ],
        correctIndex: 1,
        explanation: 'A credit score helps lenders assess the risk of lending money to you based on your credit history.'
      },
      {
        question: 'What\'s the best way to use a credit card to build good credit?',
        options: [
          'Carry a balance every month',
          'Only use it for emergencies',
          'Pay the full balance on time each month',
          'Max out the card to show you can handle debt'
        ],
        correctIndex: 2,
        explanation: 'Paying your full balance on time builds positive credit history without incurring interest charges.'
      },
      {
        question: 'What is APR?',
        options: [
          'Annual Percentage Rate - the yearly interest rate',
          'Automatic Payment Reminder',
          'Average Payment Required',
          'Annual Premium Rate'
        ],
        correctIndex: 0,
        explanation: 'APR stands for Annual Percentage Rate, which represents the yearly cost of borrowing money.'
      },
      {
        question: 'Which factor has the biggest impact on your credit score?',
        options: [
          'Your income level',
          'Payment history',
          'Age',
          'Where you live'
        ],
        correctIndex: 1,
        explanation: 'Payment history accounts for about 35% of your credit score, making it the most important factor.'
      },
      {
        question: 'What\'s a good credit utilization ratio to maintain?',
        options: [
          '90% or higher',
          '50-60%',
          'Under 30%',
          '100%'
        ],
        correctIndex: 2,
        explanation: 'Keeping your credit utilization under 30% of your available credit shows you manage credit responsibly.'
      }
    ]
  },
  {
    id: 'college-costs-quiz',
    title: 'College Costs Quiz',
    slug: 'college-costs-quiz',
    description: 'Test your understanding of student loans, financial aid, and college expenses.',
    estimatedTime: '5 min',
    questions: [
      {
        question: 'Which type of financial aid does NOT need to be repaid?',
        options: ['Federal student loans', 'Private student loans', 'Grants and scholarships', 'Parent PLUS loans'],
        correctIndex: 2,
        explanation: 'Grants and scholarships are free money that you don\'t have to pay back, unlike loans.'
      },
      {
        question: 'What\'s the difference between subsidized and unsubsidized federal loans?',
        options: [
          'Subsidized loans have higher interest rates',
          'Unsubsidized loans don\'t require repayment',
          'Subsidized loans don\'t accrue interest while you\'re in school',
          'There is no difference'
        ],
        correctIndex: 2,
        explanation: 'With subsidized loans, the government pays the interest while you\'re in school. Unsubsidized loans accrue interest from day one.'
      },
      {
        question: 'What is the FAFSA?',
        options: [
          'A type of student loan',
          'Free Application for Federal Student Aid',
          'A scholarship program',
          'A credit card for students'
        ],
        correctIndex: 1,
        explanation: 'FAFSA is the form you fill out to apply for federal financial aid, including grants, loans, and work-study.'
      },
      {
        question: 'When do you typically start repaying federal student loans?',
        options: [
          'Immediately after borrowing',
          '6 months after graduation or dropping below half-time enrollment',
          '10 years after graduation',
          'Never, if you work in public service'
        ],
        correctIndex: 1,
        explanation: 'Most federal student loans have a 6-month grace period after you graduate or drop below half-time enrollment.'
      }
    ]
  },
  {
    id: 'investing-basics-quiz',
    title: 'Investing Basics Quiz',
    slug: 'investing-basics-quiz',
    description: 'Learn about the fundamentals of investing and growing your wealth.',
    estimatedTime: '5 min',
    questions: [
      {
        question: 'What is compound interest?',
        options: [
          'Interest paid only on the principal amount',
          'Interest earned on both principal and previously earned interest',
          'A type of bank account',
          'A penalty for late payments'
        ],
        correctIndex: 1,
        explanation: 'Compound interest means you earn interest on your interest, accelerating your wealth growth over time.'
      },
      {
        question: 'What is diversification in investing?',
        options: [
          'Putting all your money in one stock',
          'Spreading investments across different assets to reduce risk',
          'Only investing in cryptocurrencies',
          'Buying and selling stocks daily'
        ],
        correctIndex: 1,
        explanation: 'Diversification means spreading your money across different investments to minimize risk.'
      },
      {
        question: 'Which typically has higher returns over the long term but also higher risk?',
        options: ['Savings accounts', 'Certificates of Deposit (CDs)', 'Stocks', 'Government bonds'],
        correctIndex: 2,
        explanation: 'Stocks historically offer higher returns than savings accounts or bonds, but come with more volatility and risk.'
      },
      {
        question: 'What\'s a good first step for a young person starting to invest?',
        options: [
          'Day trading individual stocks',
          'Investing in a low-cost index fund',
          'Buying cryptocurrency',
          'Timing the market'
        ],
        correctIndex: 1,
        explanation: 'Low-cost index funds provide instant diversification and are a simple, effective way for beginners to start investing.'
      }
    ]
  }
];
