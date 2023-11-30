const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
// const hearts = document.querySelector(".hearts");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const container = document.querySelector(".container");
const nova = document.querySelector(".nova");
const wrappers = document.querySelector(".wrapper");
// const heart = document.querySelector(".heart");

yesBtn.addEventListener("click", () => {
question.innerHTML = "Yay, see you Soon!";
gif.src =
    "Links/imgs/yesgiphy.gif";
    // https://media.giphy.com/media/513q7MUyNvrqzRr7I5/giphy.gif (yesgiphy)
    // https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif  (original)
    yesBtn.style.display = "none"
    noBtn.style.display = "none"
    container.style.height= '400px'
    nova.style.display = "none"
    document.body.style.background= 'url(Links/imgs/hearts.gif) repeat';
    // container.addEventListener("mouseover", () => {
    //     hearts.src = "Links/img/hearts.gif"
    //     heart.style.display = "block"
    // });
});



var nocount = 0;
noBtn.addEventListener("mouseover", () => {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window.innerWidth - noBtnRect.width;
const maxY = window.innerHeight - noBtnRect.height;

    nocount++;
    console.log(nocount)
    if(nocount >= 7)
    {
        noBtn.addEventListener("click", () => {
            question.innerHTML = "Uh-oh,nooooo";
            gif.src =
                "Links/imgs/nogiphy.gif"; //https://media.giphy.com/media/hMHUsOGeDDGus/giphy-downsized-large.gif
                yesBtn.style.display = "none"
                noBtn.style.display = "none"
                nova.style.display = "none"
                noBtn.style.color = '#FF2A26';                
                document.body.style.background= 'url(Links/imgs/heartbreak.gif) repeat';
            });
            nocount=0;
            
    }
    else
    {
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    }
});


// function sendSMS(message, toPhoneNumber) {
//     const twilioAccountSid = 'AC09cbc7620b9d21bdf30a00076652242d';
//     const twilioAuthToken = '4692fd3c4596c78722ffb63ce437b1c3';
//     const twilioPhoneNumber = '+19252906052';

// fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + btoa(`${twilioAccountSid}:${twilioAuthToken}`),
//     },
//     body: `To=${toPhoneNumber}&From=${twilioPhoneNumber}&Body=${encodeURIComponent(message)}`,
//     })
//     .then(response => response.json())
//     .then(data => {
//     console.log('SMS sent:', data);
//     })
//     .catch(error => {
//     console.error('Error sending SMS:', error);
//     });
// }





// https://media.giphy.com/media/hMHUsOGeDDGus/giphy.gif (no button) 


// function createHeartGif(x, y,z) {
//     var heart = document.createElement('img');
//     if (z==='no')
//     {
//         heart.src = 'Links/imgs/heartbreak.gif'; // Replace with the path to your heart GIF
//     }
//     else if(z==='yes')
//     {
//         heart.src = 'Links/imgs/hearts.gif'; // Replace with the path to your heart GIF
//     }
//     heart.classList.add('heart-gif');
//     heart.style.left = x + 'px';
//     heart.style.top = y + 'px';

//     // Remove the heart after a short delay
//     // setTimeout(() => {
//     // heart.remove();
//     // }, 1000);

//     document.getElementsByClassName('wrapper').appendChild(heart);
// }
// var heart = document.createElement('img')
                // heart.src = 'Links/imgs/heartbreak.gif'
                  // Event listener for mouseover on the container
                // document.getElementsByClassName('wrapper').addEventListener('mouseover', function (event) {
                //     // Get the mouse coordinates relative to the container
                //     var x = event.clientX - this.getBoundingClientRect().left;
                //     var y = event.clientY - this.getBoundingClientRect().top;
                //     let z = 'no'
                //     // Create a heart GIF at the mouse position
                //     createHeartGif(x, y,z);
                // });
