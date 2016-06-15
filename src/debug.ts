import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ac-debug',
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
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ac-debug-container row between-xs" [ngStyle]="getStyles()">
      <button (click)="toggleUi()">toggle ui</button>
      <button (click)="toggleContainer()">toggle containers</button>
    </div>
  `
})
export class AcDebug {
  @Input() position: string = 'top-left';

  _getPosition(style) {

    if (this.position === 'top-left') {
      return Object.assign(style, {
        left: '0',
        top: '0'
      });
    }
  }
  getStyles() {
    return this._getPosition({
      position: 'absolute'
    });
  }
  get containers(): any[] {
    return Array.from(document.querySelectorAll('.ac-container'));
  }

  get ui(): any[] {
    return Array.from(document.querySelectorAll('.ac-ui'));
  }

  toggleUi() {
    this.ui.forEach(ui => ui.classList.toggle('ac-active'));
  }

  toggleContainer() {
    this.containers.forEach(container => container.classList.toggle('ac-active'));
  }
}
