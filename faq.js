const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector('.accordian_body');
const faqs = [];

function showFaq(event) {
  console.log(event)

  let faq = event.currentTarget.parentElement.parentElement;
  let para = faq.querySelector('p');
  let btn = event.currentTarget;

  if(para.classList.contains('hidden')){

    para.classList.remove('hidden');
    btn.innerText="-";

  }else{
    para.classList.add('hidden');
    btn.innerText = "+";
  }
}

function createFaq() {

  let faq = document.createElement('div');
  faq.classList.add('faq');
  let header = document.createElement('div');
  header.classList.add('faq_header');

  let h3 = document.createElement('h3');
  let btn = document.createElement('button');
  btn.classList.add('show_btn');
  btn.innerText = '+';

  btn.addEventListener('click',(event)=>{
    console.log(event);
  });

  header.appendChild(h3);
  header.appendChild(btn);

  faq.appendChild(header);

  let para = document.createElement('p');
  para.classList.add('hidden')
  faq.appendChild(para);


  faqData.forEach((m)=>{
    let faq1 = faq.cloneNode(true);

    faq1.querySelector('.faq_header h3').innerText = m.question;
    faq1.querySelector('p').innerText = m.answer;
    faq1.querySelector('.show_btn').addEventListener('click',showFaq);
    faqs.push(faq1);
  })

  faqs.forEach((m)=>{
    accordianBody.appendChild(m);
  })
  
}

function btnStatusUpdate() {
  
}
createFaq();


