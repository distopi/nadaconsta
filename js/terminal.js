// Variáveis globais do terminal
let commandHistory = [];
let historyIndex = -1;
let terminal, cmd;

// Funções do terminal
function initTerminal() {
    terminal = document.getElementById('terminal');
    cmd = document.getElementById('cmd');
}

function addToTerminal(content) {
    terminal.innerHTML += content;
    terminal.scrollTop = terminal.scrollHeight;
}

function openFile(filename) {
    const file = fileDatabase[filename];
    if (!file) return `<div class="error">Arquivo ${filename} não encontrado</div>`;

    const fileId = `file-${Date.now()}`;
    const fileHTML = `
        <div id="${fileId}" class="file-container file-loading">
            <h3>${file.title}</h3>
            <p><strong>DATA:</strong> ${file.date} | 
            <strong>LOCAL:</strong> ${file.location} | 
            <strong>NÍVEL:</strong> <span style="color:${file.color}">${file.classification}</span></p>
            
            <div class="terminal-log">
                > SISTEMA v3.1.4 | ACESSANDO: ${filename}
                <div class="progress-bar"><div class="progress-fill" id="${fileId}-progress"></div></div>
                <div id="${fileId}-text"></div>
            </div>
            
            <div id="${fileId}-content" class="file-content">
                ${file.content}
            </div>
        </div>`;
    
    addToTerminal(fileHTML);
    simulateLoading(fileId);
    return '';
}

function simulateLoading(fileId) {
    let progress = 0;
    const bar = document.getElementById(`${fileId}-progress`);
    const text = document.getElementById(`${fileId}-text`);
    const container = document.getElementById(fileId);
    
    const messages = [
        "VERIFICANDO CREDENCIAIS...",
        "ACESSANDO REDE SEGURA...",
        "DECODIFICANDO...",
        "CONFIRME ACESSO: ******",
        "CARREGANDO DADOS..."
    ];
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15);
        if (progress > 100) progress = 100;
        
        bar.style.width = `${progress}%`;
        
        if (progress % 25 === 0) {
            text.innerHTML += `> ${messages[Math.floor(Math.random() * messages.length)]}<br>`;
        }
        
        if (progress === 100) {
            clearInterval(interval);
            text.innerHTML += "<br>> ACESSO CONCEDIDO<br>";
            setTimeout(() => {
                container.classList.replace('file-loading', 'file-loaded');
                document.getElementById(`${fileId}-content`).style.display = 'block';
            }, 800);
        }
    }, 200);
}