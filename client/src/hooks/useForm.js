import { useState } from "react"

const useForm = (initialState) => {
    const [form, setform] = useState(initialState)
    const handleInput = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const resetForm = () => {
        setform(initialState)
    }
    return { form, handleInput, resetForm }
}

export default useForm