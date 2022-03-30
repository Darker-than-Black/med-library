import {
  FOOTER_SELECTOR,
  TABLE_SELECTOR,
  PAGINATOR_SELECTOR,
  UP_SCROLL_SELECTOR,
} from '../constants/selectors';

export class StickyHeader {
  /**
   * should call in "ngAfterViewInit" hook
   */
  get tableHeight(): string {
    const MARGINS = 20; // 20px margin app in prod
    const contentHeight = this.headerHeight() + this.footerHeight()
      + this.paginatorHeight() + this.upScrollHeight() + MARGINS;

    return `calc(100vh - ${contentHeight}px)`;
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

  private upScrollHeight(): number {
    return this.getElementHeight(UP_SCROLL_SELECTOR);
  }

  private getElementHeight(selector: string): number {
    const block = document.querySelector<HTMLElement>(selector);

    if (!block) return 0;

    return block.offsetHeight;
  }
}
