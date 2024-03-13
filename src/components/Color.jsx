import { useParams } from "react-router-dom"

const Color = () => {

    const {wordParam, colorParam, backgroundParam} = useParams()

    return (
        <>
        <h1 style={{color: `${colorParam}`, backgroundColor: `${backgroundParam}`}}>The word is: {wordParam}</h1>
        </>
    )
}

export default Color;