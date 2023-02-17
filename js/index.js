let count = 0;
document.getElementById('triangle-btn').addEventListener('click', function(){
    count ++;
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const firstTriangleValue = document.getElementById('triangle-first-value').value;
    const secondTriangleValue = document.getElementById('triangle-second-value').value;

    const areaValue= 0.5 * parseInt(firstTriangleValue) * parseInt(secondTriangleValue);

    const triangleValue = areaValue;

    displayData(triangleTitle, triangleValue);
    
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    count ++;
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    const firstRectangleValue = document.getElementById('rectangle-first-value').value;
    const secondRectangleValue = document.getElementById('rectangle-second-value').value;

    const areaValue= parseInt(firstRectangleValue) * parseInt(secondRectangleValue);

    const rectangleValue = areaValue;

    displayData(rectangleTitle, rectangleValue);
    
})

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    count ++;
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const firstParallelogramValue = document.getElementById('parallelogram-first-value').value;
    const secondParallelogramValue = document.getElementById('parallelogram-second-value').value;

    const areaValue= parseInt(firstParallelogramValue) * parseInt(secondParallelogramValue);

    const parallelogramValue = areaValue;

    displayData(parallelogramTitle, parallelogramValue);
    
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    count ++;
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    const firstRhombusValue = document.getElementById('rhombus-first-value').value;
    const secondRhombusValue = document.getElementById('rhombus-second-value').value;

    const areaValue= 0.5 * parseInt(firstRhombusValue) * parseInt(secondRhombusValue);

    const rhombusValue = areaValue;

    displayData(rhombusTitle, rhombusValue);
    
})

document.getElementById('pentagon-btn').addEventListener('click', function(){
    count ++;
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    const firstPentagonValue = document.getElementById('pentagon-first-value').innerText;
    const secondPentagonValue = document.getElementById('pentagon-second-value').innerText;

    const areaValue= 0.5 * parseInt(firstPentagonValue) * parseInt(secondPentagonValue);

    const pentagonValue = areaValue;

    displayData(pentagonTitle, pentagonValue);
    
})

document.getElementById('ellipse-btn').addEventListener('click', function(){
    count ++;
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    const firstEllipseValue = document.getElementById('ellipse-first-value').innerText;
    const secondEllipseValue = document.getElementById('ellipse-second-value').innerText;

    const areaValue= Math.PI * parseInt(firstEllipseValue) * parseInt(secondEllipseValue);

    const ellipseValue = areaValue.toFixed(2);

    displayData(ellipseTitle, ellipseValue);
    
})

function displayData(shapeTitle, shapeValue) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${count}</td>
        <td>${shapeTitle}</td>
        <td>${shapeValue}cm<sup>2</sup></td>
        <td><button class="btn bg-[#1090D8] border-0">Covert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
}


function load_blog() {
    window.location.href = 'blog.html'
}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var div = document.getElementById( 'colorchange1' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
};
div.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
};

var div = document.getElementById( 'colorchange2' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
};

var div = document.getElementById( 'colorchange3' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
};

var div = document.getElementById( 'colorchange4' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
};

var div = document.getElementById( 'colorchange5' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
};

var div = document.getElementById( 'colorchange6' );
div.onmouseover = function() {
  this.style.backgroundColor = getRandomColor();
};
div.onmouseout = function() {
    this.style.backgroundColor = 'transparent';
};