document.addEventListener("DOMContentLoaded", () => {
  const articleText = document.getElementById("article");
  const spanText = document.getElementById("span");
  const img = document.getElementById("img");

  const people = [
    {
      article: "I’ve been interested in coding for a while but never taken the jump...",
      name: "Tanya Sinclair",
      occupation: "UX Engineer",
      imgURL: "./images/image-tanya.jpg"
    },
    {
      article: "Before joining the bootcamp, I’d never written a line of code...",
      name: "John Doe",
      occupation: "Software Engineer",
      imgURL: "./images/image-john.jpg"
    },
     {
    name: "Jakub Kontra",
    occupation: " Senior Front-end Developer",
    imgURL: "./images/image-jakub.jpg",
    article: "Jakub had always been fascinated by the world of technology. From tinkering with computers as a teenager to building simple websites for fun, coding was a hobby that never failed to ignite his curiosity.",
  }
  ];

  let index = 0;

  function updateContent() {
    articleText.textContent = people[index].article;
    spanText.innerHTML = `<b>${people[index].name}</b>&nbsp;&nbsp;${people[index].occupation}`;

    img.src = people[index].imgURL;
    img.onload = () => {
      anime({
        targets: img,
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutQuad"
      });
    };
  }

  // Initial load
  updateContent();

  // Buttons for navigation
  document.getElementById("for-ward-btn").addEventListener("click", () => {
    index = (index + 1) % people.length;
    updateContent();
  });

  document.getElementById("back-ward-btn").addEventListener("click", () => {
    index = (index - 1 + people.length) % people.length;
    updateContent();
  });
});
