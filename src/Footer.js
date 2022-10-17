import React from 'react'
import CenterFooter from './CenterFooter'
import LeftFooter from './LeftFooter'
import RightFooter from './RightFooter'

function Footer() {
  return (
    <div className='footer'>
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </div>
  )
}

export default Footer