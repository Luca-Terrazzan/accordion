class Accordion {

    constructor(options) {
        this.accordion = document.getElementById(options['container']);
        this.buildMainTitle(options['mainTitle']);
        this.initAccordion(this.accordion, options['panels']);
    }

    initAccordion(accordion, options) {
        options.forEach(function(element) {
            var item = new AccordionItem({
                title    : element['title'],
                subtitle : element['subtitle']
            });
            accordion.appendChild(item.getItem());
        });
    }

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
