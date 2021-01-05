import Section from './Section.js';
import NavItem from './NavItem.js';
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// the content landing function.
(function(){
    const
        // Section Instance.
        section = new Section(),
        // NavItem Instance.
        navItem = new NavItem();
    let sectionsLength = +prompt(
        'How many sections would you like?!\nMax length must be 9 not to damage the design :)',
        '9'
    );
    sectionsLength = (!sectionsLength || sectionsLength>9)? 4: sectionsLength;
	for (let i = 0; i < sectionsLength; i++) {
        section.append();
	}
    navItem.append();
}());