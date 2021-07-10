let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);


tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();

      console.log(e.target)
  
      let tabName = this.getAttribute("href");
  
      let tabContents = document.querySelector("#tab-contents");
        
      for (let i = 0; i < tabContents.children.length; i++) {
        
        tabTogglers[i].classList.remove("opacity-50");
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("hidden"); 
      }
      e.target.classList.remove("opacity-50");
    });
  });
  
  document.getElementById("default-tab").click();