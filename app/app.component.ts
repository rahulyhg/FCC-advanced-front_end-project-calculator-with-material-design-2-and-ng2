import { Component, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
  selector: 'app-root',
  styleUrls: [ 'app.component.css' ],
})

export class AppComponent {
  values: Array<number> = [];
  constructor (private elRef: ElementRef) { }

  handleClick(id: string): void {
    let target = $(this.elRef.nativeElement).find(`#${id}`);
    console.log(target.val());
    this.values.push(target.val());

  }

  processMath(numArray: Array<number>): void {
    let total = numArray.join('');
    console.log(total);
    console.log('sum is: ', eval(total), 'typeof: ', typeof eval(total));
  }

  clearProcess(): void {
    let userChoice: boolean;
    userChoice = confirm('are you sure you want to clear the arithmetic?');
    // userChoice ? this.values = [] : console.log('denied reset per user');
    if (userChoice) {
      this.values = [];
      console.log('values cleared');
    } else {
      console.log('clear function denied by user');
      return;
    }

  }

}
