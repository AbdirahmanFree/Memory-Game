function Card({img, chosen, setChosen, score, setScore, maxScore, setMaxScore, images, setImages}){
    const src = img.src
    const id = img.id

    function fisherYates(array){
        for(let i = array.length-1; i >0; i--){
            const j = Math.floor((Math.random() * array.length))
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
        return array
    }
    function handleClick(){
        if(chosen.includes(id)){
            setChosen([])
            setScore(0)
        }
        else {
            setChosen(prev => [...prev,id])
            console.log()
            
            if(score >= maxScore){
                setMaxScore(score+1)
            }
            setScore(prev => prev+1)


        }
        setImages(prev => fisherYates(prev))
        

    }
    return (
        <div onClick={handleClick}>
            <img src={src}/>
        </div>
    )
}

export {Card}