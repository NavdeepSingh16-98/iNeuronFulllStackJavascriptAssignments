import project1 from "../assets/images/projects/mern1.PNG";
import project2 from "../assets/images/projects/mern2.PNG";

const projectsData = [
  {
    img: project1,
    imgAlt: "Project's Image",
    title: "Training and Placement Cell's PWA",
    description:
      "It is a placement notice board and data collection platform for college's placement cell. Developed Django REST based back-end application and converted client side to downloadable Progressive Web App which sent notifications to mobile Application is still being used by college's placement cell.",
    href: "https://tnpgndec.com/",
    key: "project-1",
  },
  {
    img: project2,
    imgAlt: "Project's Image",
    title: "Veerji Departmental Store Web App",
    description:
      "Bringing a brick and mortar online and creating solutions to help them streamline and automate daily tasks. Added payment gateway for online payments and automated bill generation to reduce paper work. Used Django REST and ReactJS to solve daily business issues faced by the client.",
    href: "https://veerji-departmental-store-1xt56aqce-sanjam.vercel.app/",
    key: "project-2",
  },
];

export default projectsData;
