import React, {useEffect} from 'react'
import axios from 'axios'
export const JadenSmith = () =>  {
    useEffect(() => {
        axios
        .get('/api/users')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    
    });
    return (
        <div>test</div>
    )
}