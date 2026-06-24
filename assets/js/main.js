// import {toggleSideNav, expandSideNav} from './utils';

function addError(message)
{
    const errorMag = document.getElementById('error_msg');
    if (errorMag.className === "hidden text-red-600 font-medium!")
    {
        errorMag.textContent = message;
        errorMag.className = "text-red-600 font-medium!";
    }
}

function removeError()
{
    const errorMag = document.getElementById('error_msg');
    if (errorMag.className !== "hidden text-red-600 font-medium!")
    {
        errorMag.textContent = "Valid";
        errorMag.className = "hidden text-red-600 font-medium!";
    }
}

function validateForm(e) {
    'use strict';
    // Get the event object:

    // Get form references:
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    // Flag variable:
    let error = false;
    let errorMessage = "X Invalid ";

    // Validate the first name:
    if (/^\p{L}+([\s'-]\p{L}+)*$/u.test(name.value)) {

    } else {
        error = true;
        if (errorMessage === "X Invalid ")
        {
            errorMessage += "Name";
        }
        else
        {
            errorMessage += ", Name";
        }
    }

    // Validate the email address:
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
    } else {
        error = true;
        if (errorMessage === "X Invalid ")
        {
            errorMessage += "Email";
        }
        else
        {
            errorMessage += ", Email";
        }

    }
    // Validate the message:
    if (message.value.length > 0) {

    } else {
        error = true;
        if (errorMessage === "X Invalid ")
        {
            errorMessage += "Message";
        }
        else
        {
            errorMessage += ", Message";
        }
    }

    // If an error occurred, prevent the default behavior:
    if (error) {
        // Prevent the form's submission:
        e.preventDefault();
        addError(errorMessage);
        return false;
    }
    else
    {
        removeError();
    }
}

function toggleSideNav(){
    const asideTitle = document.getElementById("aside_title");
    const hideBtn = document.getElementById("collapse-btn");
    const asideNav = document.getElementById("aside_nav");
    const sidePanel = document.getElementById("side_panel");
    if (sidePanel.className === "row-2 col-0 w-64 bg-[#271D4B] text-white transition-all duration-300 border\n"+
        "shadow-sm border-slate-200 shadow-slate-950/5 flex flex-col"){
        asideNav.className = "hidden";
        asideTitle.className = "hidden";
        hideBtn.className = "m-2! p-1 rounded-md! !bg-[#E25600] hover:bg-gray-700 focus:outline-none self-baseline!";
        sidePanel.className = "block w-[auto] h-[auto] bg-none";
    }
    else {
        asideNav.className = "mt-5 px-2";
        asideTitle.className = "font-inconsolata antialiased text-left! text-[24px] font-semibold text-white underline! py-4! pl-3!";
        hideBtn.className = "m-2! p-1 h-8 w-8 rounded-md! !bg-[#E25600] hover:bg-gray-700 focus:outline-none self-baseline!";
        sidePanel.className = "row-2 col-0 w-64 bg-[#271D4B] text-white transition-all duration-300 border\n" +
            "shadow-sm border-slate-200 shadow-slate-950/5 flex flex-col";
    }
}

function expandSideNav(){
    const projectsList = document.getElementById("sidebarCollapseList");
    if (projectsList.className !== "dropdown-content flex flex-col w-[90%]! pt-0.75! px-2! gap-0.5! justify-self-end bg-[#271D4B]"){
        projectsList.className = "dropdown-content flex flex-col w-[90%]! pt-0.75! px-2! gap-0.5! justify-self-end bg-[#271D4B]";
    }
    else {
        projectsList.className = "dropdown-content hidden w-[90%]! pt-0.75! px-2! gap-0.5! justify-self-end bg-[#271D4B]";
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

    if(document.getElementById("contact_form"))
    {
        document.getElementById("contact_form").addEventListener("submit", function (e) {
            validateForm(e);
        });
    }
}

window.onload = init;