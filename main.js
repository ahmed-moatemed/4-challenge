


// quations
let faqs = [
  {
    question: "من أنت؟",
    answer: "أنا أحمد إبراهيم معتمد، مطور Front-End محترف. بحب أحوّل الأفكار لتطبيقات تفاعلية باستخدام React وVanilla JS."
  },
  {
    question: "إيه مهاراتك؟",
    answer: `
      <strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6+), <strong>React.js</strong>, <strong>Redux</strong>, <strong>Context API</strong><br>
      <strong>Styling:</strong> <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, <strong>BootStrap</strong>, Responsive Design<br>
      <strong>Tools:</strong> Git, GitHub, <strong>Vercel</strong>, Netlify<br>
      <strong>Other:</strong> REST APIs, Performance, Accessibility
    `
  },
  {
    question: "إيه خبرتك؟",
    answer: "عملت مشاريع حقيقية بـ React + Redux + Tailwind. عندي بورتفوليو شغال على Netlify. بطور نفسي يوميًا بتحديات Frontend Mentor."
  },
  {
    question: "إيه هدفك؟",
    answer: "أشتغل <strong>Front-End</strong> في شركة عالمية. أساهم في بناء منتجات كبيرة، وأتعلم من فريق قوي."
  },
  {
    question: "إزاي تواصل معايا؟",
    answer: `
      <a href="mailto:matamedahmed@gmail.com">Email</a><br><br>
      <a href="https://www.linkedin.com/in/ahmed-ibrahim-moatemed-00253b268/" target="_blank">LinkedIn</a><br><br>
      <a href="https://github.com/ahmed-moatemed" target="_blank">GitHub</a>
      <br><br>
      <a href="https://mo3temed.netlify.app/" target="_blank">Portfolio</a>
      <br><br>
    `
  }
];

document.addEventListener("DOMContentLoaded", () => {
  
  const quations = document.querySelector(".equations");
  
  // structure quations
  faqs.forEach((q) => {
    const div = document.createElement("div");
    div.classList.add("quation");

    div.innerHTML = `
      <div class="quation-header">
        <h2>${q.question}</h2>
        <button id="btn" type="button">
          <img class="icon" src="./images/icon-plus.svg" alt="icon-plus">
        </button>
      </div>
      <div class="quation-details">
        <p>${q.answer}</p>
      </div>
    `;

    quations.appendChild(div);
    const details = div.querySelector(".quation-details");
    const icon = div.querySelector(".icon");
    const headerQuation = div.querySelector(".quation-header");


    headerQuation.addEventListener("click", () => {
      const isOpen = details.classList.contains("show-details");

      document.querySelectorAll(".quation-details").forEach(d=>{
        d.classList.remove("show-details");
      })

      document.querySelectorAll(".icon").forEach(i=>{
        i.src="./images/icon-plus.svg"
      })

      if(!isOpen){
        details.classList.add("show-details");
        icon.src="./images/icon-minus.svg";
      }
      
    });


  });

  
});