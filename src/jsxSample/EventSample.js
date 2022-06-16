import React from 'react'

function EventSample() {

    var name = "Gojira";

    const changeName = () => {
        name = "Epica";
    }

    return (<>
        <div>{name}</div>
        {/* <button onClick={changeName}>Change Name</button> */}
        <button onClick={() => changeName()}>Change Name</button>
    </>
    )
}

export default EventSample