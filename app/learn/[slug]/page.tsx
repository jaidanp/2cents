import { modules } from '@/data/modules';
import ModuleClient from './ModuleClient';

// 1. This tells Next.js to build a page for every slug in your data
export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

// 2. This is the actual page component
export default function Page() {
  return <ModuleClient />;
}