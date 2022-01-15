import { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(() => {
        document.title ="Ayush Dubey | "+ title
    }, [title])
}

export default useTitle
