import { LightningElement } from "lwc";
import Confetti from "@salesforce/resourceUrl/confetti";
import { loadScript } from "lightning/platformResourceLoader";

export default class LwcConfetti extends LightningElement {
  colors = [
    "#610B0B",
    "#FFFF00",
    "#FF00BF",
    "#0040FF",
    "#585858",
    "#00FFBF",
    "#FE642E",
    "#FFBF00",
    "#0101DF",
    "#FF8000",
    "#00FF00",
    "#FF0040",
    "#A901DB",
    "#0B0B3B",
    "#FF0000"
  ];

  confettiInitialized = false;

  renderedCallback() {
    if (this.confettiInitialized) {
      return;
    }
    this.confettiInitialized = true;
    loadScript(this, Confetti);
  }

  basicCannon() {
    confetti({
      particleCount: 200,
      startVelocity: 60,
      spread: 150,
      origin: {
        y: 0.9
      },
      colors: this.colors
    });
  }

  fireworks() {
    const end = Date.now() + 15 * 100;

    const interval = setInterval(function () {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 450,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: this.colors
      });
    }, 200);
  }

  confettiShower() {
    const end = Date.now() + 30 * 100;
    const colors = this.colors;

    (function frame() {
      confetti({
        particleCount: 20,
        startVelocity: 0,
        ticks: 300,
        origin: {
          x: Math.random(),
          y: 0
        },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  winnerCelebration() {
    const end = Date.now() + 15 * 100;
    const colors = this.colors;

    (function frame() {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 25,
        origin: {
          x: 0,
          y: 0.65
        },
        colors: colors
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 25,
        origin: {
          x: 1,
          y: 0.65
        },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  burstMode() {
    const end = Date.now() + 15 * 75;

    const colors = this.colors;

    (function frame() {
      confetti({
        particleCount: 7,
        startVelocity: 25,
        angle: 335,
        spread: 10,
        origin: {
          x: 0,
          y: 0
        },
        colors: colors
      });
      confetti({
        particleCount: 7,
        startVelocity: 25,
        angle: 205,
        spread: 10,
        origin: {
          x: 1,
          y: 0
        },
        colors: colors
      });

      confetti({
        particleCount: 7,
        startVelocity: 35,
        angle: 140,
        spread: 30,
        origin: {
          x: 1,
          y: 1
        },
        colors: colors
      });

      confetti({
        particleCount: 7,
        startVelocity: 35,
        angle: 40,
        spread: 30,
        origin: {
          x: 0,
          y: 1
        },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
