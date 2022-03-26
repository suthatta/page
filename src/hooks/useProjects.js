import { useState, useEffect } from "react";

const useProjects = () => {
  const [allProjects, setProjects] = useState([]);

    const url = "";

  useEffect(() => {
    const fetchProjects = async () => {
        const res = await fetch(url);
        const projects = await res.json();     
        setProjects(projects);
    };

    fetchProjects();
    {console.log("projects....................... " , allProjects)};

 }, []);

  return allProjects;
};

export default useProjects;
