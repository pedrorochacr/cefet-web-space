// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui

function GravitacaoUniversal(G, M1, M2, d) {
    const F = (G * M1 * M2) / (d * d);
    return F;
}

const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', function() {
    const G = document.querySelector('#constante').value;
    const M1 = document.querySelector('#massa1').value;
    const M2 = document.querySelector('#massa2').value;
    const d = document.querySelector('#distancia').value;

    const resultado = GravitacaoUniversal(G, M1, M2, d);

    document.querySelector('#resultado').value = resultado;
});
