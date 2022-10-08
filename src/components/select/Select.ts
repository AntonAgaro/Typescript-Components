import './select.scss';

interface SelectSettings {
  wrapper: HTMLElement;
  selectBtnSelector: string;
  selectListSelector: string;
  selectItemsSelector: string;
  activeClass: string;
}

export class Select {
  private settings: SelectSettings;
  constructor(settings: SelectSettings) {
    this.settings = settings;

    if (!this.settings.wrapper) return;

    const selectBtn = this.settings.wrapper.querySelector(
        '.select__btn'
      ) as HTMLElement,
      selectList = this.settings.wrapper.querySelector(
        '.select__list'
      ) as HTMLElement,
      selectListItems =
        this.settings.wrapper.querySelectorAll('.select__list-item'),
      selectInput = this.settings.wrapper.querySelector(
        '.select__input'
      ) as HTMLInputElement;

    // Open/close dropdown
    selectBtn.addEventListener('click', () => {
      selectList.classList.toggle(this.settings.activeClass);
      selectBtn.classList.toggle(this.settings.activeClass);
    });

    //Select dropdown item, focus btn, set hidden-input value as menu item value and close dropdown
    selectListItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = e.target as HTMLElement;
        selectBtn.textContent = target.textContent;
        selectInput.value = target.dataset.value;
        selectList.classList.remove(this.settings.activeClass);
      });
    });

    //Close select list if clicked outside
    document.addEventListener('click', (e) => {
      if (e.target !== selectBtn) {
        this.hideElements([selectBtn, selectList]);
      }
    });

    //Close on press Tab or Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key === 'Escape' || e.key === 'Esc') {
        this.hideElements([selectBtn, selectList]);
      }
    });
  }

  private hideElements(elements: HTMLElement[]): void {
    elements.forEach((el) => el.classList.remove(this.settings.activeClass));
  }
}
