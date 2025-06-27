import { createItem } from './itemModule.js';
import { createProject } from './projectModule.js';
import { createDOM, populateDOM, addNewProject} from './DOM.js';
import "./styles.css";

const applicationModule = (function (){
    let allTasks = [];
    let allTasks2 = [];
    let allProjects = [];
    createDOM();

    const taskTest = createItem("task test", "test", "test", "test", "test");
    allTasks.push(taskTest);

    const taskTest2 = createItem("Collect £1000 from the boys", "I gotta get that money", "test 2", "Today", "Urgent");
    allTasks2.push(taskTest2);
    const allButton = createProject("All", "test", "test", allTasks, "test");
    const allButton2 = createProject("Georges stag do", "test", "test", allTasks2, "test");
    allProjects.push(allButton);
    allProjects.push(allButton2);

    populateDOM(allProjects);

    const addNewProjButton = document.querySelector(".addProjButton");
    addNewProjButton.addEventListener("click", () =>{
                const newProjForm = document.querySelector("#addNewProjButton");

        newProjForm.addEventListener("submit", (e) => {
            console.log("hello");
            e.preventDefault();
            const project = createProject(inputTitle.value, inputColor.value, "icon", [], inputPrio.value)
            allProjects.push(project);
        })
        })

        //need to close the add project tab and display new projects




    
    

})();



/*
I will need the following:
a quick way to figure out which tasks belong to which projects (filter)
*/