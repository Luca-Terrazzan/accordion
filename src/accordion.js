/**
 * Accordion
 * TODO: error handling (main element absence, etc...)
 *
 * @author Luca Terrazzan <luca.terraz@gmail.com>
 * @class Accordion
 */

class Accordion {

    /**
     * Creates an instance of Accordion.
     *
     * @param Object options
     *
     * @memberof Accordion
     */
    constructor(options) {
        // fetch the element
        this.accordion = document.getElementById(options['container']); // TODO: manage errors on this
        // build the main title element
        this.buildMainTitle(options['mainTitle']);
        // starts the machine!
        this.initAccordion(this.accordion, options['panels']);
    }

    /**
     * Init operations for the main accordion element
     *
     * @param element accordion
     * @param object options
     *
     * @memberof Accordion
     */
    initAccordion(accordion, options) {
        // iterate between the panels, builds accordion items accordingly
        options.forEach(function(element) {
            var item = new AccordionItem({
                title    : element['title'],
                subtitle : element['subtitle'],
                content  : element['content']
            });
            accordion.appendChild(item.getItem());
        });
    }

    /**
     * Builds the main title component of the accordion
     *
     * @param string the title's text
     *
     * @memberof Accordion
     */
    buildMainTitle(text) {
        // the main div of the title
        var main = document.createElement('div');
        // the div containin ghte actual text
        var titleDiv = document.createElement('div');
        var titleText = document.createTextNode(text);
        // builds the elements' structure
        titleDiv.appendChild(titleText);
        main.appendChild(titleDiv);
        // add relevant classes
        main.classList.add('main-title');
        titleDiv.classList.add('main-title-content');
        // appen the title to the main body
        this.accordion.appendChild(main);
    }
}
