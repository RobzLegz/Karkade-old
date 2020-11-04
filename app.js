function toggleMenu(){
    let menu = document.querySelector(".nav-links");
    let menuButton = document.querySelector(".menu-button ");

    menu.classList.toggle("open")

    if(menu.classList.contains("open")){
        menuButton.innerHTML = "close";
    }else{
        menuButton.innerHTML="menu";
    }
  
}
