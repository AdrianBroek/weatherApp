import React,{useContext, useEffect,useState} from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import styled from "styled-components";
import StateContext from './StateContext';


const Map = () => {
    const { lat, lon } = useContext(StateContext)


    return (
        <>
        {lat && lon &&(

        <MapContainer style={{height: '380px'}} center={[lon, lat]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
        )}

        </>
    )
}



export default Map