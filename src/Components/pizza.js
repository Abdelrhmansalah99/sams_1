import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap';

export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '100px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>

            <div onClick={handleShow}>
            <h1 style={{color : 'rgb(33,37,41)'}}>{pizza.name} </h1>
            <img src={pizza.image} className="img-fluid " style={{ height: '200px', width: '200px' }} variant="primary" onClick={handleShow}/>
            </div>

            <div className="flex-container" />


            <div className='w-100 h-100 m-1'>
                <p style={{color : 'rgb(33,37,41)'}} >varients</p>
                <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                    {pizza.varients.map(varient => {
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
            </div>

            <div className='w-100 h-100 m-1'>
                <p style={{color : 'rgb(33,37,41)'}}>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                    {[...Array(10).keys()].map((x, i) => {

                        return <option value={i + 1}>{i + 1}</option>

                    })}
                </select>
            </div>
            <div>
                <div className="flex-container" />
                <div className='m-1 w-100'>
                    <h1 className='mt-1'> price : {pizza.price[0][varient] * quantity} Egp</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn">Add to cart </button>
                </div>
            </div>
            <Modal show={show} style={{textAlign: "center"}}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} style={{height : '250px' , width : '250px'}}/>
                    <p style={{fontSize: "1.2rem", marginTop: "20px"}}>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn"onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}