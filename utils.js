export function didUserWin(player, computer) {
    if (player === computer) return 'draw';

    if (player === 'Rock' && computer === 'Paper') return 'lost';

    if (player === 'Paper' && computer === 'Scissors') return 'lost';

    if (player === 'Scissors' && computer === 'Rock') return 'lost';

    else return 'won';
}
