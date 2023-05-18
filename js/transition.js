const homeBtn = document.getElementById('navi-home');
homeBtn.addEventListener('click', switchPage, false);
homeBtn.myParam = 'home';

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', switchPage, false);
backBtn.myParam = 'home';

const aboutBtn = document.getElementById('navi-about');
aboutBtn.addEventListener('click', switchPage, false);
aboutBtn.myParam = 'about';

const pubBtn = document.getElementById('navi-publications');
pubBtn.addEventListener('click', switchPage, false);
pubBtn.myParam = 'publication';

const projectsBtn = document.getElementById('navi-projects');
projectsBtn.addEventListener('click', switchPage, false);
projectsBtn.myParam = 'projects';

const cvBtn = document.getElementById('navi-cv');
cvBtn.addEventListener('click', switchPage, false);
cvBtn.myParam = 'cv';

const contactBtn = document.getElementById('navi-contact');
contactBtn.addEventListener('click', switchPage, false);
contactBtn.myParam = 'contact';

const newsArchiveBtn = document.getElementById('news-more');
newsArchiveBtn.addEventListener('click', switchPage, false);
newsArchiveBtn.myParam = 'archive';

const homeDiv = document.getElementById('home');
const aboutDiv = document.getElementById('about');
const pubDiv = document.getElementById('publications');
const projectsDiv = document.getElementById('projects');
const cvDiv = document.getElementById('cv');
const contactDiv = document.getElementById('contact');
const newsArchiveDiv = document.getElementById('newsarchive')

function switchPage (page) {
    if (page.currentTarget.myParam == 'home') {
        console.log('home');
        
        homeDiv.style.display = 'block';
        aboutDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
        // this rough logic works -- 
        // need to add a smooth transition
        
    }

    if (page.currentTarget.myParam == 'about') {
        console.log('about');
        aboutDiv.style.display = 'block';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }
   
    if (page.currentTarget.myParam == 'publication') {
        console.log('pub');
        aboutDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'block';
        projectsDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }

    if (page.currentTarget.myParam == 'projects') {
        console.log('projects');
        aboutDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        projectsDiv.style.display = 'block';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }

    if (page.currentTarget.myParam == 'cv') {
        console.log('cv');
        aboutDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        cvDiv.style.display = 'block';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'none';
    }

    if (page.currentTarget.myParam == 'contact') {
        console.log('contact');
        aboutDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'block';
        newsArchiveDiv.style.display = 'none';
    }
    if (page.currentTarget.myParam == 'archive') {
        console.log('contact');
        aboutDiv.style.display = 'none';
        homeDiv.style.display = 'none';
        pubDiv.style.display = 'none';
        projectsDiv.style.display = 'none';
        cvDiv.style.display = 'none';
        contactDiv.style.display = 'none';
        newsArchiveDiv.style.display = 'block';
    }
}