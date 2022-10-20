import React from 'react'
import { NavLink } from 'react-router-dom'
import ShowCaseFemale from '../assets/images/showcase-female.svg'
import ShowCaseMan from '../assets/images/showcase-man.svg'

const ShowCase = () => {
  return (
  <section className="showcase">
      <div class="container">
          <img src={ShowCaseFemale} alt="female sitting"/>
          <div className="showcase-body">
              <h1>SALE UP <br/> To 50% Off</h1>
              <p>Online shopping free home delivery over $100</p>
              <NavLink className="btn btn-lg btn-white" to="/shopnow" end>SHOP NOW</NavLink>
          </div>
          <img src={ShowCaseMan} alt="model man"/>
      </div>
</section>

  )
}

export default ShowCase