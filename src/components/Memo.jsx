import React from 'react'

function Memo({name}) {
  console.log('ch');
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memo) 

