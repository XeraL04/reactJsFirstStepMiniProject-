import React from 'react'
import {USER_PER_PAGE} from '../../utils/Constants'
import Document from './Document'

const DocList = ({documents, page}) => {

  // console.log(USER_PER_PAGE);

  const startIndex = (page-1) * USER_PER_PAGE

  const selectedDocuments = documents.slice(startIndex, startIndex + USER_PER_PAGE)

  return selectedDocuments.map((document,index) =>(
    <Document key={index} document={document} />
  ))
}

export default DocList