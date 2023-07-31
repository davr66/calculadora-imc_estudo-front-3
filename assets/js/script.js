const form = document.getElementById('form');

form.addEventListener("submit",function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value; 
    const height = document.getElementById('height').value;
    const weightFloat= parseFloat(weight.replace(",","."));
    const heightFloat = parseFloat(height.replace(",","."));

    const bmi = (weightFloat / (heightFloat* heightFloat)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
    } else if (bmi >=18.5 && bmi <= 25){
        description = "Você está no peso ideal!";
        value.classList.add('normal');
        value.classList.remove('attention');
    } else if (bmi > 25 && bmi <= 30){
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35){
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40){
        description = "Cuidado! Você está com obesidade severa!";
    } else if (bmi > 40){
        description = "Cuidado! Você está com obesidade mórbida!"
    }
    
    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description
})


// PERMITIR APENAS NÚMEROS E VÍRGULAS NO INPUT
const inputElements = document.querySelectorAll(".floatNumbers");

inputElements.forEach(function(inputElement){
    inputElement.addEventListener("input",function(event){
        const inputValue = event.target.value;

        const cleanedValue = inputValue.replace(/[^0-9,]/g,'');

        event.target.value = cleanedValue;
    });
})

