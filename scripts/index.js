document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");

    calculateButton.addEventListener("click", () => {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        if (!isNaN(length) && !isNaN(width)) {
            const area = length * width;
            const perimeter = 2 * (length + width);

            resultContainer.innerHTML = `
                <p>Área del rectángulo: ${area}</p>
                <p>Perímetro del rectángulo: ${perimeter}</p>
            `;
        } else {
            resultContainer.innerHTML = `Por favor, ingrese valores válidos.`;
        }
    });
});
