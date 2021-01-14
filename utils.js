import { getRandomThrow } from './get-random-throw.js';

export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    }

    //Paper & Rock
    if (getRandomThrow(player === 'Paper' && computer === 'Rock')) {
        return 'You won!';
    }

    if (getRandomThrow(player === 'Rock' && computer === 'Paper')) {
        return 'You lose.';
    }

    //Paper & Scissors
    if (getRandomThrow(player === 'Paper' && computer === 'Scissors')) {
        return 'You lose.';
    }

    if (getRandomThrow(player === 'Scissors' && computer === 'Paper')) {
        return 'You won!';
    }

    //Scissors & Rock
    if (getRandomThrow(player === 'Scissors' && computer === 'Rock')) {
        return 'You lose';
    }

    if (getRandomThrow(player === 'Rock' && computer === 'Scissors')) {
        return 'You won!';
    }
}