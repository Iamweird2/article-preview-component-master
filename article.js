let button = document.querySelectorAll(".share-button");

let info = document.querySelector(".info");

let infoTooltip = document.querySelector(".info-tooltip");

let desktopTooltip = document.querySelector(".desktop-tooltip");



button.forEach((element) => {
    element.addEventListener("click", () => {
        if(window.innerWidth < 700){
            info.classList.toggle("info-closed");
    
            infoTooltip.classList.toggle("info-tooltip-active");    
        }else{
            desktopTooltip.classList.toggle("desktop-tooltip-active");
            
        }
        
    })
})