const nomes = [];
const rgms = [];
const notasP = [];
const notasEx = [];
const notasProj = [];
const notasReg = [];

const inpNome = document.querySelector('#nome');
const inpRgm = document.querySelector('#rgm');
const inpP = document.querySelector('#notaP');
const inpEx = document.querySelector('#notaEx');
const inpProj = document.querySelector('#notaProj');
const inpReg = document.querySelector('#notaReg');
const btnCad = document.querySelector('#btnCadastrar');
const btnMost = document.querySelector('#btnMostrar');
const saida = document.querySelector('#saidaTabela');

btnCad.addEventListener('click', function () {
  if (
    !inpNome.value.trim() ||
    !inpRgm.value.trim() ||
    inpP.value === '' ||
    inpEx.value === '' ||
    inpProj.value === '' ||
    inpReg.value === ''
  ) {
    alert('Preencha todos os campos.');
    return;
  }

  const p = Number(inpP.value);
  const ex = Number(inpEx.value);
  const proj = Number(inpProj.value);
  const reg = Number(inpReg.value);

  if (p > 2 || ex > 1 || proj > 2 || reg > 5 || p < 0 || ex < 0 || proj < 0 || reg < 0) {
    alert('Notas fora do intervalo.');
    return;
  }

  nomes.push(inpNome.value.trim());
  rgms.push(inpRgm.value.trim());
  notasP.push(p);
  notasEx.push(ex);
  notasProj.push(proj);
  notasReg.push(reg);

  document.querySelector('#formAluno').reset();
  inpNome.focus();
});

function calcFinal(p, ex, proj, reg) {
  return p + ex + proj + reg;
}

function conceito(nf) {
  if (nf >= 6) return 'Aprovado';
  if (nf >= 3) return 'Avaliação Final';
  return 'Reprovado';
}

btnMost.addEventListener('click', function () {
  if (nomes.length === 0) {
    saida.innerHTML = 'Nenhum aluno cadastrado.';
    return;
  }

  let tabela = `
    <table>
      <thead>
        <tr>
          <th>RGM</th>
          <th>Nome</th>
          <th>P</th>
          <th>Ex</th>
          <th>Proj</th>
          <th>Reg</th>
          <th>Final</th>
          <th>Conceito</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < nomes.length; i++) {
    const nf = calcFinal(notasP[i], notasEx[i], notasProj[i], notasReg[i]);
    const conc = conceito(nf);

    let classe =
      conc === 'Aprovado'
        ? 'aprovado'
        : conc === 'Reprovado'
        ? 'reprovado'
        : 'avaliacao';

    tabela += `
      <tr>
        <td>${rgms[i]}</td>
        <td>${nomes[i]}</td>
        <td>${notasP[i].toFixed(2)}</td>
        <td>${notasEx[i].toFixed(2)}</td>
        <td>${notasProj[i].toFixed(2)}</td>
        <td>${notasReg[i].toFixed(2)}</td>
        <td>${nf.toFixed(2)}</td>
        <td class="${classe}">${conc}</td>
      </tr>
    `;
  }

  tabela += `
      </tbody>
    </table>
  `;

  saida.innerHTML = tabela;
});
