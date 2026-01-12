import { useState } from 'react'
import { Card } from './Card';
import './Container.css'
function Container(){
    const [chosen, setChosen] = useState([]);
    const [maxScore, setMaxScore] = useState(0);
    const score = chosen.length
    return (
        <div className='Container-Main'>
            <div className='Score-Board'>
                <span>Score: {score}</span>
                <span>MaxScore: {maxScore}</span>
            </div>
            <div className='Container-Cards'>

            </div>
        </div>
    )
}
export {Container}