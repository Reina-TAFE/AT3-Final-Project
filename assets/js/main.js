function expandSideNav(){
    const projectBtn = document.getElementById("projectsBtn_side")
    const projectsList = document.getElementById("sidebarCollapseList")
    if (projectsList.className !== "dropdown-content flex flex-col gap-0.5 p-[2px] space-y-1 bg-[#271D4B]"){
        projectsList.className = "dropdown-content flex flex-col gap-0.5 p-[2px] space-y-1 bg-[#271D4B]"
    }
    else {
        projectsList.className = "dropdown-content hidden p-[2px] space-y-1 bg-[#271D4B]"
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