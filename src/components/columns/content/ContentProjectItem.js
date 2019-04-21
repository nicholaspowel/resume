import React from 'react'

const ContentProjectItem = ({ project }) => {
  const skills = project.skills.split(' ')
  const skillClasses = 'bg-dark text-light rounded mr-2 px-2 my-1'

  return (
    <div className="content-project-item">
      <p>{project.title}</p>
      <p>{project.summary}</p>
      <div className="d-flex flex-wrap">
        {skills.map((skill, index) => <span key={index} className={skillClasses}>{skill}</span>)}
      </div>
      <ul>
        {project.description.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </div>
  )
}

export default ContentProjectItem
