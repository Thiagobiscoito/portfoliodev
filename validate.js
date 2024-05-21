/* PEGANDO O ID DE TODOS OS ELEMENTOS DO FORMULARIO HTML */

const nameField = document.getElementById("name");
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const loader = document.getElementById('loader');
const btnSubmit = document.getElementById('btn-submit');

/* e.preventDefault e para evitar da pagina recarregar e perder as informações digiradas nos campos */

btnSubmit.addEventListener('click', validateData);

function validateData(e) {
    e.preventDefault();

    if(!nameField || nameField.value.length < 3) {
        alert('informe o nome corretamente.');
        return;
    }

    if(!emailField || emailField.value.length < 3) {
        alert('E-mail inválido.');
        return;
    }

    if(!messageField || messageField.value.length < 3) {
        alert('Mensagem Inválida.');
        return;
    }


    loader.style.display = "block";
    btnSubmit.style.display = "none";

    setTimeout(() => {
        alert('Mensagem Enviada com sucesso!');
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";

        loader.style.display = "none"
        btnSubmit.style.display = "block"
    }, 1000);
}