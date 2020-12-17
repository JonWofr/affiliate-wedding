import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-banner',
  templateUrl: './landing-banner.component.html',
  styleUrls: ['./landing-banner.component.scss']
})
export class LandingBannerComponent implements OnInit {

  constructor() { }

  shouldShowPopup = false

  disclaimerText = 'This website contains affiliate links, meaning, we recommend products and services We have used or know well and may receive a commission if you purchase them too (at no additional cost to you).'

  ngOnInit(): void {

  }

  onVideoClicked() {
    console.log('yay')
  }

  showHideScrollIndicator(): void {
    const arrow = document.getElementsByClassName(
      'arrow-down'
    )[0] as HTMLElement;
    arrow.style.opacity = `${1 - window.scrollY / 300}`;
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: Event): void {
    this.showHideScrollIndicator();
  }

  showPopup(b: boolean) {
    this.shouldShowPopup = b
  }

}
