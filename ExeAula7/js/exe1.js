$(document).ready(function () {

    $("#btnCadastrar").click(function () {

        const nome = $("#nome").val().trim();
        const rgm = $("#rgm").val().trim();
        const media = $("#media").val().trim();

        if (!nome || !rgm || !media) {
            alert("Preencha todos os campos.");
            return;
        }

        const aluno = {
            nome: nome,
            rgm: rgm,
            media: parseFloat(media)
        };

        let lista = JSON.parse(localStorage.getItem("alunos")) || [];
        lista.push(aluno);
        localStorage.setItem("alunos", JSON.stringify(lista));

        $("#formAluno")[0].reset();
        $("#nome").focus();
    });


    $("#btnExibir").click(function () {
        let lista = JSON.parse(localStorage.getItem("alunos")) || [];

        if (lista.length === 0) {
            $("#saida").html("<p>Nenhum aluno cadastrado.</p>");
            return;
        }

        let tabela = `
        <table>
            <tr>
                <th>Nome</th>
                <th>RGM</th>
                <th>Média</th>
                <th>Conceito</th>
            </tr>
        `;

        for (let i of lista) {

            let conceito = "";
            let classe = "";

            if (i.media >= 6) {
                conceito = "Aprovado";
                classe = "aprovado";
            } else if (i.media >= 3) {
                conceito = "Exame";
                classe = "exame";
            } else {
                conceito = "Reprovado";
                classe = "reprovado";
            }

            tabela += `
            <tr>
                <td>${i.nome}</td>
                <td>${i.rgm}</td>
                <td>${i.media.toFixed(2)}</td>
                <td class="${classe}">${conceito}</td>
            </tr>
            `;
        }

        tabela += "</table>";

        $("#saida").html(tabela);
    });

});
