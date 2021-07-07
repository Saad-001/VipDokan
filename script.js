const prevIcon = '<i class="fas fa-caret-left"></i>'
const nextIcon = '<i class="fas fa-caret-right"></i>';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },        
        768:{
            items:2
        },
        1024:{
            items:3
        },
        1280:{
            items:4
        }
    }
})

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);


tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();
  
      let tabName = this.getAttribute("href");
  
      let tabContents = document.querySelector("#tab-contents");
  
      for (let i = 0; i < tabContents.children.length; i++) {
        
        tabTogglers[i].classList.remove("btn-background", "text-white");  
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("hidden");
        
      }
      e.target.classList.add("btn-background", "text-white");
    });
  });
  
  document.getElementById("default-tab").click();
  