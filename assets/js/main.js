function expandSideNav(){
    const projectBtn = document.getElementById("projectsBtn_side")
    const projectsList = document.getElementById("sidebarCollapseList")
    if (projectsList.className !== "overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0"){
        projectsList.className = "overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0"
        projectsList.style.maxHeight = "148px";
    }
    else {
        projectsList.className = "hidden"
    }
}

function init() {
    'use strict';

    // Add event listeners to buttons
    document.getElementById("projectsBtn_side").addEventListener("click", (event) =>{
        expandSideNav();
    });
}

window.onload= init;