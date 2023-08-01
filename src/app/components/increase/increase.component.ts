import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styles: [
  ]
})
export class IncreaseComponent {
  
  @Input( 'valor' ) progreso: number = 50;

  @Output( 'value' ) outputValue:EventEmitter<number> = new EventEmitter();

  changeValue(value: number):any {

    if (this.progreso >= 100 && value >= 0) {
      this.outputValue.emit(100) ;
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && value < 0) {
      this.outputValue.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + value;
    this.outputValue.emit( this.progreso );
  }

}


