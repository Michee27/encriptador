const mapaCriptografia = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

function criptografarPalavra(palavra) {
    return palavra.replace(/[eioua]/g, letra => mapaCriptografia[letra])
}

function descriptografarPalavra(palavraCriptografada) {
    const inversoMapa = {}
    for (const chave in mapaCriptografia) {
        inversoMapa[mapaCriptografia[chave]] = chave
    }
    return palavraCriptografada.replace(/(enter|imes|ai|ober|ufat)/g, match => inversoMapa[match])
}

function copiarTexto(elementId, buttonId) {
    var texto = document.getElementById(elementId).innerText;
    var textarea = document.createElement("textarea");
    textarea.textContent = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    var button = document.getElementById(buttonId);
    button.textContent = "Texto Copiado ✓";
    setTimeout(() => {
        button.textContent = "Copiar";
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const conteudoPrincipal = document.querySelector(".conteudo-principal-box");
    const isMobile = window.innerWidth <= 768;
    const clickEvent = isMobile ? "touchstart" : "click";

    document.querySelector(".criptografar").addEventListener(clickEvent, () => {
        const texto = document.getElementById("texto").value.trim().toLowerCase();
        conteudoPrincipal.innerHTML = "";
        if (texto === "") {
            conteudoPrincipal.innerHTML = `
                <img src="../images/High quality products 1 1.png" alt="">
                <h1>Nenhuma mensagem encontrada</h1>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
            `;
        } else {
            const textoCriptografado = criptografarPalavra(texto);
            conteudoPrincipal.innerHTML = `
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Ic_check_36px.svg" alt="">
                <h1>Texto criptografado:</h1>
                <p id="textoCriptografado">${textoCriptografado}</p>
                <button id="copyCriptografado" class="copy-btn">Copiar</button>
            `;
            document.getElementById('copyCriptografado').addEventListener(clickEvent, () => {
                copiarTexto('textoCriptografado', 'copyCriptografado');
            });
        }
    });

    document.querySelector(".descriptografar").addEventListener(clickEvent, () => {
        const textoCriptografado = document.getElementById('texto').value.trim().toLowerCase();
        conteudoPrincipal.innerHTML = "";
        if (textoCriptografado === "") {
            conteudoPrincipal.innerHTML = `
                <img src="../images/High quality products 1 1.png" alt="">
                <h1>Nenhuma mensagem encontrada</h1>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
            `;
        } else {
            const textoDescriptografado = descriptografarPalavra(textoCriptografado);
            conteudoPrincipal.innerHTML = `
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Ic_check_36px.svg" alt="">
                <h1>Texto descriptografado:</h1>
                <p id="textoDescriptografado">${textoDescriptografado}</p>
                <button id="copyDescriptografado" class="copy-btn">Copiar</button>
            `;
            document.getElementById('copyDescriptografado').addEventListener(clickEvent, () => {
                copiarTexto('textoDescriptografado', 'copyDescriptografado');
            });
        }
    });
});
