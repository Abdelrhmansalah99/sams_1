import React from 'react'
import pizzas from '../pizzasdata' 
import Pizza from '../Components/pizza'
export default function Homescreen() {
    return (

    <div >
    <div className="row">
        {pizzas.map (pizzas=> {

        return <div className="col-md-4">
            <div>
            <Pizza pizza={pizzas}/>
            </div>
        </div>
             })}
        </div>
    </div>
    )
}