'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { modules } from '@/data/modules';

export default function ModuleClient() {
  const params = useParams();
  // Handle the case where params might be null or undefined safely
  const slug = params?.slug as string;
  const module = modules.find(m => m.slug === slug);

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  if (!module) {
    return (
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-heading font-semibold mb-4">Module not found</h1>
        <Button asChild>
          <Link href="/learn">Back to Learn</Link>
        </Button>
      </div>
    );
  }

  const currentLesson = module.lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === module.lessons.length - 1;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNextLesson = () => {
    setCurrentLessonIndex(prev => Math.min(prev + 1, module.lessons.length - 1));
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handlePreviousLesson = () => {
    setCurrentLessonIndex(prev => Math.max(prev - 1, 0));
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/learn">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Learn
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="outline">{module.difficulty}</Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{module.estimatedTime}</span>
          </div>
        </div>
        <h1 className="text-4xl font-heading font-semibold text-midnight-navy dark:text-white mb-3">
          {module.title}
        </h1>
        <p className="text-lg text-muted-foreground">{module.description}</p>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {module.lessons.map((lesson, index) => (
          <Button
            key={lesson.id}
            variant={currentLessonIndex === index ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setCurrentLessonIndex(index);
              setSelectedAnswer(null);
              setShowExplanation(false);
            }}
            className="whitespace-nowrap"
          >
            Lesson {index + 1}
          </Button>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{currentLesson.title}</CardTitle>
          <CardDescription>
            Lesson {currentLessonIndex + 1} of {module.lessons.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentLesson.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}

          {currentLesson.quickCheck && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Quick Check</h3>
              <p className="font-medium mb-4">{currentLesson.quickCheck.question}</p>
              <div className="space-y-3">
                {currentLesson.quickCheck.options.map((option, index) => {
                  const isCorrect = index === currentLesson.quickCheck!.correctIndex;
                  const isSelected = selectedAnswer === index;
                  const showFeedback = showExplanation;

                  let buttonVariant: "outline" | "default" | "destructive" = "outline";
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
                      className={`w-full justify-start text-left h-auto py-3 px-4 ${
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
                <Alert className="mt-4 bg-primary/10 border-primary">
                  <AlertDescription>
                    <strong>Explanation:</strong> {currentLesson.quickCheck.explanation}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePreviousLesson}
          disabled={currentLessonIndex === 0}
        >
          Previous Lesson
        </Button>
        {!isLastLesson ? (
          <Button onClick={handleNextLesson}>
            Next Lesson
          </Button>
        ) : (
          <Button asChild>
            <Link href="/quizzes">Take a Quiz</Link>
          </Button>
        )}
      </div>
    </div>
  );
}