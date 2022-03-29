import { FOOTER_SELECTOR, PAGINATOR_SELECTOR, TABLE_SELECTOR } from '../constants/selectors';

export class StickyHeader {
  /**
   * should call in "ngAfterViewInit" hook
   */
  get tableHeight(): string {
    const otherContentHeight = this.headerHeight() + this.footerHeight() + this.paginatorHeight();
    const height = Math.floor(window.outerHeight - otherContentHeight);

    if (height <= 0) {
      return 'flex';
    }

    return `${height}px`;
  }

  private headerHeight(): number {
    const app = document.querySelector<HTMLElement>(TABLE_SELECTOR);

    if (!app) return 0;

    return app.getBoundingClientRect().top;
  }

  private paginatorHeight(): number {
    return this.getElementHeight(PAGINATOR_SELECTOR);
  }

  private footerHeight(): number {
    return this.getElementHeight(FOOTER_SELECTOR);
  }

  private getElementHeight(selector: string): number {
    const block = document.querySelector<HTMLElement>(selector);

    if (!block) return 0;

    return block.offsetHeight;
  }
}
