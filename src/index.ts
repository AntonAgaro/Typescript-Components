import './app.scss';
import { Select } from './components/select/Select';

document.querySelectorAll('.select__wrapper').forEach((select) => {
  new Select({
    wrapper: select as HTMLElement,
    selectBtnSelector: '.select__btn',
    selectListSelector: '.select__list',
    selectItemsSelector: '.select__list-item',
    activeClass: 'active',
  });
});
