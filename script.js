const nav = document.querySelector('nav');
const firstSep = document.querySelector('.sep.fixed');

// event scroll down
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0){
        nav.style.backgroundColor = 'white';
        nav.style.position = 'fixed';
        nav.style.top = '0';
        // if size windows < 768px
        if(window.innerWidth > 768){
            firstSep.style.display = 'flex';
        }
    }
    else{
        //nav.style.position = 'relative';
        nav.style.backgroundColor = 'transparent';
        firstSep.style.display = 'none';
    }
    // console.log(window.pageYOffset);
});

const OS = ["Avalian", "America Servicios", "Caja forense", "CIMESA", "Conferencia episcopal argentina", "DASUTEN", "DAMSU", "Docthos", "Federada Salud", "Galeno", "Gerdanna Salud", "HOPE", "Jerarquicos Salud", "Luis Pasteur", "Medicus", "OPDEA", "OSDIPP", "OSJERA", "OSPIL", "OSPJN", "OSSACRA", "OSTV", "OSAPM", "OSSEG", "Policia Federal", "Prevencion Salud", "Swiss Medical", "Sancor Salud", "SCIS", "SADAIC", "Unimed"];

let OSlist = "<ul>";

for(let i=0;i<OS.length;i++){
    OSlist += `<li>${OS[i]}</li>`;
}
OSlist += "</ul>";

const OSlistButton = document.querySelector('.obra-social');

const OSlistHTML = document.querySelector('.lista');

OSlistButton.addEventListener('click', (e) => {
        if(OSlistHTML.innerHTML == ""){
            OSlistHTML.innerHTML = OSlist;
            OSlistHTML.style.overflowY = "scroll";
            if(window.innerWidth > 800){
                OSlistHTML.style.height = "20rem";
            }
            else{
                OSlistHTML.style.height = "10rem";
            }            

            console.log(OSlistButton.offsetWidth);

            OSlistButton.style.borderRadius = "2.5rem";
        }
        else{
            OSlistHTML.innerHTML = "";
            OSlistHTML.style.overflow = "hidden";
            OSlistHTML.style.height = "0";

            OSlistButton.style.borderRadius = "5rem";
        }
});

const search = document.querySelector('#search');

search.addEventListener("keyup", (e) => {
    let results = "<ul>";
    for(let i=0;i<OS.length;i++){
        if(OS[i].toLowerCase().includes(search.value.toLowerCase())){
            results += `<li>${OS[i]}</li>`;
        }
    }
    results += "</ul>";
    OSlistHTML.innerHTML = results;
    OSlistHTML.style.overflowY = "scroll";
    if(window.innerWidth > 800){
        OSlistHTML.style.height = "20rem";
    }
    else{
        OSlistHTML.style.height = "10rem";
    } 

    console.log(OSlistButton.offsetWidth);

    OSlistButton.style.borderRadius = "2.5rem";
} );