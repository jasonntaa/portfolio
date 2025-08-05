import React, { useState } from "react";

const ProjectModals = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const handleOpen = () => {
    setProjectOpen(!projectOpen);
  };
  return <div>ProjectModals</div>;
};

export default ProjectModals;
