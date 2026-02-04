document.querySelector('#btn10').addEventListener('click', function () {
    const n = parseInt(document.querySelector('#n10').value);
    const saida = document.querySelector('#saida10');

    if (isNaN(n) || n < 0) {
        saida.value = 'Informe N inteiro e não-negativo.';
        return;
    }

    let f = 1;

    for (let i = 2; i <= n; i++) {
        f *= i;
    }

    saida.value = f;
});
