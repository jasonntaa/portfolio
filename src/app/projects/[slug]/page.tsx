import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";

export function generateStaticParams() {
  return projects
    .filter((p) => !p.isPlaceholder)
    .map((project) => ({ slug: project.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && !p.isPlaceholder);

  if (!project) {
    notFound();
  }

  return null;
}
