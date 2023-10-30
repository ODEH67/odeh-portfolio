import "../cssFiles/contact.css"

export default function Contact() {
  
  return (
      <section className="contact-section">
          <h2 id="form-title">Contact Me</h2>
          <form id="form" action=""method="get">
            <input type="text" name="contact" id="form-box" placeholder="Name" required/><br/>
            <input type="email" name="contact" id="form-box" placeholder="Email" required/><br/>
            <input type="text" name="contact" id="form-box" placeholder="Subject"/><br/>
            <textarea
              name="contact"
              id="message-box"
              cols="30"
              rows="10"
              placeholder="Your message">
            </textarea>
            <div className="button-div">
              <button id="SUBMIT">SUBMIT</button>
              <span id="OR-BUTTON" >OR</span>
              <span id="SUBMIT">Per E-MAIL</span>
            </div>
          </form>
      </section>
  );
}