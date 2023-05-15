import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} Bengal Chefs' Pantry`;
    }, [title])
};

export default useTitle;