import {useRouteLoaderData} from "react-router-dom";
import '../styles/Photo.css'


export const photosLoader = async function ({request, params}){
    const {albumId} = params
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        return await response.json()
    } catch (error){
        throw error
    }
}

export default function Photos(){
    const photos = useRouteLoaderData('photos')
    console.log(photos)
    return(
        <>
            {photos && (
                <div className='col-7 row h-25'>
                    <h3>Photos</h3>
                    {photos.map(item=>(
                        <div className='image-box'>
                            <img className='w-100' src={item.url} alt='img'/>
                        </div>
                    ))}
                </div>
            )}
        </>

    )
}