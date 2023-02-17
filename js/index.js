let count = 0;
document.getElementById('pentagon-btn').addEventListener('click', function(){
    count ++;
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    const firstPentagonValue = document.getElementById('pentagon-first-value').innerText;
    const secondPentagonValue = document.getElementById('pentagon-second-value').innerText;

    console.log(pentagonTitle, firstPentagonValue, secondPentagonValue);

    const areaValue= 0.5 * parseInt(firstPentagonValue) * parseInt(secondPentagonValue);

    const pentagonValue = areaValue;
    console.log(pentagonValue);

    displayData(pentagonTitle, pentagonValue);
    
})

document.getElementById('ellipse-btn').addEventListener('click', function(){
    count ++;
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    const firstEllipseValue = document.getElementById('ellipse-first-value').innerText;
    const secondEllipseValue = document.getElementById('ellipse-second-value').innerText;

    console.log(ellipseTitle, firstEllipseValue, secondEllipseValue);

    const areaValue= Math.PI * parseInt(firstEllipseValue) * parseInt(secondEllipseValue);

    const ellipseValue = areaValue.toFixed(2);
    console.log(ellipseValue);

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