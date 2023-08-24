import project1 from "../assets/images/projects/mern1.PNG";
import project2 from "../assets/images/projects/mern2.PNG";

const projectsData = [
  {
    img: project1,
    imgAlt: "Project's Image",
    title: "Singh Mobiles",
    description:
      "It is an ecommerce website for a mobile store with all features like cart, payment gateway and product code. Developed Node Js expres Js REST based back-end application and converted client side to downloadable Progressive Web App which sent notifications to mobile Application is still being used by Sing Mobiles, Ludhiana.",
    href: "https://navdeep-ecommerce.netlify.app/",
    key: "project-1",
  },
  {
    img: project2,
    imgAlt: "Project's Image",
    title: "Full Fledged Todo App with all features like creating task, timestamp tasks, sort tasks etc.",
    description:
      "It is a full fledged todo application with all features like for creating todos, each todo is having task with time stamps. User can sort todos based upon time.User have authentication and authorization functionality as well.",
    href: "https://navdeep-todo.netlify.app/signup",
    key: "project-2",
  },
];

export default projectsData;
