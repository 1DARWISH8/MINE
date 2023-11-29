const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const container = document.querySelector(".container");
const nova = document.querySelector(".nova");

yesBtn.addEventListener("click", () => {
question.innerHTML = "Yay, see you Soon!";
gif.src =
    "https://media.giphy.com/media/513q7MUyNvrqzRr7I5/giphy.gif";
    // https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif  (original)
    yesBtn.style.display = "none"
    noBtn.style.display = "none"
    container.style.height= '400px';
    nova.style.display = "none"
});

var nocount = 0;
noBtn.addEventListener("mouseover", () => {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window.innerWidth - noBtnRect.width;
const maxY = window.innerHeight - noBtnRect.height;

    nocount++;
    console.log(nocount)
    if(nocount === 7){
        noBtn.addEventListener("click", () => {
            question.innerHTML = "Uh-oh, NOOOOO";
            gif.src =
                "https://media.giphy.com/media/hMHUsOGeDDGus/giphy-downsized-large.gif";
                yesBtn.style.display = "none"
                noBtn.style.display = "none"
                nova.style.display = "none"
            });
            nocount=0;
    }
    else{
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    }
});

// https://media.giphy.com/media/hMHUsOGeDDGus/giphy.gif (no button) 
