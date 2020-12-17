import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Output() onDismiss = new EventEmitter<Event>()

  constructor() { }

  ngOnInit(): void {
  }

  dismiss(event) {
    this.onDismiss.emit(event);
  }
}
