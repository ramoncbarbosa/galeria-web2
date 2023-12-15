import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TituloGaleria from '../components/TituloGaleria'
import BotaoVoltar from '../components/BotaoVoltar'

const Foto = () => {
    const {id} = useParams()

    const [foto,setFoto] = useState({})


    function getFotos(){
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(response => setFoto(response.data)).catch(error => console.log(error))
    }

    useEffect(() => {
        getFotos()
    },[])

  return (
    <div>
        <TituloGaleria/>
        <BotaoVoltar/>
        <h1 className='border-b-2 border-black py-3'>{foto.title}</h1>
        <img className='mt-4' width={600} height={600} src={foto.url}/>
    </div>
  )
}

export default Foto
