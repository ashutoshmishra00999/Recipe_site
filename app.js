document.addEventListener("DOMContentLoaded", function () {
    const previewButton = document.querySelector(".preview-button");
    const submitButton = document.querySelector(".submit-button");
    const recipeForm = document.querySelector(".recipe-form");
    const recipePreview = document.querySelector(".recipe-preview");

    previewButton.addEventListener("click", function () {
        // Gather form data
        const recipeName = document.getElementById("recipe-name").value;
        const cookingTime = document.getElementById("cooking-time").value;
        const difficulty = document.getElementById("difficulty").value;
        const dietaryTags = document.getElementById("dietary-tags").value;
        const ingredients = document.getElementById("ingredients").value.split("\n");
        const instructions = document.getElementById("instructions").value.split("\n");

        // Display preview
        document.getElementById("preview-name").textContent = recipeName;
        document.getElementById("preview-cooking-time").textContent = cookingTime;
        document.getElementById("preview-difficulty").textContent = difficulty;
        document.getElementById("preview-dietary-tags").textContent = dietaryTags;
        
        // Display ingredients
        const ingredientsList = document.getElementById("preview-ingredients");
        ingredientsList.innerHTML = "";
        ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        // Display instructions
        const instructionsList = document.getElementById("preview-instructions");
        instructionsList.innerHTML = "";
        instructions.forEach(instruction => {
            const li = document.createElement("li");
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });

        // Show the preview section
        recipePreview.style.display = "block";
    });

    submitButton.addEventListener("click", function () {
        // Perform actions to submit the form to the server
        alert("Recipe submitted successfully!");
    });
});
