import { useNavigate, useParams } from "react-router-dom"

const NumberOrWord = () => {


    const {paramOne} = useParams()

    let isNumber = (param) => (
        !isNaN(param) ? `The number is: ${param}`: `The word is: ${param}`
    )

    return (
        <>
        <h1>{isNumber(paramOne)}</h1>
        </>
    )
}

export default NumberOrWord;