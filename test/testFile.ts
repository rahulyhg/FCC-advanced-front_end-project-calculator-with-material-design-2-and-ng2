import { assert } from 'chai';
import { AppComponent } from '../app/app.component';

let getPi = () => {
  return Math.PI;
}

let processMath = (numArray: Array<number>) => {
    let total = numArray.join('');
    return eval(total);
  }

let processMathValue = processMath([1, '+', 2]);

describe('test functions return value', () => {
  it('should return ~ PI', () => {
    assert.equal(getPi().toFixed(12), 3.14159265359);
  });
  it('should return the computed value', () => {
    assert.equal(Number(processMathValue), 3);
  });
});

