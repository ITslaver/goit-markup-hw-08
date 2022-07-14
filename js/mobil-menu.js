(() => {
    const refs = {
      openMenuBtn: document.querySelector('.menu-open-btn'),
      closeMenuBtn: document.querySelector('.close-open-btn'),
      menu: document.querySelector('.mob-menu'),
      body: document.querySelector('body'),
    };
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();

// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");
//     const bodyRef = document.querySelector("[data-menu-body]");

//     menuBtnRef.addEventListener("click", () => {
//     const expanded =
//         menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//     bodyRef.classList.toggle("mobile-menu-open");
//     });
// })();