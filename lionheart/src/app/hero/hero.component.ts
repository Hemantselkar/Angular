import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  ngAfterViewInit(): void {

    new Swiper('.heroSwiper', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],

      effect: 'fade',

      fadeEffect: {
        crossFade: true
      },

      loop: true,

      speed: 1500,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }

    });

  }
}
