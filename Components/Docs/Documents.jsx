// import React from 'react'
// import {useEffect, useState} from 'react'
// import DocList from './DocList'
// import Axios from 'axios'
// import {USER_PER_PAGE} from '../../utils/Constants'
// import Pagination from './Pagination'

// import {useParams} from 'react-router-dom'

// function Documents() {

//  const {nameCollection} = useParams()

//   const [documents, setDocuments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
  
//   // console.log(totalPages);

//   useEffect(() => {
//     const fetchDocs = async()=>{
//       setLoading(true);
      
//       const res = await Axios.get(`http://localhost:5000/collection/${nameCollection}/?p=${page}&limit=30`)
//       console.log(res);
      
//       setLoading(false);
//       setDocuments(res.data.results);
//       setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE))
//     };
//     fetchDocs()
//   },[])

//   const handelClick =num=>{
//     setPage(num)
//   }

//   return (
//     <div>
//       <h1>Pagination</h1>
//       <p>page{page}</p>
//       {loading? <p> Loading ... </p> : <>
//       <DocList documents = {documents} page={page}/>
//       <Pagination totalPages={totalPages} handelClick={handelClick}/>
//       </>}
//     </div>
//   )
// }

// export default Documents

import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Document from './Document'
import Pagination from './Pagination'

const Documents = () => {
  
  const [documents, setDocuments] = useState([]);

  const [loading, setLoading] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const [docsPerPage, setDocsPerPage] = useState(10);

  const {nameCollection} = useParams()

  useEffect(() =>{
    const fetchData = async() => {
      const res = await axios.get(`http://localhost:5000/collection/${nameCollection}`)

      setDocuments(res.data.results);
      setLoading(false)
    }; fetchData()
  }, [] )

  console.log(documents);

  const indexOfLastDocument = currentPage*docsPerPage

  const indexOfFirstDocument = indexOfLastDocument-docsPerPage

  const currentDocuments = documents.slice(indexOfFirstDocument,indexOfLastDocument)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Document documents={currentDocuments} loading={loading}/>
      <Pagination docsPerPage={docsPerPage} totalDocuments={documents.length} paginate={paginate}/>
    </div>
  )
}

export default Documents