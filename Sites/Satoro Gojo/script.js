document.querySelector('.gojo-image').addEventListener('mouserover', () => {
    alert("you've been hit by Unlimited Void! (Just kidding.)");
});

const quotes = document.querySelectorAll('.quote-card');
quotes.forEach(quote => {
    quote.addEventListener('click', () => {
        quote.style.transform = 'rotate(5deg)';
        setTimeout(() => {
            quote.style.transform = 'rotate(0)';
        }, 500);
    })
})