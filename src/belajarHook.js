import React, {useState, useEffect} from 'react';

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        if (count % 2 === 0){
            document.title = `Genap: ${count}`
        } else {
            document.title = `Ganjil: ${count}`

        }
        }
        )

    return (
        <div>
            <p>Anda menekan sebanyak {count} kali</p>
            <button onClick={() => setCount(count + 1)}>Tekan saya</button>
        </div>
    )
}

export default Example
