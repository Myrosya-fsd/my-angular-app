import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  title = 'інтерполяція';
  firstName = 'Myrosja';
  lastName = 'Havr';

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
}
