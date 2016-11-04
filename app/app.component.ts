import { Component, ElementRef, OnChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
  selector: 'app-root',
  styleUrls: [ 'app.component.css' ],
})

export class AppComponent implements OnChanges {
  values: Array<number> = [];

  constructor (private elRef: ElementRef) { }

  clearProcess(): void {
    let userChoice: boolean;
    userChoice = confirm('are you sure you want to clear the arithmetic?');
    if (userChoice) {
      this.values = [];
      console.log('values cleared');
    } else {
      console.log('clear function denied by user');
      return;
    }

  }

  handleClick(id: string): void {
    let target = $(this.elRef.nativeElement).find(`#${id}`);
    console.log('value is: ', target.val());
    this.values.push(target.val());
  }

  handleSquares(): void {
    // TODO: this is broken, fix it. It doesn't add values correctly.
    //let number = this.processMath(this.values);
    //console.log(Math.pow(number, 2));
     //this.values.push('');
     //this.values.push(Math.pow(number, 2));
  }

  processMath(numArray: Array<number>): number {
    let total = numArray.join('');
    console.log('total is currently: ', total);
    console.log('answer is: ', eval(total));
    return eval(total);
  }

  getPi(): number {
    return Math.PI;
  }

  ngOnChanges(): void {
    console.log('a change has occured');
  }

}
