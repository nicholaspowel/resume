import React from 'react'

const ContentProjectItem = ({ work }) => {
  return (
    <div className="content-work-item">
      <div className="d-flex justify-content-between">
        <p><span className="font-weight-bold">{work.company}</span> {work.location}</p>
        <span className="ml-auto">{work.date}</span>
      </div>
      <div>
        <span className="px-4">
          {work.title}
        </span>
      </div>
    </div>
  )
}

export default ContentProjectItem
