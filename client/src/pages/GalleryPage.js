import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import  useHttp from '../hooks/http.hook'
import Loader from '../components/Loader'
import Gallery from '../components/Gallery'


export default function GalleryPage(){
    console.log(5)

    const [drives, setDrives] = useState('')

    const {request, loading} = useHttp()
    const linkId = useParams().id

    const getPhoto = useCallback(async () => {
        try {
          const fetched = await request(`/api/razr/photo`, 'GET', null,{
            tip : linkId.charAt(0).toUpperCase() + linkId.slice(1)          })
          
          setDrives(fetched)
          
        } catch (e) {}
      }, [request])
    
      useEffect(() => {
        getPhoto()
      }, [getPhoto])

  if (loading) {
    return <Loader />
  }

  return(
    <>
    {!loading && <Gallery drives={drives}/>}
    </>
  )
}