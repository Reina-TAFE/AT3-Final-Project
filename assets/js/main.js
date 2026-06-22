
function toggleSideNav(){
    const asideTitle = document.getElementById("aside_title")
    const hideBtn = document.getElementById("collapse-btn")
    const asideNav = document.getElementById("aside_nav")
    const sidePanel = document.getElementById("side_panel")
    if (sidePanel.className === "row-2 col-0 w-64 bg-[#271D4B] text-white transition-all duration-300 border shadow-sm border-slate-200 shadow-slate-950/5\n" +
        "flex flex-col"){
        asideNav.className = "hidden"
        asideTitle.className = "hidden"
        hideBtn.className = "p-1 rounded-md !bg-[#E25600] hover:bg-gray-700 focus:outline-none"
        sidePanel.className = "block w-[auto] h-[auto] bg-none"
    }
    else {
        asideNav.className = "mt-5 px-2"
        asideTitle.className = "font-sans antialiased text-base font-semibold text-white"
        hideBtn.className = "p-1 h-8 w-8 rounded-md !bg-[#E25600] hover:bg-gray-700 focus:outline-none"
        sidePanel.className = "row-2 col-0 w-64 bg-[#271D4B] text-white transition-all duration-300 border shadow-sm border-slate-200 shadow-slate-950/5\n" +
            "flex flex-col"
    }
}

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

    document.getElementById("collapse-btn").addEventListener("click", (event) =>{
        toggleSideNav();
    });
}

window.onload= init;