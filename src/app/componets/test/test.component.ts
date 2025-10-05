import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../derective/hihlight.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  title = 'інтерполяція';
  firstName = 'Myrosja';
  lastName = 'H';

  getFullName() {
    return `Мене звуть ${this.firstName} ${this.lastName}`;
  }

  isEnabled: boolean = false; // true або false

  isActive: boolean = false; // true або false
  isDisabled: boolean = true; // false або true

  isClikedState: boolean = false;

  toggleState() {
    this.isClikedState = true;
  }

  inputText: string = '';

  //------------передача даних від батьківського до дочірного компоненту--------------------------

  @Input() childMessage: string = '';

  //------------передача даних від дочірних компонентів батьківському компоненту----------

  @Output() messageFromChild = new EventEmitter<string>();

  SendMessageToParent() {
    this.messageFromChild.emit('Я дочірний компонент');
  }
  //----------------------------------------------

  users = ['Alice', 'Bob', 'Charlie'];

  //-----------------------------
  items = [
    { id: 1, name: 'Яблуко' },
    { id: 2, name: 'Банан' },
    { id: 3, name: 'Апельсин' },
  ];
}
