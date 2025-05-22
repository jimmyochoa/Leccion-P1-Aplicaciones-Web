  function mostrarResultado(texto) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
    resultado.classList.remove('d-none'); // Mostrar la alerta
  }

  function convertirAc() {
    const input = document.getElementById('valorTemperatura').value;
    if (input === "") return;
    const fahrenheit = parseFloat(input);
    const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    mostrarResultado(`${fahrenheit}°F = ${celsius}°C`);
  }

  function convertirAf() {
    const input = document.getElementById('valorTemperatura').value;
    if (input === "") return;
    const celsius = parseFloat(input);
    const fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
    mostrarResultado(`${celsius}°C = ${fahrenheit}°F`);
  }