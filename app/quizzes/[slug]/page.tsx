import { quizzes } from '@/data/quizzes';
import QuizContent from './QuizContent'; // <--- Updated name!

export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

export default function Page() {
  return <QuizContent />;
}