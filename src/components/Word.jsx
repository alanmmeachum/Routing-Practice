import { useParams } from "react-router-dom";
const Word = () => {

    const {paramOne} = useParams();

    return (
        <>
        <h1>The word is: {paramOne}</h1>
        </>
    )
}

export default Word;