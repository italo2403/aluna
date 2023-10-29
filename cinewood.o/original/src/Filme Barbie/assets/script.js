const containerAssento = document.querySelector(".assento"),
    resultadoNaTela = document.querySelector("#total-value"),
    cadeirasSelecionadasElement = document.querySelector("#selected-chairs"),
    meiaEntradaSelect = document.querySelector("#meia-entrada");
let valorTotal = 0;
const cadeiras = [
        { nome: "C-1", preço: 32 },
        { nome: "C-2", preço: 32 },
        { nome: "C-3", preço: 32 },
        { nome: "C-4", preço: 32 },
        { nome: "C-5", preço: 32 },
        { nome: "C-6", preço: 32 },
        { nome: "C-7", preço: 32 },
        { nome: "C-8", preço: 32 },
        { nome: "C-9", preço: 32 },
        { nome: "C-10", preço: 32 },
        { nome: "C-11", preço: 32 },
        { nome: "C-12", preço: 32 },
        { nome: "C-13", preço: 32 },
        { nome: "C-14", preço: 32 },
        { nome: "C-15", preço: 32 },
        { nome: "C-16", preço: 32 },
        { nome: "C-17", preço: 32 },
        { nome: "C-18", preço: 32 },
        { nome: "C-19", preço: 32 },
        { nome: "C-32", preço: 32 },
        { nome: "C-21", preço: 32 },
        { nome: "C-22", preço: 32 },
        { nome: "C-23", preço: 32 },
        { nome: "C-24", preço: 32 },
        { nome: "C-25", preço: 32 },
        { nome: "C-26", preço: 32 },
        { nome: "C-27", preço: 32 },
        { nome: "C-28", preço: 32 },
        { nome: "C-29", preço: 32 },
        { nome: "C-30", preço: 32 },
        { nome: "C-31", preço: 32 },
        { nome: "C-32", preço: 32 },
        { nome: "C-33", preço: 32 },
        { nome: "C-34", preço: 32 },
        { nome: "C-35", preço: 32 },
        { nome: "C-36", preço: 32 },
        { nome: "C-37", preço: 32 },
        { nome: "C-38", preço: 32 },
        { nome: "C-39", preço: 32 },
        { nome: "C-40", preço: 32 },
        { nome: "C-41", preço: 32 },
        { nome: "C-42", preço: 32 },
        { nome: "C-43", preço: 32 },
        { nome: "C-44", preço: 32 },
        { nome: "C-45", preço: 32 },
        { nome: "C-46", preço: 32 },
        { nome: "C-47", preço: 32 },
        { nome: "C-48", preço: 32 },
        { nome: "C-49", preço: 32 },
        { nome: "C-50", preço: 32 },
    ],
    criaCadeiras = () => {
        const e = JSON.parse(localStorage.getItem("cadeirasSelecionadas")) || [];
        cadeiras.forEach((o) => {
            const a = document.createElement("div"),
                n = document.createElement("h1");
            (n.innerText = o.nome), n.classList.add("numeração-cadeira"), a.classList.add("cadeira"), e.includes(o.nome) && (a.classList.add("verde"), (valorTotal += o.preço)), a.appendChild(n), containerAssento.appendChild(a);
        }),
            atualizarCadeirasSelecionadas(e),
            atualizarSelectMeiaEntrada(),
            cadeiraPreço(valorTotal);
    };
document.addEventListener("click", (e) => {
    const o = e.target.closest(".cadeira");
    o && cadeiraSelecionadaFn(o.querySelector("h1").innerText, o);
}),
    meiaEntradaSelect.addEventListener("change", () => {
        calcularDesconto();
    });
const cadeiraSelecionadaFn = (e, o) => {
    const a = JSON.parse(localStorage.getItem("cadeirasSelecionadas")) || [];
    if (o.classList.contains("verde")) {
        o.classList.remove("verde");
        const n = cadeiras.find((o) => o.nome === e)?.preço || 0;
        valorTotal -= n;
        const r = a.indexOf(e);
        -1 !== r && a.splice(r, 1);
    } else {
        o.classList.add("verde");
        const n = cadeiras.find((o) => o.nome === e)?.preço || 0;
        (valorTotal += n), a.push(e);
    }
    localStorage.setItem("cadeirasSelecionadas", JSON.stringify(a)), atualizarCadeirasSelecionadas(a), atualizarSelectMeiaEntrada(), cadeiraPreço(valorTotal);
};
function calcularDesconto() {
    const e = document.querySelectorAll(".verde").length,
        o = parseInt(meiaEntradaSelect.value);
    let a = 0,
        n = 0;
    e > 0 && o > 0 && (a = 16 * Math.min(o, e)), (n = 32 * Math.max(0, e - o));
    let r = a + n;
    r < 0 && (r = 0), (resultadoNaTela.innerText = `Total: R$ ${r.toFixed(2).toString().replace(".", ",")}`);
}
function atualizarCadeirasSelecionadas(e) {
    cadeirasSelecionadasElement.innerText = e.join(", ");
}
function cadeiraPreço(e) {
    resultadoNaTela.innerText = `Total: R$ ${e.toFixed(2).toString().replace(".", ",")}`;
}
function atualizarSelectMeiaEntrada() {
    const e = document.querySelectorAll(".verde").length;
    meiaEntradaSelect.innerHTML = "";
    for (let o = 0; o <= e; o++) {
        const e = document.createElement("option");
        (e.value = o), (e.textContent = `${o} Meia${1 === o ? "" : "s"}`), meiaEntradaSelect.appendChild(e);
    }
}

function limpTudo(){
const capaFilme = document.querySelector(".imagem-capa")
const button = document.querySelector(".botão-compra")
const assentos = document.querySelector('.assento')
const tela = document.querySelector('.tela')
const descição = document.querySelector('.descrição-tela')
const container = document.querySelector('.container-cadeiras')
const titulo = document.querySelector('.descrição-assento')
container.style.display = "none"
titulo.style.display = "none"
capaFilme.style.display = "none"
button.style.display = "none"
assentos.style.display = "none"
tela.style.display = "none"
descição.style.display = "none"
const corpoDoProjeto = document.querySelector('.corpo')
corpoDoProjeto.classList.remove('corpo')
corpoDoProjeto.classList.add('corpo2')
const corpo2 = document.querySelector('.corpo2')
const div = document.createElement('div')
div.classList.add('div-center-form')
const formulario = document.createElement("form");
formulario.classList.add('formulario')


formulario.innerHTML = `
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    <br>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone" required>
    <br>
    <label for="cadeirasSelecionadas">Número do Cartão:</label>
    <input type="number" id="cadeirasSelecionadas" name="cadeirasSelecionadas">
    <br>
    <button type="submit">Compra</button>
`;

div.appendChild(formulario)


corpo2.appendChild(div);


formulario.addEventListener("submit", function (e) {
    e.preventDefault();


    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cadeirasSelecionadas = document.getElementById("cadeirasSelecionadas").value;
    const valorTotal = document.getElementById("valorTotal").value;

    alert(`Dados enviados:\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nCadeiras Selecionadas: ${cadeirasSelecionadas}\nValor Total: ${valorTotal}`);
});

}
criaCadeiras();