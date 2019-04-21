import React from 'react'
import ContentProjectItem from './ContentProjectItem'

const projects = [
  {
    title: 'Stackoverko',
    summary: 'A question-response website when Stackoverflow not enough',
    skills: 'JavaScript HTML CSS Ruby React.js Rails PostgreSQL Axios',
    deployed: 'https://davidholyko.github.io/stackoverko-client',
    repo: 'https://github.com/davidholyko/stackoverko-client',
    description: [
      'Built Front End with React.js to emphasize modularity and boost performance',
      'Spearheaded a complex API that utilizes numerous one to many relationships and serializes nested associations'
    ]
  },
  {
    title: 'LetterBox',
    summary: 'A user friendly, text-only blogsite for cat lovers everywhere',
    skills: 'JavaScript HTML CSS Express.js MongoDB jQuery Handlebars.js',
    deployed: 'https://m-d-h-s.github.io/mdhs-blog-frontend',
    repo: 'https://github.com/davidholyko/mdhs-blog-frontend',
    description: [
      'Produced a blogsite that allows users use CRUD actions on resources',
      'Coordinated with team to plan wireframes and entity relationship diagrams',
      'Engineered Handlebars template for dynamic HTML generation',
      'Consolidated code into reducable and modular bits for future improvement',
      'Executed Responsive-Design and Modile-Friendly format for usability'
    ]
  },
  {
    title: 'Brain Age',
    summary: 'A game application inspired by Brain Age for the Nintendo DS',
    skills: 'JavaScript HTML CSS Ruby Rails jQuery Handlebars.js Math.js Chart.js Bootstrap PostgreSQL',
    repo: 'https://github.com/davidholyko/dko-brain-age-front-end',
    deployed: 'https://davidholyko.github.io/dko-brain-age-front-end',
    description: [
      'Envisioned a responsive user-friendly puzzle game that helps people think faster',
      'Implemented a Procedural Generation Algorithm that produces multiple choice logic',
      'Efficiently utilized existing Node packages such as Math.js and Chart.js to optimize time management',
      'Consolidated code into reducable and modular bits for future improvement with Handlebars.js',
      'Incorporated pseudo pages to effectively have multiple routes'
    ]
  }
]

const ContentProjects = () => (
  <div className="content-projects">
    <h3 className="text-center border-bottom my-3">Web Development Projects</h3>
    {projects.map((project, index) => <ContentProjectItem key={index} project={project} />)}
  </div>
)

export default ContentProjects
