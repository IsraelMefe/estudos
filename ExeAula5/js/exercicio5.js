document.querySelector('#btn5').addEventListener('click', function(){
    const n1 = Number(document.querySelector('#n51').value);
    const n2 = Number(document.querySelector('#n52').value);
    const n3 = Number(document.querySelector('#n53').value);
    const saida = document.querySelector('#saida5');

    const media = (n1 + n2 + n3) / 3;

    let conceito = '';
    if (media >= 6) conceito = 'APROVADO';
    else if (media >= 3) conceito = 'EXAME';
    else conceito = 'REPROVADO';

    saida.value = `${media.toFixed(2)} - ${conceito}`;
});
