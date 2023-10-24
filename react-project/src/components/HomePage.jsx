import {Link, useLoaderData, useParams} from "react-router-dom";
import Albums from "../Page/Albuns";

export const usersLoader = async ({request, param}) =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return await response.json()
    } catch (error){
        throw error
    }
}

export default  function HomePage(){
    const users = useLoaderData()

    const {userId} = useParams()

    return(
        <div className='row gap-4 ms-3 mt-5  overflow-x-hidden' >
            <h2>Users</h2>
            {users.map(user=>(
               <div className='col-12 row ' key={user.id}>
                <div className='col-2 rounded-2 border border-primary'>
                    <p className='m-0'>Name: <b>{user.name}</b></p>
                    <p className='m-0 mb-2'>UserName: <b>{user.username}</b> </p>
                    <Link className='mb-2 btn btn-primary btn-sm' to={`/users/${user.id}/albums`}>Переглянути Альбоми</Link>
                </div>
                   {user.id === +userId ? <Albums/> : null }
               </div>
                ))}
        </div>
    )
}