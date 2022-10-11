import './app.scss';
import { Select } from './components/select/Select';
import { ProgressBar } from './components/progressBar/ProgressBar';
import { Accordion } from './components/accordion/Accordion';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.select__wrapper').forEach((select) => {
    new Select({
      wrapper: select as HTMLElement,
      selectBtnSelector: '.select__btn',
      selectListSelector: '.select__list',
      selectItemsSelector: '.select__list-item',
      activeClass: 'active',
    });
  });

  document.querySelectorAll('.progress-wrapper').forEach((el) => {
    new ProgressBar({
      progressWrapper: el as HTMLElement,
      progressSelector: '.progress',
    });
  });

  document.querySelectorAll('.accordion').forEach((el) => {
    new Accordion({
      accordion: el as HTMLElement,
      accordionHeadSelector: '.accordion__head',
      accordionHeadActiveClass: 'accordion__head--active',
      accordionContentActiveClass: 'accordion__content--active',
    });
  });
});
