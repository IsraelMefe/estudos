document.querySelector('#btnEx1').addEventListener('click', function () {

  const nomes = [];
  let nome;

  while (true) {
    nome = prompt("Digite um nome (ou Cancelar para parar):");

    if (nome === null) break;

    nome = nome.trim();
    if (nome !== "") nomes.push(nome);
  }

  if (nomes.length === 0) {
    document.querySelector('#saidaEx1').innerHTML = "Nenhum nome digitado.";
    return;
  }

  let tabela = `
    <table>
      <thead>
        <tr>
          <th>Índice</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < nomes.length; i++) {
    tabela += `
      <tr>
        <td>${i + 1}</td>
        <td>${nomes[i]}</td>
      </tr>
    `;
  }

  tabela += `
      </tbody>
    </table>
  `;

  document.querySelector('#saidaEx1').innerHTML = tabela;
});
