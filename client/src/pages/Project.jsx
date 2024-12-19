import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_SINGLE_PROJECT } from '../queries/projectQueries'
import ClientInfo from '../components/ClientInfo'
import DeleteProjectButton from '../components/DeleteProjectButton'
import EditProjectForm from '../components/EditProjectForm'

export default function Project() {
    const {id} = useParams();
    const {loading, error, data} = useQuery(GET_SINGLE_PROJECT, {
        variables: {id}
    })

    if (loading) return <Spinner />
    if (error) return <p>Error. Something went Wrong</p>


  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
            <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>Back</Link>

            <h1>{data.project.name}</h1>
            <p>{data.project.descripttion}</p>

            <h5 className="mt-3">Porject status</h5>
            <p className="lead">{data.project.status}</p>

            <ClientInfo client={data.project.client} />

            <EditProjectForm project={data.project} />
            <DeleteProjectButton  projectId={data.project.id} />
        </div>
      )}
    </>
  )
}
