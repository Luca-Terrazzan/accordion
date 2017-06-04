/**
 * Accordion
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
        this.accordion = document.getElementById(options['container']);
        this.buildMainTitle(options['mainTitle']);
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
     * @param String text
     *
     * @memberof Accordion
     */
    buildMainTitle(text) {
        var main = document.createElement('div');
        var titleDiv = document.createElement('div');
        var titleText = document.createTextNode(text);
        main.classList.add('main-title');
        titleDiv.classList.add('main-title-content');
        titleDiv.appendChild(titleText);
        main.appendChild(titleDiv);
        this.accordion.appendChild(main);
    }
}
