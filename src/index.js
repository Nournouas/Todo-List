import { createItem } from './itemModule.js';
import { createProject } from './projectModule.js';
import { createDOM, populateProjectsDiv } from './DOM.js';
import "./styles.css";

const applicationModule = (function (){
    const project1 = createProject("projects1", "test", "test", "test", "test")
    const project2 = createProject("projects2", "test", "test", "test", "test")
    const project3 = createProject("projects3", "test", "test", "test", "test")
    let allTasks = [];
    let allProjects = [project1, project2, project3];
    createDOM()
    populateProjectsDiv(allProjects);

})();

/*
I will need the following:
a quick way to figure out which tasks belong to which projects (filter)
*/