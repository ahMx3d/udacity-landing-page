export const activateView = id=>{
    // Activate Link.
    activateAnchor(id);
    // Activate Section.
    activateSection(id);
}

// Function toggling the activation class on anchor link.
const activateAnchor = id=>{
    const activeAnchor = document.querySelector('.active__link');
    if(activeAnchor) activeAnchor.className = 'menu__link';
    document.querySelector(`[href="${id}"]`).classList.add('active__link');
}

// Function toggling the activation class on section.
const activateSection = id=>{
    const activeSection = document.querySelector('.your-active-class');
    if(activeSection) activeSection.removeAttribute("class");
    document.querySelector(`#${id}`).classList.add('your-active-class');
}