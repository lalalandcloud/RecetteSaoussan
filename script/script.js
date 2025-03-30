const cardsG = document.querySelectorAll('.platprinc');

cardsG.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'rgb(25, 135, 84)'; 
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = ''; 
    });

    card.addEventListener('dblclick', () => {
        card.style.display = 'none';
    });

    card.addEventListener('click', () => {
        card.style.boxShadow = '0 10px 15px rgb(25, 135, 84)';
    });
});

const cardsB = document.querySelectorAll('.salade');

cardsB.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'rgba(0, 0, 0, 0.46)'; 
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = ''; 
    });

    card.addEventListener('dblclick', () => {
        card.style.display = 'none';
    });

    card.addEventListener('click', () => {
        card.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.46)';
    });

});

const cardsR = document.querySelectorAll('.dessert');

cardsR.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'rgb(220, 53, 69)'; 
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = ''; 
    });

    card.addEventListener('dblclick', () => {
        card.style.display = 'none';
    });

    card.addEventListener('click', () => {
        card.style.boxShadow = '0 10px 15px rgb(220, 53, 69)';
    });


});
