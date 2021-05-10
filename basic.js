
function openAppear(){
    var topTexts = document.querySelector('.box');
    topTexts.classList.toggle('introAppear');
};
window.addEventListener('load', openAppear);


window.addEventListener('open', openAppear);

// DROPDOWN
$(document).ready(function(){
	$(".nav_item:nth-child(2)").click(function(){
        if($(".dropdown").hasClass("showDrop")){
            $(".dropdown").removeClass("showDrop");
        }
        else{
            $(".dropdown").addClass("showDrop");
        }
	});
});

//LANG SWITCH
const wrapper = document.querySelector('wrapper_column');
const toggle = document.querySelector('.slider round');

function switchLanguage(){
    const content = document.querySelector('.order_column');
    concole.log(content);
    content.classList.toggl('en');
}
//BUTTON LINK
function openLinkUI(){
    window.open('uiux.html', "_self");
}
function openLinkDesign(){
    window.open('webdesign.html', "_self");
}

function openLinkProfile(){
    window.open('https://drive.google.com/file/d/1T-s3jugioTHDyfM3OBcbbj2kgFmMy5Lm/view?usp=sharing', "_blank");
}
function openLinkWeb1(){
    window.open('https://drive.google.com/file/d/13AtEvto4DYzf6PCz6iRAt23exrEUBwKJ/view?usp=sharing', "_blank");
}
function openLinkWeb2(){
    window.open('https://drive.google.com/file/d/1XRzSkXzKX6HH8U3I-BnYUpnOA06PpMDb/view?usp=sharing', "_blank");
}
function openLinkApp1(){
    window.open('https://drive.google.com/file/d/1nccmrWpnqWnZ6noaACgt2wTbh0tZpak2/view?usp=sharing', "_blank");
}
function openLinkApp2(){
    window.open('https://drive.google.com/file/d/1GmX1F2VuJ5xw7O4BD_y4_GLy8VCvIEix/view?usp=sharing', "_blank");
}

