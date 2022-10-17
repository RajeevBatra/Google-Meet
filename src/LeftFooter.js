import React from 'react'
import CurrentTime from './CurrentTime'
import MakeId from './MakeId'

function LeftFooter() {
  return (
    <div>
        <CurrentTime />
        <p className='makeid'>
            <MakeId length='3' />-
            <MakeId length='4' />-
            <MakeId length='3' />
        </p>
    </div>
  )
}

export default LeftFooter