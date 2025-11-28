import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, FileQuestion } from 'lucide-react';
import { quizzes } from '@/data/quizzes';

export default function QuizzesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-heading font-semibold text-midnight-navy dark:text-white mb-4">
          Test Your Money IQ
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Challenge yourself with interactive quizzes and see how much you've learned. Get instant feedback and track your financial literacy progress.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-all hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileQuestion className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{quiz.estimatedTime}</span>
                </div>
                <span>•</span>
                <span>{quiz.questions.length} questions</span>
              </div>
              <Button asChild className="w-full">
                <Link href={`/quizzes/${quiz.slug}`}>Start Quiz</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
