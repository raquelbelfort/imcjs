const calcular= (evento) => {
    evento.preventDefault();

let altura = document.getElementById('altura').value;
let peso = document.getElementById('peso').value;
let resultimc = (peso / (altura * altura));
let classificacao;

    if(resultimc < 17){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Muito abaixo do peso)`;
    }
    else if(resultimc > 17 && resultimc < 18.49){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Abaixo do peso)`;
    }
    else if(resultimc > 18.5 && resultimc < 24.99){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Peso normal)`;
    }
    else if(resultimc > 25 && resultimc < 29.99){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Acima do peso)`;
    }
    else if(resultimc > 30 && resultado < 34.99){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Obesidade I)`;
    }
    else if(resultimc > 35 && resultimc < 39.99){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Obesidade II (Severa)`;
    } 
    else if(resultimc > 40){
        classificacao = `Seu IMC resulta em: ${resultimc.toFixed(1)} kg/m². (Obesidade III (Mórbida)`;
    }
    const result = document.getElementById('resultado');
    result.innerHTML = classificacao;
}
const iniciar = () => {
    document.getElementById('calcular').addEventListener('click', calcular);
}

document.addEventListener('DOMContentLoaded', iniciar);