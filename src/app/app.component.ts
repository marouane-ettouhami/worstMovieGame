import { Component } from '@angular/core';
import { FlopChooserService } from './flop-chooser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops;

  constructor(public flopChooser:FlopChooserService) {

  }

  ngOnInit() {
    this.selectNewFlop();
  }

  selectNewFlop() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  // Feel free to put your own data here if you have other favorite flops
  selectFirst() {
    console.log("First");
  }

  selectSecond() {
    console.log("Second");
  }
	



}
