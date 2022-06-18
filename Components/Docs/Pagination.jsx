// import React from 'react'

// const Pagination = ({totalPages, handelClick}) => {
//   const pages = [...Array(totalPages).keys()].map(num=>num+1)
//   // console.log(pages);
//   return (
//     <div>
//       {pages.map((num,index)=>(
//         <button key={index} onClick={()=>handelClick(num)}>{num}</button>
//       ))}
//     </div>
//   )
// }

// export default Pagination

import React from 'react'

const Pagination = ({docsPerPage, totalDocuments, paginate}) => {
  
  const pageNumbers = []

  for (let i=1; i<=Math.ceil(totalDocuments/docsPerPage); i++)
  {
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number, index)=>(
            <li key={index}>
              <a onClick={()=> paginate(number)} href="!#">{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination