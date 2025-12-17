'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { quizzes } from '@/data/quizzes';

export default function QuizPage() {
  const params = useParams();
  const slug = params.slug as string;
  const quiz = quizzes.find(q => q.slug === slug);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!quiz) {
    return (
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-heading font-semibold mb-4">Quiz not found</h1>
        <Button asChild>
          <Link href="/quizzes">Back to Quizzes</Link>
        </Button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctIndex) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setQuizComplete(false);
  };

  const percentage = Math.round((correctAnswers / quiz.questions.length) * 100);

  if (quizComplete) {
    return (
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            <CardDescription>Here's how you did on {quiz.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
              <p className="text-muted-foreground">
                You got {correctAnswers} out of {quiz.questions.length} questions correct
              </p>
            </div>

            {percentage < 60 && (
              <Alert className="text-left">
                <AlertDescription>
                  <strong>Keep learning!</strong> Consider reviewing the related modules to strengthen your understanding.
                </AlertDescription>
              </Alert>
            )}

            {percentage >= 60 && percentage < 80 && (
              <Alert className="text-left bg-primary/10 border-primary">
                <AlertDescription>
                  <strong>Good job!</strong> You're on the right track. Review a few concepts and try again to master this topic.
                </AlertDescription>
              </Alert>
            )}

            {percentage >= 80 && (
              <Alert className="text-left bg-green-success/10 border-green-success">
                <AlertDescription>
                  <strong>Excellent work!</strong> You've demonstrated strong understanding of this topic.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRetake} variant="outline">
                Retake Quiz
              </Button>
              <Button asChild>
                <Link href="/quizzes">Browse More Quizzes</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/quizzes">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Quizzes
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctIndex;
              const isSelected = selectedAnswer === index;
              const showFeedback = showExplanation;

              let buttonVariant: 'outline' | 'default' | 'destructive' = 'outline';
              let Icon = null;

              if (showFeedback) {
                if (isCorrect) {
                  buttonVariant = 'default';
                  Icon = CheckCircle2;
                } else if (isSelected && !isCorrect) {
                  buttonVariant = 'destructive';
                  Icon = XCircle;
                }
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={`w-full justify-start text-left h-auto py-4 px-4 ${
                    showFeedback && isCorrect ? 'bg-green-success hover:bg-green-success' : ''
                  }`}
                  onClick={() => !showExplanation && handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="flex-1">{option}</span>
                  {Icon && <Icon className="h-5 w-5 ml-2" />}
                </Button>
              );
            })}
          </div>

          {showExplanation && (
            <>
              <Alert className="bg-primary/10 border-primary">
                <AlertDescription>
                  <strong>Explanation:</strong> {question.explanation}
                </AlertDescription>
              </Alert>

              <Button onClick={handleNext} className="w-full" size="lg">
                {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
