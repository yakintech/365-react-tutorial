import React, { useState } from 'react'

function StateArraySample() {

    const metalBands = ['Iron Maiden', 'Gojira', 'Mooonspell', 'Epica', 'Parkway Drive', 'Rotting Christ'];

    const [metals, setMetals] = useState(metalBands);

    const removeAll = () => {
        setMetals([]);
    }

    const deleteMetal = (item) => {

        let newMetalBands = metals.filter(metal => metal != item);
        setMetals(newMetalBands);
    }

    return (
        <>
            <h1>Metal Band Count: {metals.length}</h1>
            <ul>
                {
                    metals && metals.map((item) => {
                        return <><li>{item}</li><button onClick={() => deleteMetal(item)}>Delete</button></>
                    })
                }
            </ul>

            <button onClick={() => removeAll()}>Remove All Metal Bands</button>
        </>
    )
}

export default StateArraySample