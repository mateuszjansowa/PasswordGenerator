//Downloads
const switchCustomization = document.querySelector('.slider');
const customizationPanel = document.querySelector('section.customize');
const slider = document.querySelector('.bar-slider');
const sliderOutput = document.querySelector('.settings-amount p>span');
const generate = document.querySelector('.generate');
const passwordSection = document.querySelector('.password span');

//Cases
const uppercaseSwitch = document.querySelector('#uppercase');
const lowercaseSwitch = document.querySelector('#lowercase');
const numberCase = document.querySelector('#numbers');
const allmixedCase = document.querySelector('#allmixed');

//Arrays
const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
const symbolsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const mixedArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const randomArray = [];


//Functions
const hideCustomization = () => {
    customizationPanel.classList.toggle('hide');
}

const showNumber = () => {
    sliderOutput.textContent = slider.value;
}


const generatePassword = () => {
    passwordSection.textContent = '';

    if (customizationPanel.classList.contains('hide')) {
        let randomValue = Math.floor((Math.random() * 28) + 2)
        for (let i = 0; i < randomValue; i++) {
            const mixedArrayIndex = Math.floor(Math.random() * mixedArray.length)
            passwordSection.textContent += mixedArray[mixedArrayIndex]
        }
    } else if (uppercaseSwitch.classList.contains('active') || lowercaseSwitch.classList.contains('active') || numberCase.classList.contains('active') || allmixedCase.classList.contains('active')) {
        for (let i = 0; i < slider.value; i++) {
            const randomArrayIndex = Math.floor(Math.random() * randomArray.length);
            passwordSection.textContent += randomArray[randomArrayIndex];
        }
    } else {
        alert('Please choose at least one option from slider or Totally randomize')
    }

}



//Event listeners
switchCustomization.addEventListener('click', hideCustomization);
slider.addEventListener('click', showNumber);
slider.addEventListener('touchend', showNumber);

uppercaseSwitch.addEventListener('click', (event) => {
    uppercaseSwitch.classList.toggle('active');
    if (uppercaseSwitch.classList.contains('active')) {
        for (upperElement of uppercaseArray) {
            randomArray.push(upperElement);
        }
    } else {
        for (upperElement of uppercaseArray) {
            const index = randomArray.indexOf(upperElement);
            randomArray.splice(index, 1);
        }
    }


})
lowercaseSwitch.addEventListener('click', () => {
    lowercaseSwitch.classList.toggle('active');
    if (lowercaseSwitch.classList.contains('active')) {
        for (lowerElement of lowercaseArray) {
            randomArray.push(lowerElement);
        }
    } else {
        for (lowerElement of lowercaseArray) {
            const index = randomArray.indexOf(lowerElement);
            randomArray.splice(index, 1);
        }
    }

})
numberCase.addEventListener('click', () => {
    numberCase.classList.toggle('active');
    if (numberCase.classList.contains('active')) {
        for (number of symbolsArray) {
            randomArray.push(number);
        }
    } else {
        for (number of symbolsArray) {
            const index = randomArray.indexOf(number);
            randomArray.splice(index, 1);
        }
    }
})
allmixedCase.addEventListener('click', () => {
    allmixedCase.classList.toggle('active');
    if (allmixedCase.classList.contains('active')) {
        for (mixed of mixedArray) {
            const index = randomArray.indexOf(mixed);
            randomArray.push(mixed);
        }
    } else {
        for (mixed of mixedArray) {
            const index = randomArray.indexOf(mixed);
            randomArray.splice(index, 1);
        }
    }
})

generate.addEventListener('click', generatePassword)