"use client"

import {useEffect} from "react";

type Props = {
    error: Error;
    reset: () => void
}

export default function Error({error, reset}: Props){

    useEffect(() => {
        console.error(error.message)
    }, []);

    return(
        <>
            <h1>Error!!</h1>
            <button onClick={() => {reset()}}>Reset</button>
        </>
    )
}
