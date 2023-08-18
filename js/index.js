// Triangle 
document.getElementById('triangle-btn').addEventListener('click', function () {
    const base = getInputField('triangle-base-input');
    const height = getInputField('triangle-height-input');

    if (isNaN(base) || isNaN (height)){
        alert('please type number');
        return;
    }

    const area = 0.5 * base * height;
    setElementInnerText('triangle-result', area);
    addToCalculatedHistory('Triangle', area);

})
// Rectangle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const width = getInputField('rectangle-width-input');
    const length = getInputField('rectangle-length-input');

    if (isNaN(width) || isNaN (length)){
        alert('please type number');
        return;
    }

    const area = width * length;
    setElementInnerText('rectangle-result', area)
    addToCalculatedHistory('Rectangle', area);

})

// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const base = getInputField('parallelogram-base-input');
    const height = getInputField('parallelogram-height-input');

    if (isNaN(base) || isNaN (height)){
        alert('please type number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-result', area);
    addToCalculatedHistory('Parallelogram', area);
})

// Rhombus 
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const d1 = getInputField('rhombus-d1-input');
    const d2 = getInputField('rhombus-d2-input');

    if (isNaN(d1) || isNaN (d2)){
        alert('please type number');
        return;
    }

    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-result', area);
    addToCalculatedHistory('Rhombus', area);
})

// pentagon 
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const p = getInputField('pentagon-p-input');
    const b = getInputField('pentagon-b-input');

    if (isNaN(p) || isNaN (b)){
        alert('please type number');
        return;
    }

    const area = 0.5 * p * b;
    setElementInnerText('pentagon-result', area);
    addToCalculatedHistory('pentagon', area);
})

// Ellipse
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const a = getInputField('ellipse-a-input');
    const b = getInputField('ellipse-b-input');

    if (isNaN(a) || isNaN (b)){
        alert('please type number');
        return;
    }

    const area = Math.PI * a * b;

    setElementInnerText('ellipse-result', area);
    addToCalculatedHistory('Ellipse', area);
})


// reusable function 

function getInputField(fieldID) {
    const inputFieldId = document.getElementById(fieldID).value;
    const inputValue = parseFloat(inputFieldId)
    document.getElementById(fieldID).value = '';
    

    return inputValue;

}
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function addToCalculatedHistory (areaType, area){
    const calculatedHistory = document.getElementById('calculated-history');
    const li = document.createElement('li');
    li.innerText = areaType + ' ' + area;
    calculatedHistory.append(li);

}