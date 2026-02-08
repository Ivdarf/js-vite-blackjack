import _ from 'underscore'; 
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

/**
 * Crea un nuevo deck
 * @param {Array<string>} tiposDeCartas ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {

    if( !tiposDeCartas || tiposDeCartas.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;