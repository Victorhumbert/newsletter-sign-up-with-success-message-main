export default function initSubmitEvent() {}

const main = document.querySelector("main");
const btn = document.querySelector(".send-btn");
const successMsg = document.querySelector(".success-msg");
const formInput = document.querySelector("#email");
const form = document.forms[0];

function submit(event) {
  event.preventDefault();
  if (
    formInput.value &&
    formInput.value.includes("@") &&
    formInput.value.includes(".")
  ) {
    document.querySelector(".email-confirm").innerText = formInput.value;
    main.classList.remove("ativo");
    main.addEventListener("animationend", () =>
      successMsg.classList.add("ativo")
    );
  } else {
    form.classList.add("erro");
  }
}

btn.addEventListener("click", submit);

document.querySelector(".dimiss-btn").addEventListener("click", () => {
  window.location.reload();
});
