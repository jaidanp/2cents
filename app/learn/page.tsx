'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, CreditCard, GraduationCap, PiggyBank, FileText, Briefcase, Clock } from 'lucide-react';
import { modules } from '@/data/modules';

const iconMap: Record<string, any> = {
  Wallet,
  CreditCard,
  GraduationCap,
  PiggyBank,
  FileText,
  Briefcase,
};

const difficultyColors = {
  Beginner: 'bg-green-success/20 text-green-success border-green-success',
  Intermediate: 'bg-primary/20 text-primary border-primary',
  Advanced: 'bg-purple-accent/20 text-purple-accent border-purple-accent',
};

export default function LearnPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Beginner', 'Intermediate', 'High School', 'College'];

  const filteredModules = selectedTag === 'All'
    ? modules
    : modules.filter(module =>
        module.tags.includes(selectedTag) || module.difficulty === selectedTag
      );

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-heading font-semibold text-midnight-navy dark:text-white mb-4">
          Learn Financial Literacy
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose a module to start learning. Each lesson includes clear explanations, real-world examples, and quick knowledge checks to test your understanding.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'default' : 'outline'}
            onClick={() => setSelectedTag(tag)}
            className="rounded-full"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => {
          const Icon = iconMap[module.icon] || Wallet;
          return (
            <Card key={module.id} className="hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className={`border ${difficultyColors[module.difficulty]}`} variant="outline">
                    {module.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{module.estimatedTime}</span>
                  <span>•</span>
                  <span>{module.lessons.length} lessons</span>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/learn/${module.slug}`}>Start Module</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No modules found for the selected filter.</p>
        </div>
      )}
    </div>
  );
}
