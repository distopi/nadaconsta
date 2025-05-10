// Inicialização e controle principal
document.addEventListener('DOMContentLoaded', () => {
    initTerminal();
    setupEventListeners();
    showWelcomeMessage();
});

function setupEventListeners() {
    cmd.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e) {
    if (e.key === 'ArrowUp') handleArrowUp();
    else if (e.key === 'ArrowDown') handleArrowDown();
    else if (e.key === 'Enter') handleEnter();
    else if (e.key === 'Tab') handleTab(e);
}

function handleArrowUp() {
    if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        cmd.value = commandHistory[commandHistory.length - 1 - historyIndex];
    }
}

function handleArrowDown() {
    if (historyIndex > 0) {
        historyIndex--;
        cmd.value = commandHistory[commandHistory.length - 1 - historyIndex];
    } else {
        historyIndex = -1;
        cmd.value = '';
    }
}

function handleEnter() {
    const input = cmd.value.trim();
    if (!input) return;
    
    commandHistory.push(input);
    historyIndex = -1;
    
    addToTerminal(`<div><span class="success">C:\\&gt; ${input}</span></div>`);
    processCommand(input);
    cmd.value = '';
}

function handleTab(e) {
    e.preventDefault();
    const input = cmd.value.trim().toLowerCase();
    const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input));
    
    if (matches.length === 1) {
        cmd.value = matches[0];
    }
}

function processCommand(input) {
    const parts = input.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    
    if (commands[cmd]) {
        const output = commands[cmd](args);
        if (output) addToTerminal(output + '<br>');
    } else {
        addToTerminal(`<div class="error">Comando inválido: ${cmd}</div>
        <div class="system">Digite "help" para ajuda</div><br>`);
    }
}

function showWelcomeMessage() {
    const messages = [
        "Inicializando sistema...",
        "Carregando módulos...",
        "Verificando credenciais...",
        "Conectando ao banco de dados...",
        "Sistema pronto! Digite 'help' para começar"
    ];
    
    let i = 0;
    function typeNext() {
        if (i < messages.length) {
            addToTerminal(`<div class="system">${messages[i]}</div>`);
            i++;
            setTimeout(typeNext, 700);
        }
    }
    
    typeNext();
}