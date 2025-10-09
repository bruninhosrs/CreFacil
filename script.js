const form = document.querySelector("#formCrefacil");
const nomeInput = document.querySelector("#name");
const cpfInput = document.querySelector("#cpf");
const celularInput = document.querySelector("#celular");
const celularRefInput = document.querySelector("#celularRef");

const validarCampo = () => {
  const nome = nomeInput.value;
  const cpf = cpfInput.value;
  const phone = celularInput.value;
  const phoneRef = celularRefInput.value;
  console.log(
    `Nome: ${nome} CPF ${cpf} Celular ${phone} Celular Ref ${phoneRef}`
  );
};

const enviarForm = (e) => {
  e.preventDefault();

  validarCampo();
};

form.addEventListener("submit", enviarForm);
