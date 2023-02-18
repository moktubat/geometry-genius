// let count for serial number of shape calculate
let count = 0;

// A simple function for first input value of shape.
function getFirstInputValueById(firstInputId){
    const firstInputValue = document.getElementById(firstInputId).value;
    return firstInputValue;
}
// A simple function for second input value of shape.
function getSecondInputValueById(secondInputId){
    const secondInputValue = document.getElementById(secondInputId).value;
    return secondInputValue;
}


// Add click event handler with triangle button.
document.getElementById('triangle-btn').addEventListener('click', function(){
    count ++;
    // Get value from tag using .innerText.
    const triangleTitle = document.getElementById('triangle-title').innerText;
    // Get value from input filed using by function.
    const firstTriangleValueStr = getFirstInputValueById('triangle-first-value');
    const firstTriangleValue = parseFloat(firstTriangleValueStr);
    const secondTriangleValueStr = getSecondInputValueById
    ('triangle-second-value');
    const secondTriangleValue = parseFloat(secondTriangleValueStr);

    // validation check , calculete value and display output passing by perameter.
    if(isNaN(firstTriangleValue) || isNaN(secondTriangleValue))
    {
    alert("Wrong input!!!");
    return false;
    }
    else if(firstTriangleValue < 0 || secondTriangleValue < 0){
        alert("Input Positive Number!!!");
        return false;
    }
    else {
    const areaValue= 0.5 * firstTriangleValue * secondTriangleValue;
    const triangleValue = areaValue;
    displayData(triangleTitle, triangleValue);
    }
})

// Add click event handler with rectangle button.
document.getElementById('rectangle-btn').addEventListener('click', function(){
    count ++;
    // Get value from tag using .innerText.
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    // Get value from input filed using by function.
    const firstRectangleValueStr = getFirstInputValueById('rectangle-first-value');
    const firstRectangleValue = parseFloat(firstRectangleValueStr);
    const secondRectangleValueStr = getSecondInputValueById('rectangle-second-value');
    const secondRectangleValue = parseFloat(secondRectangleValueStr);
    
    // validation check , calculete value and display output passing by perameter.
    if(isNaN(firstRectangleValue) || isNaN(secondRectangleValue))
    {
    alert("Wrong input!!!");
    return false;
    }
    else if(firstRectangleValue < 0 || secondRectangleValue < 0){
        alert("Input Positive Number!!!");
        return false;
    }
    else {
    const areaValue= firstRectangleValue * secondRectangleValue;
    const rectangleValue = areaValue;
    displayData(rectangleTitle, rectangleValue);
    }   
})

// Add click event handler with parallelogram button.
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    count ++;
    // Get value from tag using .innerText.
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    // Get value from input filed using by function.
    const firstParallelogramValueStr = getFirstInputValueById('parallelogram-first-value');
    const firstParallelogramValue = parseFloat(firstParallelogramValueStr);
    const secondParallelogramValueStr = getSecondInputValueById('parallelogram-second-value');
    const secondParallelogramValue = parseFloat(secondParallelogramValueStr);
    
    // validation check , calculete value and display output passing by perameter.
    if(isNaN(firstParallelogramValue) || isNaN(secondParallelogramValue))
    {
    alert("Wrong input!!!");
    return false;
    }
    else if(firstParallelogramValue < 0 || secondParallelogramValue < 0){
        alert("Input Positive Number!!!");
        return false;
    }
    else {
    const areaValue= firstParallelogramValue * secondParallelogramValue;
    const parallelogramValue = areaValue;
    displayData(parallelogramTitle, parallelogramValue);
    }
})

// Add click event handler with rhombus button.
document.getElementById('rhombus-btn').addEventListener('click', function(){
    count ++;
    // Get value from tag using .innerText.
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    // Get value from input filed using by function.
    const firstRhombusValueStr = getFirstInputValueById('rhombus-first-value');
    const firstRhombusValue = parseFloat(firstRhombusValueStr);
    const secondRhombusValueStr = getFirstInputValueById('rhombus-first-value');
    const secondRhombusValue = parseFloat(secondRhombusValueStr);
    
    // validation check , calculete value and display output passing by perameter.
    if(isNaN(firstRhombusValue) || isNaN(secondRhombusValue))
    {
    alert("Wrong input!!!");
    return false;
    }
    else if(firstRhombusValue < 0 || secondRhombusValue < 0){
        alert("Input Positive Number!!!");
        return false;
    }
    else {
    const areaValue= 0.5 * firstRhombusValue * secondRhombusValue;
    const rhombusValue = areaValue;
    displayData(rhombusTitle, rhombusValue);
    }
   
})

// A simple function for first value of shape.
function getFirstInnerTextById(firstInnerTextById){
    const firstInputValue = document.getElementById(firstInnerTextById).innerText;
    return firstInputValue;
}
// A simple function for second value of shape.
function getSecondInnerTextById(secondInnerTextById){
    const secondInputValue = document.getElementById(secondInnerTextById).innerText;
    return secondInputValue;
}

// Add click event handler with pentagon button.
document.getElementById('pentagon-btn').addEventListener('click', function(){
    count ++;
    // Get value from id using .innerText.
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    // Get value from id using by function.
    const firstPentagonValue = getFirstInnerTextById('pentagon-first-value');
    const secondPentagonValue = getSecondInnerTextById('pentagon-second-value');
    // Calculate pentagon Area Shape
    const areaValue= 0.5 * parseFloat(firstPentagonValue) * parseFloat(secondPentagonValue);
    const pentagonValue = areaValue;
    // Display pentagonTitle, pentagonValue by fucntion callback.
    displayData(pentagonTitle, pentagonValue);
    
})

// Add click event handler with ellipse button.
document.getElementById('ellipse-btn').addEventListener('click', function(){
    count ++;
    // Get value from id using .innerText.
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    // Get value from id using by function.
    const firstEllipseValue = getFirstInnerTextById('ellipse-first-value');
    const secondEllipseValue = getSecondInnerTextById('ellipse-second-value');
    // Calculate ellipse Area Shape
    const areaValue= Math.PI * parseFloat(firstEllipseValue) * parseFloat(secondEllipseValue);
    const ellipseValue = areaValue.toFixed(2);
    // Display ellipseTitle, ellipseValue by fucntion callback.
    displayData(ellipseTitle, ellipseValue);
    
})

// Area Calculation callback function for all shapes.

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

// Blog page link with JS function.
function load_blog() {
    window.location.href = 'blog.html'
}



// Random BG color change when mouse hover.
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