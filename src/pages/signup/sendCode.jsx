import {useMutation} from "@tanstack/react-query";
import {getCode} from "../../api/axiosReq.js";
import TextFieldComponent from "../../components/inputs/TextFieldComponent.jsx";

const SendCode = (props) => {
    const {isLoading, error, isError, mutateAsync, codeData} = useMutation(getCode)

    const handleSubmit = async () => {
        await mutateAsync({email:props.email})
    }

    if(isError)
    {
        alert(error.message)
    }

    return(
        <>
            <button onClick={handleSubmit}>GET CODE</button>
        </>
    )
}
export default SendCode