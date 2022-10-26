import React, { useState } from 'react'

const ContactFormSection = () => {
  const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
  const [formErrors, setFormErrors] = useState ({})
  const [submitted, setSubmitted] = useState (false)

  const validate= (values) => {
    const errors = {}
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!values.name)
         errors.name = "You must enter a name"
    else if(values.name.length < 2)     
         errors.name = "Your name must be longer then 2 characters"

    if (!values.email)
         errors.email = "You must enter an e-mail adress"
    else if (!regex_email.test(values.email))
         errors.email = "You must enter a valid e-mail adress (eg. name@domain.com)"

    if (!values.comment)
         errors.comment = "You must enter a comment"
    else if(values.comment.length < 5)     
         errors.comment = "Your comment must be longer then five characters"

    if (Object.keys(errors).length === 0)
      setSubmitted (true)
    else
      setSubmitted(false) 

    return errors;
  }

/* test */
  const checkLength = (element, minLength = 2, message) => {

    if(message === undefined)
    message = `Your ${element.target.id} must contain at least ${minLength} characters`

    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = message
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }

}

const checkEmail = (element, message) => {
  if(message === undefined)
      message = `Your ${element.target.id} must be a valid e-mail address`
  
  if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      document.getElementById(element.target.id).classList.add('error')
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = message
  } else {
      document.getElementById(element.target.id).classList.remove('error')
      document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
  }
}

  const handleClick = (e) => {
    switch(e.target.type) {
      case "text":
          checkLength(e)
          break;
      case "email":
          checkEmail(e)
          break;
      case "textarea":
          checkLength(e, 5)
          break;
    }
  }

/* test slut */



  const handleChange = (e) => {
    const {id, value} = e.target
    setContactForm({...contactForm, [id]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault ()
    setFormErrors (validate(contactForm))
  }

  return (
      <section className="contact-form">
          <div className="container">
              {
                submitted ? 
                (<div className="d-flex justify-content-center align-items-center">
                  <div>Thank you for your comment!</div>
                </div>)
                :
                (
                  <>
                      <h2>Come in Contact with Us</h2>
                      <form onSubmit={handleSubmit} noValidate>
                        <div>
                          <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} onKeyUp={handleClick} />
                          <div id="nameErrorMessage" className="errorMessage">{formErrors.name}</div>
                        </div>
                        <div>
                          <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} onKeyUp={handleClick} />
                          <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
                        </div>
                        <div className="textarea">
                          <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} onKeyUp={handleClick} ></textarea>
                          <div id="commentErrorMessage" className="errorMessage">{formErrors.comment}</div>
                        </div>
                        <div className="formBtn">
                          <button type="submit" className="btn-theme">Post Comments</button>
                        </div>
                      </form>
                  </>
                )
              }
          </div>
      </section>
  )
}

export default ContactFormSection