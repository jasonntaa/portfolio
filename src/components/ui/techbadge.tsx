import React from "react";

interface TechBadgeProps {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return <span>{tech}</span>;
};

export default TechBadge;
