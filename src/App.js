import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  state = {
    orders:[] 
   }

  addOrder = (order) => {
    console.log(order)
    this.setState({
      orders: this.state.orders.concat(order)
    })
  } 

  addProtein = (item) =>{
    this.setState({
      protein: this.state.protein.push(item)
    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => <Order key={idx} {...order} />)
     //console.log(orders  <Order key={idx} {...order} />
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder = {this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
           { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App

/* A user should be able to see an order form with options for protein, fillings, toppings, and sides.
   A user should be able to select as many proteins, fillings, toppings, and sides as they desire.
   A user should be able to submit the form with their selections and see their order(s) listed under "All Orders."
   If a user selects any sides, they should be able to click on a button to view their side choices.  //toggle
*/
