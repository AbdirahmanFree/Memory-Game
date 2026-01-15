import { useEffect, useRef, useState } from 'react'
import { Card } from './Card';
import './Container.css'
const API_KEY = import.meta.env.VITE_API_KEY
function Container(){
    const [chosen, setChosen] = useState([]);
    const [maxScore, setMaxScore] = useState(0);
    const [images, setImages] = useState([])
    const [score, setScore] = useState(0)
    const img_ids= ['B29mTiqmDxDy0', 'STJ7W3pc7F6iA','10Jg7krSvcCQes','qprVSR8zTojRe', 'pChYU23X2y8XC','3oKIPusXllLwBDGYBq','uTpY9ARfN2eqs','ptTfUd6PdJ0sM', 'IazYrqVvnaeeIi8W2Q','HVJJBHxqT4TOU', 'OoaTf8fEuesP6', 'wM2jsoKbVTur6']
    //const img_ids = ['4IzOgM1bfOe6k', 'B29mTiqmDxDy0']
    const giphyUrl= "https://api.giphy.com/v1/gifs/"
    const hasRun = useRef(false)
    
    
    useEffect(() => {
            if(!hasRun.current) {
                hasRun.current = true
            async function fetchImages() {
                try {
                const requests = img_ids.map(async (id) => {
                    const url = `${giphyUrl}${id}?api_key=${API_KEY}`
                    const res = await fetch(url)
                    const data = await res.json()
                    setImages(prev => [...prev, {
                        'src':data.data.images.original.url,
                        'id': crypto.randomUUID()

                    }])
                    console.log(images)
                    
                })

                

                } catch (error) {
                console.error(error)
                }
            }

            fetchImages()
            }
        }
        
        , []) 
    return (
        <div className='Container-Main' id='container'>
            <div className='Score-Board'>
                <span>Score: {score}</span>
                <span>MaxScore: {maxScore}</span>
            </div>
            <div className='Container-Cards'>
                {images.map(img => {
                    
                    return (
                        <div>

                        <Card img={img} images={images} chosen={chosen} setChosen={setChosen} score={score} setScore={setScore} maxScore={maxScore} setMaxScore={setMaxScore} setImages={setImages}/>
                        </div>
                        
                    )
                })}
                

            </div>
        </div>
    )
}
export {Container}