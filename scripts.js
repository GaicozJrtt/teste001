function accepted () {
  alert("Parabéns você está grávida!! #jogueidentro :)");
  // redireciona para um URL após clicar no SIM
  location.href = "https://www.youtube.com/watch?v=hteXIl0Xtvg&list=RDhteXIl0Xtvg&start_radio=1";
}

function newPosition(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

function declined(btn) {
  // btn declarado na função
  btn.style.position = 'absolute';
  btn.style.bottom = newPosition(10, 90);
  btn.style.left = newPosition(10, 90);
  console.log('ops......');
}
