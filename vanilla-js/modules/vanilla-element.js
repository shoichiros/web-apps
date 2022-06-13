// @ts-check

/** @author Shoichiro Saito */

/**
 * Create Input Element
 *
 * @example
 * const container = document.getElementById('wrap');
 * const inputText = new InputElement(container, 'text', 'username');
 * inputText.create('Your username...');
 */
class InputElement {

    /**
     * @constructor
     * @param {HTMLElement} container
     * @param {string} type
     * @param {string} attrName
     * @param {string} detailTitle
     */
    constructor(container, type, attrName, detailTitle = '') {
        this.container = container;
        this.type = type;
        this.attrName = attrName;
        this.detailTitle = detailTitle;
        this.baseDivClassName = `input-${this.type}-container`;
    }

    /** @param {HTMLElement} element @return {HTMLElement} */
    createDetailTitle(element) {
        const label = document.createElement('label');
        label.setAttribute('class', 'input-data-detail-title');
        label.textContent = this.detailTitle;
        element.appendChild(label);
        return element;
    }

    /** @return {HTMLElement} */
    createBaseDiv() {
        const div = document.createElement('div');
        div.setAttribute('class', this.baseDivClassName);
        return div;
    }

    /** @return {HTMLElement} */
    createInput() {
        const input = document.createElement('input');
        input.setAttribute('type', this.type);
        input.setAttribute('name', this.attrName);
        input.setAttribute('class', `input-${this.type}-content`);
        return input;
    }

    /** @param {HTMLElement} element @param {number} min @param {number} max @return {HTMLElement} */
    addAttrMinMax(element, min, max) {
        // @ts-ignore
        element.setAttribute('min', min);
        // @ts-ignore
        element.setAttribute('max', max);
        return element;
    }

    /** @param {HTMLElement} element @param {string} placeholder @return {HTMLElement} */
    addAttrPlaceholder(element, placeholder) {
        element.setAttribute('placeholder', placeholder);
        return element;
    }

    /** @param {HTMLElement} element @param {string} value @return {HTMLElement} */
    addAttrValue(element, value) {
        element.setAttribute('value', value);
        return element;
    }

    /**
     * @param {string} placeholder
     * @param {string} value
     * @param {number} min
     * @param {number} max
     * @return {void}
     */
    create(placeholder = '', value = '', min = 0, max = 100) {
        const baseDiv = this.createBaseDiv();
        const input = this.createInput();

        if (placeholder !== '') this.addAttrPlaceholder(input, placeholder);
        if (value !== '') this.addAttrValue(input, value);
        if (this.type === 'number') this.addAttrMinMax(input, min, max);
        if (this.detailTitle !== '') this.createDetailTitle(baseDiv);

        baseDiv.appendChild(input);
        this.container.appendChild(baseDiv);
    }

}
