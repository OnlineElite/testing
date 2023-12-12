import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Test (){

    const [contries, setContries] = useState([])
    const [name , setName]= useState(null)
    
    useEffect(()=>{
        bringData()
        serverMsg()
    }, [])

    const bringData = async()=>{
        try{
            //using axios.get with async await
            const res = await axios.get('https://countriesnow.space/api/v0.1/countries')
            console.log(res.data.data)
            setContries(res.data.data)

            //using axios.get without async await
            /*
            axios.get('https://countriesnow.space/api/v0.1/countries')
            .then((res)=>{
                console.log(res.data.data)
                setContries(res.data.data)
            })
            .catch((err)=>{
                console.error(err)
            })
            */
            //using fetch get without async await
            /*fetch('https://countriesnow.space/api/v0.1/countries')
            .then((res)=>{
                return  res.json()
            })
            .then((response)=>{
                console.log(response.data)
                setContries(response.data)
            })
            .catch((err)=>{
                console.error(err)
            })
            */
           /* 
           //using fetch get with async await
           const response = await fetch('https://countriesnow.space/api/v0.1/countries')
           const res = await response.json()
            console.log(res.data)
            setContries(res.data)*/
            //using axios.post with async await
            /* const res = await axios.get('https://countriesnow.space/api/v0.1/countries', {name : 'jamal'})
             console.log(res.data.data)
             setContries(res.data.data)*/
            //using fetch post with async await
            /*const header = {
                method : 'POST',
                hedears : {'Content-Type': 'application/json'},
                body : JSON.stringify(data)
            }
            const response = await fetch('https://countriesnow.space/api/v0.1/countries', header)
            const res = await response.json()
            console.log(res.data)
            setContries(res.data)*/
        }catch(err){
            console.error(err)
        }
    }

    const serverMsg = async()=>{
        const res = await axios.get(`http://localhost:7500/firstResquist`)
        console.log(res.data.name)
        setName(res.data.name)
    }
    
    return(
        <>
            <div> Hello World</div>
            <select>
                <option value=''>Contries</option>
                {contries?contries.map((item, index)=>(
                    <option key={index}> {item.country} </option>
                )): ''}
            </select>
            <div>Welcome {name} </div>
        </>

    )
}

export default Test;