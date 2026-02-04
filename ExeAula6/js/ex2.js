document.querySelector('#btnEx2').addEventListener('click', function () {

  const linhas = parseInt(prompt("Quantidade de linhas:"));
  const colunas = parseInt(prompt("Quantidade de colunas:"));

  if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
    document.querySelector('#saidaEx2').innerHTML = "Valores inválidos.";
    return;
  }

  let tabela = `<table>`;

  for (let i = 0; i < linhas; i++) {
    tabela += "<tr>";

    for (let j = 0; j < colunas; j++) {

      const cor = (j % 2 === 0) ? "yellow" : "lime";

      tabela += `
        <td style="background:${cor};">
          (${i}, ${j})
        </td>`;
    }

    tabela += "</tr>";
  }

  tabela += "</table>";

  document.querySelector('#saidaEx2').innerHTML = tabela;
});
