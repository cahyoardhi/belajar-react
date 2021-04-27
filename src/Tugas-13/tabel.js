import axios from 'axios'
import {useState, useEffect} from 'react'

function Tabel() {
    const [dataBuah, setDataBuah] = useState(null)
    const [inputData, setInputData] = useState({name: "", price: 0, weight: 0})
    const [selectedId, setSelectedId] = useState(-1)
    const [statusForm, setStatusForm] = useState('create') 

    const handleInput = (event) => {
        let typeOfInput = event.target.name
        // eslint-disable-next-line default-case
        switch (typeOfInput) {
            case "name": {setInputData({...inputData, name: event.target.value}); break}
            case "price": {setInputData({...inputData, price: event.target.value}); break}
            case "weight": {setInputData({...inputData, weight: event.target.value}); break}
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let name = inputData.name
        let price = inputData.price
        let weight = inputData.weight

        if((name.replace(/\s/g, "") !== "") && (weight !== 0) && (price !== 0)){
            if (statusForm === "create") {
                axios
                .post('http://backendexample.sanbercloud.com/api/fruits', {name, price, weight})
                .then( response => {
                    setDataBuah([
                        ...dataBuah, {
                            id: response.data.id,
                            name,
                            price,
                            weight
                        }
                    ])
                })
            } else if (statusForm === "edit") {
                axios
                .put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
                .then(() => {
                    let buah = dataBuah.find( data => data.id === selectedId)
                    buah.name = name
                    buah.price = price
                    buah.weight = weight
                    setDataBuah([...dataBuah])
                    
                })
            }

            setStatusForm('create')
            setSelectedId(-1)
            setInputData({name: "", price: 0, weight: 0})
        }
    }
    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        let buah = dataBuah.find( x => x.id === idData)
        setInputData(buah)
        setSelectedId(idData)
        setStatusForm('edit')
    }  
    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        let newDataBuah = dataBuah.filter( data => data.id !== idData)
        axios
        .delete(`http://backendexample.sanbercloud.com/api/fruits/${idData}`)
        
        setDataBuah(newDataBuah)

    }

    useEffect(() => {
        if(dataBuah === null) {
            axios
            .get('http://backendexample.sanbercloud.com/api/fruits')
            .then(response => {
                setDataBuah(response.data)
            })
        }
    })

    return (
        <>
        <h1>TABEL HARGA BUAH</h1>
        <table>
            <thead>
                <tr>                          
                <th>no.</th>
                <th>nama</th>
                <th>harga / kg</th>
                <th>total berat</th>
                <th>aksi</th>
                </tr>
            </thead>
            <tbody>
                {dataBuah !== null && dataBuah.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>Rp {data.price/1000} K</td>
                            <td>{data.weight/1000}Kg</td>
                            <td>
                                <button onClick={handleEdit} value={data.id}>Edit</button>
                                &nbsp;
                                <button onClick={handleDelete} value={data.id}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <form onSubmit={handleSubmit}>
            <label>nama: </label>
            <input type="text" name="name" value={inputData.name} onChange={handleInput}/>&nbsp;                
            <label>harga / kg:</label>
            <input type="number" name="price" value={inputData.price} onChange={handleInput}/>&nbsp;
            <label>berat (gram):</label>
            <input type="number" name="weight" value={inputData.weight} onChange={handleInput}/>&nbsp;
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}

export default Tabel