import React from 'react'
import CurrentTime from './CurrentTime'
import MakeId from './MakeId'

function LeftFooter() {
  return (
    <div className='leftFooter'>
        <CurrentTime />|
        <span className='makeid'>
            <MakeId length='3' />-
            <MakeId length='4' />-
            <MakeId length='3' />
        </span>
    </div>
  )
}

export default LeftFooter