import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/todo.png';
import css3 from '../img/portImages/uceasy.jpg';
import react1 from '../img/portImages/react_styled.png';
import img1 from '../img/portImages/food.jpg';
import img2 from '../img/portImages/gym.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import img4 from '../img/portImages/countries.jpg';


const portfolios = [
    {
        id: 1,
        category: 'React JS',
        image: react1,
        link1: 'https://github.com/NafilaNafi/portfolio',
        link2: 'https://nafi-codes.netlify.app/portfolios',
        title: 'Responsive Portfolio Website using React JS',
        text: 'Created using different technologies such as React JS, Material UI, React Router, React Hooks and Styled Components..'
    },
    {
        id: 2,
        category: 'React JS',
        image: img3,
        link1: 'https://github.com/NafilaNafi/reactproductsapp',
        link2: 'https://iscriptiotech.netlify.app/',
        title: 'Responsive React Product App',
        text: 'Complete Ecommerce website using ReactJS with modern tools like ReactJs, Bootstrap, Gatsby, Contentful & Netlify, etc.'
    },
    {
        id: 3,
        category: 'Javascript',
        image: img1,
        link1: 'https://github.com/NafilaNafi/Food-search-Api',
        link2: 'https://foodresearch.netlify.app/',
        title: 'FOOD Recipes Search',
        text: 'front-end Application that will display all the recipes from the API.'
    },
    {
        id: 4,
        category: 'CSS',
        image: img2,
        link1: 'https://github.com/NafilaNafi/frontendprojects/tree/master/frontend/project/gymcomingsoon',
        link2: 'https://fitofitgym.netlify.app/',
        title: 'Single page GYM Opening Application',
        text: 'Static frontend Gym Comming soon webpage using HTML and CSS.'
    },
    {
        id: 5,
        category: 'Javascript',
        image: img4,
        link1: 'https://github.com/NafilaNafi/restcountries-whaeatherapi-task',
        link2: 'https://restcountries-wheather-api.netlify.app/',
        title: 'RestCountries Wheather Data',
        text: 'The RestCountries and open-wheather map APIs using fetch() API'
    },
    {
        id: 6,
        category: 'CSS',
        image: css1,
        link1: 'https://github.com/NafilaNafi/Resume-design',
        link2: 'https://resume-using-html-css.netlify.app/',
        title: 'Responsive Resume',
        text: 'Created with only HTML and CSS.'
    },
    {
        id: 7,
        category: 'Javascript',
        image: css3,
        link1: 'https://github.com/NafilaNafi/uceazy',
        link2: 'https://uceazy.com/',
        title: 'UCEasy Website for College Admissions Guidance',
        text: 'Complete website for college admissions guidance using Javascript, Bootstrap, php'
    },
    {
        id: 7,
        category: 'Javascript',
        image: css2,
        link1: 'https://github.com/NafilaNafi/Todo',
        link2: 'https://friendly-todo.netlify.app/',
        title: 'Todo App',
        text: 'A Simple Todo app using Backbone JS'
    }
]

export default portfolios;
