import './progress-bar.scss';

interface ProgressBarSettings {
  progressWrapper: HTMLElement;
  progressSelector: string;
}

export class ProgressBar {
  private settings: ProgressBarSettings;
  constructor(settings: ProgressBarSettings) {
    this.settings = settings;
    if (!this.settings.progressWrapper) return;

    const progress = this.settings.progressWrapper.querySelector(
      this.settings.progressSelector
    ) as HTMLElement;

    if (!progress) return;

    const finalValue =
        parseInt(this.settings.progressWrapper.dataset.progress) || 0,
      maxValue = parseInt(this.settings.progressWrapper.dataset.max) || 100,
      percentValue = Math.ceil((finalValue / maxValue) * 100);

    progress.innerHTML = percentValue + '%';
    progress.style.width = percentValue + '%';
  }
}
