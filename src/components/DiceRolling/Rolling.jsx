import React, { useState } from 'react'
import Header from '../Header/Header'
import './style.css'
export default function Rolling() {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    const getRandom = () => {
        return Math.floor(Math.random() * 6) + 1
    }
    const generatorDiv = () => {
        const random1 = getRandom()
        const random2 = getRandom()
        setNum2(random2)
        setNum(random1)
    }
    // generatorDiv()
    return (
        <div>
            <Header title='Dice Rolling' />
            <div className="d-flex justify-content-center align-items-center">
                <div className="block_for_Rolling mx-5">
                    {Array.from({length:num},(index)=>(
                        <div className="box box_for_Rolling">{index}</div>
                    ))}
                </div>
                <div className="block_for_Rolling mx-5">
                    {Array.from({length:num2},(index)=>(
                        <div className="box box_for_Rolling">{index}</div>
                    ))}
                </div>
            </div>
            <button className='btn btn-light btn__for_Rolling mt-5' onClick={generatorDiv}>Click</button>
        </div>
    )
}
