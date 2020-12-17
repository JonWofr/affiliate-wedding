import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  swiper?: Swiper;

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  showNewSlide(slideIndex: number){
    this.swiper.slideTo(slideIndex)
    
  }
}
