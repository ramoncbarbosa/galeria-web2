import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TituloGaleria from '../components/TituloGaleria'
import BotaoVoltar from '../components/BotaoVoltar'

const Album = () => {

    const {id} = useParams()

    const [titleAlbum, setTitleAlbum] = useState('')
    const [fotos,setFotos] = useState([]) 

    function getAlbum(){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then(response => setTitleAlbum(response.data.title)).catch(error => console.log(error))
    }

    function getFotos(){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(response => setFotos(response.data)).catch(error => console.log(error))
    }

    useEffect(() => {
        getAlbum()
        getFotos()
    },[])

  return (
    <div>
        <TituloGaleria/>
        <BotaoVoltar/>
        <h1 className='text-3xl font-bold border-b-2 border-black py-3'>{titleAlbum}</h1>
        <div className='flex flex-wrap gap-3 mt-4'>
            {fotos.map((foto,index) => (
                    <Link key={index} to={`/foto/${foto.id}`}><img className='border-2 p-2' key={index+1} src={foto.url} width={150} height={150}/></Link>
            ))}
        </div>
    </div>
  )
}

export default Album
