import ehUmCPF from "./valida-cpf.js";
const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
})

function verificarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
}