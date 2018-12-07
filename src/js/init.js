window.onload = function () {
  const input = document.getElementById('amts-in');
  const output = document.getElementById('amts-out');
  const calcButton = document.getElementById('amts-calc');
  calcButton.onclick = function () {
    output.innerText = fizzbuzz(input.value);
  };
};
