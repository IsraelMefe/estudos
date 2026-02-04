document.querySelector('#btn6').addEventListener('click', function(){
    const preco = Number(document.querySelector('#preco6').value);
    const cod = document.querySelector('#cod6').value;
    const saida = document.querySelector('#saida6');

    let final = preco;

    if (cod === '1') final = preco * 0.90;
    else if (cod === '2') final = preco * 0.95;
    else if (cod === '3') final = preco * 1.10;

    saida.value =
        `Preço real: R$ ${preco.toFixed(2)} - Valor a pagar: R$ ${final.toFixed(2)}`;
});
