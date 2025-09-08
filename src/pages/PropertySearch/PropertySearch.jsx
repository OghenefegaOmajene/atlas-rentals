import React from 'react'
import './PropertySearch.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import MapWithListings from '../../components/MapWithListings/MapWithListings'

const PropertySearch = () => {
  return (
    <div className='properties'>
        <Sidebar/>
        <MapWithListings/>
    </div>
  )
}

export default PropertySearch