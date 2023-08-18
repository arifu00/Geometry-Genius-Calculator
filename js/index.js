document.getElementById('triangle-btn').addEventListener('click', function () {
    // base 
    const triangleBaseInputField = document.getElementById('triangle-base-input');
    const triangleBaseField = triangleBaseInputField.value;
    const triangleBase = parseFloat(triangleBaseField);

    //    height 
    const triangleHeightInputField = document.getElementById('triangle-height-input');
    const triangleHeightField = triangleHeightInputField.value;
    const triangleHeight = parseFloat(triangleHeightField);
 

    // click & clear input field 
    triangleBaseInputField.value = '';
    triangleHeightInputField.value = '';

    // find Area 

    const area = 0.5 * triangleBase * triangleHeight;
    // alert(area);

    // set area value 

    const areaValueId = document.getElementById('result');
    areaValueId.innerText = area;
})

