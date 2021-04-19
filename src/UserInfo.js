import React from 'react';

var person = [
    {name: "sarah", age: 25},
    {name: "michael", age: 30},
    {name: "john", age: 35},
  ]
  
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }
  }
  
  class Age extends React.Component {
    render() {
      return <h1>Your age is , {this.props.age}</h1>
    }
  }
  
  class UserInfo extends React.Component {
    render() {
      return (
        <>
        {person.map(p => {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <Welcome name={p.name}/>
              <Age age={p.age}/>
            </div>
          )
        })}
        </>
      )
    }
  }

  export default UserInfo