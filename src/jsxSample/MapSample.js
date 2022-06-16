import React from 'react'

function MapSample() {

    let cities = ["İskenderun", "İstanbul", "İzmir", "Aydın"]

    return (
        <>
            <ul>
                {
                    cities.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

export default MapSample