import {
    useState,
    useEffect
} from 'react'

const useLocalStorage = () => {
    const [last1, setLast1] = useState()
    const [last2, setLast2] = useState()
    const [last3, setLast3] = useState()
    const [last4, setLast4] = useState()

    useEffect(() => {
        setLast1(localStorage.getItem("Last search1"))
        setLast2(localStorage.getItem("Last search2"))
        setLast3(localStorage.getItem("Last search3"))
        setLast4(localStorage.getItem("Last search4"))


    }, [localStorage.getItem("Last search1"), localStorage.getItem("Last search2"), localStorage.getItem("Last search3"), localStorage.getItem("Last search4")])

    function clearLast() {
        setLast1("")
        setLast2("")
        setLast3("")
        setLast4("")
        localStorage.clear()
    }

    return [last1, last2, last3, last4, clearLast]
}

export default useLocalStorage