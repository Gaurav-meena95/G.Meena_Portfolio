let tablinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for (tablink of tablinks ){
        tablink.classList.remove('active-link');
        
    }
    for (tabcont of tabContents ){
        tabcont.classList.remove('active-tab');

    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')

}