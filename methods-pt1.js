'use strict';

const initAnimal = () => {
    const animals = ['cat', 'dog'];

    const pushDuck = arr => arr.push('duck');
    const swapWordsInArr = (arr, word1, word2) =>
        arr.includes(word1) ? (arr[arr.indexOf(word1)] = word2) : arr;

    console.log(animals);

    pushDuck(animals);
    console.log(animals);

    swapWordsInArr(animals, 'cat', 'tiger');
    console.log(animals);

    return;
};

const initPoetry = () => {
    let first = ['roses', 'are', 'red'],
        second = ['violets', 'are', 'blue'],
        poem;

    const poetry = (firstHalf, secondHalf) =>
        firstHalf && secondHalf
            ? firstHalf.concat(secondHalf)
            : 'check arguments';

    poem = poetry(first, second);
    console.log(poem);

    typeof poem === 'object' ? console.log(poem.join(' ')) : '';

    return;
};

initAnimal();
initPoetry();
