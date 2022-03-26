import { db } from "../firebase-config";
import { async } from "@firebase/util";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";


  const projectsCollectionRef = collection(db, "projects");

  class ProjectDataService { 
      addProject = (newProject) => {
          return addDoc(projectsCollectionRef, newProject );
      };

      updateProject  = async ( id, updatedProject ) => 
      {
        const projectDoc = doc(db, "projects", id);
        await updateDoc(projectDoc, updatedProject);
      };

      deleteBook = (id) => {
        const projectDoc = doc(db, "projects", id);
        return deleteDoc(projectDoc);
      };
    
      getAllBooks = () => {
        return getDocs(projectsCollectionRef);
      };
    
      getBook = (id) => {
        const projectDoc = doc(db, "projects", id);
        return getDoc(projectDoc);
      };
  }

  export default new ProjectDataService();

