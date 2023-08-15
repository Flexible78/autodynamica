'use strict';

document.addEventListener('DOMContentLoaded', () => {
   findElements('select');
});

/* Functions */
function findElements(element) {
   if (document.querySelectorAll(element) == null) {
      return;
   }
   console.log(document.querySelectorAll(element));
   return document.querySelectorAll(element);
}
