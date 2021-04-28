import {useContext, useEffect} from 'react'
import {TabelContext} from './tabelContext'
import axios from "axios"

const TabelData = () => { 
    const [dataBuah, setDataBuah] = useContext(TabelContext)

    useEffect(() => {
        if(dataBuah.lists === null) {
            axios
            .get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataBuah({...dataBuah,lists: res.data})
            })
        }
    }, [setDataBuah])


    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)                 
        setDataBuah({...dataBuah, selectedId: idData, statusForm: "changeToEdit"})
        console.log(`handle: ${dataBuah.statusForm}`)
    }
    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        let newDataBuah = dataBuah.lists.filter(el => el.id !== idData)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idData}`)
        setDataBuah({...dataBuah, lists: [...newDataBuah]})
    }    

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
                {dataBuah.lists !== null && dataBuah.lists.map((data, index) => {
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
        </>
    )

}

export default TabelData