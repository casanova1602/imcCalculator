const formulario = document.querySelector('.form')
const result = document.querySelector('.message');

function calcularIMC(e) {
    const pesoInput = document.querySelector('#peso');
    const alturaInput = document.querySelector('#altura');

    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value);

    e.preventDefault();

    const cont = validar(altura, peso);

    if (cont) {
        const resultado = calculoIMC(altura, peso);
        textIMC(resultado);
    }
}

formulario.addEventListener('submit', calcularIMC)

function validar(altura, peso) {

    if (peso < 0 && altura < 0 || !altura && !peso) {
        setResultado('Peso e Altura Inválido', 'error');
        return false;
    } else if (peso < 0 || !peso) {
        setResultado('Peso Inválido', 'error');
        return false;
    } else if (altura < 0 || !altura) {
        setResultado('Altura Inválido', 'error')
        return false;
    } else {
        return true
    }
}

function calculoIMC(altura, peso) {
    return (peso / (altura ** 2));
}

function textIMC(resultado) {
    const fixo = `Seu IMC é ${resultado.toFixed(2)}`
    if (resultado < 18.5) {
        setResultado(`${fixo} (Abaixo do peso)`, 'attention')
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        setResultado(`${fixo} (Peso Normal)`, 'assert')
    } else if (resultado >= 25 && resultado <= 29.9) {
        setResultado(`${fixo} (Sobrepeso)`, 'attention')
    } else if (resultado >= 30 && resultado <= 34.9) {
        setResultado(`${fixo} (Obesidade grau 1)`, 'caution')
    } else if (resultado >= 35 && resultado <= 39.9) {
        setResultado(`${fixo} (Obesidade grau 2)`, 'caution')
    } else if (resultado >= 40) {
        setResultado(`${fixo} (Obesidade grau 3)`, 'caution')
    }
}

function setResultado(msg, type) {
    result.innerHTML = '';
    result.className = '';
    const p = document.createElement('p');
    result.classList.add(type);
    p.innerHTML = msg;
    result.appendChild(p);
}