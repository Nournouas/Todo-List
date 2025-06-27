import { createItem } from './itemModule.js';
import { createProject } from './projectModule.js';
import { createDOM, populateProjectsDiv, addNewProject} from './DOM.js';
import "./styles.css";

const applicationModule = (function (){
    let allTasks = [];
    let allProjects = [];
    createDOM();
    populateProjectsDiv(allProjects);
    projectAddEvent();


    function projectAddEvent(){
        const addNewProjButton = document.querySelector(".addProjButton");
        addNewProjButton.addEventListener("click", () =>{
        const newProjForm = document.querySelector("#addNewProjButton");

            newProjForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const project = createProject(inputTitle.value, inputColor.value, "icon", [], inputPrio.value)
                allProjects.push(project);
                console.log(allProjects);
                document.body.removeChild(document.querySelector(".newProjDiv"))
                const nav = document.querySelector(".nav");
                nav.classList.toggle("hidden")
                const cardgrid = document.querySelector(".cardGrid");
                cardgrid.classList.toggle("hidden")
                populateProjectsDiv(allProjects);
            });
            });

    }

})();