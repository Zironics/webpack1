import './style.css';
import resume_component from './resume.js';
import competence_component from './competence.js';
import intrest_component from './intrest.js';


let compLink;
let resumeLink;
let intrestLink;

function selectLinks() {
    compLink=document.querySelector('.compLink');
    resumeLink=document.querySelector('.resumeLink');
    intrestLink=document.querySelector('.intrestLink');
}

function listen(){

    compLink.addEventListener('click',compSelection);
    resumeLink.addEventListener('click',resumeSelection);
    intrestLink.addEventListener('click',intrestSelection);
    
}

function clearContent() {
    let content=document.querySelector("#content");
    content.replaceChildren();
}

function resumeSelection() {
    clearContent();
    resume_component();
    selectLinks();
    listen();
}


function compSelection() {
    clearContent();
    competence_component();
    selectLinks();
    listen();
}

function intrestSelection() {
    clearContent();
    intrest_component();
    selectLinks();
    listen();
}

resumeSelection();
listen();

