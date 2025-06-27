import { createProject } from "./projectModule";
import todoLogo from "./to-do-logo.jpg"
import userLogo from "./user-logo.png"

export function createDOM(){
    //header ----
    const header = document.createElement("header");
    header.classList.add("header")

    const logoImage = document.createElement("img");
    logoImage.classList.add("logo")
    logoImage.src = todoLogo;

    const accountImage = document.createElement("img");
    accountImage.classList.add("accImage")
    accountImage.src = userLogo;

    header.appendChild(logoImage)
    header.appendChild(accountImage)
    //------------

    //-nav-------------------
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const projectHeader = document.createElement("h1");
    projectHeader.textContent = "Projects:";
    projectHeader.classList.add("projectHeader");
    nav.appendChild(projectHeader)

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectsDiv");
    nav.appendChild(projectDiv);

    const addProjButton = document.createElement("button");
    addProjButton.textContent = "Add New Project";
    addProjButton.addEventListener("click", ()=> addNewProjectDOM());
    addProjButton.classList.add("addProjButton")

    nav.appendChild(addProjButton);
    
    document.body.appendChild(header);
    document.body.appendChild(nav);
    //------------------------

    //card div ----

    const cardGrid = document.createElement("div");
    cardGrid.classList.add("cardGrid");

    document.body.appendChild(cardGrid);


    //--------------
};

//function to populate projectsDiv and all tasks into the grid (need to add the grid dom element + add task button, programm later)

export function populateDOM(listOfProjects){
    const projectsDiv = document.querySelector(".projectsDiv");
    //this loop takes in each project and puts it on the project div, it also highlights the all button on the first launch
    listOfProjects.forEach(project => {
        const projectButton = document.createElement("button");
        projectButton.classList.add("projectButton");

        projectButton.addEventListener("click", () => populateTasks(project))
        
        /*if (project.getTitle() === "All"){
            projectButton.classList.add("selected");
            populateTasks(project);
        }*/
        projectButton.textContent = project.getTitle();
        projectsDiv.appendChild(projectButton);
    });

}


//function to add a new project
function addNewProjectDOM(){
        const nav = document.querySelector(".nav");
    nav.classList.toggle("hidden")

    const cardgrid = document.querySelector(".cardGrid");
    cardgrid.classList.toggle("hidden")
    
    const newProjDiv = document.createElement("div");
    newProjDiv.classList.add("newProjDiv")

    const newProjForm = document.createElement("form");
    newProjForm.classList.add("newProjForm")
    //------------
    const inputDiv1 = document.createElement("div");
    inputDiv1.classList.add("inputDiv")

    const inputTitle = document.createElement("input")
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("id", "inputTitle");

    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Project title";
    titleLabel.setAttribute("for", "inputTitle");

    inputDiv1.appendChild(titleLabel);
    inputDiv1.appendChild(inputTitle);
    newProjForm.appendChild(inputDiv1);
    //------------

    //------------
    const inputDiv2 = document.createElement("div");
    inputDiv2.classList.add("inputDiv")

    const inputColor = document.createElement("input")
    inputColor.setAttribute("type", "color");
    inputColor.setAttribute("id", "inputColor");

    const colorLabel = document.createElement("label")
    colorLabel.textContent = "Project Color";
    colorLabel.setAttribute("for", "inputColor");

    inputDiv2.appendChild(colorLabel);
    inputDiv2.appendChild(inputColor);
    newProjForm.appendChild(inputDiv2);
    //------------

    //------------
    const inputDiv3 = document.createElement("div");
    inputDiv3.classList.add("inputDiv")

    const inputPrio = document.createElement("select")
    inputPrio.setAttribute("id", "inputPrio");

    const lowPrio = document.createElement("option")
    lowPrio.textContent = "Low priority";
    lowPrio.value = "low"

    const midPrio = document.createElement("option")
    midPrio.textContent = "Medium priority";
    midPrio.value = "mid"

    const highPrio = document.createElement("option")
    highPrio.textContent = "High priority";
    highPrio.value = "high"

    inputPrio.appendChild(lowPrio);
    inputPrio.appendChild(midPrio);
    inputPrio.appendChild(highPrio);



    const prioLabel = document.createElement("label")
    prioLabel.textContent = "Project Priority";
    prioLabel.setAttribute("for", "inputPrio");

    inputDiv3.appendChild(prioLabel);
    inputDiv3.appendChild(inputPrio);
    newProjForm.appendChild(inputDiv3);
    //------------

    const submitButton = document.createElement("input")
    
    submitButton.setAttribute("type", "submit");
    submitButton.value = "Create New Project";
    newProjForm.id = "addNewProjButton";
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