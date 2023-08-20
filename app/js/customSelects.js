'use strict';

const customSelectAttributes = {
   class: 'select select-js',
};

const triggerAttributes = {
   class: 'select__trigger',
   role: 'combobox',
   'aria-controls': '',
   'aria-expanded': false,
   'aria-activedescendant': '',
   tabindex: 0,
};

const triggerTextAttributes = {
   class: 'select__trigger-text',
   'aria-hidden': 'true',
};

const optionBoxAttributes = {
   class: 'select__options-box',
   id: '',
   role: 'listbox',
   tabindex: -1,
};

const optionAttributes = {
   class: 'select__option',
   id: '',
   role: 'option',
   'aria-selected': false,
   'data-value': '',
};

function openSelect(elem) {
   elem.classList.add('open');
}
function closeSelect(elem) {
   elem.classList.remove('open');
}
document.addEventListener('DOMContentLoaded', () => {
   const defaultSelects = findElements('select');
   hideElement(defaultSelects);
   renderSelect(defaultSelects);

   const customSelects = document.querySelectorAll('.select-js');

   customSelects.forEach((select) => {
      select.addEventListener('click', function (event) {
         const { target } = event;
         console.log(target);
         console.log(this);
         if (targe.classList.contains('select__trigger') && !this.classList.contains('open')) {
            openSelect(this);
         } else {
            closeSelect(this);
         }
      });
   });
});

/* Functions */
function renderSelect(defaultSelects) {
   defaultSelects.forEach((select) => {
      const customSelect = createNode('div', customSelectAttributes, select.parentNode);
      // customSelect.classList.add('open'); // TODO:
      customSelect.appendChild(select);

      const selectTrigger = createNode('div', triggerAttributes, customSelect);
      const selectTriggerText = createNode('span', triggerTextAttributes, selectTrigger);
      selectTriggerText.innerHTML = select.options[0].innerText;
      const optionsBox = createNode('div', optionBoxAttributes, customSelect);
      optionsBox.id = `${select.name}-listbox`;
      selectTrigger.setAttribute('aria-controls', optionsBox.id);

      for (let index = 0; index < select.options.length; index++) {
         const currentOption = select.options[index];
         const option = createNode('div', optionAttributes, optionsBox);
         option.id = `${select.name}-option-${index}`;
         option.dataset.value = currentOption.value;
         option.innerHTML = currentOption.innerHTML;
      }
   });

   function createNode(tag, attributes, dest) {
      const node = document.createElement(tag);
      addAttributes(node, attributes);
      dest.appendChild(node);
      return node;
   }
}

function addAttributes(element, attributesObj) {
   Object.keys(attributesObj)
      .forEach((attrKey) => {
         element.setAttribute(attrKey, attributesObj[attrKey]);
      });
}

function hideElement(collection) {
   if (collection == null) {
      return;
   }
   collection.forEach((currentElement) => {
      if (currentElement.tagName.toLowerCase() === 'select') {
         currentElement.classList.add('hidden');
         currentElement.setAttribute('tabindex', -1);
         currentElement.setAttribute('aria-hidden', true);
      } else {
         currentElement.classList.add('visually-hidden');
         currentElement.setAttribute('aria-hidden', true);
      }
   });
}

function findElements(element) {
   if (document.querySelectorAll(element) == null) {
      return;
   }
   return document.querySelectorAll(element);
}
