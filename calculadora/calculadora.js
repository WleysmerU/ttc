function calcular(operacion) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.textContent = "⚠️ Por favor, ingresa dos números válidos.";
    return;
  }

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        resultadoDiv.textContent = "🚫 No se puede dividir por cero.";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      resultadoDiv.textContent = "❌ Operación no válida.";
      return;
  }

  resultadoDiv.textContent = `Resultado: ${resultado}`;
}
