import { Component } from '@angular/core';

@Component({
  templateUrl: 'gestures.html'
})
export class GesturesPage {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  public rotate: number = 0;
  public pinch: number = 0;

  constructor() {}

  pressEvent(event) {
    this.press++;
  }

  panEvent(event) {
    this.pan++;
  }

  swipeEvent(event) {
    this.swipe++;
  }

  tapEvent(event) {
    this.tap++;
  }

  rotateEvent(event) {
    this.rotate++;
  }

  pinthEvent(event) {
    this.pinch++;
  }
}
