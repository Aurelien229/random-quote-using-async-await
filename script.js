document.addEventListener('DOMContentLoaded', () => {
    // Récupère l'élément HTML avec l'ID 'quote'
    const quoteElement = document.getElementById('quote');
    // Récupère le bouton de génération de citation avec l'ID 'generateBtn'
    const generateBtn = document.getElementById('generateBtn');

    // Fonction asynchrone pour effectuer une requête et obtenir une citation aléatoire
    async function fetchRandomQuote() {
        try {
            // Effectue une requête asynchrone vers l'API
            const response = await fetch('https://thatsthespir.it/api');
            // Récupère les données JSON de la réponse
            const data = await response.json();
            // Appelle la fonction pour afficher la citation dans le DOM
            displayQuote(data);
        } catch (error) {
            // En cas d'erreur lors de la requête, affiche un message d'erreur dans la console
            console.error('Erreur lors de la récupération de la citation :', error);
            // Appelle la fonction pour afficher un message d'erreur dans le DOM
            displayError();
        }
    }

    // Fonction pour afficher la citation dans le DOM
function displayQuote(data) {
    // Modifie le contenu de l'élément 'quote' avec la citation et l'auteur récupérés
    quoteElement.innerHTML = `<p>${data.quote}</p><footer><strong>- ${data.author}</strong></footer>`;
}

    // Fonction pour afficher un message d'erreur dans le DOM
    function displayError() {
        // Modifie le contenu de l'élément 'quote' avec un message d'erreur
        quoteElement.innerHTML = '<p>Erreur lors de la récupération de la citation. Veuillez réessayer plus tard.</p>';
    }

    // Ajoute un écouteur d'événement sur le bouton de génération pour déclencher la requête
    generateBtn.addEventListener('click', fetchRandomQuote);

    // Effectue une requête pour afficher une citation aléatoire lors du chargement initial de la page
    fetchRandomQuote();
});
