import React from 'react';

function Project({ project, i }) {
    

    return (
        <div id={`project${i}`} class="project">
            <a href={project.liveURL} target="_blank" rel='noreferrer'><img class ="project-img" src={project.img} alt={`Preview of ${project.pName}`} /></a>
            <a href={project.repoURL} target='_blank' rel='noreferrer'>
                <div class="project-description">
                    <h4>{project.pName}</h4>
                    <p>{project.technologies}</p>
                </div>
            </a>
        </div>
    )
};

export default Project;