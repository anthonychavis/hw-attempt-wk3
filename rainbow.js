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

const sentenceRainbowColors = arr =>
    arr?.length > 1
        ? `The colors of the rainbow are ${arr
              .slice(0, -1)
              .join(', ')} & ${arr.at(-1)}.`
        : 'Something seems a bit off';

console.log(sentenceRainbowColors(rainbowColorsArr));
