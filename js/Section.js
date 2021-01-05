export default class Section {
    // Private Member: Sections id would act as a counter.
    #_sectionId     = 0;
    // Private Member: Sections parent which is the only HTML main tag.
    #_sectionParent = document.querySelector('main');
    // Private Method: Sections create.
    #create = ()=>{
        return (
            //  class="your-active-class"
            `<section id="section${this.#_sectionId}" data-nav="Section ${this.#_sectionId}">
                <div class="landing__container">
                    <h2>Section ${this.#_sectionId}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
                    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
                    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
                    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
                    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
                    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
                    semper in tellus. Sed congue et odio sed euismod.</p>

                    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
                        luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
                        porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                </div>
            </section>`
        );
    }
    // Public Method: Section append to the document.
    append = ()=>{
        // Increase the private counter by one each time the method is invoked.
        this.#_sectionId++;
        // Insert the HTML of section content before the end of its document parent.
        this.#_sectionParent.insertAdjacentHTML(
            'beforeend',
            this.#create()
        );
    }
}