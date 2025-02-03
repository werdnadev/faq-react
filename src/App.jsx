import React from 'react';
import Question from './Components/Question';


function App() {

  return (

    <>
    <div className='card'>
      <div className='top'><img src="/public/assets/images/icon-star.svg" alt ="star" className='starIcon'></img><h1>FAQs</h1></div>
      <Question/>
    </div>

      <div className='tag'>
        <p>Coded by Werdna</p>
      </div>
    </>
  )
}

export default App
