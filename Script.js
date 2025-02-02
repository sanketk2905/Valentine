document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = 
        'Hihihihihihi😁😁 I love you the mostestt mostestt mostestt mostestt mostestt mostestt mostestt mostestt into infinity pillu rani 😚😚😚 you are the most beautiful charming delightful and eatable 🙄, sexiest irresistible loving caring supportive most perfect girl in the world 😚😚😚😚😁😁😁';
});

document.getElementById('noButton').addEventListener('click', function() {
    let response = document.getElementById('responseMessage');
    response.innerHTML += 
        '<p>Yeee pilludi asa ka baal 🥺 plssssss be my valentine</p>';
    response.scrollTop = response.scrollHeight; // Scroll to the bottom of the messages
});