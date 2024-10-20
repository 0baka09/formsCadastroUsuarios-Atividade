document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const tabelaBody = document.getElementById('tabelaCadastros').querySelector('tbody');
    const novaLinha = tabelaBody.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    // Limpar os campos após o cadastro
    document.getElementById('cadastroForm').reset();
});
