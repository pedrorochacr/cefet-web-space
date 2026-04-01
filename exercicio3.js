// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const botoes = document.querySelectorAll('.botao-expandir-retrair');

botoes.forEach(function(botao) {
    botao.addEventListener('click', function(e) {
        const paragrafo = e.currentTarget.parentElement;
        paragrafo.classList.toggle('expandido');

        if (paragrafo.classList.contains('expandido')) {
            e.currentTarget.textContent = '-';
        } else {
            e.currentTarget.textContent = '+';
        }
    });
});
