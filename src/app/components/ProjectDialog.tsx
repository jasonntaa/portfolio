import Image from "next/image";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveSiteUrl: string;
  codeUrl: string;
}

interface ProjectDialogProps {
  project: Project;
}

const ProjectDialog = ({ project }: ProjectDialogProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 min-h-[70vh]">
      <div className="w-full h-full rounded-lg overflow-hidden">
        <Image
          className="object-cover object-top-left ml-10 w-full h-full"
          src={project.image}
          alt={`${project.title} screenshot`}
          width={800}
          draggable={false}
          height={800}
        />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div>
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="text-neutral-300 leading-relaxed mt-4">
            <p>{project.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 mt-10">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-700 text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={project.liveSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live site (opens in a new tab)`}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Live Site
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} code on GitHub (opens in a new tab)`}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-transparent border-2 border-neutral-600 rounded-lg hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
