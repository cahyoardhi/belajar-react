import React from 'react'


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

  class ItemBuah extends React.Component {
      constructor(props){
          super(props)
      }

      render(){
          return(
              <tr>
                  <td>{this.props.item.nama}</td>
                  <td>{this.props.item.harga}</td>
                  <td>{this.props.item.berat/1000}Kg</td>
              </tr>
          )
      }
  }

  class Tabel extends React.Component{
      render(){
          return (
              <>
              <h1>Tabel Harga Buah</h1>
              <table style={{border: "1px solid", width:"40%", textAlign:"center", borderCollapse:"collapse", margin:"0 auto"}}>
                  <thead style={{backgroundColor: "#aaa "}}>
                      <th>nama</th>
                      <th>harga</th>
                      <th>berat</th>
                  </thead>
                  <tbody style={{backgroundColor: "coral "}}>                      
                      {dataHargaBuah.map((data, index) => {
                          return (
                              <ItemBuah item={data} key={index}/>
                          )
                      })}
                  </tbody>
              </table>
              </>
          )
      }
  }

  export default Tabel;