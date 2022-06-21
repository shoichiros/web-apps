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
    constructor (container, type, attrName, detailTitle = '') {
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
    render(placeholder = '', value = '', min = 0, max = 100) {
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

/**
 * Create Table Element
 * 
 * @example
 * const columns = ['username', 'age', 'birthday'];
 * const tableData = [
 *     ['joy', 29, '1992-12-25'],
 *     ['lisa', 29, '1992-12-26'],
 *     ['sara', 31, '1990-12-26'],
 * ];
 *
 * const table = new TableElement(columns, tableData);
 * const container = document.querySelector('[name=wrap]');
 * table.render(container);
 */
class TableElement {

    /**
     * @constructor
     * @param {string[]} columns
     * @param {(string | number)[][]} data
     * @param {boolean} isPagination
     * @param {boolean} isPageCounter
     */
    constructor (columns, data, isPagination = false, isPageCounter = false) {
        this.columns = columns;
        this.data = data;
        this.isPagination = isPagination;
        this.isPageCounter = isPageCounter;
    }

    /** @returns {HTMLElement} */
    createBaseTable() {
        const table = document.createElement('table');
        table.setAttribute('class', 'vanilla-table-container');
        return table;
    }

    /** @returns {HTMLElement} */
    createHeader() {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        tr.setAttribute('class', 'vanilla-table-columns');
        thead.appendChild(tr);

        this.columns.forEach(column => {
            const th = document.createElement('th');
            th.setAttribute('class', 'vanilla-table-column');
            th.textContent = column;
            tr.appendChild(th);
        });

        return thead;
    }

    /** @param {HTMLElement} trElement @param {(string | number)[]} values @returns {HTMLElement} */
    createTd(trElement, values) {
        values.forEach(value => {
            const td = document.createElement('td');
            td.setAttribute('data-row', 'row');
            // @ts-ignore
            td.textContent = value;
            trElement.appendChild(td);
        });
        return trElement;
    }

    /** @returns {HTMLElement} */
    createBody() {
        const tbody = document.createElement('tbody');

        this.data.forEach(values => {
            const tr = document.createElement('tr');
            tr.setAttribute('data-rows', 'rows');
            this.createTd(tr, values);

            tbody.appendChild(tr);
        });

        return tbody;
    }

    /** @param {HTMLElement} container @returns {void} */
    render(container) {
        const baseTable = this.createBaseTable();

        baseTable.appendChild(this.createHeader());
        baseTable.appendChild(this.createBody());
        container.appendChild(baseTable);
    }
}


/**
 * Create Checkbox or Radio
 * 
 * @example
 * const element = document.querySelector('[name=wrap]');
 * const data = [
 *     { id: 'd1', value: 'data' },
 *     { id: 'd2', value: 'data1' },
 *     { id: 'd3', value: 'data2' },
 * ];
 * const radio = new CheckInput('radio', data, 'test-name');
 * radio.render(element);
 */
class CheckInput {

    /**
     * @param {string} type - 'checkbox' or 'radio'
     * @param {array[object]} data - The 'id' and 'value' object in array
     * @param {string} name - Insert Element attribute name
     */
    constructor (type, data, name) {
        this.type = (type === 'checkbox') ? 'checkbox' : 'radio';
        this.data = data;
        this.name = name;
    }

    /** @param {string} elementName @returns {HTMLElement} */
    #createElement(elementName) {
        return document.createElement(elementName);
    }

    createFragment() {
        const fragment = document.createDocumentFragment();
        return fragment;
    }

    /** @returns {HTMLElement} */
    createBaseDiv() {
        const div = this.#createElement('div');
        div.setAttribute('data-input-container', `${this.type}`);
        return div;
    }

    /** @param {object} data @returns {HTMLElement} */
    createLabel(data) {
        const { id, value } = data;
        const label = this.#createElement('label');
        label.setAttribute('class', `${this.type}-label`);
        label.setAttribute('for', id)
        label.textContent = value;
        return label;
    }

    /** @returns {HTMLElement} */
    createSpan() {
        const span = this.#createElement('span');
        span.setAttribute('data-custom-input', `${this.type}`);
        return span;
    }

    /** @param {object} data @returns {HTMLElement} */
    createCheck(data) {
        const { id, value } = data;
        const radio = this.#createElement('input');
        radio.setAttribute('type', `${this.type}`);
        radio.setAttribute(`data-${this.type}`, 'content');
        radio.setAttribute('id', id);
        radio.setAttribute('name', this.name);
        radio.setAttribute('value', value);
        return radio;
    }

    /** @param {HTMLElement} container @returns {void} */
    render(container) {
        const fragment = this.createFragment();

        this.data.forEach((/** @type {object} */ obj) => {
            const div = this.createBaseDiv();

            div.appendChild(this.createCheck(obj));
            div.appendChild(this.createSpan());
            div.appendChild(this.createLabel(obj));
            fragment.append(div);
        });
        container.appendChild(fragment);
    }
}


/**
 * Create Select
 * 
 * @example
 * const data = ['data1', 'data2', 'data3'];
 * const attrName = 'dataSelect';
 * const select = new SelectElement(data, attrName, "dummy", "title");
 * const container = document.querySelector('[name=wrap]');
 * select.render(container);
 */
class SelectElement {

    /**
     * 
     * @param {string[]} data 
     * @param {string} attrName 
     * @param {string?} dummyOptionText 
     * @param {string?} title 
     */
    constructor (data, attrName, dummyOptionText = '', title = '') {
        this.data = data;
        this.attrName = attrName;
        this.dummyOptionText = dummyOptionText;
        this.title = title;
    }

    /** @param {string} elementName @returns {HTMLElement} */
    #createElement(elementName) {
        return document.createElement(elementName);
    }

    createTitle() {
        const title = this.#createElement('label');
        title.textContent = this.title;
        return title;
    }

    /** @returns {HTMLElement} */
    createDummyOption() {
        const option = this.#createElement('option');
        option.setAttribute('value', '');
        option.textContent = this.dummyOptionText;
        return option;
    }

    /** @returns {HTMLElement} */
    createSelect() {
        const select = this.#createElement('select');
        select.setAttribute('name', this.attrName);
        return select;
    }

    /** @param {string} value @returns {HTMLElement} */
    createOption(value) {
        const option = this.#createElement('option');
        option.textContent = value;
        option.setAttribute('name', `${this.attrName}Content`);
        option.setAttribute('value', value);
        return option;
    }

    /** @param {HTMLElement} container @returns {void} */
    render(container) {
        const select = this.createSelect();
        const title = this.createTitle();
        const dummyOptionText = this.createDummyOption();

        if (this.title !== '') container.appendChild(title);
        if (this.dummyOptionText !== '') select.appendChild(dummyOptionText);

        this.data.forEach(value => {
            const option = this.createOption(value);
            select.appendChild(option);
        });
        container.appendChild(select);
    }
}

