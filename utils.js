

export function didUserWin(player, computer) {
    if (player === computer) {
        return 'Draw';
    }

    //Paper & Rock
    if (player === 'Paper' && computer === 'Rock') {
        return 'You won!';
    }

    if (player === 'Rock' && computer === 'Paper') {
        return 'You lost.';
    }

    //Paper & Scissors
    if (player === 'Paper' && computer === 'Scissors') {
        return 'You lost.';
    }

    if (player === 'Scissors' && computer === 'Paper') {

        return 'You won!';
    }

    //Scissors & Rock
    if (player === 'Scissors' && computer === 'Rock') {
        return 'You lost';
    }

    if (player === 'Rock' && computer === 'Scissors') {

        return 'You won!';
    }
}