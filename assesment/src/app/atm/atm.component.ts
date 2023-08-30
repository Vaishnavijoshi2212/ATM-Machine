import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { event } from 'jquery';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css'],
})
export class AtmComponent {
  
  console = console;
  name: any;
  number: any;
  fiveHundred: any;
  twoThousand: any;
  twoHundred: any;
  oneHundred: any;
  hundred: any;
  total: number = 0;

  fivehundred: string = '0';
  twohundred: string = '0';
  Hundred: string = '0';
  withdraw: any;
  withDrawAmount: any;
  onehundred: string = '0';
  errname: string = '';
  todaydate: any;
  ngOnit(){
    this.getWithDraw()
    this.getTotalValue()
  }


  constructor(public api: ApiService, private logger: LogService) {}

  getTotalValue() {
    this.twoThousand = this.twoThousand;
    this.fivehundred = this.fiveHundred;
    this.twohundred = this.twoHundred;
    this.onehundred = this.oneHundred;

    if (
      Number(
        this.twoThousand || this.fiveHundred || this.twoHundred || this.hundred
      )
    ) {
      this.total =
        Number(this.twoThousand) * 2000 +
        Number(this.fiveHundred) * 500 +
        Number(this.twoHundred) * 200 +
        Number(this.Hundred) * 100;
      console.log(this.total);
      this.errname = 'Deposit';
      this.todaydate = new Date("Wed Aug 30 2023 12:07:05 GMT+0530")
    } else if (
      this.twoThousand == 0 ||
      this.fiveHundred == 0 ||
      this.twoHundred == 0 ||
      this.hundred == 0
    ) {
      this.errname = "Can't Withdraw";
    }
  }
  getWithDraw() {
    this.withdraw = Number(this.withDrawAmount);
    console.log(this.withdraw);


    if (this.total > this.withdraw) {
      this.total = ((this.total) - (this.withdraw));
      this.errname = 'Withdraw';
      this.console.log(this.total)
      this.todaydate = new Date("Wed Aug 30 2023 12:07:05 GMT+0530")
    } else if(this.total == 0) {
      this.errname = "Can't Withdraw";
    }else{
      this.errname = "Can't Withdraw";

    }

    console.log(this.total);
  }
}
