import { getRandomThrow } from '../get-random-throw.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('It should return rock when provided a one', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return paper when provided a two', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return scissors when provided a three', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return return draw when provided 1', (expect) => {

    const expected = 'draw';

    const actual = didUserWin(1, 1);

    expect.equal(actual, expected);
});

test('It should return return win when provided 1, 3', (expect) => {

    const expected = 'won';

    const actual = didUserWin(1, 3);

    expect.equal(actual, expected);
});
