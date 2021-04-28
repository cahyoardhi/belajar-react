import axios from 'axios'
import {useState, useContext, useEffect} from 'react'
import {TabelContext} from './tabelContext'

const TabelForm = () => {
    const [dataBuah, setDataBuah] = useContext(TabelContext)
    const [inputData, setInputData] = useState({name: "", price: 0, weight: 0})

    const handleInput = (event) => {
        let typeOfInput = event.target.name
        // eslint-disable-next-line default-case
        switch (typeOfInput) {
            case "name" : {setInputData({...inputData, name: event.target.value}); break;}
            case "price" : {setInputData({...inputData, price: event.target.value}); break;}
            case "weight" : {setInputData({...inputData, weight: event.target.value}); break;}
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let name = inputData.name
        let price = inputData.price
        let weight = inputData.weight


        if((name.replace(/\s/g, "") !== "") && (price !== 0) && (weight !== 0)) {
            if (dataBuah.statusForm === "create") {
                axios
                .post('http://backendexample.sanbercloud.com/api/fruits', {name, price, weight})
                .then(res => {
                    setDataBuah({statusForm: "create", selectedId: 0, lists:[...dataBuah.lists, {id: res.data.id, name, price, weight}]})
                })
            }
        } else if (dataBuah.statusForm === "edit") {
            axios
            .put(`http://backendexample.sanbercloud.com/api/fruits/${dataBuah.selectedId}`, {name, price, weight})
            .then(() => {
                let buah = dataBuah.lists.find(data => data.id === dataBuah.selectedId)
                buah.name = name
                buah.price = price
                buah.weight = weight
                setDataBuah({statusForm: "create", selectedId: 0, lists: [...dataBuah.lists]})
            })
        }

        setInputData({...dataBuah, name: "", price: 0, weight: 0})
    }

    useEffect(() => {
        if (dataBuah.statusForm === "changeToEdit") {
            // output nilai didalam status form
            console.log(`Before: ${dataBuah.statusForm}`)
            let buah = dataBuah.lists.find(x => x.id === dataBuah.selectedId)
            setDataBuah({...dataBuah, statusForm: "edit"})            
            // output nilai didalam status form setelah ubah nilai                   
            setInputData({name: buah.name, price: buah.price, weight: buah.weight})
            console.log(`After: ${dataBuah.statusForm}`)      
            setDataBuah(prev => ({...prev, statusForm: 'apaje'}))                  
        }
    }, [dataBuah])

    return (
        <form onSubmit={handleSubmit}>
        <label>nama: </label>
        <input type="text" name="name" value={inputData.name} onChange={handleInput}/>&nbsp;                
        <label>harga / kg:</label>
        <input type="number" name="price" value={inputData.price} onChange={handleInput}/>&nbsp;
        <label>berat (gram):</label>
        <input type="number" name="weight" value={inputData.weight} onChange={handleInput}/>&nbsp;
        <input type="submit" value="submit"/>
    </form>
    )
}

export default TabelForm
