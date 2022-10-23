import React, {
    useState
} from 'react'

const useClick = () => {
    const [click, setClick] = useState(false)

    function searchActive() {
        setClick(true)
    }

    function searchDeactive() {
        setClick(false)
    }


    return [click, searchActive, searchDeactive]
}

export default useClick;