/**
 * AccordionItem
 * Represents a single row inside the accordion
 * TODO: manage absence of title
 *
 * @author Luca Terrazzan <luca.terraz@gmail.com>
 * @class AccordionItem
 */
class AccordionItem {
    /**
     * Creates an instance of AccordionItem.
     * @param object params
     *
     * @memberof AccordionItem
     */
    constructor(params) {
        // builds all necessary elements
        var content   = this.buildElement(params['content'], 'accordion-content');
        var subtitle  = this.buildElement(params['subtitle'], 'accordion-subtitle');
        var title     = this.buildElement(params['title'], 'accordion-title');
        var box       = this.createMainBox();
        var button    = this.createButton()
        this.main     = this.createMainElement(content, button);
        // content is hidden by default
        content.classList.add('hidden');

        // builds the elements' structure
        this.main.appendChild(box);
        box.appendChild(title);
        // if subtitle is present, append it
        subtitle && box.appendChild(subtitle);
        if (subtitle) {
            // if a subtitle is present, adjust height
            this.main.classList.add('accordion-item-tall');
        } else {
            this.main.classList.add('accordion-item-small');
        }
        box.appendChild(content);
        this.main.appendChild(button);
    }

    /**
     * Returns the accordion item ready to be inserted, much
     * like a builder pattern.
     *
     * @returns AccordionItem
     *
     * @memberof AccordionItem
     */
    getItem() {
        return this.main;
    }

    /**
     * Builds the main container of the accoridon item
     * Also specifies the proper classes for the content and button elements
     * of the accordion item
     *
     * @param element content
     * @param element button
     * @returns element
     *
     * @memberof AccordionItem
     */
    createMainElement(content, button) {
        var main = document.createElement('div');
        main.classList.add('accordion-item');
        main.onclick = function(){
            this.classList.toggle('active');
            content.classList.toggle('hidden');
            button.childNodes[0].classList.toggle('open');
        }
        return main;
    }
    /**
     * Builds the main box element containing all of the
     * text-based elements
     *
     * @returns element
     *
     * @memberof AccordionItem
     */
    createMainBox() {
        var box = document.createElement('div');
        box.classList.add('accordion-item-box');
        return box;
    }
    /**
     * Builds the button element along with necessary content
     * to use the Material Icon
     *
     * @returns element
     *
     * @memberof AccordionItem
     */
    createButton() {
        var button   = document.createElement('div');
        var icon     = document.createElement('i');
        icon.classList.add('material-icons');
        icon.classList.add('md-26');
        button.classList.add('accordion-button');
        button.appendChild(icon);
        return button;
    }
    /**
     * Builds a generic element and attaches a certain text and class
     * to it. The text is rendered as HTML.
     * Used to build the innermost elements of the accordion item (e.g.
     * title, subtitle and content)
     *
     * @param string text
     * @param string className
     * @returns element
     *
     * @memberof AccordionItem
     */
    buildElement(text, className) {
        if (!text) return null;
        parent = document.createElement('div');
        parent.innerHTML = text;
        parent.classList.add(className);
        return parent;
    }
}
