import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project.js'

class Projects extends Component {
  constructor(){
    super();
    this.state = {
      name:projects.allProjects
    }
  }
  render() {


    return(
      <div>
      {
        this.state.name.map((n)=>{
          return <Project title={n.title} description={n.description} imgName={n.imgName} />
        })
       }
      </div>
    )
  }
}

export default Projects;
