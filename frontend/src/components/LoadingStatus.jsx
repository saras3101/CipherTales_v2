import React from 'react'

function LoadingStatus({theme}) {
  return (
    <div>
        <h2 className='loading-container'>
            Generating Your {theme} Story
        </h2>
        <div className='loading-animation'>
            <div className='spinner'></div>
        </div>

        <p className='loading info'>
            Please wait while we generate your story...
        </p>
      
    </div>
  )
}

export default LoadingStatus
