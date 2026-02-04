document.querySelector('#btn8').addEventListener('click', function(){
    const s = Number(document.querySelector('#sal8').value);
    const saida = document.querySelector('#ir8');

    let taxa = 0;
    if (s <= 1434) taxa = 0;
    else if (s <= 2150) taxa = 7.5;
    else if (s <= 2866) taxa = 15;
    else if (s <= 3582) taxa = 22.5;
    else taxa = 27.5;

    const imposto = s * (taxa / 100);

    saida.value = `Alíquota: ${taxa}% - IR: R$ ${imposto.toFixed(2)}`;
});
