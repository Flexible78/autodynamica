'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const showMoreList = [...document.querySelectorAll('[data-show-more]')];
   showMoreList.forEach((list) => {
      if (list.dataset.showMore === 'true') {
         let showCount = parseInt(list.dataset.showCount);
         let loadCount = parseInt(list.dataset.loadCount);

         const showMoreWrapper = document.createElement('div');
         showMoreWrapper.classList.add('show-more-wrapper');
         list.previousElementSibling.after(showMoreWrapper);
         showMoreWrapper.appendChild(list);

         if (list.children.length > showCount) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.classList.add('show-more-btn');
            showMoreBtn.innerText = 'Показать еще';
            list.after(showMoreBtn);

            for (let index = showCount; index < list.children.length; index++) {
               list.children[index].style.display = 'none';
            }
            showMoreBtn.addEventListener('click', () => {
               for (let index = showCount; index < showCount + loadCount; index++) {
                  list.children[index].style.display = 'block';
               }
               showCount += loadCount;
            });
         }
      }
   });
});
