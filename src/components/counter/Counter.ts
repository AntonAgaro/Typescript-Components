export class Counter {
  private counterEl: null | HTMLElement;
  constructor(el: string | HTMLElement) {
    this.counterEl =
      typeof el === 'string'
        ? (this.counterEl = document.querySelector(el))
        : el;

    if (!this.counterEl) return;

    const countValue = this.counterEl.dataset.counterValue;

    if (!countValue || isNaN(parseInt(countValue))) return;

    const step = Math.ceil(
      +countValue / +this.counterEl.dataset.counterStep ?? 200
    );
    let value = 0;
    const interval = setInterval(() => {
      this.counterEl.innerHTML = value.toString();
      if (value >= +countValue) {
        clearInterval(interval);
      } else {
        value += step;
      }
    }, +this.counterEl.dataset.counterSpeed ?? 1);
  }
}
