import React, { useState } from 'react'
import LinkedInPostAnalysis from './LinkedInPostForm'

function App() {
  const [analysisData, setAnalysisData] = useState(null)

  const analyseLinkedInPost = (url)=>{
    const formdata = new FormData()
    formdata.append('url', url)
    fetch('http://127.0.0.1:5000/insight-LinkedInPost',{
      method: 'POST',
      body: formdata
    }).then((response) => response.json())
    .then((data) => {
      console.log(data)
      debugger
      setAnalysisData(data)
    }).catch((e) => console.error("Error==>", e))
  }
  console.log(analysisData)

  return (
    <div className="App">
      <LinkedInPostAnalysis onSubmit={analyseLinkedInPost}/>
      {analysisData && (
        <div>
          <h2>
            Analysis Result:
          </h2>
          <p>Category: {analysisData.OpenAIResponse.category}</p>
          <p>Tags: {analysisData.OpenAIResponse.tags.join(', ')}</p>
          {analysisData.text && (
            <p>Text: {analysisData.text}</p>
          )}
          {analysisData.image_url && (
            <p>Image URL: {analysisData.image_url}</p>
          )}
          {analysisData.video_url && (
            <p>Video URL: {analysisData.video_url}</p>
          )}
          <p>Schema Type: {analysisData.schemaType}</p>
          <p>Schema: {analysisData.schema}</p>
        </div>
      )}
    </div>
  );
}

export default App;
