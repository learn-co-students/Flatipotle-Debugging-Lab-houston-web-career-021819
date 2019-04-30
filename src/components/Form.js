import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)
    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleChange =(e)=> {
    const itemType = e.target.name
    const item = e.target.value

    //console.log(item)
    //console.log(itemType)
    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  } 

  render() {
    console.log(this.state)
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Your Selections</h1>
        <form className="ui form" id="order-form" onSubmit={ (e)=> this.handleSubmit(e) }>
          <ProteinForm
            protein={ this.state.protein }
            handleOnChange={ (e)=> this.handleChange(e) }
          />

          <FillingForm
            fillings={ this.state.fillings }
            handleOnChange={ (e)=> this.handleChange(e) }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleOnChange={ (e)=> this.handleChange(e) }
          />

          <SideForm
            sides={ this.state.sides }
            handleOnChange={ (e)=> this.handleChange(e) }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
