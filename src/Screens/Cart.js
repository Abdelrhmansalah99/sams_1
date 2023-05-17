import React, { useState,useEffect } from 'react'

export default function RegisterScreen() {
    const [name , Setneme] = useState ('')
    const [email , setemail]= useState('')
    const [password , setpassword] = useState('')

    
    return (
        <div style={{height : '100vh'}}>
            <div className="row justify-content-center">
                <div style={{border: '30px' , width: '600px', height : '400px', padding:'100px' }} className='shadow-lg  bg-white rounded allign-center'>
                    <h2 className="text-center m-1 "style={{fontSize : '35px'}}>Cart</h2>
                    <div>
                   
                        <input type="text" placeholder="Varient"className="form-control"style={{fontSize : '20px',margin: '10px'}}/>
                        <input type="text" placeholder="Quantity" className="form-control"style={{fontSize : '20px',margin: '10px'}}/>
                        <button className="btn mt-4"style={{fontSize : '20px'}}>Checkout</button>
                    </div>
            
                </div>
            </div>
        </div>
    )}
