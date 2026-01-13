import { useEffect, useState } from 'react'
import { Card } from './Card';
import './Container.css'
const API_KEY = import.meta.env.VITE_API_KEY
function Container(){
    const [chosen, setChosen] = useState([]);
    const [maxScore, setMaxScore] = useState(0);
    const [images, setImages] = useState([])
    const score = chosen.length
    const img_ids= ['4IzOgM1bfOe6k','B29mTiqmDxDy0','WHVf9eG9nrujc3P6Ns', 'STJ7W3pc7F6iA','10Jg7krSvcCQes','qprVSR8zTojRe', 'pChYU23X2y8XC','3oKIPusXllLwBDGYBq','uTpY9ARfN2eqs','ptTfUd6PdJ0sM', 'IazYrqVvnaeeIi8W2Q','HVJJBHxqT4TOU', 'rC9e6sdnlqGqI', 'OoaTf8fEuesP6', 'wM2jsoKbVTur6']
    const giphyUrl= "https://api.giphy.com/v1/gifs/"

    function fisherYates(array){
        for(let i = array.length-1; i >0; i--){
            const j = Math.floor((Math.random() * array.length))
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
        return array
    }
    console.log(fisherYates([1,2,3,4,5]))
    

    useEffect(() => {
        try {
            img_ids.map(async (id) => {
                const url = giphyUrl + id + '?api_key=' + API_KEY
                const res = await fetch(url)
                const data = await res.json()
                //setImages(prev => prev.push(data.data.original.url))
            })
            

        }
        catch(error) {
            console.log(error)
        }
        return () => {

        }

    }, [])
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