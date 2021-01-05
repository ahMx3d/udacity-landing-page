import {activateView} from './_helpers.js';

export default class NavItem {
    // Private Member: Items parent.
    #_itemParent = document.getElementById('navbar__list');
    // Private Method: Items create according to the sections number.
    #create =(section)=>{
        return (
            `<li>
                <a
                    class           = "menu__link"
                    href            = "${section.id}"
                    data-section-id = "${section.id}">${section.dataset.nav}</a>
            </li>`
        );
    }
    // Private Method: Items find its section according to the sections number.
    #findSection = ()=>{
        // Add the bubbling event listener to the items parent.
        this.#_itemParent.addEventListener('click', event=>{
            // Prevent the link default behavior.
            event.preventDefault();
            // Select the target section according the dataset sectionId and smoothly scroll to its center.
            document.getElementById(
                event.target.dataset.sectionId
            ).scrollIntoView({
                behavior: "smooth",
                block   : "start"
            }, false);
            // Add active classes for both anchor and section
            activateView(event.target.dataset.sectionId);
        });
    }
    // Public Method: Items append to the document.
    append = ()=>{
        // Sections list.
        const pageSections = document.querySelectorAll('section');
        // Map the nav links before the end of their nav list parent element.
        pageSections.forEach(section=>{
            this.#_itemParent.insertAdjacentHTML(
                'beforeend',
                this.#create(section)
            );
        });
        // Find the appropriate section.
        this.#findSection();
    }
}