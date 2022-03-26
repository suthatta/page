import {useState, useEffect} from 'react';
import ProjectDataService from "../services/project.services";

const ProjectList = ({getProjectId}) => {

    const [projects, setProject] =useState([]);
    useEffect(() => {
        getProject();

    }, []);

    const getProjects = async () => {

    const data = await ProjectDataService.getAllProjects();
    console.log("data......", data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ProjectDataService.deleteProject(id);
    getProjects();
  };
  return (
    <>
            <div className="mb-2">
            <Button variant="dark edit" onClick={getProjects}>
              Refresh Projects List
            </Button>
        </div> 
     
      
      

                      </>
  )

    }
