import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hesburger-calc';
  total = 0;

  orderList = [
    {name: 'VEKE burger', kcal: 450},
    {name: 'Friikartulid (väiksed)', kcal: 280},
    {name: 'Friikartulid (suured)', kcal: 392},
    {name: 'Röstkartul', kcal: 203},
    {name: 'Sibularõngad', kcal: 192},
    {name: 'Sojapulgad (4tk)', kcal: 131},
    {name: 'Sojapulgad (6tk)', kcal: 197},
    {name: 'Sojapulgad (9tk)', kcal: 296},
  ];
  dipList = [
    {name: 'Ketšup', kcal: 23},
    {name: 'Magushapu dipikaste', kcal: 46},
    {name: 'VEKE majonees', kcal: 220},
    {name: 'Chillimajonees', kcal: 191},
    {name: 'BBQ kaste', kcal: 38},
    {name: 'Lahja majakaste', kcal: 125},
  ];

  calculateSum(childSum: number[]) {
    console.log(childSum[0], childSum[1], childSum);
    this.total += Number(childSum[1]) - childSum[0];
  }
}
