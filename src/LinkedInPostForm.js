import React, { useState } from 'react'

function LinkedInPostAnalysis({ onSubmit }){
    const [url, setUrl] = useState('')

    const handleSubmit = (e)=>{
        onSubmit(url)
    }
   return(
        <form onSubmit={handleSubmit}>
            <label>
                LinkedIn Post Link:
                <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)}/>
            </label>
            <button type='submit'>Analyse</button>
        </form>
    )
}

export default LinkedInPostAnalysis