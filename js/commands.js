// Sistema de comandos do terminal
const commands = {
    help: () => {
        return `<div class="success">COMANDOS DISPONÍVEIS:
[help].......... Mostra esta ajuda
[sobre]......... Informações da organização
[membros]........ Lista de membros
[projetos]....... Projetos atuais
[clear]......... Limpa o terminal
[history]....... Mostra histórico
[list]......... Lista arquivos
[open ARQUIVO].. Abre arquivo</div>`;
    },

    sobre: () => {
        return `<div class="success">[H4CK3R ORGANIZATION]
Fundação: 2023
Missão: Proteger informações críticas
Lema: "Data is the new power"</div>`;
    },

    membros: () => {
        return `<div class="success">MEMBROS:
- John Smith (CEO)
- Alice Johnson (CTO)
- Bob Williams (Segurança)
- Carol Davis (Pesquisa)</div>`;
    },

    projetos: () => {
        return `<div class="success">PROJETOS ATIVOS:
1. Criptografia Quântica
2. Banco de Dados Distribuído
3. Interface Neural</div>`;
    },

    clear: function () {
        terminal.innerHTML = '<div class="system">Terminal limpo</div><br>';
        return '';
    },

    history: function () {
        if (commandHistory.length === 0) {
            return '<div class="system">Nenhum comando no histórico</div>';
        }
        return `<div class="success">HISTÓRICO:<br>${commandHistory.map((cmd, i) => `${i + 1}. ${cmd}`).join('<br>')
            }</div>`;
    },

    list: function () {
        const files = Object.keys(fileDatabase);
        let output = '<div class="success">ARQUIVOS DISPONÍVEIS:</div><ul>';

        files.forEach(file => {
            output += `<li>${file} - ${fileDatabase[file].title.replace("ARQUIVO #", "")
                }</li>`;
        });

        output += '</ul><div class="system">Use: open CODIGO_DO_ARQUIVO</div>';
        return output;
    },

    open: function (args) {
        if (!args) {
            return '<div class="error">Especifique o arquivo. Ex: open NC404-1997</div>';
        }

        const fileKey = args.trim().toUpperCase();
        if (!fileDatabase[fileKey]) {
            return `<div class="error">Arquivo não encontrado: ${args}</div>`;
        }

        return openFile(fileKey);
    }
};

