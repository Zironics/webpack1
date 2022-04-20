import usthbimg from './images/usthb.png'
import csslogo from './images/csslogo.png';
import jslogo from './images/jslogo.png';
import Clogo from './images/logo_C.png';
import javalogo from './images/logojava.png';

export default function competence_component(){
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
    li_comp.style="background-color: rgb(50, 50, 50); border-radius: 5px;";
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
    bandH.textContent='COMPETENCE';
    band.appendChild(bandH);
    content.appendChild(band);

    let content_container = document.createElement('div');
    content_container.className='content-container';
    content.append(content_container);

    let grid = document.createElement('div');
    grid.className='grid-container';
    let card1 = document.createElement("div");
    card1.className='card';

    grid.append(card1);
    content_container.append(grid);

    let card1_image_container = document.createElement('div');
    card1_image_container.className='card-image-container';
    let card1_img=new Image();
    card1_img.src=csslogo;
    card1_image_container.append(card1_img);

    let card1h3=document.createElement('h3');
    card1h3.textContent='CSS';
    let barometre1=document.createElement('div');
    barometre1.className='baro-metre';
    let baro1_div = document.createElement('div');
    baro1_div.setAttribute('style','width:80%');
    let baro1_div_div=document.createElement('div');
    baro1_div.append(baro1_div_div);
    barometre1.append(baro1_div);
    card1.append(card1_image_container,card1h3,barometre1);


    let card2 = document.createElement("div");
    card2.className='card';

    let card2_image_container = document.createElement('div');
    card2_image_container.className='card-image-container';
    let card2_img=new Image();
    card2_img.src=jslogo;
    card2_image_container.append(card2_img);

    let card2h3=document.createElement('h3');
    card2h3.textContent='JavaScript';
    let barometre2=document.createElement('div');
    barometre2.className='baro-metre';
    let baro2_div = document.createElement('div');
    baro2_div.setAttribute('style','width:60%');
    let baro2_div_div=document.createElement('div');
    baro2_div.append(baro2_div_div);
    barometre2.append(baro2_div);
    card2.append(card2_image_container,card2h3,barometre2);


     let card3 = document.createElement("div");
    card3.className='card';

    let card3_image_container = document.createElement('div');
    card3_image_container.className='card-image-container';
    let card3_img=new Image();
    card3_img.src=Clogo;
    card3_image_container.append(card3_img);

    let card3h3=document.createElement('h3');
    card3h3.textContent='C';
    let barometre3=document.createElement('div');
    barometre3.className='baro-metre';
    let baro3_div = document.createElement('div');
    baro3_div.setAttribute('style','width:85%');
    let baro3_div_div=document.createElement('div');
    baro3_div.append(baro3_div_div);
    barometre3.append(baro3_div);
    card3.append(card3_image_container,card3h3,barometre3);


    let card4 = document.createElement("div");
    card4.className='card';

    let card4_image_container = document.createElement('div');
    card4_image_container.className='card-image-container';
    let card4_img=new Image();
    card4_img.src=javalogo;
    card4_image_container.append(card4_img);

    let card4h3=document.createElement('h3');
    card4h3.textContent='Java';
    let barometre4=document.createElement('div');
    barometre4.className='baro-metre';
    let baro4_div = document.createElement('div');
    baro4_div.setAttribute('style','width:70%');
    let baro4_div_div=document.createElement('div');
    baro4_div.append(baro4_div_div);
    barometre4.append(baro4_div);
    card4.append(card4_image_container,card4h3,barometre4);

    grid.append(card2,card3,card4);
}