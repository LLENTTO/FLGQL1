import React from 'react'


export default function ProjectCard({project}) {
  return (
    <div className='col-md-4'>
        <div className="card mb-6 ">
            <div className="card-body">
                <div className="d-flex justify-content-betnween aling-items-center">
                    <h5 className="card-title">{project.name}</h5>

                    <a href={`/projects/${project.id}`} className='btn btn-light m-1'>View</a>
                </div>
                <p className="small">
                    Status: <strong>{project.status}</strong>
                </p>
            </div>
        </div>
    </div>
  )
}
