import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() viewChange = new EventEmitter<string>();

  changeView(viewType: string) {
    this.viewChange.emit(viewType);
  }
}
