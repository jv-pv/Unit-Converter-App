const valueInput = document.getElementById("value-input")
const convertButton = document.getElementById("convert-btn")
const lengthDisplay = document.querySelector("#length-El p")
const volumeDisplay = document.querySelector("#volume-El p")
const massDisplay = document.querySelector("#mass-El p")
const checkbox = document.getElementById("switch-style")
const stylesheet1 = document.getElementById("stylesheet1")

const unitConversions = {
    "meters to feet": {
        convert: function(meters) {
            return meters * 3.2808;
        }
   },
   "feet to meters": {
    convert: function(feet) {
        return feet / 3.2808;
    }
   },
   "liters to gallons": {
    convert: function(liters) {
        return liters / 3.78541;
    }
   },
   "gallons to liters": {
    convert: function(gallons) {
        return gallons * 3.78541;
    }
   },
   "kilograms to pounds": {
    convert: function(kilograms) {
        return kilograms * 2.20462; 
    }
   },
   "pounds to kilograms": {
     convert: function(pounds) {
        return pounds / 2.20462;
     }
   }
};

function performConversions() {
    const value = valueInput.value
    lengthDisplay.textContent = `${value} meters = ${unitConversions["meters to feet"].convert(value).toFixed(3)} feet | ${value} feet = ${unitConversions["feet to meters"].convert(value).toFixed(3)} meters`
    volumeDisplay.textContent = `${value} liters = ${unitConversions["liters to gallons"].convert(value).toFixed(3)} gallons | ${value} gallons = ${unitConversions["gallons to liters"].convert(value).toFixed(3)} liters`
    massDisplay.textContent =  `${value} kilos = ${unitConversions["kilograms to pounds"].convert(value).toFixed(3)} pounds | ${value} pounds = ${unitConversions["pounds to kilograms"].convert(value).toFixed(3)} kilos`
}

valueInput.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        convertButton.click()
    }
})

convertButton.addEventListener("click", performConversions)


// Switch darkmode on

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    stylesheet1.setAttribute("href", "styles2.css");
  } else {
    stylesheet1.setAttribute("href", "styles.css");
  }
});


