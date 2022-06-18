// import React from 'react'

// const Document = ({document}) => {

//     //   console.log(document);
    
//   return (
//     <div>
//         <hr />
//         <p>{`Client: ${document.client}`}</p>
//         <p>{`Device Id: ${document.deviceId}`}</p>
//         <p>{`Device Label: ${document.deviceLabel}`}</p>
//         <p>{`Imei Number: ${document.imei}`}</p>
//     </div>
//   )
// }

// export default Document

import React from 'react'

const Document = ({documents, loading}) => {
  
  if(loading){
    return <div><h1>Loading</h1></div>
  }

  return (
    <div>
      {documents.map((document, index) =>(
        <li key={index}>{document.imei}</li>
      ))}
    </div>
  )
}

export default Document