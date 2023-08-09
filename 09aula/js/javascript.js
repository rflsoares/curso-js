/*console.log(window); o objeto window é um escopo global. Esse tipo de escopo 
deve ser evitado pois é muito sensível e pode sobrescrever variáveis.
*/

/*outerWidth é a largura da tela
console.log(window.outerWidth);
*/

this.user='Webdesign'

function teste() {
    console.log(this)
}
teste()


