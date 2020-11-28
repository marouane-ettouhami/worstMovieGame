import { Component } from '@angular/core';
import { FlopChooserService } from './flop-chooser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops;
  result;
  hideButton = true;
  hideResult = false;
  constructor(public flopChooser:FlopChooserService) {

  }

  ngOnInit() {
    this.selectNewFlops();
  }

  selectNewFlops() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }


  // Feel free to put your own data here if you have other favorite flops
  selectFirst() {
    console.log("First");
    let choice= this.flopChooser.isChoiceCorrect(this.flops.first,      this.flops.second);
    if(choice) 
      this.result = "Correct! You win!!!!!"
    else
      this.result = "InCorrect! You lose!!!!!"
    this.hideButton = false;
    this.hideResult = false;
  }

  selectSecond() {
    console.log("Second");
    let choice = this.flopChooser.isChoiceCorrect(this.flops.second, this.flops.first);
    if(choice) 
      this.result = "Correct! You win!!!!!"
    else
      this.result = "InCorrect! You lose!!!!!"
    this.hideButton = false;
    this.hideResult = false;
  }
	
  PlayAgain() {
    this.selectNewFlops();
    this.hideButton = true;
    this.hideResult = true;
  }
}
