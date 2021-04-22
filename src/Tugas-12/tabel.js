import React from 'react'

  class Tabel extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              inputNama: "",
              inputHarga: 0,
              inputBerat: 0,
              indexOfForm: -1,
              dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ]
          }

          this.handleInput = this.handleInput.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleEdit = this.handleEdit.bind(this)
          this.handleDelete = this.handleDelete.bind(this)
      }

      handleInput(event){
          let typeOfInput = event.target.name
          // eslint-disable-next-line default-case
          switch (typeOfInput){
              case "nama": {this.setState({inputNama: event.target.value}); break;}
              case "harga": {this.setState({inputHarga: event.target.value}); break;}
              case "berat": {this.setState({inputBerat: event.target.value}); break;}
          }       
      }

      handleSubmit(event){
          event.preventDefault()
          let nama = this.state.inputNama
          let harga = this.state.inputHarga
          let berat = this.state.inputBerat


          if((nama.replace(/\s/g, "") !== "") && (harga !== 0) && (berat !== 0)){
              let newDataHargaBuah = this.state.dataHargaBuah
              let index = this.state.indexOfForm      
              
              if(index === -1){
                  newDataHargaBuah = [...newDataHargaBuah, {nama, harga, berat}]
                } else {
                    newDataHargaBuah[index] = {nama, harga, berat}
              }
              
              this.setState({
                  dataHargaBuah: newDataHargaBuah,
                  inputNama: "",
                  inputHarga: "",
                  inputBerat: 0,
                  indexOfForm: -1
              })
            

          }
      }

      handleEdit(event){
          let index = event.target.value
          let dataBuah = this.state.dataHargaBuah[index]          
          this.setState({
              inputNama: dataBuah.nama,
              inputHarga: dataBuah.harga,
              inputBerat: dataBuah.berat,
              indexOfForm: index
          })
      }

      handleDelete(event){
          let index = event.target.value
          let newDataHargaBuah = this.state.dataHargaBuah
          newDataHargaBuah.splice(index, 1)
          this.setState({dataHargaBuah: newDataHargaBuah})
      }

      render(){
          return (
              <>
              <h1>TABEL HARGA BUAH</h1>
              <table>
                  <thead>
                      <tr>                          
                      <th>no.</th>
                      <th>nama</th>
                      <th>harga</th>
                      <th>berat</th>
                      <th>aksi</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.dataHargaBuah.map((data, index) => {
                          return (
                              <tr key={index}>
                                  <td>{index+1}</td>
                                  <td>{data.nama}</td>
                                  <td>{data.harga}</td>
                                  <td>{data.berat/1000}Kg</td>
                                  <td>
                                      <button onClick={this.handleEdit} value={index}>Edit</button>
                                      &nbsp;
                                      <button onClick={this.handleDelete} value={index}>Delete</button>
                                  </td>
                              </tr>
                          )
                      })}
                  </tbody>
              </table>
              <form onSubmit={this.handleSubmit}>
                  <label>nama: </label>
                  <input type="text" name="nama" value={this.state.inputNama} onChange={this.handleInput}/>&nbsp;                
                  <label>harga: </label>                  
                  <input type="number" name="harga" value={this.state.inputHarga} onChange={this.handleInput}/>&nbsp;
                  <label>berat: </label>
                  <input type="number" name="berat" value={this.state.inputBerat} onChange={this.handleInput}/>&nbsp;
                  <input type="submit" value="submit"/>
              </form>
              </>
          )
      }
  }

  export default Tabel;