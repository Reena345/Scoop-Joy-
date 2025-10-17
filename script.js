 const menuToggle = document.querySelector(".menu-toggle");
      const navList = document.querySelector(".nav-list");
      const navIcons = document.querySelector(".nav-icons");

      menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
        navIcons.classList.toggle("active");
        menuToggle.classList.toggle("fa-xmark"); 
      });