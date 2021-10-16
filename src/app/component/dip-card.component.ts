import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'dip-card',
  templateUrl: './dip-card.component.html',
  styleUrls: ['../app.component.css']
})

export class DipCardComponent {
  get sum(): number {
    return this._sum;
  }

  @Input()
  name!: string;
  @Input()
  kcal!: number;
  private _sum!: number;

  @Output() valueChange = new EventEmitter();


  onChange(event: any) {
    let prev;

    if (this.sum === undefined) {
      prev = 0;
    } else {
      prev = this._sum;
    }

    const sum = this.kcal * event.target.value;

    this.valueChange.emit([prev, sum]);
    this._sum = sum;
  }

}
