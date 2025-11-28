import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, TrendingUp, LineChart, BookOpen, Brain, Calculator, Zap, Target, Award } from 'lucide-react';
import { pathways } from '@/data/pathways';

const iconMap: Record<string, any> = {
  GraduationCap,
  Briefcase,
  TrendingUp,
  LineChart,
};

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Lessons',
    description: 'Learn at your own pace with bite-sized, easy-to-understand lessons designed for students.'
  },
  {
    icon: Brain,
    title: 'Quizzes & Tracking',
    description: 'Test your knowledge and track your progress with interactive quizzes and instant feedback.'
  },
  {
    icon: Calculator,
    title: 'Financial Calculators',
    description: 'Use practical tools to plan budgets, calculate loan payments, and visualize compound interest.'
  },
  {
    icon: Zap,
    title: 'AI Money Coach',
    description: 'Get personalized financial advice (coming soon) from our AI-powered money coach.'
  }
];

const benefits = [
  { icon: Target, text: 'Bite-size lessons' },
  { icon: Award, text: 'Student-friendly examples' },
  { icon: Zap, text: 'No prior knowledge needed' }
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'College Sophomore',
    quote: '2Cents helped me understand student loans before I signed anything. Super grateful!'
  },
  {
    name: 'James T.',
    role: 'High School Senior',
    quote: 'The budgeting calculator made it so easy to plan for my first semester expenses.'
  },
  {
    name: 'Emily R.',
    role: 'Recent Graduate',
    quote: 'I wish I had found this earlier. The credit card module saved me from making costly mistakes.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-cursive italic text-midnight-navy dark:text-white font-semibold">
                  My 2Cents on Money
                </h1>
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-midnight-navy dark:text-white">
                  Financial literacy for students, made simple.
                </h2>
                <p className="text-lg text-body-gray dark:text-muted-foreground leading-relaxed">
                  Master budgeting, credit, loans, and investing with lessons designed specifically for high school and college students. No jargon, just practical money skills.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/learn">Start Learning</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link href="/quizzes">Take a Quiz</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                      <Icon className="h-4 w-4 mr-2" />
                      {benefit.text}
                    </Badge>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Ask Your Money Coach</CardTitle>
                    <Badge className="bg-mint-accent text-dark-text">AI Preview</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-accent p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Student Question:</p>
                    <p className="text-sm text-muted-foreground italic">
                      "Should I get a credit card in college?"
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Coach Answer:
                    </p>
                    <p className="text-sm leading-relaxed">
                      Yes, but start small! A student credit card can help build credit if you pay it off in full each month. Look for one with no annual fee and rewards that match your spending.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-midnight-navy dark:text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure where to start? Pick a pathway that matches your current situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((pathway) => {
              const Icon = iconMap[pathway.icon];
              return (
                <Card key={pathway.id} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{pathway.title}</CardTitle>
                    <CardDescription>{pathway.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {pathway.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={pathway.href}>View Pathway</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-midnight-navy dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built the tools and resources to help you master money management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-midnight-navy dark:text-white mb-4">
              What Students Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold mb-4">
            Ready to get ahead of your money curve?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join thousands of students building better financial futures.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/learn">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
