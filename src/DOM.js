import { createProject } from "./projectModule";
import todoLogo from "./to-do-logo.jpg"
import userLogo from "./user-logo.png"

export function createDOM(){
    //header ----
    const header = createElement("header", "header", "none", "none", "none");
    const logoImage = createElement("img", "logo", "none", "none", todoLogo);
    const accountImage = createElement("img", "accImage", "none", "none", userLogo);
    header.appendChild(logoImage)
    header.appendChild(accountImage)
    //------------

    //-nav-------------------
    const nav = createElement("nav", "nav", "none", "none", "none");
    const projectHeader = createElement("h1", "projectHeader", "Projects", "none", "none");
    const projectDiv = createElement("div", "projectsDiv", "none", "none", "none");
    const addProjButton = createElement("button", "addProjButton", "Add New Project", "none", "none");;
    addProjButton.addEventListener("click", ()=> showNewProjCard());

    nav.appendChild(projectHeader)
    nav.appendChild(projectDiv);
    nav.appendChild(addProjButton);
    //------------------------

    //card div ----
    const cardGrid = createElement("div", "cardGrid", "none", "none", "none");
    //--------------

    document.body.appendChild(header);
    document.body.appendChild(nav);
    document.body.appendChild(cardGrid);
};


function createElement(elementType, className = 'none', content = 'none', attributes = "none", imgSrc = "none",){
    const element = document.createElement(elementType);
    if (className != 'none'){
        element.classList.add(className);
    };
    if (content != 'none'){
        element.textContent = content;
    };
    if (attributes != 'none'){
        for (let i = 0 ; i < attributes.length ; i++){
            element.setAttribute(attributes[i][0], attributes[i][1]);
        }
    };
    if (imgSrc != 'none' && elementType === "img"){
        element.src = imgSrc;
    };

    return element;

}


//function to populate projectsDiv and all tasks into the grid (need to add the grid dom element + add task button, programm later)
export function populateProjectsDiv(listOfProjects){

    const projectsDiv = document.querySelector(".projectsDiv");

    //this loop takes in each project and puts it on the project div, it also highlights the all button on the first launch
    listOfProjects.forEach(project => {
        const projectButton = createElement("button", "projectButton", project.getTitle(), "none", "none");;
        projectButton.addEventListener("click", () => populateTasks(project));
        projectsDiv.appendChild(projectButton);
    });

}


//function to add a new project
function showNewProjCard(){

    //hide background elements ---
    const nav = document.querySelector(".nav");
    nav.classList.toggle("hidden")
    const cardgrid = document.querySelector(".cardGrid");
    cardgrid.classList.toggle("hidden")
    //----------------------------
    
    const newProjDiv = createElement("div", "newProjDiv", "none", "none", "none");
    const newProjForm = createElement("form", "newProjForm", "none", [["id", "addNewProjButton"]], "none");

    //------------Project title
    const inputDiv1 = createElement("div", "inputDiv", "none", "none", "none");
    const inputTitle = createElement("input", "none", "none", [["type", "text"],["id", "inputTitle"]], "none");
    const titleLabel = createElement("label", "none", "Project title", [["for", "inputTitle"]], "none");
    inputDiv1.appendChild(titleLabel);
    inputDiv1.appendChild(inputTitle);
    newProjForm.appendChild(inputDiv1);
    //--------------------------

    //------------Project Color
    const inputDiv2 = createElement("div", "inputDiv", "none", "none", "none");
    const inputColor = createElement("input", "none", "none", [["type", "color"],["id", "inputColor"]], "none");
    const colorLabel = createElement("label", "none", "Project color", [["for", "inputColor"]], "none");
    inputDiv2.appendChild(colorLabel);
    inputDiv2.appendChild(inputColor);
    newProjForm.appendChild(inputDiv2);
    //-------------------------

    //------------Project Priority
    const inputDiv3 = createElement("div", "inputDiv", "none", "none", "none");
    const inputPrio = createElement("select", "none", "none", [["id", "inputPrio"]], "none");
    const lowPrio = createElement("option", "none", "Low priority", [["value", "Low"]], "none");
    const midPrio = createElement("option", "none", "Medium priority", [["value", "Medium"]], "none");
    const highPrio = createElement("option", "none", "High priority", [["value", "High"]], "none");
    inputPrio.appendChild(lowPrio);
    inputPrio.appendChild(midPrio);
    inputPrio.appendChild(highPrio);
    const prioLabel = createElement("label", "none", "Project Priority", [["for", "inputPrio"]], "none");
    inputDiv3.appendChild(prioLabel);
    inputDiv3.appendChild(inputPrio);
    newProjForm.appendChild(inputDiv3);
    //------------

    
    const submitButton = createElement("input", "none", "none", [["type", "submit"], ["value", "Create New Project"]], "none");
    newProjForm.appendChild(submitButton);
    newProjDiv.appendChild(newProjForm);
    document.body.appendChild(newProjDiv);
}



//function to take project and use it to populate the tasks
function populateTasks(projectObj){
    const projectbuttons = document.querySelectorAll(".projectButton")


    projectbuttons.forEach(projectButton => {
        projectButton.classList.remove("selected")
        if (projectButton.innerHTML === projectObj.getTitle()){
            projectButton.classList.add("selected");
        }
    });

    const cardGrid = document.querySelector(".cardGrid");
    const listOfTasks = projectObj.getTasks();
    cardGrid.innerHTML = "";
    
    for (let i = 0 ; i < listOfTasks.length ; i++){
        const task = listOfTasks[i];
        const taskCard = document.createElement("div");
        taskCard.classList.add("taskCard")

        const taskCardTopDiv = document.createElement("div");
        taskCardTopDiv.classList.add("topDivTask");

        const topDivImage = document.createElement("img");
        topDivImage.classList.add("topDivImage")
        topDivImage.src = userLogo;

        const taskTitle = document.createElement("h3");
        taskTitle.textContent = task.getTitle();

        taskCardTopDiv.appendChild(topDivImage);
        taskCardTopDiv.appendChild(taskTitle);
        taskCard.appendChild(taskCardTopDiv);

        const taskDescription = document.createElement("p");
        taskDescription.textContent = task.getDesc();
        taskCard.appendChild(taskDescription);

        const taskCardBotDiv = document.createElement("div");
        taskCardBotDiv.classList.add("botDivTask");
        
        const taskDate = document.createElement("p");
        taskDate.textContent = task.getDueDate();
        taskCardBotDiv.appendChild(taskDate);

        const taskPriority = document.createElement("p");
        taskPriority.textContent = task.getPriority();
        taskCardBotDiv.appendChild(taskPriority);

        taskCard.appendChild(taskCardBotDiv);
        cardGrid.appendChild(taskCard);
        
    }

}