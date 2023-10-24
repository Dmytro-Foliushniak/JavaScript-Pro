import {Link, useRouteLoaderData} from "react-router-dom";
import Photos from "./Photos";

export const albumsLoader = async function ({request, params}){
    const {userId} = params
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        return await response.json()
    } catch (error){
        throw error
    }
}

export default function Albums (){

    const albums = useRouteLoaderData('albums')

    return (
        <>
        <div className='col-3 row'>
            <h4>Albums</h4>
            {albums && (
                <>
                    {albums.map(({id, title, userId})=>(
                        <ul className='col-12 list-group' key={id}>
                            <li className='list-group-item' > <Link to={`/users/${userId}/albums/${id}/photos`}>{title}</Link></li>
                        </ul>
                    ))}
                </>
            )}
        </div>
        <Photos/>
        </>
    )
}