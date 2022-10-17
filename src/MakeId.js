import React from 'react'

function MakeId(props) {
    let result           = '';
    const characters       = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( var i = 0; i < props.length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
   }
  return (
    <>{result}</>
  )
}

export default MakeId