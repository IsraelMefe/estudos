document.querySelector('#btn1').addEventListener('click', function(){
    const total = Number(document.querySelector('#total').value);
    const parcelas = parseInt(document.querySelector('#parcelas').value);
    const saida = document.querySelector('#saida1');

    let taxa = null;

    if (parcelas === 1) taxa = 0;
    else if (parcelas === 2) taxa = 3;
    else if (parcelas === 4) taxa = 7;
    else { 
        saida.value = 'Parcelas permitidas: 1, 2 ou 4.'; 
        return; 
    }

    const valorTotal = total * (1 + taxa / 100);
    const valorParcela = valorTotal / parcelas;

    saida.value =
        `Taxa: ${taxa}%\nValor total: R$ ${valorTotal.toFixed(2)}\nValor da parcela: R$ ${valorParcela.toFixed(2)}`;
});
