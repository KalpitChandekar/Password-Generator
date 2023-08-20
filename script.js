const upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerSet = "qwertyuiopasdfghjklzxcvbnm";
const numberSet = "1234567890";
const symbolSet = "!~@#$%^&()*+-/";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("uper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomNumber = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperset);
  }
  console.log(password);
};
