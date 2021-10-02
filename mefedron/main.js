let name = document.querySelector("input[name=name]");
let phone = document.querySelector("input[name=phone]");
let nameOut = document.querySelector(".name");
let phoneOut = document.querySelector(".phone");



name.oninput = function () {
  nameOut.textContent = name.value;
}

phone.oninput = function () {
  phoneOut.textContent = phone.value;
}
