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

    const projectButton = document.createElement("button");
    projectButton.classList.add("projectButton");
    projectButton.textContent = "All"

    projectDiv.appendChild(projectButton);
    nav.appendChild(projectDiv);
    
    document.body.appendChild(header);
    document.body.appendChild(nav);
    //------------------------
};

//function to populate projectsDiv

export function populateProjectsDiv(listOfProjects){
    const projectsDiv = document.querySelector(".projectsDiv");
    listOfProjects.forEach(project => {
        const projectButton = document.createElement("button");
        projectButton.classList.add("projectButton");
        projectButton.textContent = project.getTitle();
        projectsDiv.appendChild(projectButton);
    });
}

//function to take project and use it to populate the tasks