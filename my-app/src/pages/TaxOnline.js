import React from 'react'
import Reservation from '../components/Reservation'
import Taxform from '../components/Taxform'
import PropertDetails from '../components/PropertDetails'
import DependentList from '../components/DependentList'
import UploadFile from '../components/UploadFile'
import Terms from '../components/Terms'
const TaxOnline = () => {
  return (
    <>
      <Reservation />
      <hr />
      <Taxform />
      <hr />
      <PropertDetails />
      <hr />
      <DependentList />
      <hr />
      <UploadFile />
      <hr />
      <Terms />
    </>
  )
}
export default TaxOnline