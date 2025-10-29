import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TechMarquee from "./TechMarquee";
import ProjectDialog from "./ProjectDialog";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveSiteUrl: string;
  codeUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="projects h-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-col h-full mt-2 bg-black p-10 rounded-4xl cursor-pointer">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <Image
                className="object-cover"
                src={project.image}
                alt={`${project.title} App`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                draggable={false}
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mt-2">
                {project.title}
              </h3>
              <div className="flex gap-4 mt-4">
                <TechMarquee items={project.tech} />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          style={{ maxWidth: "90vw", width: "100%" }}
          className="h-auto max-h-[90vh] bg-[#1a1a1a] border-neutral-800 text-white p-0 overflow-y-auto"
        >
          <ProjectDialog project={project} />
        </DialogContent>
      </Dialog>
    </article>
  );
};

export default ProjectCard;
