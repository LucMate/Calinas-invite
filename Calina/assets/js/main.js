const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const simBtn = document.querySelector(".btn-sim");
const naoBtn = document.querySelector(".btn-nao");

const wrapperRect = wrapper.getBoundingClientRect();
const naoBtnRect = naoBtn.getBoundingClientRect();

simBtn.addEventListener("click", () => {
  question.innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/Cv8tdehvvqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
});

naoBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - naoBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - naoBtnRect.height)) + 1;

  naoBtn.style.left = i + 'px';
  naoBtn.style.top = j + 'px';
});
