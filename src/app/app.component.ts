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
    nn: new FormControl(''),
    pm: new FormControl(''),
    pd: new FormControl(''),
    me2: new FormControl(''),
    dp2: new FormControl(''),
    nn2: new FormControl('')
    });
  sequenceRand: number[];
  sequenceRand2: number[];
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
    const z1 = Math.abs((sred - (this.inputForm.get('pm').value as number))
      / (Math.pow((this.inputForm.get('dp').value as number), 0.5) / Math.pow((this.inputForm.get('nn').value as number), 0.5)));
    console.log('Зет ' + z1);
    if (z1 > 1.645) {
      this.numbrs += '<p>При известной дисперсии H0 о мат. ож. Отвергается</p>';
    }
    else {
      this.numbrs += '<p>При известной дисперсии H0 о мат. ож. Принимается</p>';
    }
    const z2 = Math.abs((sred - (this.inputForm.get('pm').value as number))
      / (Math.pow(disp, 0.5) / Math.pow((this.inputForm.get('nn').value as number), 0.5)));
    console.log('Зет ' + z2);
    if (z2 > 1.697) {
      this.numbrs += '<p>При неизвестной дисперсии H0 о мат. ож. Отвергается</p>';
    }
    else {
      this.numbrs += '<p>При неизвестной дисперсии H0 о мат. ож. Принимается</p>';
    }
    const z3 = (this.inputForm.get('nn').value as number) * disp / (this.inputForm.get('pd').value as number);
    console.log('Зет ' + z3);

    if (z3 < 77.93 || z3 > 124.3) {
      this.numbrs += '<p> H0 о дисперсии Отвергается</p>';
    }
    else {
      this.numbrs += '<p>H0 о дисперсии Принимается</p>';
    }
    this.getSequence2(this.inputForm.get('nn2').value as number,
      this.inputForm.get('me2').value as number, this.inputForm.get('dp2').value as number);
    console.log(this.sequenceRand2);
    this.sequenceRand2.sort((a, b) => a - b);
    let sum2 = 0;
    this.sequenceRand2.forEach((value => sum2 += Number(value)));
    console.log(sum2);
    const sred2 = sum2 / this.sequenceRand2.length;
    sum2 = 0;
    this.sequenceRand2.forEach((value => sum2 += (Number(value) - Number(sred2)) * (Number(value) - Number(sred2))));
    console.log(sum2);
    const disp2 = sum2 / this.sequenceRand2.length;
    this.numbrs += '<p>Выборочное среднее для 2 выборки: </p>';
    this.numbrs += sred2;
    this.numbrs += '<p>Выборочная дисперсия для 2 выборки: </p>';
    this.numbrs += disp2;
    const z4 = Math.abs(sred - sred2) / Math.pow(((this.inputForm.get('dp').value as number)
      / (this.inputForm.get('nn').value as number) + (this.inputForm.get('dp2').value as number)
    / (this.inputForm.get('nn2').value as number)), 0.5);
    console.log('Зет ' + z4);
    if (z4 > 1.645) {
      this.numbrs += '<p>При известной дисперсии H0 о равенстве мат. ож. Отвергается</p>';
    }
    else {
      this.numbrs += '<p>При известной дисперсии H0 о равенстве мат. ож. Принимается</p>';
    }
    const nv = (this.inputForm.get('nn').value as number);
    const mv = (this.inputForm.get('nn2').value as number);
    const dispsr = ((nv - 1) * disp + (mv - 1) * disp2) / (nv + mv - 2);
    const z5 = (Math.abs(sred - sred2) / Math.pow(dispsr, 0.5)) * Math.pow((mv * nv) / (mv + nv), 0.5);
    console.log('Зет ' + z5);
    console.log((Math.abs(sred - sred2) / dispsr));
    if (z5 > 1.697) {
      this.numbrs += '<p>При неизвестной дисперсии H0 о равенстве мат. ож. Отвергается</p>';
    }
    else {
      this.numbrs += '<p>При неизвестной дисперсии H0 о равенстве мат. ож. Принимается</p>';
    }
    const minter = Math.round(1 + 3.22 * Math.log10(nv));
    let minvalue = this.sequenceRand[0];
    const maxvalue = this.sequenceRand[this.sequenceRand.length - 1];
    const diffvalue = (maxvalue - minvalue) / minter;
    let sig = 0;
    for (let i = 0; i < minter; i++) {
      minvalue += diffvalue;
      let ni = 0;
      this.sequenceRand.forEach((a: number) => {
        if (a <= minvalue) {
          ni += 1;
        }
      });
      const pi = ni / nv;
      sig += Math.pow(ni - nv * pi, 2) / (nv * pi);
    }
    sig = Math.abs(sig);
    console.log(sig);
    if (sig > 77.93) {
      this.numbrs += '<p> H0 критерый Пирсона Отвергается</p>';
    }
    else {
      this.numbrs += '<p>H0 критерий Пирсона Принимается</p>';
    }
    const da = 1 / (2 * nv) * Math.log(2 / 0.95);
    console.log(da);
    if (da < 0) {
      this.numbrs += '<p> H0 критерый Колмогорова-Смирнова Отвергается</p>';
    }
    else {
      this.numbrs += '<p>H0 критерий Колмогорова-Смирнова Принимается</p>';
    }
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

  getSequence2(num: number, matexp: number, disp: number): number[] {
    this.sequenceRand2 = [];
    console.log(num, matexp, disp);
    for (let i = 0; i < num; i++) {
      this.currentNumber = 0;
      for (let j = 0; j < 12; j++) {
        this.currentNumber += Math.random();
      }
      this.currentNumber -= 6;
      this.currentNumber *= Math.pow(disp, 0.5);
      this.currentNumber += Number(matexp);
      this.sequenceRand2.push(this.currentNumber);
    }
    return this.sequenceRand2;
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
