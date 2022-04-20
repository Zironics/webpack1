import usthbimg from './images/usthb.png';
import cvImage from './images/cvImageportrait.jpeg';
import facebooklogo from './images/icons8-facebook-50.png';
import instagramlogo from './images/icons8-instagram-50.png';
import linkedinlogo from './images/icons8-linkedin-50.png';
import githublogo from './images/icons8-github-48.png';

export default function resume_component() {
    let content=document.querySelector("#content");

    let nav = document.createElement('nav');
    let img_container= document.createElement('div');
    img_container.classList.add("image-container");
    let usthb_link = document.createElement('a');
    usthb_link.setAttribute('href',"https://www.usthb.dz/fr");
    let usthb_image = new Image();
    usthb_image.src=usthbimg;
    usthb_image.title="USTHB";

    usthb_link.appendChild(usthb_image);
    img_container.appendChild(usthb_link);

    let links = document.createElement('ul');
    links.className='links';
    let li_resume = document.createElement('li');
    li_resume.id='resume'; li_resume.className='underline'; 
    li_resume.style="background-color: rgb(50, 50, 50); border-radius: 5px;";
    let a_resume=document.createElement('a');
    a_resume.setAttribute('class','resumeLink');
    a_resume.textContent="Resume"
    li_resume.appendChild(a_resume);

    let li_comp = document.createElement('li');
    li_comp.id='comp'; 
    let a_comp=document.createElement('a');
    a_comp.setAttribute('class','compLink');
    a_comp.textContent="Competences";
    li_comp.appendChild(a_comp);
    
    let li_intrest = document.createElement('li');
    li_intrest.id='interet'; 
    let a_intrest=document.createElement('a');
    a_intrest.setAttribute('class','intrestLink');
    a_intrest.textContent="Centres d'interet";
    li_intrest.appendChild(a_intrest);

    links.append(li_resume,li_comp,li_intrest);
    
    let burger = document.createElement('div');
    burger.className='burger';
    let line1 = document.createElement('div');
    line1.className='line-1';
    let line2 = document.createElement('div');
    line1.className='line-2';
    let line3 = document.createElement('div');
    line1.className='line-3';

    burger.append(line1,line2,line3);

    nav.append(img_container,links,burger);
    
    content.appendChild(nav);

    let forAnimation = document.createElement('div');
    forAnimation.className='for-animation';
    let mobilenav=document.createElement('div');
    mobilenav.className='mobile-nav';
    let resumeLink = document.createElement('a');
    resumeLink.className='resumeLink'; resumeLink.text='Resume';
    let compLink = document.createElement('a');
    compLink.className='compLink'; compLink.text='comp';
    let intrestLink = document.createElement('a');
    intrestLink.className='intrestLink'; intrestLink.text='intrest';
     
    mobilenav.append(resumeLink,compLink,intrestLink);
    forAnimation.append(mobilenav);

    content.appendChild(forAnimation);

    let band=document.createElement('div');
    band.className='band';
    let bandH=document.createElement('h1');
    bandH.textContent='RESUME';
    band.appendChild(bandH);
    content.appendChild(band);
    
    let content_container = document.createElement('div');
    content_container.className='content-container';
    content_container.setAttribute('style','padding: 0px');
    let resume_content=document.createElement('div');
    resume_content.className='resume-content';
    let banner = document.createElement('div');
    banner.className='banner';
    
    let pfp_container=document.createElement('div');
    pfp_container.className='pfp-container';
    let pfp= new Image();
    pfp.src=cvImage;
    pfp_container.appendChild(pfp);

    let about = document.createElement('div');
    about.className='about';
    let aboutH4=document.createElement('h4');
    aboutH4.textContent='BONJOUR, JE SUIS';
    let abouth3=document.createElement("h3");
    abouth3.textContent='RAFIK BOULOUDENE';
    let abouth4=document.createElement('h4');
    abouth4.textContent='ETUDIANT UNIVERSITAIRE';
    let aboutp=document.createElement('p');
    aboutp.textContent="Je suis un etudiant a L'USTHB en L2 specialite ISIL, actuellement j'explore les possibilites que ce domain offre comme le developement d'application web et mobile, et un interet grandissant pour la data science.";
    let aboutul=document.createElement('ul');
    aboutul.className='list basic-info';
    let calendar=document.createElement("li");
    calendar.className='calendar';
    calendar.textContent='1er Novembre, 2002';
    let phone=document.createElement('li');
    phone.className='phone';
    phone.textContent='0552925849';
    let mail=document.createElement('li');
    mail.className='mail';
    mail.textContent='rafikobouloudene@gmail.com';
    
    aboutul.append(calendar,phone,mail);

    let socials=document.createElement('div');
    socials.className='socials';
    let facebook =document.createElement("a");
    facebook.href='#';
    let facebook_img= new Image();
    facebook_img.src=facebooklogo;
    facebook.append(facebook_img);

    let instagram =document.createElement("a");
    instagram.href='#';
    let instagram_img= new Image();
    instagram_img.src=instagramlogo;
    instagram.append(instagram_img);

    let linkedin =document.createElement("a");
    linkedin.href='#';
    let linkedin_img= new Image();
    linkedin_img.src=linkedinlogo;
    linkedin.append(linkedin_img);

    let github =document.createElement("a");
    github.href='#';
    let github_img= new Image();
    github_img.src=githublogo;
    github.append(github_img);

    socials.append(facebook,instagram,linkedin,github);
    about.append(aboutH4,abouth3,abouth4,aboutp,aboutul,socials);

    banner.append(pfp_container,about);
    resume_content.append(banner);
    content_container.append(resume_content);
    content.append(content_container);
}
