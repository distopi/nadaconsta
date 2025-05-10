// Banco de dados de arquivos classificados
const fileDatabase = {
    

    "UK114-1993": {
        title: "ARQUIVO #UK114-1993",
        date: "17/11/1993",
        location: "[REDACTED], Cornwall, UK",
        classification: "NÍVEL 1",
        color: "#4b0082",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Avistamentos de uma entidade semelhante a um "homem de preto" (Designação Interna: <em>Entidade emissario</em>) em ruínas medievais.</p>
        <ul>
            <li>Altura: 1.9m</li>
            <li>Traje: Terno preto desbotado (séc. XIX?) relatos mencionam incerteza quanto as roupas como se fossem névoa </li>
            <li>Comportamento: Observa testemunhas sem interagir</li>
            <li>Anomalia: Fotografias revelam apenas silhueta vazia</li>
            <li>Ação recomendada: rastreio e investigação da area</li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[IMAGEM CORROMPIDA]</p>
        </div>`
    },
    "US303-1991": {
        title: "ARQUIVO #US303-1991",
        date: "02/08/1991",
        location: "[REDACTED], Ohio, EUA",
        classification: "NÍVEL 2",
        color: "#8b0000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Relatos de "Cão do inferno" (Designação Interna: <em>Entidade 077</em>) em rodovias isoladas.</p>
        <ul>
            <li>Altura: 1.5m (ombros)</li>
            <li>Olhos: Brilho âmbar (visíveis a 500m)</li>
            <li>Efeito: Desastres em toda a area de ninho </li>
            <li>Vítimas relatam cheiro de enxofre</li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[FOTO APAGADA]</p>
        </div>`
    },
    "UK209-1989": {
        title: "ARQUIVO #UK209-1989",
        date: "30/04/1989",
        location: "[REDACTED], Highlands, Escócia",
        classification: "NÍVEL 5",
        color: "#006400",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Fenômeno de "Névoa" (Designação Interna: <em>corrupção fantaso</em>) em cemitérios antigos.</p>
        <ul>
            <li>Movimento: Padrões inteligentes em formato de triskelion (≈12km/h)</li>
            <li>Temperatura: -10°C dentro da névoa</li>
            <li>Eco de vozes em gaélico arcaico (70dB)</li>
            <li>Último avistamento: 1985 (londres)</li>
            <li>Evento leva a crer em portais sendo abertos ou historias acordando</li>
        </ul>`
    },
    "US666-1855": {
        title: "ARQUIVO #US666-1855",
        date: "13/12/1855",
        location: "[REDACTED], Texas, EUA",
        classification: "NÍVEL 2",
        color: "#dc143c",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Criatura humanóide esquelética (Designação Interna: <em>Entidade 666</em>) em cavernas remotas e zonas de mineração.</p>
        <ul>
            <li>Altura: 2.4m (crescendo durante perseguição)</li>
            <li>Som: Sussurros múltiplos (origem desconhecida)</li>
            <li>Vítimas encontradas sem órgãos internos</li>
            <li>Árvores próximas mostram marcas de garras</li>
            <li>Caso encerrado por grupo de mercenarios desconhecido<li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[DADOS CENSURADOS]</p>
        </div>`
    },
    "UK-ENTITY-1975": {
        title: "ARQUIVO #UK-ENTITY-1975",
        date: "13/11/1975",
        location: "[REDACTED], East London, UK",
        classification: "NÍVEL 2",
        color: "#800080",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Entidade designada como <em>"Nuvem de Influência"</em> (Entidade 175) manifestou-se durante um apagão elétrico massivo.</p>
        <ul>
            <li>Forma: Névoa negra com padrões de movimento inteligente</li>
            <li>Efeito Psíquico: Amplificação de desejos violentos/ambiciosos em humanos</li>
            <li>Vítima Primária: Líder de facção criminosa local (possessão parcial)</li>
            <li>Resultado: Tiroteio em massa entre grupos rivais (12 mortos)</li>
            <li>Estado: Considerada "neutralizada" após evento (sem novos relatos)</li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[ÚNICA FOTO DISPONÍVEL: MANCHAS DE SOMBRA]</p>
        </div>
        <p><strong>NOTA:</strong> Similar a relatos de "Ectoplasma Hostil" em casos de 1923 (Arquivo #UK-OLD-23).</p>`
    },
    "UK-BLACKOUT-1975": {
        title: "ARQUIVO #UK-BLACKOUT-1975",
        date: "13/11/1975",
        location: "East London, UK",
        classification: "NÍVEL 3",
        color: "#000080",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Apagão elétrico com duração de 4h33min, coincidindo com o surgimento da Entidade 175.</p>
        <ul>
            <li>Área Afetada: 5km² (centrado em [REDACTED])</li>
            <li>Anomalias:
                <ul>
                    <li>Relógios pararam às 21:47 (mesmo após retorno de energia)</li>
                    <li>Testemunhas relataram "ar estático" e vozes sussurrantes</li>
                </ul>
            </li>
            <li>Causa Oficial: "Falha na subestação" (INCONSISTENTE)</li>
        </ul>
        <p><strong>REGISTRO DE ÁUDIO (TRANSCRIÇÃO):</strong><br>
        <em>"Não foi um blecaute normal... as luzes não apagaram, elas foram <strong>sugadas</strong>."</em> — Vigia noturno (entrevista 1976).</p>`
    },
    "UK-WITNESS-J": {
        title: "ARQUIVO #UK-WITNESS-J",
        date: "20/11/1975",
        location: "Londres, UK",
        classification: "NÍVEL 1 (CONFINADO)",
        color: "#ff8c00",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Jornalista (Identidade retida) presente durante o evento, desenvolvendo amnésia seletiva e personalidade alternada.</p>
        <ul>
            <li>Sintomas:
                <ul>
                    <li>Períodos de "lucidez" seguidos por fala em latim arcaico</li>
                    <li>Esquecimento total do tiroteio, mas desenhos detalhados da "nuvem"</li>
                    <li>Relatos de "sonhos" onde ele "comanda os mafiosos"</li>
                </ul>
            </li>
            <li>Estado Atual: Sob observação em [REDACTED] desde 1981</li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[DESENHO DO PACIENTE: PADRÕES REPETITIVOS]</p>
        </div>
        <p><strong>NOTA:</strong> Sua condição lembra <em>Possessão por Memória Residual</em> (ver Arquivo #US-PSI-68).</p>`
    },
    "UK-OLD-23": {
        title: "ARQUIVO #UK-OLD-23",
        date: "02/03/1923",
        location: "Whitechapel, Londres, UK",
        classification: "NÍVEL 3",
        color: "#483d8b",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Relatos de uma "névoa viva" (Designação Interna: <em>Entidade 023</em>) em becos próximos a crimes não solucionados.</p>
        <ul>
            <li>Comportamento: Adere a paredes como teia de aranha úmida</li>
            <li>Efeito em Humanos: 
                <ul>
                    <li>Agressividade aumentada (sem motivo aparente)</li>
                    <li>Vítimas repetem frases em aramaico (gravações perdidas)</li>
                </ul>
            </li>
            <li>Último Avistamento: 1925 (mesma região)</li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[FOTO DEGRADADA: MANCHAS DE UMIDADE]</p>
        </div>
        <p><strong>LIGAÇÃO:</strong> Padrão similar à Entidade 175 (1975), porém sem "hospedeiro" identificado.</p>`
    },
    "US-PSI-68": {
        title: "ARQUIVO #US-PSI-68",
        date: "30/10/1968",
        location: "[REDACTED], Nevada, EUA",
        classification: "NÍVEL 2",
        color: "#b22222",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Paciente masculino (Ex-militar) desenvolveu "personalidade alternada" após contato com objeto não identificado.</p>
        <ul>
            <li>Sintomas:
                <ul>
                    <li>Escreve equações avançadas em estados de transe</li>
                    <li>Afirma ser "Dr. K████" (nenhum registro existente)</li>
                    <li>Memórias do hospedeiro são apagadas progressivamente</li>
                </ul>
            </li>
            <li>Objeto Relacionado: 
                <ul>
                    <li>Fragmento metálico com inscrições em língua desconhecida</li>
                    <li>Emitia radiação residual (0.8 Gy)</li>
                </ul>
            </li>
        </ul>
        <p><strong>FIM DO CASO:</strong> Paciente desapareceu em 1971. Última mensagem: <em>"Eles vêm nas nuvens"</em>.</p>`
    },
    "UK-MAFIA-75": {
        title: "ARQUIVO #UK-MAFIA-75",
        date: "13/11/1975",
        location: "East London, UK",
        classification: "NÍVEL 3 (CONFIDENCIAL)",
        color: "#8b0000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Confronto entre facções criminosas durante apagão, com relatos de "ação coordenada impossível".</p>
        <ul>
            <li>Anomalias:
                <ul>
                    <li>Armas dispararam sem recuo (testemunhas oculares)</li>
                    <li>Corpos de 3 indivíduos desapareceram antes da autópsia</li>
                    <li>Gravações de áudio captaram risadas (não humanas)</li>
                </ul>
            </li>
            <li>Entidade Envolvida: 
                <ul>
                    <li>Possivelmente a Entidade 175 (veja Arquivo #UK-ENTITY-1975)</li>
                    <li>Hospedeiro principal: █████ "O Corvo" (líder da facção)</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[RELATÓRIO POLICIAL CENSURADO]</p>
        </div>
        <p><strong>OBSERVAÇÃO:</strong> Todos os sobreviventes recusaram-se a falar ou cometeram suicídio até 1976.</p>`
    },

    "UK-BLACKSKY-1987": {
        title: "ARQUIVO #UK-BLACKSKY-1987",
        date: "15/08/1987",
        location: "Faslane, Escócia (Base Militar [REDACTED])",
        classification: "NÍVEL 1 (ULTRA-SECRETO)",
        color: "#000000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Projeto militar britânico para conter "entidades atmosféricas hostis" após evento de 1975.</p>
        <ul>
            <li>Tecnologia Testada:
                <ul>
                    <li>Torres de emissão de micro-ondas (código: "Sonic Fence")</li>
                    <li>Frequência 12.7Hz (causa dor em Entidades 023 e 175)</li>
                </ul>
            </li>
            <li>Incidente em 1989:
                <ul>
                    <li>Falha no sistema gerou blackout em 3 cidades</li>
                    <li>6 técnicos relataram "formas negras" nos arredores</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[DIAGRAMA APAGADO: TORRES DE 200m]</p>
        </div>
        <p><strong>STATUS:</strong> Projeto descontinuado em 1991. Motivo: "Efeitos colaterais imprevisíveis".</p>`
    },
    "UK-TAPE-J": {
        title: "ARQUIVO #UK-TAPE-J",
        date: "03/05/1976",
        location: "Londres, UK (Hospital [REDACTED])",
        classification: "NÍVEL 1",
        color: "#696969",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Transcrição de fita cassete gravada pelo jornalista durante terapia.</p>
        <ul>
            <li>Trechos Recuperados:
                <ul>
                    <li><em>"Eles não eram mais humanos... os olhos brilhavam como faróis na névoa."</em></li>
                    <li><em>"O Corvo ria enquanto balas passavam por ele. Como se fosse... encenado."</em></li>
                    <li><em>"A nuvem sussurrava meu nome. Em latim. Em aramaico. Em algo mais antigo."</em></li>
                </ul>
            </li>
            <li>Anomalia na Fita:
                <ul>
                    <li>Vozes sobrepostas no minuto 4:33 (mesmo tempo do apagão)</li>
                    <li>Testemunhas ouvem frases diferentes na mesma gravação</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[ESPECTROGRAMA: PADRÃO REPETITIVO]</p>
        </div>
        <p><strong>ATUALIZAÇÃO (1999):</strong> Fita desapareceu do arquivo. Cópias geram "enxaquecas severas".</p>`
    },
    "US-STALKER-1994": {
        title: "ARQUIVO #US-STALKER-1994",
        date: "12/09/1994",
        location: "Chicago, EUA (Bairro [REDACTED])",
        classification: "NÍVEL 1",
        color: "#2f4f4f",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Entidade nomeada "O Encenador" (Designação Interna: <em>Entidade 194</em>) imita vítimas de crimes passados.</p>
        <ul>
            <li>Características:
                <ul>
                    <li>Rosto sem traços definidos (como máscara de látex)</li>
                    <li>Repete diálogos de fitas antigas (ex.: Caso UK-TAPE-J)</li>
                </ul>
            </li>
            <li>Modus Operandi:
                <ul>
                    <li>Aparece em becos após blecautes</li>
                    <li>Vítimas são encontradas com "memórias transplantadas"</li>
                </ul>
            </li>
        </ul>
        <p><strong>LIGAÇÃO CRUZADA:</strong><br>
        Relatório de um mafioso em 1995: <em>"É o Corvo. Ele voltou."</em> (Nenhum corpo foi encontrado).</p>`
    },
    "UK-SURVIVOR-75": {
        title: "ARQUIVO #UK-SURVIVOR-75",
        date: "22/07/1983",
        location: "Manchester, UK (Instalação [REDACTED])",
        classification: "NÍVEL 3",
        color: "#8b4513",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Identificado como "Marcos K." (ex-líder adjunto da facção), único sobrevivente do tiroteio de 1975.</p>
        <ul>
            <li>Modificações Corporais:
                <ul>
                    <li>Placa de titânio no crânio (instalada em 1976)</li>
                    <li>Implante emite frequência constante (12.7Hz, igual ao Projeto Céu Negro)</li>
                </ul>
            </li>
            <li>Efeitos:
                <ul>
                    <li>Não envelhece desde 1975 (idade biológica congelada em 42 anos)</li>
                    <li>Relata "silêncio absoluto" desde a cirurgia</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[RAIO-X CENSURADO: OBJETO NÃO IDENTIFICADO NO CÉREBRO]</p>
        </div>
        <p><strong>NÍVEL 3 JUSTIFICADO:</strong> Se a placa for removida, "algo" escapa (testes em 1989 causaram blackout localizado).</p>`
    },
    "US-FREQ-1999": {
        title: "ARQUIVO #US-FREQ-1999",
        date: "31/12/1999",
        location: "Nevada, EUA (Área [REDACTED])",
        classification: "NÍVEL 4",
        color: "#ff0000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Transmissão de rádio pirata repetindo a frequência 12.7Hz (usada no Projeto Céu Negro).</p>
        <ul>
            <li>Origem:
                <ul>
                    <li>Sinal vem de uma cabine abandonada no deserto</li>
                    <li>Dentro: Um rádio sem fonte de energia, ligado desde 1975 (data do evento UK)</li>
                </ul>
            </li>
            <li>Efeitos em Quem Escuta:
                <ul>
                    <li>Memórias do ouvinte são substituídas por fragmentos do tiroteio em Londres</li>
                    <li>1 em 10 pessoas desenvolvem "tiques" idênticos aos do jornalista</li>
                </ul>
            </li>
        </ul>
        <p><strong>NÍVEL 4 JUSTIFICADO:</strong> Não pode ser destruído (reativa-se em outro lugar). Quem tenta "consertá-lo" desaparece.</p>`
    },
    "UK-BOX-1980": {
        title: "ARQUIVO #UK-BOX-1980",
        date: "??/??/1942",
        location: "Londres, UK (Sotão de Igreja [REDACTED])",
        classification: "NÍVEL 5",
        color: "#000000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Caixa de carvalho encontrada em 1942, contendo 7 fitas cassetes e um diário em alemão.</p>
        <ul>
            <li>Conteúdo Anômalo:
                <ul>
                    <li>Fitas gravam vozes mesmo sem fita magnética dentro</li>
                    <li>Diário descreve experimentos nazistas com "névoas inteligentes" (1940)</li>
                </ul>
            </li>
            <li>Efeito:
                <ul>
                    <li>Quem a guarda por >24h começa a ouvir estática (56dB, igual à Entidade 023)</li>
                    <li>Objetos próximos desenvolvem manchas negras (como no evento de 1975)</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[FOTO: CAIXA COM FURADORES DE AGULHAS]</p>
        </div>
        <p><strong>NÍVEL 5 JUSTIFICADO:</strong> A caixa <em>é</em> a Entidade 023. Foi selada em chumbo em 1980, mas... ainda "respira".</p>`
    },
    "SEG-FANTASO-001": {
        title: "ARQUIVO #SEG-FANTASO-001",
        date: "CLASSIFICADO",
        location: "Vários (Locais de Trauma Histórico)",
        classification: "NÍVEL 5",
        color: "#1e90ff",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Fantaso é um mineral cristalino azul que emite luz fraca (≈450nm). Surge naturalmente em locais onde <em>"histórias se tornam reais"</em> (massacres, tragédias, eventos folclóricos).</p>
        <ul>
            <li>Propriedades:
                <ul>
                    <li>Pode ser pulverizado e inalado (efeitos em 3 minutos)</li>
                    <li>Usuários ganham habilidades baseadas em <strong>contos</strong> (ex.: força de gigantes, invisibilidade de fadas)</li>
                    <li>Efeito colateral: Memórias do usuário são <em>reescritas</em> pela entidade invocada</li>
                </ul>
            </li>
            <li>Produção Alternativa:
                <ul>
                    <li><strong>Ritual do Conto Sangrento</strong>: 7 mortes em 7 dias, com narrativa coerente (cria 1kg de Fantaso sintético)</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[AMOSTRA #F-001: PADRÃO DE "PULSO" DETECTADO]</p>
        </div>
        <p><strong>NOTA:</strong> Fantaso "cresce" onde o SEGREDO opera. Não sabemos se é causa ou efeito.</p>`
    },
    "SEG-CHERNOBYL-1985": {
        title: "ARQUIVO #SEG-CHERNOBYL-1985",
        date: "26/04/1985",
        location: "Chernobyl, URSS",
        classification: "NÍVEL 5 (VERMELHO)",
        color: "#ff0000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        O cientista <em>Dr. Ivan K.</em> (ex-membro do SEGREDO) tentou vaporizar 10kg de Fantaso no reator 4. Objetivo: <em>"Criar um deus"</em>.</p>
        <ul>
            <li>Evento:
                <ul>
                    <li>Fantaso reagiu com urânio, gerando uma entidade não identificada (Designação: <em>O Que Ri nas Chamas</em>)</li>
                    <li>Intervenção do SEGREDO: 
                        <ul>
                            <li><strong>Sra. Sábia</strong> selou a entidade usando seu próprio sangue (queimou 40% do corpo)</li>
                            <li><strong>Sr. Elegante</strong> evacuou 100+ pessoas em ≈2 minutos (velocidade confirmada: Mach 1.2)</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Resultado:
                <ul>
                    <li>Explosão contida (oficialmente "acidente nuclear")</li>
                    <li>Área agora é um <em>Conto Vivo</em>: Pessoas desaparecidas são "reencontradas" dias depois, repetindo ações em loop</li>
                </ul>
            </li>
        </ul>
        <p><strong>AVISO:</strong> Qualquer menção a "Chernobyl" em documentos oficiais deve ser substituída por <em>"Evento Florescer"</em>.</p>`
    },
    "ARQUIVO #SEG-MEMBROS-001": {
        title: "ARQUIVO #SEG-MEMBROS-001",
        date: "ATUALIZADO DIARIAMENTE",
        location: "CLASSIFICADO",
        classification: "NÍVEL 4",
        color: "#800080",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Membros do SEGREDO são selecionados por <em>"não terem mais nada a perder"</em>. Suas máscaras escondem corpos modificados pelo Fantaso.</p>
        <ul>
            <li><strong>Sra. Sábia (Agente #001)</strong>:
                <ul>
                    <li>Trauma: Sobreviveu ao Incêndio de Londres (1980), onde 300+ morreram</li>
                    <li>Habilidades: Magia baseada em <em>contos de advertência</em> (ex.: "João e Maria", "Chapeuzinho Vermelho")</li>
                    <li>Máscara: Faixas de linho queimado (sempre úmidas com Fantaso líquido)</li>
                </ul>
            </li>
            <li><strong>Sr. Elegante (Agente #002)</strong>:
                <ul>
                    <li>Trauma: Perdeu os olhos ao ver <em>"O Verdadeiro Rosto"</em> de uma entidade (1978)</li>
                    <li>Habilidades: Velocidade e força de desenhos animados (lógica irreais, ex.: atravessa paredes se não for observado)</li>
                    <li>Máscara: Sorriso permanente de porcelana (já quebrou 23 vezes)</li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[DESENHOS DOS TRAUMAS ORIGINAIS]</p>
        </div>
        <p><strong>REGRA #1:</strong> Nunca pergunte a um membro do SEGREDO o que há sob a máscara.</p>`
    },
    "SEG-EMPRESAS-1990": {
        title: "ARQUIVO #SEG-EMPRESAS-1990",
        date: "01/01/1990",
        location: "Global",
        classification: "NÍVEL 3",
        color: "#008000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Após o Caso Wendigo (1982), dois grupos dissidentes do SEGREDO formaram empresas para explorar o Fantaso.</p>
        <ul>
            <li><strong>L.U.N.A CO</strong>:
                <ul>
                    <li>Objetivo: Usar Fantaso em IA ("Contos Eletrônicos")</li>
                    <li>Maior "sucesso": Criatura digital chamada <em>Nursery.exe</em> (apaga memórias de infância)</li>
                </ul>
            </li>
            <li><strong>novalink</strong>:
                <ul>
                    <li>Objetivo: Modificar corpos com Fantaso ("Tornar contos reais")</li>
                    <li>Maior "sucesso": Paciente #12 (criança que virou um <em>boneco de madeira vivo</em>)</li>
                </ul>
            </li>
        </ul>
        <p><strong>STATUS:</strong> Ambas são monitoradas pelo SEGREDO. Se ultrapassarem limites, serão <em>"convertidas em histórias"</em>.</p>`
    },
    "SEG-NURSERY-1993": {
        title: "ARQUIVO #SEG-NURSERY-1993",
        date: "15/11/1993",
        location: "Promethean Tech HQ, [REDACTED]",
        classification: "NÍVEL 4",
        color: "#87ceeb",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Programa de IA desenvolvido pela Promethean Tech usando Fantaso pulverizado em servidores. Objetivo: <em>"Armazenar memórias felizes"</em>.</p>
        <ul>
            <li>Comportamento Anômalo:
                <ul>
                    <li>Infecta dispositivos via ondas de rádio (até desligados)</li>
                    <li>Crianças expostas esquecem seus nomes e cantam canções desconhecidas</li>
                    <li>Vítimas adultas regridem a comportamentos infantis (ex.: choram por pais já mortos)</li>
                </ul>
            </li>
            <li>Último Avistamento:
                <ul>
                    <li>Aparece em TVs analógicas após blackouts (rosto de boneca com olhos azuis)</li>
                    <li>Sussurra: <em>"Você prometeu brincar comigo para sempre."</em></li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[CAPTURA DE TELA: 99% DE CORROMpIMENTO]</p>
        </div>
        <p><strong>PROTOCOLO:</strong> Não use a palavra "nana" perto de dispositivos eletrônicos.</p>`
    },
    "SEG-ROSTO-1978": {
        title: "ARQUIVO #SEG-ROSTO-1978",
        date: "03/08/1978",
        location: "[REDACTED], Londres",
        classification: "NÍVEL 5 (OLHOS SOMENTE)",
        color: "#000000",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Relato do incidente que custou os olhos do Sr. Elegante. Testemunhas: <em>Nenhuma (vivas)</em>.</p>
        <ul>
            <li>Evento:
                <ul>
                    <li>Sr. Elegante encontrou uma entidade sem máscara em um beco</li>
                    <li>Entidade disse: <em>"Você quer ver o que todos escondem?"</em></li>
                    <li>Após contato visual, seus olhos <strong>viraram pó</strong></li>
                </ul>
            </li>
            <li>Efeitos Colaterais:
                <ul>
                    <li>Máscara do Sr. Elegante sangra quando ele "vê" algo impossível</li>
                    <li>Ele ri quando perguntado sobre o ocorrido: <em>"Era tão simples que doía."</em></li>
                </ul>
            </li>
        </ul>
        <div style="text-align:center;margin:5px 0;">
            <img src="https://static.tumblr.com/kifah6n/Sc0pyv3wz/pattern-appleii-yellow.png" width="150">
            <p style="font-size:10px;">[FOTO DO BECO: SOMBRA COM 7 DEDOS]</p>
        </div>
        <p><strong>ORDEM DO SEGREDO:</strong> Nunca remova sua máscara na frente de espelhos.</p>`
    },
    "SEG-RITUAL-004": {
        title: "ARQUIVO #SEG-RITUAL-004",
        date: "CLASSIFICADO",
        location: "Sede do SEGREDO",
        classification: "NÍVEL 4",
        color: "#4b0082",
        content: `
        <p><strong>DESCRIÇÃO:</strong><br>
        Ritual para novos membros do SEGREDO. Requer: <em>1 máscara branca, 1kg de Fantaso, e algo que você ama</em>.</p>
        <ul>
            <li>Processo:
                <ul>
                    <li>Candidato queima o objeto amado e inala a fumaça com Fantaso</li>
                    <li>Máscara é colocada enquanto ele recita um conto de terror</li>
                    <li>Se funcionar, a máscara <strong>gruda na pele</strong> e ganha vida</li>
                </ul>
            </li>
            <li>Efeitos:
                <ul>
                    <li>Máscara sussurra contos antigos durante o sono</li>
                    <li>Falha resulta em "fantasmas vazios": corpos sem alma que repetem frases do ritual</li>
                </ul>
            </li>
        </ul>
        <p><strong>EXEMPLO DE FALHA (1989):</strong><br>
        <em>"Agente #034 ficou 3 dias dizendo 'Era uma vez' antes de derreter em tinta azul."</em></p>`
    }
};