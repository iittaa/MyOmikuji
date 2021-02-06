"use strict";

{
  function setword() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = ["red", "blue", "pink"]
  let word;
  let loc = 0;
  let starttime;
  let isPlaying = false;
  const target = document.getElementById("target");

  document.addEventListener("click", () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    starttime = Date.now();
    setword();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== word[loc]){
      return;
    }
    loc++;
    target.textContent = "_".repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const FinishTime = ((Date.now() - starttime) / 1000).toFixed(2);
        const result = document.getElementById("result");
        result.textContent = `タイム ${FinishTime}秒`;
        return;
      }
      setword();
    }
  });
}