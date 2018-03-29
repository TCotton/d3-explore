/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

// select SVG canvas
let svg = d3.select('#canvas');

// append rectangle
let rect = svg.append('rect');

rect.attr('x', 25);
rect.attr('y', 0);
rect.attr('width', 150);
rect.attr('height', 60);
rect.attr('fill', 'blue');

const rect = d3.select('#canvas')