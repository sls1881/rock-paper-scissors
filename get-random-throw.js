
export function getRandomThrow(rps) {
    if (rps === 1) {
        return 'Rock';
    } else if (rps === 2) {
        return 'Paper';
    } else if (rps === 3) {
        return 'Scissors';
    }
}