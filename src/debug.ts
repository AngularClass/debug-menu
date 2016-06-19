import { Component, ViewEncapsulation, Input, Attribute } from '@angular/core';

@Component({
  selector: 'ac-debug',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .ac-ui.ac-active {
      outline-color: red;
      outline-style: solid;
      transform: translateZ(0);
    }

    .ac-container.ac-active {
      outline-color: blue;
      outline-style: solid;
      transform: translateZ(0);
    }

    .ac-debug-container {
      width: 350px;
      padding: 20px;
      position: absolute;
      margin-top: 100px;
    }
  `],
  template: `
    <div class="ac-debug-container row between-xs" [ngStyle]="getStyles()">
      <button (click)="toggleUi()">toggle ui</button>
      <button (click)="toggleContainer()">toggle containers</button>
    </div>
  `
})
export class AcDebug {
  @Input() position: string = 'top-left';
  @Input() acUiClass: string = 'ac-ui';
  @Input() acContainerClass: string = 'ac-container';
  @Input() acActiveClass: string = 'ac-active';

  constructor(
    @Attribute('ac-ui-class') acUiClass?: string,
    @Attribute('ac-container-class') acContainerClass?: string,
    @Attribute('ac-active-class') acActiveClass?: string) {
    this.acUiClass = acUiClass || this.acUiClass;
    this.acContainerClass = acContainerClass || this.acContainerClass;
    this.acActiveClass = acActiveClass || this.acActiveClass;

  }

  get containers(): any[] {
    return Array.from(document.querySelectorAll('.' + this.acContainerClass));
  }

  get ui(): any[] {
    return Array.from(document.querySelectorAll('.' + this.acUiClass));
  }

  getStyles() {
    return this._getPosition({
      position: 'absolute'
    });
  }

  toggleUi() {
    this.ui.forEach(ui => ui.classList.toggle(this.acActiveClass));
  }

  toggleContainer() {
    this.containers.forEach(container => container.classList.toggle(this.acActiveClass));
  }

  private _getPosition(style) {
    if (this.position === 'top-left') {
      return Object.assign(style, {
        left: '0',
        top: '0'
      });
    }
  }
}
