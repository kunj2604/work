function MenuBarClick() { 
    document.querySelector(".menu-bar").onclick = function() { 
        el = document.querySelector(".right-nav");
        nav = document.querySelector(".nav");
        if (el.style.display == "flex") 
            {
                el.style.display = "none";
                nav.style.paddingTop = "0";
            }
        else{
            el.style.display = "flex";
            el.style.flexDirection = "column";
            nav.style.paddingTop = "1rem";

        } 
    } 
} 

