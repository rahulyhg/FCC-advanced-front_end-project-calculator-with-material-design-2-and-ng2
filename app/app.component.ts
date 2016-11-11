import {Component, ElementRef} from "@angular/core";
import * as $ from "jquery";

@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
  selector: 'app-root',
  styleUrls: [ 'app.component.css' ],
})

export class AppComponent {
  values: Array<number> = [];


  constructor (private elRef: ElementRef) { }

  clearProcess(): void {
    let target = $(this.elRef.nativeElement)
        .find('.output');
    target.html('');
    this.values = [];
  }

  handleClick(id: string): void {
    let target = $(this.elRef.nativeElement).find(`#${id}`);
    console.log('value is: ', target.val());
    this.values.push(target.val());
  }

  processMath(numArray: Array<number>): number {
    let target = $(this.elRef.nativeElement)
        .find('.output');
    let total = numArray.join('');
    // let result = eval(total);

     let result = eval(total);
     if (result === Infinity) {
       alert('you divided by zero!');
       alert('clear the screen and try again');
       target.html(`Infinity`);
     } else {
         target.html(eval(result));
         this.values = [Number(result)];
         return eval(result);
       }
  }

     getPi(): number {
    return Math.PI;
  }

  addHtml(param: any): void {
    let target = $(this.elRef.nativeElement)
        .find('.output');
    target.append(param);
  }

  convertPercent(): void {
    let target = $(this.elRef.nativeElement)
        .find('.output');
    let num = Number(this.values.join(''));
    target.html(String(eval(num / 100)));

  }

  clearSingle(): void {
    let target = $(this.elRef.nativeElement)
        .find('.output');
    this.values.pop();
    target.html(`${this.values.join('')}`);
  }
}
