import React from 'react'
import { db } from '../firebase';
import {useState, useEffect} from 'react';
import {
    collection, 
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    } from 'firebase/firestore';

const Projects = () => {
    const [newName, setNewName] = useState("");
    const [newDes, setNewDes] = useState("");
    const [newGit, setNewGit] = useState("");
    const [newURL, setNewURL] = useState("");
    const [newImg, setNewImg] = useState("");
    const [succes, setSucces ] = useState(false);

  const [useProjects, setProjects] = useState([]);
    const projectsCollectionRef = collection(db, "projects");
    
    //Creat new Project
    const createProject = async () => {
      const addProduct = 
        await addDoc(projectsCollectionRef, 
            { name: newName, des: newDes, git: newGit, url: newURL, img: newImg });
            console.log(" susses?...", addProduct );
            setSucces(true);

      };
    //update
      const updateProject = async (id, des) => {
        const userDoc = doc(db, "projects", id);
        const newFields = { des, newDes };
        await updateDoc(userDoc, newFields);
      };
    // delete
      const deleteProject = async (id) => {
        const userDoc = doc(db, "projects", id);
        await deleteDoc(userDoc);
      };


  useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef);
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})));        };       
        getProjects();
  }, [succes]);
  
  return (     
             <div className="input">
                 <input 
                 placeholder="Name......"
                 onChange={(e) => {
                     setNewName(e.target.value);
                 }} 
                 />
                   <input 
                 placeholder="Descriptions.."
                 onChange={(e) => {
                     setNewDes(e.target.value);
                 }} 
                 />

                <input 
                 placeholder="Github url."
                 onChange={(e) => {
                     setNewGit(e.target.value);
                 }} 
                 />
                 <input 
                 placeholder="homepage url"
                 onChange={(e) => {
                     setNewURL(e.target.value);
                 }} 
                 />

                <input 
                 placeholder="Img link"
                 onChange={(e) => {
                     setNewImg(e.target.value);
                 }} 
                 />
                 <button onClick={createProject}>Add Project</button>
                        {useProjects.map((p) => {              
                             return (                   
                             <div>                                 
                                <span>Name : {p.Name}</span>
                                <span>Description : {p.Description}</span>
                                <span>GitRepo : {p.GitRepo}</span>
                                <span>Live : {p.LinkToLive}</span>
                                <span>Img : {p.Img}</span>                         
                    
                                 <button onClick={() => { 
                                    updateProject(p.id, p.name,  p.des, p.GitRepo, p.LinkToLive, p.img); 
                                        }}       
                                         >
                                        {" "}
                                    Update Project 
                                    </button>

                                    <button onClick={() => {
                                    deleteProject(p.id); 
                                    }} 
                                     >  
                                     {" "}
                                    Delete Project
                                </button>
                       
                        </div>
                             );
                        })}
                
                </div>
        
  );
}

export default Projects;
