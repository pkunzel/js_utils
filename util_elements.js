/**
 * @description Create a new element with the information provided
 * @param {String} type The tag type (div, p, a, span, etc..)
 * @param {Array[String]} classes An Array of classes to be added to the element
 * @param {Array[Object]} attributes An Array with objects containing the properties name and value. Both are Strings.
 * @returns {HTMLElement} A plain HTMLElement with the de data provided.
 */
function createNewElement(type, classes, attributes){
    let element = document.createElement(type);

    addMultipleClasses(element, classes);

    addMultipleAttributes(element, attributes);

    return element;
}

/**
 * @description Creates a clone of the provided element, but with a diffent ID
 * @param {HTMLElement} element The Element to be cloned
 * @param {Boolean} cloneDescendants If the descendants should also be cloned
 * @param {String} newId (Optional) A new Id for the element. Deafults to none or old id + _1.
 * @returns {HTMLElement} A clone of HTMLElement.
 */
function cloneElement(element, cloneDescendants, newId){
    let newElement = element.cloneNode(cloneDescendants);

    if(newElement.id || newId){
        newElement.id = newId ? newId : newElement.id + "_1";
    }

    return newElement;
}

/**
 * @description Adds Multiple Classes to a valid Element
 * @param {HTMLElement} element The element to be set with classes
 * @param {Array[String]} classes An Array of classes to be added to the element
 * @returns {HTMLElement} A plain resulting HTMLElement
 */
function addMultipleAttributes(element, attributes){
    if(attributes){
        attributes.forEach(item => element.setAttribute(item.name, item.value));
    }

    return element;
}

/**
 * @description Adds Multiple Classes to a valid Element
 * @param {HTMLElement} element The element to be set with classes
 * @param {Array[String]} classes An Array of classes to be added to the element
 * @returns {HTMLElement} A plain resulting HTMLElement
 */
function addMultipleEvents(element, events){
    if(events){
        events.forEach(item => element.addEventListener(item.name, item.function));
    }
}

