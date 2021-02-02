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
    }
    else {
        nome.classList.remove("form-acerto")
        nome.classList.add("form-erro")
        mostrar_erro_nome()
    }
}

function verificar_cpf(){
    var cpf = document.querySelector(".input-cpf")
    var cpf_alvo = cpf.value
    var exp = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    var resultado = null
    if(resultado = exp.exec(cpf_alvo)){
        cpf.classList.add("form-acerto")
    }   
    else {
        cpf.classList.remove("form-acerto")
        cpf.classList.add("form-erro")
        mostrar_erro_cpf()
    }
}

function verificar_email(){
    var email = document.querySelector(".input-email")
    var email_alvo = email.value
    var exp = /\S+@\S+\.com/
    var resultado = null
    if(resultado = exp.exec(email_alvo)){
        email.classList.add("form-acerto")
    }
    else {
        email.classList.remove("form-acerto")
        email.classList.add("form-erro")
        mostra_erro_email()
    }
}
function mostrar_erro_nome(){
    var erro_nome = document.querySelector(".mensagem-erro-nome")
    erro_nome.innerHTML = "Verifique o Nome inserido!!"
}

function mostrar_erro_cpf(){
    var erro_cpf = document.querySelector(".mensagem-erro-cpf")
    erro_cpf.innerHTML = "Verifique o CPF inserido!!"
}

function mostra_erro_email() {
    var erro_email = document.querySelector(".mensagem-erro-email")
    erro_email.innerHTML = "Verifique o Email inserido!!"
}