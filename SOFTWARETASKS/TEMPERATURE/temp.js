document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("convertBtn");
    const inputTemp = document.getElementById("inputTemp");
    const inputScale = document.getElementById("inputScale");
    const resultDiv = document.getElementById("result");

    convertBtn.addEventListener("click", () => {
        const temp = parseFloat(inputTemp.value);
        const scale = inputScale.value;
        let result;

        // Validate input
        if (isNaN(temp)) {
            resultDiv.innerText = "Please enter a valid number!";
            resultDiv.style.opacity = 1;
            return;
        }

        // Perform conversion based on the selected scale
        switch (scale) {
            case "celsius":
                result = {
                    celsius: temp,
                    fahrenheit: (temp * 9 / 5) + 32,
                    kelvin: temp + 273.15
                };
                break;
            case "fahrenheit":
                result = {
                    celsius: (temp - 32) * 5 / 9,
                    fahrenheit: temp,
                    kelvin: (temp - 32) * 5 / 9 + 273.15
                };
                break;
            case "kelvin":
                result = {
                    celsius: temp - 273.15,
                    fahrenheit: (temp - 273.15) * 9 / 5 + 32,
                    kelvin: temp
                };
                break;
        }

        // Display results with fade-in effect
        resultDiv.innerText = `
            Celsius: ${result.celsius.toFixed(2)} °C
            Fahrenheit: ${result.fahrenheit.toFixed(2)} °F
            Kelvin: ${result.kelvin.toFixed(2)} K
        `;

        // Fade in effect for the result
        resultDiv.style.opacity = 0; // Start with invisible
        setTimeout(() => {
            resultDiv.style.opacity = 1; // Fade in
        }, 100); // Delay to trigger the fade in effect
    });
});