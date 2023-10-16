import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <div className="prompt">
          <h2>Hi, My Name is Stelios</h2>
          <h3>Welcome to my portfolio</h3>
        </div>
        <p className='quote'>"Programming is the art of telling another human being what one
          wants the computer to do."<span id='knuth'>― Donald Ervin Knuth</span>
        </p>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, JavaScript, HTML, CSS, SCSS
            </span>
          </li>
          <li className="item">
            <h2>Other Languages</h2>
            <span>Java, C, mySQL, VHDL</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home