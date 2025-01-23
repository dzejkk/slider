
const people = [
  {
    name: "Tanya Sinclair",
    occupation: "UX Engineer",
    imgURL: "./images/image-tanya.jpg",
    article:
      "I’ve been interested in coding for a while but never taken the jump,until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
  },
  {
    name: "John Tarkpor",
    occupation: " Junior Front-end Developer",
    imgURL: "./images/image-john.jpg",
    article:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
  },
  {
    name: "Jakub Kontra",
    occupation: " Senior Front-end Developer",
    imgURL: "./images/image-jakub.jpg",
    article: "Jakub had always been fascinated by the world of technology. From tinkering with computers as a teenager to building simple websites for fun, coding was a hobby that never failed to ignite his curiosity.",
  },
];

const article = document.getElementById("article");
const span = document.getElementById("span");
const img = document.getElementById("img");
const backButton = document.getElementById("back-ward-btn");
const forwardButton = document.getElementById("for-ward-btn");

////////////////////////////////

let index = 0;

/*refactor with ternar*/

forwardButton.addEventListener("click", () => {
    index < 2 ? index++ : index = 0;
    changeText(index);
  }
);

backButton.addEventListener("click", () => {
  index === 0 ? index = 2 : index--;
    changeText(index);
  }
);

function changeText(index) {


  /*animation*/
    anime({
      targets: img,
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutQuad'
  });

    
    anime({
      targets: article,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 500,
      easing: 'easeOutCubic',
  });

  /*animation*/



  article.innerHTML = `
                    ${people[index].article}
                        <span class="signature" id="span">
                            <b>${people[index].name}</b>&nbsp&nbsp ${people[index].occupation}
                        </span>`;

  img.src = people[index].imgURL;
}


/* old code*/

/*
forwardButton.addEventListener("click", () => {
  if (index < 2) {
    index++;
    changeText(index);
  
  } else {
    index = 0;
    changeText(index);
  }
});


backButton.addEventListener("click", () => {
  if (index === 0) {
    index = 2;
    changeText(index);

  }else {
    index--;
    changeText(index);
  }
});
*/
