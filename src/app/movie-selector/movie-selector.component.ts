import { Component, EventEmitter,  Input, Output } from '@angular/core';


@Component({
  selector: 'my-movie-selector',
  templateUrl: './movie-selector.component.html',
  styles: []
})
export class MovieSelectorComponent  {
  @Input() movie;
  @Output() select = new EventEmitter();
  constructor() {

  }
  onSelect() {
    this.select.emit();
  }

}