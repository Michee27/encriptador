const mapaCriptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografarPalavra(palavra) {
    return palavra.replace(/[eioua]/g, letra => mapaCriptografia[letra]);
}

function descriptografarPalavra(palavraCriptografada) {
    const inversoMapa = {};
    for (const chave in mapaCriptografia) {
        inversoMapa[mapaCriptografia[chave]] = chave;
    }
    return palavraCriptografada.replace(/(enter|imes|ai|ober|ufat)/g, match => inversoMapa[match]);
}

function copiarTexto(elementId) {
    var texto = document.getElementById(elementId).innerText;
    var textarea = document.createElement('textarea');
    textarea.textContent = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

document.addEventListener('DOMContentLoaded', function () {
    const conteudoPrincipal = document.querySelector('.conteudo-principal-box');

    document.querySelector('.criptografar').addEventListener('click', () => {
        const texto = document.getElementById('texto').value.trim().toLowerCase();
        conteudoPrincipal.innerHTML = ''; // Limpa o conteúdo anterior
        if (texto === '') {
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
                <button class="copy-btn" onclick="copiarTexto('textoCriptografado')">Copiar</button>
            `;
        }
    });

    document.querySelector('.descriptografar').addEventListener('click', () => {
        const textoCriptografado = document.getElementById('texto').value.trim().toLowerCase();
        conteudoPrincipal.innerHTML = ''; // Limpa o conteúdo anterior
        if (textoCriptografado === '') {
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
                <button class="copy-btn" onclick="copiarTexto('textoDescriptografado')">Copiar</button>
            `;
        }
    });
});
