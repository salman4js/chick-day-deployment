import emailjs from 'emailjs-com';
import React, {useRef, useState} from 'react'

const Contact = () => {

  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const sendMail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_wv0lcsn', 'template_oxaju5u', formRef.current, 'sjfNeHytplJzpVWfs')
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
      });
      formRef.current.reset();
  }

  return (
    <div className="container" id = "contact">
      <div className="browse-name">
        <h1 className="browse-title">
          CONTACT US!
        </h1>
        <hr />
        <div className="c-sub">
          <div className="c-desc">
            <b>
              Get in touch!
            </b>
          </div>
          <form ref = {formRef} onSubmit = {sendMail}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name = "email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"> Your Name </label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Name" name = "name" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"> Contact Number </label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Contact Number" name = "number" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your contact with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="user_message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div className = "sent">
                {sent && "Thank you for contacting us. Chick-Day operator will be in touch with you soon!"}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact