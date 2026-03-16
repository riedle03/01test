const statusConfig = {
  class: {
    text: "수업중",
    src: "assets/signal-class.svg",
    alt: "수업중 상태를 나타내는 빨간 신호등"
  },
  activity: {
    text: "활동중",
    src: "assets/signal-activity.svg",
    alt: "활동중 상태를 나타내는 노란 신호등"
  },
  break: {
    text: "쉬는중",
    src: "assets/signal-break.svg",
    alt: "쉬는중 상태를 나타내는 초록 신호등"
  }
};

const signalImage = document.querySelector("#signal-image");
const statusText = document.querySelector("#status-text");
const buttons = document.querySelectorAll("button[data-status]");

function updateState(status) {
  const config = statusConfig[status];
  if (!config) return;

  signalImage.src = config.src;
  signalImage.alt = config.alt;
  statusText.textContent = `현재 상태: ${config.text}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    updateState(button.dataset.status);
  });
});
