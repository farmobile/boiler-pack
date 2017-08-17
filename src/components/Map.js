import React, { Component } from 'react'
import L from 'leaflet'
import 'leaflet-editable'
import "leaflet/dist/leaflet.css"
import styles from './App.scss'

// fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})


class MapView extends Component {

    constructor() {
        super()
        this.topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {})
        this.sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {})
    }

    createBasemapControl() {
        const customControl =  L.Control.extend({
            options: {
                position: 'topright'
            },
            onAdd: (map) => {
                const group = L.DomUtil.create('div', 'leaflet-control leaflet-bar')
                const container = L.DomUtil.create('a', 'baselayer', group)
                container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 30 30"><g transform="translate(-30 -1820)"><path xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" d="M39.5,1820c-5.247,0-9.5,4.254-9.5,9.5s4.253,9.5,9.5,9.5s9.5-4.254,9.5-9.5S44.747,1820,39.5,1820z    M39.5,1838c-4.688,0-8.5-3.813-8.5-8.5c0-2.719,1.289-5.139,3.281-6.695c-0.496,1.553-0.732,4.092,0.831,5.188   c2.646,1.855,4.271,1.865,4.091,2.863c-0.182,0.998-0.284,2.398,0.79,3.02c1.075,0.621-0.942,3.156-0.484,3.18   c1.979,0.109,5.031-2.125,5.463-3.068c0.43-0.945,1.494-2.166,0.507-2.492c-0.988-0.324-2.99-1.121-3.764-1.9   c-0.773-0.779-1.442-0.033-2.012-0.146c-0.57-0.113-2.33-0.748-2.16-1.098c0.17-0.348,0.234-0.74-0.165-0.697   c-0.401,0.043-1.524,1.08-1.038-1.123c0.484-2.205,1.983,0.037,2.211,0.379c0.229,0.34,0.332-1.566,1.344-2.07   c1.012-0.504,2.495-1.01,2.023-1.479c-0.473-0.469-1.967-1.264-1.932-1.766c0.004-0.055-0.026-0.369-0.077-0.572   c4.496,0.215,8.091,3.93,8.091,8.479C48,1834.188,44.188,1838,39.5,1838z"/></g></svg>';
                container.href = "#";
                container.onclick = (e) => {
                    e.preventDefault()
                    if (map.hasLayer(this.topo)) {
                        map.removeLayer(this.topo)
                        map.addLayer(this.sat)
                        container.classList.add('on')
                    } else {
                        map.removeLayer(this.sat)
                        map.addLayer(this.topo)
                        container.classList.remove('on')
                    }
                }
                return group;
            }
        })
        return new customControl()
    }

    componentDidMount() {
        this.mounted = true
        // initialize leaflet map
        this.map = L.map('mapView', {
            editable: true,
            center: [38.92551, -94.6649],
            zoom: 5,
            closePopupOnClick: true,
            minZoom: 3,
            maxZoom: 18,
            layers: [this.topo],
            worldCopyJump: true,
            attributionControl: false
        })
        // map display config
        this.map.zoomControl.setPosition('topright')
        this.map.addControl(this.createBasemapControl())
        // expose map reference globally, so any component can access it (this is a bit hacky...but it works)
        this.mapFrame = document.getElementById('map-view')
        window.mapRef = this;
    }

    shouldComponentUpdate() {
        // always return false, otherwise the entire map will be re-instantiated each time props change
        return false;
    }

    componentWillUnmount() {
        this.mounted = false
        // clean up global reference
        window.mapRef = null
    }

    render() {
        return (
            <div id="mapView" className={styles.mapView} />
        )
    }

}

export default MapView
