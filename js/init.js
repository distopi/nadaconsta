// Inicializa todas as dependências
window.addEventListener('load', () => {
    if (!terminal) initTerminal();
    if (!commands) console.error("Sistema de comandos não carregado!");
    if (!fileDatabase) console.error("Banco de dados não carregado!");
    
    // Verifica se todos os componentes estão carregados
    const checkReady = setInterval(() => {
        if (terminal && commands && fileDatabase) {
            clearInterval(checkReady);
            console.log("Sistema terminal pronto");
        }
    }, 100);
});