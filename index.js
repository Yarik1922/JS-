function checkModule() {
  const num1 = Number(prompt("Eneter first number"));
  const num2 = Number(prompt("Eneter second number"));
  if (num1 % num2 === 0) {
    alert(`${num1}%${num2}=${num1 % num2}   module!`);
  } else {
    alert(`${num1}%${num2}=${num1 % num2}   not  module!`);
  }
}
