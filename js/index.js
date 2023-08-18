// Triangle 
document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = getInputField('triangle-base-input');
    const height = getInputField('triangle-height-input');
    const area = 0.5 * base * height;
    setElementInnerText('triangle-result', area);


})
// Rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const width = getInputField('rectangle-width-input');
    const length = getInputField('rectangle-length-input');
    const area = width * length;
    setElementInnerText('rectangle-result', area)
    
})

// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const base = getInputField('parallelogram-base-input');
    const height = getInputField('parallelogram-height-input');
    const area = base * height;
    setElementInnerText('parallelogram-result', area);
})

// Rhombus 
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const d1 = getInputField('rhombus-d1-input');
    const d2 = getInputField('rhombus-d2-input');
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-result', area);
})

// pentagon 
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const p = getInputField('pentagon-p-input');
    const b = getInputField('pentagon-b-input');
    const area = 0.5 * p * b ;
    setElementInnerText('pentagon-result', area);
})

// Ellipse
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const a = getInputField('ellipse-a-input');
    const b = getInputField('ellipse-b-input');
    const area = Math.PI * a * b ;
    setElementInnerText('ellipse-result', area);
})

// reusable function 

function getInputField(fieldID){
    const inputFieldId = document.getElementById (fieldID).value;
    const inputValue = parseFloat(inputFieldId)
    document.getElementById (fieldID).value = '';
    return inputValue;

}
function setElementInnerText (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}