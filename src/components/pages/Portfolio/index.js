import React from 'react';
import Project from  '../../Project';
import readViewsImg from '../../../assets/small/read-views.png';
import dateNightImg from '../../../assets/small/date-night.png';
import weatherImg from '../../../assets/small/weather-dashboard.png';
import codeQuizImg from '../../../assets/small/code-quiz.png';
import socialImg from '../../../assets/small/ledLights_A.Nanavati.jpg'
import passwordImg from '../../../assets/small/password-generator.png'

function Portfolio() {
    const projects = [
        {
            pName: 'ReadViews',
            repoURL: 'https://github.com/quaylas/readviews',
            liveURL: 'https://readviews-022021.herokuapp.com/', 
            technologies: 'MySQL, Full Stack, Heroku',
            img: readViewsImg
        }, 
        {
            pName: 'Date Night Generator',
            repoURL: 'https://github.com/quaylas/datenightgenerator/',
            liveURL: 'https://quaylas.github.io/datenightgenerator/',
            technologies: 'JavaScript, Bulma, 3rd Party APIs',
            img: dateNightImg
        }, 
        {
            pName: 'Weather Dashboard',
            repoURL: 'https://github.com/quaylas/qs.weatherdashboard.wk6/',
            liveURL: 'https://quaylas.github.io/qs.weatherdashboard.wk6/',
            technologies: 'JavaScript, Bootstrap, 3rd Party APIs',
            img: weatherImg
        }, 
        {
            pName: 'Social Network API',
            repoURL: 'https://github.com/quaylas/qs.socialapi.wk18',
            liveURL: 'https://drive.google.com/file/d/1c6t4z6UNz2ZUhGpsT6uqe6BJpLq1eJSu/view',
            technologies: 'Node.js, Mongoose',
            img: socialImg
        }, 
        {
            pName: 'Code Quiz',
            repoURL: 'https://github.com/quaylas/qs.codequiz.wk4/',
            liveURL: 'https://quaylas.github.io/qs.codequiz.wk4/',
            technologies: 'JavaScript', 
            img: codeQuizImg
        },   
        {
            pName: 'Password Generator',
            repoURL: 'https://github.com/quaylas/qs.passwordgenerator.wk3/',
            liveURL: 'https://quaylas.github.io/qs.codequiz.wk3/',
            technologies: 'JavaScript',
            img: passwordImg
        }, 

    ]


    return (
        <section className="projects-grid grid-content grid-outer">
            {projects.map((project, i) => (
                <Project project={project} i={i} key={project.pName}/>
            ))}
        </section>
    )
};

export default Portfolio;