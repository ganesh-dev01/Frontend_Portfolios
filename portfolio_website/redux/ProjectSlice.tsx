import { ProjectProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";

let initialState: ProjectProps = {
    project: [
        {
            title: 'Music Player Web app',
            img: './assets/Icons/music-player_icon.png',
            tech: 'React, toastify, ReactHooks',

            desc: `This React-based web app allows users to play music seamlessly while providing intuitive 
            controls for managing playback, such as play, pause, skip and ensuring an`,

            live: 'https://gsaha-music-player.netlify.app/',

            code: 'https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/MusicPlayer%20using%20React'
        },

        {
            title: 'TO-DO-LIST',
            img: './assets/Icons/to-do-list_icon.png',
            tech: 'React, toastify, ReactHooks',

            desc: `This website is a simple to-do list website which helps you to manage your daily tasks.
                  You can add your daily tasks and delete them once you are done with them. This website is
                  built using React.js and toastify.`,

            live: 'https://to-do-list-gsaha.netlify.app/',

            code: "https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/To-Do-List%20using%20React"
        },

        {
            title: 'Thrill Trails India',
            img: './assets/Icons/Thrill_Trails_India_icon.png',
            tech: 'React, material UI',

            desc: `This website is a helpful guide for tourists interested in exploring India.
                  Discover popular destinations, hidden gems, and travel tips to make your journey memorable. From the
                  beaches of Goa to the mountains of Leh, we provide everything you need to plan your adventure.`,

            live: 'https://thrilltrailsindia.netlify.app/',

            code: "https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/Thrill_Trails_India%20using%20React"
        },

        {
            title: 'Weather forecast',
            img: './assets/Icons/weather-app_icon.png',
            tech: 'Javascript, Bootstrap 5, CSS3, HTML5',

            desc: `This weather-checking app offers real-time updates for any location you search,
                  providing accurate and current weather information with a user-friendly interface.`,

            live: 'https://gsaha-weather.netlify.app/',

            code: "https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/Weather%20App"
        },

        {
            title: 'Crypto-Related Websites',
            img: './assets/Icons/crypto_icon.png',
            tech: 'JavaScript,jquery,Bootstrap 5, CSS3,HTML5',

            desc: `During my internship, I developed responsive web pages for cryptocurrency websites
                  focusing on user experience and accessibility. The projects,
                  showcasing my individual contributions, are available on my GitHub.`,

            live: 'https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/Crypto-Related%20Websites%20(%2B5%20Projects)',

            code: "https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/Crypto-Related%20Websites%20(%2B5%20Projects)"
        },
        {
            title: 'Tic-Tac-Toe Game',
            img: './assets/Icons/tic-tac-toe_icon.png',
            tech: 'Javascript, Bootstrap 5, CSS3, HTML5',

            desc: `This responsive two-player Tic-Tac-Toe game lets players mark Xs and Os on a 3x3
                  grid, with real-time winner detection and an optimized layout for both mobile and desktop, showcasing
                  my ability to create interactive web applications.`,

            live: 'https://gsaha-tic-tac-toe.netlify.app/',

            code: "https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/Tic-Tac-Toe%20%20Game"
        },
        {
            title: 'Arithmatic Calculator',
            img: './assets/Icons/calculator_icon.png',
            tech: 'Javascript, Bootstrap 5, CSS3, HTML5',

            desc: `It supports arithmetic operations. The
                  interface is optimized for both mobile and desktop use, ensuring an intuitive user experience across
                  devices. This project demonstrates my ability to create interactive and user-friendly web tools.`,

            live: 'https://gs-calculator.netlify.app/',

            code: "https://github.com/ganesh-dev01/Frontend_Portfolios/tree/main/Mathematical_Calculator"
        }
    ]
}


const ProjectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {}
})

let projectReducer = ProjectSlice.reducer;

export default projectReducer;