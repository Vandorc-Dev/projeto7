< !DOCTYPE html >
    <
    html lang = "en" >

    <%- include("../partials/head") %> <
    body >
    <%- include("../partials/header") %> <
    main >
    <
    section class = "contato" >
    <
    div class = "container" >
    <
    h1 > Cadastro de produto < /h1>

<
div class = "align-row" >
    <
    form method = "POST"
enctype = "multipart/form-data" >
    <
    label
for = "imagemProduto" > Envie uma imagem < /label> <
    input type = "file"
name = "imagemProduto" >

    <
    label
for = "imagemProduto" > Selecione uma categoria < /label> <
    select name = "categoria_id"
id = "categoria_id" >
    <% categorias.forEach(categoria => {%> <
    option value = "<%= categoria.id %>" > <%= categoria.nome %> < /option>
<% }) %> <
/select>

<
label
for = "nome" > Nome < /label> <
    input type = "text"
id = "nome"
name = "nome" >

    <
    label
for = "descricao" > Descricao < /label> <
    textarea name = "descricao"
id = "descricao" > < /textarea>

<
label
for = "valor" > Valor < /label> <
    input type = "number"
id = "valor"
name = "valor" >
    <
    hr / >
    <
    button type = "submit"
class = "btn btn-primary" > enviar < /button> <
    /form> <
    /div> <
    /div> <
    /section> <
    /main>
<%- include("../partials/footer") %> <
/body>

<
/html>