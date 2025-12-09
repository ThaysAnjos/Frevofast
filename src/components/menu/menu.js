import { menuButton_Icon, menu_Content } from "./_menuTemplate.js";

export default class Menu {
   constructor() {
      this.isOpen = false;
      this.menuButton = document.getElementById("menu-button");
      this.menuContainer = null;

      if (this.isProgramacaoPage()) {
         this.init();
      }
   }

   isProgramacaoPage() {
      const currentPath = window.location.pathname;
      return currentPath.includes("programacao.html") || 
             currentPath.includes("../../public/pages/programacao.html");
   }

   init() {
      console.log("Menu inicializado para Loja");
      this.createMenuModal();
      this.setupEvents();
   }

   createMenuModal() {
      this.menuButton.innerHTML = menuButton_Icon();
      
      this.menuContainer = document.createElement("div");
      this.menuContainer.className = "menu-modal hidden";
      this.menuContainer.innerHTML = menu_Content();
      
      document.body.insertAdjacentElement("afterbegin", this.menuContainer);
   }

   updateMenuState() {
      const isActive = this.isOpen;
      
      this.menuContainer.classList.toggle('active', isActive);
      this.menuContainer.classList.toggle('hidden', !isActive);
      
      console.log(`Menu ${isActive ? 'aberto' : 'fechado'}`);
   }

   toggleMenu() {
      this.isOpen = !this.isOpen;
      this.updateMenuState();
   }

   setupEvents() {
      this.menuButton.addEventListener("click", () => {
         this.toggleMenu();
      });
   }
}