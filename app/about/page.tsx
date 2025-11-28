import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Target, Users, Lightbulb } from 'lucide-react';

const approaches = [
  {
    icon: CheckCircle2,
    title: 'Simple Language',
    description: 'No financial jargon or confusing terms. We explain concepts in plain English.'
  },
  {
    icon: Target,
    title: 'Real Examples',
    description: 'Every lesson includes situations students actually face, from student loans to first paychecks.'
  },
  {
    icon: Users,
    title: 'Student-Focused',
    description: 'Built specifically for high school and college students, not generic financial advice.'
  },
  {
    icon: Lightbulb,
    title: 'Free Resources',
    description: 'Quality financial education should be accessible to everyone, no paywalls or premium tiers.'
  }
];

const faqs = [
  {
    question: 'Is 2Cents free?',
    answer: 'Yes! 2Cents is completely free. We believe every student deserves access to quality financial education without barriers.'
  },
  {
    question: 'Who is this for?',
    answer: '2Cents is designed for high school and college students who want to learn money management skills. Whether you\'re getting your first job, heading to college, or just want to understand finances better, we\'re here to help.'
  },
  {
    question: 'Do I need any financial background?',
    answer: 'Not at all! We start from the basics and assume no prior knowledge. Our lessons are designed to be beginner-friendly and build progressively.'
  },
  {
    question: 'Can teachers use this in class?',
    answer: 'Absolutely! Teachers are welcome to use 2Cents resources in their classrooms. Our modules can complement personal finance curricula and provide interactive learning experiences for students.'
  },
  {
    question: 'How is 2Cents different from other financial education sites?',
    answer: 'We focus exclusively on students and use language and examples that resonate with their experiences. Our interactive tools, quizzes, and bite-sized lessons make learning engaging rather than overwhelming.'
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-semibold text-midnight-navy dark:text-white mb-6">
            About 2Cents
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're on a mission to help every student build a strong financial foundation before entering the real world.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-heading font-semibold text-midnight-navy dark:text-white mb-6">
              Why 2Cents Exists
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Too many students graduate without understanding basic money concepts like budgeting, credit scores, or student loans. They're thrown into the financial deep end without a life jacket.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We created 2Cents because financial literacy shouldn't be complicated or boring. Money management is a life skill that everyone needs, yet it's rarely taught in a way that students can relate to.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is simple: make financial education accessible, engaging, and practical for the next generation. Whether you're navigating your first credit card, planning a budget for college, or trying to understand investing, we've got your back.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold text-midnight-navy dark:text-white mb-8 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-2">{approach.title}</h3>
                        <p className="text-muted-foreground">{approach.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold text-midnight-navy dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-semibold mb-4">
            Have More Questions?
          </h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            We'd love to hear from you. Reach out anytime!
          </p>
          <a
            href="mailto:hello@2cents.com"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
