window.onload = function() {
    const birthDate = new Date('1994-09-13');
    const currentDate = new Date();
    const daysLived = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    const thirtiethBirthday = new Date('2024-09-13');
    const totalDaysTill30 = Math.floor((thirtiethBirthday - birthDate) / (1000 * 60 * 60 * 24));
    const progressPercentage = (daysLived / totalDaysTill30) * 100;

    const averageLifespanDays = 82 * 365; // Average lifespan in Israel for males
    const percentageLivedOfLifespan = (daysLived / averageLifespanDays) * 100;

    document.querySelector('.progress').style.width = progressPercentage + '%';
    document.getElementById('age-progress').innerHTML = `
        <span class="large-text">${progressPercentage.toFixed(2)}% </span><br>
        Average male lifespan in Israel: 82 years<br>
        I've lived ${percentageLivedOfLifespan.toFixed(2)}% of my life.<br>
        let's drink
    `;
}

function runAway() {
    const button = document.getElementById('not-attending');
    button.style.position = 'absolute';
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
}

function openWhatsApp(status) {
    const phoneNumber = '972509781166'; // Replace with your actual phone number
    let message = '';

    if (status === 'attending') {
        message = 'Hey Tom, I am attending.'; // Replace 'text1' with your actual message for attending
    } else if (status === 'attending plus one') {
        message = 'Hey Tom, I am attending PLUS ONE.'; // Replace 'text2' with your actual message for attending plus one
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
}

// Attach these functions to the buttons directly
document.querySelector('.attend').onclick = function() {
    openWhatsApp('attending');
}

document.querySelector('.attend-plus-one').onclick = function() {
    openWhatsApp('attending plus one');
}