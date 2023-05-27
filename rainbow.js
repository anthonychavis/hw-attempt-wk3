'use strict';

const rainbowColorsArr = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
];

const sentenceRainbowColors = arr => {
    if (arr)
        return `The colors of the rainbows are ${arr
            .slice(0, -1)
            .join(', ')} & ${arr.at(-1)}.`;
    return 'Something seems a bit off';
};
console.log(sentenceRainbowColors(rainbowColorsArr));
