import Spinner from "./Spinner"
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard"

export default function Porjects() {
    const {loading, error, data} = useQuery(GET_PROJECTS)

    if(loading) return <Spinner />
    if(error) return <p>Error</p>

  return (
    <>
     {data.projects.length > 0 ? (
        <div className="row mt-4">
            {data.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    ) : (<p>No Projects</p>)
    } 
    </>
  )
}
