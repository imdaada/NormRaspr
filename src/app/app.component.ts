import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoogleChartComponent} from 'angular-google-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sizeG = 1;
  title1 = 'Гистограмма';
  type1 = 'Histogram';
  hData1;
  date1 = [];
  options1 = {
    legend: 'none',
    colors: ['green'],
    histogram: { bucketSize: this.sizeG }
  };
  width1 = 550;
  height1 = 400;
  title = 'Эмперическая функция распределения';
  inputForm = new FormGroup({
    me: new FormControl(''),
    dp: new FormControl(''),
    nn: new FormControl('')
    });
  sequenceRand: number[];
  currentNumber: number;
  numbrs = '';
  type = 'LineChart';
  hData;
  data = [];
  options = {
    hAxis: {
      title: 'Случайное число'
    },
    vAxis: {
      title: 'Значение эмпирической функции распределения'
    },
  };
  width = 550;
  height = 400;
  level = 0.05;
  qvNorm = 1.645;
  qvStudent = 1.9623;
  qvPirson = 0;
  interMe1 = [];
  interMe2 = [];
  interDisp = [];

  add(a: number, b: number): number {
    return Number(a) + Number(b);
  }

  submit(): boolean {
    this.getSequence(this.inputForm.get('nn').value as number,
      this.inputForm.get('me').value as number, this.inputForm.get('dp').value as number);
    console.log(this.sequenceRand);
    this.sequenceRand.sort((a, b) => a - b);
    this.sequenceRand.forEach(
      (num: number) => {
        this.numbrs += num + '<br>';
      }
    );
    this.numbrs += '<p>Медиана: </p>';
    if (!(this.sequenceRand.length % 2)) {
      const med = (this.add(this.sequenceRand[this.sequenceRand.length / 2 - 1],
        this.sequenceRand[this.sequenceRand.length / 2])) / 2;
      this.numbrs += med + ' ';
    }
    else {
      const med = Number(this.sequenceRand[(this.sequenceRand.length + 1) / 2 - 1]);
      this.numbrs += med + ' ';
    }
    this.numbrs += '<p>Выборочное среднее: </p>';
    let sum = 0;
    this.sequenceRand.forEach((value => sum += Number(value)));
    console.log(sum);
    const sred = sum / this.sequenceRand.length;
    this.numbrs += sred;
    this.numbrs += '<p>Выборочная дисперсия: </p>';
    sum = 0;
    this.sequenceRand.forEach((value => sum += (Number(value) - Number(sred)) * (Number(value) - Number(sred))));
    console.log(sum);
    const disp = sum / this.sequenceRand.length;
    this.numbrs += disp;
    this.makeFunction();
    this.hData = this.data;
    this.sizeG = (-this.sequenceRand[0] + this.sequenceRand[this.sequenceRand.length - 1])
      / (Number(1) + 3.22 * Math.log(this.sequenceRand.length));
    // this.sizeG = Math.round(this.sizeG * 10) / 10;
    this.options1.histogram.bucketSize = this.sizeG;
    console.log(this.sizeG);
    this.sequenceRand.forEach((value => {
      this.date1.push([value]);
    }));
    this.hData1 = this.date1;
    this.interMe1.push(sred - this.qvNorm * (this.inputForm.get('dp').value as number)
      / Math.pow(this.sequenceRand.length, 0.5));
    this.interMe1.push(Number(sred) + this.qvNorm * (this.inputForm.get('dp').value as number)
      / Math.pow(this.sequenceRand.length, 0.5));
    console.log(this.interMe1);
    this.interMe2.push(sred - this.qvStudent * (disp)
      / Math.pow(this.sequenceRand.length, 0.5));
    this.interMe2.push(Number(sred) + this.qvStudent * (disp)
      / Math.pow(this.sequenceRand.length, 0.5));
    console.log(this.interMe1);
    this.numbrs += '<p>Доверительный интервал при известной дисперсии: </p> (' + this.interMe1[0] + '; ' + this.interMe1[1];
    this.numbrs += '<p>Доверительный интервал при неизвестной дисперсии: </p> (' + this.interMe2[0] + '; ' + this.interMe2[1];
    return false;
  }
  getSequence(num: number, matexp: number, disp: number): number[] {
    this.sequenceRand = [];
    console.log(num, matexp, disp);
    for (let i = 0; i < num; i++) {
      this.currentNumber = 0;
      for (let j = 0; j < 12; j++) {
        this.currentNumber += Math.random();
      }
      this.currentNumber -= 6;
      this.currentNumber *= Math.pow(disp, 0.5);
      this.currentNumber += Number(matexp);
      this.sequenceRand.push(this.currentNumber);
    }
    return this.sequenceRand;
  }
  makeFunction() {
    let fValue = 0;
    let prevValue = 0;
    let summ = 0;
    this.sequenceRand.forEach((value: number) => {
      fValue = summ / this.sequenceRand.length;
      this.data.push([prevValue, fValue]);
      this.data.push([value, fValue]);
      prevValue = value;
      summ++;
    });
    console.log(this.data);
    this.type = 'LineChart';
    return false;
  }
}
