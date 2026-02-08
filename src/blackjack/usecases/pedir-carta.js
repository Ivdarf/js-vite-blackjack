/**
 * pedir una carta de la baraja
 * @param {Array<string>} deck baraja en juego
 * @returns {string} carta escojida 
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}