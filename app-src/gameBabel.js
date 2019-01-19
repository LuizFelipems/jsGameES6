/** Cria o canvas */
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d') // Contexto do canvas
canvas.width = 512
canvas.height = 480
document.body.appendChild(canvas) // Adiciona um filho no body

/** Background do jogo*/
let bgReady = false
const bgImage = new Image()
bgImage.onload = function () { // Carrega a imagem do Background
    bgReady = true // Quando o Background for carregado, ele está pronto para ser lido
}
bgImage.src = 'images/background.png' // Atribui o src da imagem do Background

/** Imagem do Herói */
let heroReady = false
const heroImage = new Image()
heroImage.onload = function () { // Carrega a imagem do Heroi
    heroReady = true // Quando o Herói for carregado, ele está pronto para ser lido
}
heroImage.src = 'images/mario.png' // Atribui o src da imagem do Heroi

/** Imagem do Monstro */
let monsterRead = false
const monsterImage = new Image()
monsterImage.onload = function () { // Carrega a imagem do Monstro
    monsterRead = true // Quando o Monstro for carregado, ele está pronto para ser lido
}
monsterImage.src = 'images/star.png' // Atribui o src da imagem do Monstro

/** Objetos do jogo */
const hero = { // Objeto do Heroi
    speed: 256 // Movimento em pixels por segundo
}
const monster = {} // Objeto do Monstro
let monstersCaught = 0 // Contador dos monstros apanhados

/** Capturando os eventos do controle do teclado */
const keysDown = {}

window.addEventListener('keydown', function (e) { // Captura o evento de keyDown da tecla pressionada
    // console.log(e)
    keysDown[e.keyCode] = true // Adiciona a propriedade e.keyCode = true no objeto keysDown
}, false)

window.addEventListener('keyup', function (e) { // Captura o evento de keyDown da tecla pressionada
    // console.log(e)
    delete keysDown[e.keyCode] // Deleta a propriedade e.keyCode do objeto keysDown
}, false)

/** Reseta o jogo quando o jogador pega o monstro */
const reset = function () {
    /** 
     * O Herói vai iniciar na metade da tela no eixo X e Y. 
    */
    hero.x = canvas.width / 2
    hero.y = canvas.height / 2

    /**
     * Posiciona o monstro randomicamente na tela .
     * 
     * O tamanho do monstro 32px + (número entre 0 e 1 * (largura da tela - 64px))
     * O tamanho do monstro 32px + (número entre 0 e 1 * (altura da tela - 64px))
     * 64px é só para afastar um pouco o monstro da tela
    */
    monster.x = 32 + (Math.random() * (canvas.width - 64))
    monster.y = 32 + (Math.random() * (canvas.height - 64))
}

/** Atualiza os objetos do jogo */
const update = function (modifier) {
    if (38 in keysDown) { // seta para cima
        hero.y -= hero.speed * modifier // posição Y: é a posição Y - (velocidade do heroi * 1000)
    }
    if (40 in keysDown) { // seta para baixo
        hero.y += hero.speed * modifier // posição Y: é a posição Y + (velocidade do heroi * 1000)
    }
    if (37 in keysDown) { // seta para esquerda
        hero.x -= hero.speed * modifier // posição X: é a posição X - (velocidade do heroi * 1000)
    }
    if (39 in keysDown) { // seta para direita
        hero.x += hero.speed * modifier // posição X: é a posição X + (velocidade do heroi * 1000)
    }

    /** Colisão dos personagens */
    if (
        hero.x <= (monster.x + 32) // Se a posição y do herói enconstar <= (perto ou exatamente) no monstro E 32px
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught // Aumenta contador de monstros pegos
        reset() // Volta do começo
    }
}

/** Renderiza tudo */
const render = function () {
    if (bgReady) { // Se o backgraund foi carregado 
        ctx.drawImage(bgImage, 0, 0) // Desenha o backgraund na tela
    }
    if (heroReady) { // Se o herói foi carregado 
        ctx.drawImage(heroImage, hero.x, hero.y) // Desenha o herói na tela
    }
    if (monsterRead) { // Se o monstro foi carregado 
        ctx.drawImage(monsterImage, monster.x, monster.y) // Desenha o monstro na tela
    }

    /** Pontuação */
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.font = '24px Helvetica'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32)
}

/** Controla o loop do jogo */
const main = function () {
    const now = Date.now() // Data agora em milisegundos
    const delta = now - then // delta = (agora em milisegundos - Então(then)) 

    update(delta / 1000)
    render()

    then = now

    // Executa isso o mais breve possível
    requestAnimationFrame(main) // Faz o trabalho de chamar o main toda vez que o jogo finalizar
}

// Suporte cross-browser para requestAnimationFrame
const w = window
const requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame

let then = Date.now() // Então(then), terá a data em milisegundo de quando o jogo iniciar 
reset()
main()
