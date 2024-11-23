// Lógica de carrinho simples

const cart = [];
const cartList = document.getElementById("cart-list");
const scheduleForm = document.getElementById("schedule-form");

document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartList.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        li.className = "list-group-item";
        cartList.appendChild(li);
    });
}

// Formulário de Agendamento
if (scheduleForm) {
    scheduleForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Captura os valores dos campos do formulário
        const date = document.getElementById("date")?.value;
        const time = document.getElementById("time")?.value;
        const delivery = document.getElementById("delivery")?.value;

        // Valida os campos do formulário usando switch
        let errorField = null;
        switch (true) {
            case !date:
                errorField = "data";
                break;
            case !time:
                errorField = "horário";
                break;
            case !delivery:
                errorField = "opção de entrega";
                break;
        }

        // Se houver um erro, exibe o alerta correspondente
        if (errorField) {
            alert(`Por favor, preencha o campo: ${errorField}.`);
            return;
        }

        // Exibe a confirmação do agendamento
        alert(`Agendamento confirmado para ${date} às ${time} com opção de ${delivery}.`);
    });
} else {
    console.error("O formulário de agendamento não foi encontrado.");
}

// Formulário de cadastro
const cadastroForm = document.getElementById("cadastro-form");

if (cadastroForm) {
    cadastroForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Captura os valores dos campos
        const name = document.getElementById("name")?.value.trim();
        const cpf = document.getElementById("cpf")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const phone = document.getElementById("phone")?.value.trim();

        // Validações específicas
        if (!name) {
            alert("Por favor, preencha o campo Nome.");
            return;
        }
        if (!cpf || !/^\d{11}$/.test(cpf)) { // CPF deve conter exatamente 11 números
            alert("Por favor, preencha um CPF válido (apenas números, 11 dígitos).");
            return;
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) { // Validação básica de email
            alert("Por favor, preencha um e-mail válido.");
            return;
        }
        if (!phone || phone.length < 10) { // Validação básica para telefone
            alert("Por favor, preencha um telefone válido com DDD.");
            return;
        }

        // Confirmação do cadastro
        alert(`Obrigado por se cadastrar no Viva Market\n\nConfirme suas informações abaixo:\n\nNome: ${name}\nCPF: ${cpf}\nE-mail: ${email}\nTelefone: ${phone}`);
        cadastroForm.reset(); // Limpa o formulário
    });
} else {
    console.error("Formulário de cadastro não encontrado.");
}
