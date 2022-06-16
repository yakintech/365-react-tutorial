import React, { useState } from 'react'

function CounterStateSample() {

    const [counter, setCounter] = useState(0);

    console.log('Counter State Sample rendered!! ');

    return (<>

        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>
    )
}

export default CounterStateSample