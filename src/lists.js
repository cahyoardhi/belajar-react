import React from 'react'

class Lists extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pesertaLomba: ['Budi', 'Susi', 'Lala', 'Agung'],
            inputName: "",
            indexOfForm: -1
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

        handleInput(event){
            this.setState({inputName: event.target.value});
        }

        handleSubmit(event){                        
            event.preventDefault()

            let name = this.state.inputName
            if(name.replace(/\s/g, "") !== ""){
                
                let newPesertaLomba = this.state.pesertaLomba
                let index = this.state.indexOfForm
                newPesertaLomba[index] = this.state.inputName
                console.log(index)
                
                if (index === -1){                
                    newPesertaLomba = [...newPesertaLomba, this.state.inputName]                                
                    
                } else {
                    newPesertaLomba[index] = this.state.inputName
                }
                
                this.setState({
                    pesertaLomba: newPesertaLomba,
                    inputName: "",
                    indexOfForm: -1})
                }
        }

        handleEdit(event){
            let index = event.target.value
            let peserta = this.state.pesertaLomba[index]
            this.setState({inputName: peserta, indexOfForm: index})            
        }
 
        handleDelete(event){
            let index = event.target.value
            let newPesertaLomba = this.state.pesertaLomba
            newPesertaLomba.splice(index, 1)
            this.setState({pesertaLomba: newPesertaLomba})

        }

    render(){
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
                        {this.state.pesertaLomba.map((val, index) => {
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{val}</td>
                                    <td>                                        
                                        <button onClick={this.handleEdit} value={index}>Edit</button>
                                        <button onClick={this.handleDelete} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Masukkan nama peserta: </label>
                    <input type="text" value={this.state.inputName} onChange={this.handleInput}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Lists