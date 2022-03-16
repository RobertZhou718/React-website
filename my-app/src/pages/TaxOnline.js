import React from 'react'
import Taxform from '../components/Taxform'
import PropertDetails from '../components/PropertDetails'
import DependentList from '../components/DependentList'
import UploadFile from '../components/UploadFile'
import Terms from '../components/Terms'
const TaxOnline = ({ user }) => {
  return (
    <>
      <Taxform user={user}/>
      <hr />
      <PropertDetails user={user}/>
      <hr />
      <DependentList user={user}/>
      <hr />
      <UploadFile user={user}/>
      <hr />
      <Terms user={user}/>
    </>
  )
}
export default TaxOnline