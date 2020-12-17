import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-slide',
  templateUrl: './selection-slide.component.html',
  styleUrls: ['./selection-slide.component.scss']
})
export class SelectionSlideComponent implements OnInit {

  @Output() showSiteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  showNewSite(value: number) {
    this.showSiteEvent.emit(value);
  }

  onClickCheckOutWixButton() {
    window.open('https://wix.com')
  }

}
