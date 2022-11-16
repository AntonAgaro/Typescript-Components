import './carousel.scss';

export class Carousel {
  private carousel: null | HTMLElement;
  private carouselInner: null | HTMLElement;
  private slidesWrapper: null | HTMLElement;
  private prevBtn: null | HTMLElement;
  private nextBtn: null | HTMLElement;
  private slides: NodeListOf<HTMLElement>;
  private indicators: NodeListOf<HTMLElement>;
  constructor() {
    this.carousel = document.querySelector('.carousel');
    this.carouselInner = this.carousel.querySelector('.carousel__inner');
    this.slidesWrapper = this.carousel.querySelector('.carousel__slides');
    this.prevBtn = this.carousel.querySelector('[data-slide="prev"]');
    this.nextBtn = this.carousel.querySelector('[data-slide="next"]');
    this.indicators = this.carousel.querySelectorAll(
      '.carousel__indicators .carousel__indicators-item'
    );

    if (!this.carousel || !this.carouselInner || !this.slidesWrapper) return;
    const width = window.getComputedStyle(this.carouselInner).width;
    this.slides = this.slidesWrapper.querySelectorAll('.carousel__slide');

    if (!this.slides.length) return;
    this.slidesWrapper.style.width = 100 * this.slides.length + '%';
    this.slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;
    this.nextBtn.addEventListener('click', () => {
      if (offset == parseInt(width) * (this.slides.length - 1)) {
        offset = 0;
      } else {
        offset += parseInt(width);
      }
      this.slidesWrapper.style.transform = `translateX(-${offset}px)`;
      if (slideIndex === this.slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      this.setActiveIndicator(slideIndex);
    });

    this.prevBtn.addEventListener('click', () => {
      if (offset === 0) {
        offset = parseInt(width) * (this.slides.length - 1);
      } else {
        offset -= parseInt(width);
      }
      this.slidesWrapper.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === 0) {
        slideIndex = this.slides.length - 1;
      } else {
        slideIndex--;
      }

      this.setActiveIndicator(slideIndex);
    });

    this.indicators.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const slideTo = target.dataset.slideTo;
        if (!slideTo) return;
        slideIndex = parseInt(slideTo);
        offset = parseInt(width) * parseInt(slideTo);
        this.slidesWrapper.style.transform = `translateX(-${offset}px)`;
        this.setActiveIndicator(slideIndex);
      });
    });
  }

  private setActiveIndicator(index: number): void {
    this.indicators.forEach((el) => el.classList.remove('active'));
    this.indicators[index].classList.add('active');
  }
}
