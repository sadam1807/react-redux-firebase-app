import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title - {id} </span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, doloremque? Quam inventore ab iure ipsa explicabo iusto dignissimos veniam? Facilis animi qui delectus praesentium. Quis explicabo aliquam tempore eligendi vel?</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                  <div>Project by The Net Ninja</div>
                  <div>2nd sepetmber, 2am</div>
              </div>
          </div>
      </div>
    )
}

export default ProjectDetails
