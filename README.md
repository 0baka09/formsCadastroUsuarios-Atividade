# formsCadastroUsuarios-Atividade

Explicação Código JS
1. document.getElementById('cadastroForm'): Aqui, estamos buscando o formulário com o ID `cadastroForm` no HTML. Isso é necessário para que possamos trabalhar com ele.
2. .addEventListener('submit', function(event) {...}: Estamos adicionando um "ouvinte de evento" ao formulário. Isso significa que, quando alguém tentar enviar o formulário (ou seja, quando clicar no botão de cadastrar), a função dentro do `addEventListener` será executada.
3. event.preventDefault();: Essa linha impede que o formulário seja enviado da maneira normal, que geralmente recarregaria a página. Queremos fazer algo diferente, então evitamos isso.
4. const nome = document.getElementById('nome').value;: Aqui, estamos pegando o valor que o usuário digitou no campo "nome". O `.value` nos dá o que foi escrito nesse campo.
5. const email = document.getElementById('email').value;: Fazemos a mesma coisa, mas para o campo "email". Agora temos as informações que o usuário colocou.
6. const tabelaBody = document.getElementById('tabelaCadastros').querySelector('tbody');: Estamos buscando o corpo da tabela onde os cadastros vão aparecer. O `querySelector('tbody')` nos ajuda a encontrar a parte da tabela que contém as linhas de dados.
7. const novaLinha = tabelaBody.insertRow();: Aqui, estamos criando uma nova linha na tabela. Isso significa que, a cada vez que alguém se cadastra, uma nova linha será adicionada.
8. const celulaNome = novaLinha.insertCell(0);: Estamos criando uma célula na nova linha para o nome. O `0` indica que é a primeira célula da linha.
9. const celulaEmail = novaLinha.insertCell(1);: Fazemos a mesma coisa para o email, mas aqui estamos criando a segunda célula.
10. celulaNome.textContent = nome;: Aqui, estamos colocando o valor do nome que o usuário digitou na célula correspondente da tabela.
11. celulaEmail.textContent = email;: Da mesma forma, estamos colocando o e-mail na célula da tabela.
12. document.getElementById('cadastroForm').reset();: Finalmente, essa linha limpa os campos do formulário após o cadastro, permitindo que o usuário comece a digitar novamente.

Resumindo

Basicamente, esse código JavaScript cuida do que acontece quando o usuário envia o formulário. Ele impede que a página seja recarregada, pega os dados que o usuário digitou, adiciona esses dados a uma tabela e, por fim, limpa os campos para um novo cadastro. Isso tudo acontece de forma dinâmica, sem precisar recarregar a página!
