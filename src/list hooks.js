import axios from 'axios'
import React, {useState, useEffect} from 'react'

function List(){
    
    const [pesertaLomba, setPesertaLomba] = useState(null)
    const [inputName, setInputName] = useState("")
    const [indexOfForm, setIndexOfForm] = useState(-1)
    
    const handleInput = (event) => {setInputName(event.target.value);}
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        let name = inputName
        console.log(name)
        
        if (name.replace(/\s/g,'') !== ""){
            let newPesertaLomba = pesertaLomba
            let index = indexOfForm            
            
            if (index === -1){
                newPesertaLomba = [...newPesertaLomba, {id: index, nama: name}]
            } else {
                newPesertaLomba[index] = {id: index, nama: name}
            }

            axios
            .post(`http://backendexample.sanbercloud.com/api/contestants/`, {id: index, name})
            
            setPesertaLomba(newPesertaLomba)
            setInputName("")
            setIndexOfForm(-1)
            
        }
    }
    
    const handleEdit = (event) => {
        let idPeserta = parseInt(event.target.value)
        let peserta = pesertaLomba.find(x => x.id === idPeserta)
        setInputName(peserta.nama)
        setIndexOfForm(idPeserta)
        axios.put(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`, {name:inputName})
        console.log(peserta.id)
        console.log(idPeserta)        
    }
    
    const handleDelete = (event) => {
        let idPeserta = parseInt(event.target.value)
        let newPesertaLomba = pesertaLomba.filter(el => {return el.id !== idPeserta})     
        axios
        .delete(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
        setPesertaLomba([...newPesertaLomba])
    }

    useEffect(() => { 
        if (pesertaLomba === null) {
            axios
            .get('http://backendexample.sanbercloud.com/api/contestants')
            .then(res => {
                setPesertaLomba(res.data.map( el => {return {id: el.id, nama: el.name}}))
            })
        }       
    })
    
    return(
        <div>
            <h1>Daftar Peserta Lomba</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>                
                    {pesertaLomba !== null && pesertaLomba.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.nama}</td>
                                <td>                                        
                                    <button onClick={handleEdit} value={item.id}>Edit</button>
                                    <button onClick={handleDelete} value={item.id}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
            <form onSubmit={handleSubmit}>
                <label>Masukkan nama peserta: </label>
                <input type="text" value={inputName} onChange={handleInput}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default List