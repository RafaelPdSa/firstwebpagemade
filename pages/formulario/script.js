// Validacao de nome
let inputName = document.getElementById("name")
let labelName = document.querySelector('label[for="name"]')
let textName = document.getElementById("name-helper")

// Função para  manipular popup

function popUp(input, label) {
    // aparecer popup
    input.addEventListener("focus",()=> {
        label.classList.add("required-popup");

    });
    // sumir popup
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });


}

popUp(inputName, labelName)
// Validar valor do input
inputName.addEventListener("change", (e)=>{
    let caracteres = e.target.value;
    if(caracteres.length < 4) {
        // Estilos dinamicos se o valor não for valido
        inputName.classList.remove("correct")
        inputName.classList.add("error")
        textName.innerText = "Nome precisa conter mais de 4 caracteres"
        textName.classList.add("visible")
        return false;
    } else {
        // Estilos dinamicos se o valor for valido.
        inputName.classList.remove("error")
        textName.classList.remove("visible")
        inputName.classList.add("correct")
    }
    
})

// Chamando função criada para as outras variaveis. Assim fazendo um codigo mais limpo sem redundancia.

let inputEmail = document.getElementById("email")
let labelEmail = document.querySelector('label[for="Email"]')
let textEmail = document.getElementById("email-helper")

inputEmail.addEventListener("change",(event)=>{
    let emailValido = event.target.value;
// Estilização se o  email for valido
    if(emailValido.includes ('@') && emailValido.includes(".com")) {
        inputEmail.classList.remove("error")
        textEmail.classList.remove('visible')        
        inputEmail.classList.add("correct")
    } else {
        //Estilização se o email for invalido.
        inputEmail.classList.remove("correct")
        inputEmail.classList.add('error')
        textEmail.classList.add('visible')
        textEmail.innerText = "Email inválido."
    }
})

popUp(inputEmail, labelEmail)

let inputPassword = document.getElementById("password")
let labelPassword = document.querySelector('label[for="password"]')
let textPassword = document.getElementById("password-helper")

inputPassword.addEventListener("change",(e) =>{
    let validPassword = e.target.value;

    const senhaRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(validPassword.match(senhaRegex)){
        // Estilos dinâmicos caso o valor seja validado
        inputPassword.classList.remove("error");
        inputPassword.classList.add("correct");
        textPassword.classList.remove('visible');
        
    } else{
        // Estilos dinâmicos caso o valor seja inválidado
        inputPassword.classList.remove('correct');
        inputPassword.classList.add("error")
        textPassword.innerText = "Senha inválida"
        textPassword.classList.add("visible")
        
    }
})
 

popUp(inputPassword, labelPassword)

let inputConfsenha = document.getElementById('cpassword')
let labelConfsenha = document.querySelector('label[for="password"]')
let textConfsenha = document.getElementById('confirma-senha-helper')

inputConfsenha.addEventListener('change', (e) =>{
    let confirmSenha = e.target.value;
    
    const RegexX = /^[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(confirmSenha.match(RegexX)){
        // Estilos dinâmicos caso o valor seja validado
        inputConfsenha.classList.remove("error");
        inputConfsenha.classList.add("correct");
        textConfsenha.classList.remove('visible');
        
    } else{
        // Estilos dinâmicos caso o valor seja inválidado
        inputConfsenha.classList.remove('correct');
        inputConfsenha.classList.add("error")
        textConfsenha.innerText = "Senha inválida"
        textConfsenha.classList.add("visible")
        
    }

    console.log("Senha digitada:", confirmSenha);
    console.log("Corresponde à expressão regular:", confirmSenha.match(RegexX));


} )

popUp(inputConfsenha, labelConfsenha)


    document.addEventListener("DOMContentLoaded", function() {
        
        let btn = document.getElementById("btnsub");

        btn.addEventListener("click", function(event) {
            if(inputConfsenha.value === ""){
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');
        } else if(inputPassword.value === ""){
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');

        } if(inputName.value=== ""){ 
            event.preventDefault();
            alert('Por favor, preencha todos os campos.')
        } else if(inputEmail=== ""){
            event.preventDefault();
            alert('Por favor, preencha todos os campos.')
        } 
        

        });
        
    });