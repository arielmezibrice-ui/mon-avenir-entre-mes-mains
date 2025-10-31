// main.js
console.log("Application 'Mon avenir entre mes mains' chargée avec succès !");
alert("Bienvenue dans l’application Mon avenir entre mes mains !");
document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.querySelector('button');

    bouton.addEventListener('click', () => {
        alert('À venir : modules de formation, quiz et accompagnement personnalisé !');
    });
});
