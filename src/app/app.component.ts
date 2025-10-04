import { Component } from '@angular/core';
import { TestComponent } from './componets/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'interview-master';
  messageFromParent = 'Я батьківський компонент';

  messageFromChild: string = '';
  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
