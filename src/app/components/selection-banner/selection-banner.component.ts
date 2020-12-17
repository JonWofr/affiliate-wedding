import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-banner',
  templateUrl: './selection-banner.component.html',
  styleUrls: ['./selection-banner.component.scss']
})
export class SelectionBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateTriangle()
  }

  animateTriangle(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1'
            document.querySelectorAll('.triangle-bottomleft')[0].classList.add('animate__animated', 'animate__slideInUp')
            observer.disconnect()
          }
        });
      },
      options
    );
    document.querySelectorAll('.triangle-bottomleft').forEach((value) => {
      observer.observe(value);
    });
  }

}
