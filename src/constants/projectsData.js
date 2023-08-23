import project1 from "../assets/images/projects/mern1.PNG";
import project2 from "../assets/images/projects/mern2.PNG";

const projectsData = [
  {
    img: project1,
    imgAlt: "Project's Image",
    title: "Singh Mobiles",
    description:
      "It is a placement notice board and data collection platform for college's placement cell. Developed Django REST based back-end application and converted client side to downloadable Progressive Web App which sent notifications to mobile Application is still being used by college's placement cell.",
    href: "https://navdeep-ecommerce.netlify.app/",
    key: "project-1",
  },
  {
    img: project2,
    imgAlt: "Project's Image",
    title: "Full Fledged Todo App with all features like creating task, timestamp tasks, sort tasks etc.",
    description:
      "Bringing a brick and mortar online and creating solutions to help them streamline and automate daily tasks. Added payment gateway for online payments and automated bill generation to reduce paper work. Used Django REST and ReactJS to solve daily business issues faced by the client.",
    href: "https://navdeep-todo.netlify.app/signup",
    key: "project-2",
  },
];

export default projectsData;
