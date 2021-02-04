var botao = document.querySelector("#botao-submit")
botao.addEventListener("click", function(event){
    event.preventDefault()

    verificar_nome()
    
    verificar_cpf()

    verificar_email()

}) 

function verificar_nome(){
    var nome = document.querySelector(".input-nome")
    var nome_alvo = nome.value
    var exp = /[A-Z][a-z].* [A-Z][a-z].*/
    var resultado = null
    if(resultado = exp.exec(nome_alvo)){
        nome.classList.add("form-acerto")
        mostrar_mensagem_acerto_nome()
    }
    else {
        nome.classList.remove("form-acerto")
        nome.classList.add("form-erro")
        mostrar_mensagem_erro_nome()
    }
}

function verificar_cpf(){
    var cpf = document.querySelector(".input-cpf")
    var cpf_alvo = cpf.value
    var exp = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    var resultado = null
    if(resultado = exp.exec(cpf_alvo)){
        cpf.classList.add("form-acerto")
        mostrar_mensagem_acerto_cpf()
    }   
    else {
        cpf.classList.remove("form-acerto")
        cpf.classList.add("form-erro")
        mostrar_mensagem_erro_cpf()
    }
}

function verificar_email(){
    var email = document.querySelector(".input-email")
    var email_alvo = email.value
    var exp = /\S+@\S+\.com/
    var resultado = null
    if(resultado = exp.exec(email_alvo)){
        email.classList.add("form-acerto")
        mostra_mensagem_acerto_email()
    }
    else {
        email.classList.remove("form-acerto")
        email.classList.add("form-erro")
        mostra_mensagem_erro_email()
    }
}
function mostrar_mensagem_erro_nome(){
    var erro_nome = document.querySelector(".mensagem-nome")
    erro_nome.innerHTML = "Verifique o Nome inserido!!"
}

function mostrar_mensagem_erro_cpf(){
    var erro_cpf = document.querySelector(".mensagem-cpf")
    erro_cpf.innerHTML = "Verifique o CPF inserido!!"
}

function mostra_mensagem_erro_email() {
    var erro_email = document.querySelector(".mensagem-email")
    erro_email.innerHTML = "Verifique o Email inserido!!"
}

function mostrar_mensagem_acerto_nome(){
    var acerto_nome = document.querySelector(".mensagem-nome")
    acerto_nome.innerHTML = "Nome cadastrado com sucesso!!"
    acerto_nome.style.color = "#00FF00"
}

function mostrar_mensagem_acerto_cpf(){
    var acerto_cpf = document.querySelector(".mensagem-cpf")
    acerto_cpf.innerHTML = "CPF cadastrado com sucesso!!"
    acerto_cpf.style.color = "#00FF00"
}

function mostra_mensagem_acerto_email() {
    var acerto_email = document.querySelector(".mensagem-email")
    acerto_email.innerHTML = "Email cadastrado com sucesso!!"
    acerto_email.style.color = "#00FF00"
}