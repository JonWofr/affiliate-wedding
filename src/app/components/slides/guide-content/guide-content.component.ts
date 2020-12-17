import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guide-content',
  templateUrl: './guide-content.component.html',
  styleUrls: ['./guide-content.component.scss']
})
export class GuideContentComponent implements OnInit {

  @Output() showSiteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  showNewSite(value: number) {
    this.showSiteEvent.emit(value);
  }

}
