import usthbimg from './images/usthb.png';
import psnlogo from './images/icons8-playstation-48.png';
import R6logo from './images/icons8-rainbow-six-siege-50.png';

export default function intrest_component() {
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
    li_intrest.style="background-color: rgb(50, 50, 50); border-radius: 5px;";
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
    bandH.textContent="CENTRE D'INTERET";
    band.appendChild(bandH);
    content.appendChild(band);
    
    let intrest_container = document.createElement('div');
    intrest_container.className='intrest-container';

    content.append(intrest_container);

    let echecs=document.createElement('div');
    echecs.className='echecs';
    intrest_container.append(echecs);
    let echecsh1=document.createElement('h1');
    echecsh1.textContent="Jeu d'echecs";
    let echecsp1=document.createElement('p');
    echecsp1.textContent="  J'ai decouvert ce jeu magnifique pendant le confinement en 2020 et depuis je suis un passionne, j'ai un elo de 1800 en rapide et 1600 en blitz."
    let echecsp2=document.createElement('p');
    echecsp2.textContent=" clickez sur l'icon pour voir mon profil:"
    let chesslink=document.createElement('a');
    chesslink.href='https://www.chess.com/member/rafikbouloudene';
    let chessimg=new Image();
    chessimg.src='https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png';
    chesslink.append(chessimg);
    echecsp2.append(chesslink);
    echecs.append(echecsh1,echecsp1,echecsp2);
   
    let sport=document.createElement('div');
    sport.className='sport';
    intrest_container.append(sport);
    let sporth1=document.createElement('h1');
    sporth1.textContent="Sport";
    let sportp1=document.createElement('p');
    sportp1.textContent="Comme tous jeunes algeriens le sport fait partie de mon education particulierement le football lequel j'ai pratique pendant mon enfance et occasionalement aujourd'hui, mais aussi le tennis, le handball jusqu'a la formula 1.";
    sport.append(sporth1,sportp1);

    let gaming=document.createElement('div');
    gaming.className='gaming';
    intrest_container.append(gaming);
    let gamingh1=document.createElement('h1');
    gamingh1.textContent="Gaming";
    let gamingp1=document.createElement('p');
    gamingp1.textContent="  Les jeux videos prennent une grands partie de ma vie quotidienne est ceci depuis mon enfance, a l'age de 4 ans j'ai eu ma premiere console PS1 et depuis ce jour la je suis devenu un adept des consoles playstation."
    let gamingp2=document.createElement('p');
    gamingp2.textContent="                concernant les types de jeux les fps est mon type préferé d'ailleurs le jeu dont j'ai passé le plus de temps a le jouer est Rainbow six siege avec plus de 1400 heures joué. Voici quelques liens::"
    let psnlink=document.createElement('a');
    psnlink.href='https://psnprofiles.com/Rafik1200';
    let psnimg=new Image();
    psnimg.src=psnlogo;
    psnlink.append(psnimg);

    let R6link=document.createElement('a');
    R6link.href='https://tabstats.com/siege/player/rafik1200/489fc7b1-d67c-462e-a88b-d00af146eaf5';
    let R6img=new Image();
    R6img.src=R6logo;
    R6link.append(R6img);
    gaming.append(gamingh1,gamingp1,gamingp2,psnlink,R6link);
}