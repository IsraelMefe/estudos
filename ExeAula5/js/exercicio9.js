const saida9 = document.querySelector('#saida9');

document.querySelector('#sum9').addEventListener('click', function(){
    const a = Number(document.querySelector('#a9').value);
    const b = Number(document.querySelector('#b9').value);
    saida9.value = a + b;
});

document.querySelector('#sub9').addEventListener('click', function(){
    const a = Number(document.querySelector('#a9').value);
    const b = Number(document.querySelector('#b9').value);
    saida9.value = a - b;
});

document.querySelector('#mul9').addEventListener('click', function(){
    const a = Number(document.querySelector('#a9').value);
    const b = Number(document.querySelector('#b9').value);
    saida9.value = a * b;
});

document.querySelector('#div9').addEventListener('click', function(){
    const a = Number(document.querySelector('#a9').value);
    const b = Number(document.querySelector('#b9').value);
    saida9.value = (b === 0) ? 'Erro: divisão por zero' : a / b;
});
