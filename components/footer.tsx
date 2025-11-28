import Link from 'next/link';
import { Coins } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Coins className="h-6 w-6 text-primary" />
              <span className="text-lg font-heading font-semibold">2Cents</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Empowering high school and college students with the financial literacy skills they need to build a secure future. Learn money management through simple, student-friendly lessons.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="text-muted-foreground hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="text-muted-foreground hover:text-primary transition-colors">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:hello@2cents.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} 2Cents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
