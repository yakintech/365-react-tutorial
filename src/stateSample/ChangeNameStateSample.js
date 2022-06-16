import React, { useState } from 'react'

function ChangeNameStateSample() {

    //name ekranda gösterilecek değişkenin adı!!
    //setName ise bu değişkeni DEĞİŞTİRECEK FONKSİYON!!
    //useStat içerisindeki değer ise değişkenin default değeri
    const [name, setName] = useState('Moonspell');

    console.log('ChangeNameStateSample component rendered!!');

    const changeName = () => {

       setName('Iron Maiden!');
        
    }

    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => changeName()}>Change Name</button>
        </>
    )
}

export default ChangeNameStateSample