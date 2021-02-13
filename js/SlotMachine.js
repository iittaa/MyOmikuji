"use strict"

{
  class Panel{
    constructor(){
      const section = document.createElement("section");
      section.classList.add("panel");

      this.img = document.createElement("img");
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement("div");
      this.stop.textContent = "STOP"
      this.stop.classList.add("stop","inactive");
      this.stop.addEventListener("click", () => {
        if (this.stop.classList.contains("inactive")) {
          return;
        }
        clearTimeout(this.timeoutId);
        panelsLeft--;
        this.stop.classList.add("inactive");
        if (panelsLeft === 0) {
          start.classList.remove("inactive")
          panelsLeft = 3;
          checkResult();
        }
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector("main");
      main.appendChild(section);
    }
    
    getRandomImage() {
      const images = [
        "../img/seven.png",
        "../img/bell.png",
        "../img/cherry.png",
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    start() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.start();
      }, 100)
    }

    isUnmatched(p1,p2){
      if (this.img.src !== p1.img.src && this.img.src !== p2.img.src){
        return true;
      } else {
        return false;
      }
    }

    unmatch() {
      this.img.classList.add("unmatch");
    }

    activate() {
      this.img.classList.remove("unmatch");
      this.stop.classList.remove("inactive");
    }

  }

  function checkResult() {
    if (panels[0].isUnmatched(panels[1],panels[2])){
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0],panels[2])){
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0],panels[1])){
      panels[2].unmatch();
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  let panelsLeft = 3;

  const start = document.getElementById("start");

  start.addEventListener("click", () => {
    if (start.classList.contains("inactive")) {
      return;
    }
    start.classList.add("inactive");
    panels.forEach((panel) => {
      panel.activate();
      panel.start();
    });
  });






}