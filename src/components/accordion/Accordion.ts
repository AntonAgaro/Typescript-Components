import './accordion.scss';

interface AccordionSettings {
  accordion: HTMLElement;
  accordionHeadSelector: string;
  accordionHeadActiveClass: string;
  accordionContentActiveClass: string;
}

export class Accordion {
  private readonly settings: AccordionSettings;
  constructor(settings: AccordionSettings) {
    this.settings = settings;
    const {
      accordion,
      accordionHeadSelector,
      accordionContentActiveClass,
      accordionHeadActiveClass,
    } = this.settings;
    accordion.querySelectorAll(accordionHeadSelector).forEach((head) => {
      head.addEventListener('click', () => {
        const content = head.nextElementSibling as HTMLElement;
        head.classList.toggle(accordionHeadActiveClass);
        content.classList.toggle(accordionContentActiveClass);
        if (head.classList.contains(accordionHeadActiveClass)) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0px';
        }
      });
    });
  }
}
