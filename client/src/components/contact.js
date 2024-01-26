import "../cssFiles/contact.css"

export default function Contact() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value,
    };
    

    try {
      const response = await fetch(process.env.REACT_APP_SERVER_API_URL + '/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      event.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  
  return (
      <section className="contact-section">
          <h2 id="form-title">Contact Me</h2>
          <form id="form" onSubmit={handleSubmit}>
            <input type="text" name="name" id="form-box" placeholder="Name" required/><br/>
            <input type="email" name="email" id="form-box" placeholder="Email" required/><br/>
            <input type="text" name="subject" id="form-box" placeholder="Subject" required/><br/>
            <textarea
              name="message"
              id="message-box"
              cols="30"
              rows="10"
              placeholder="Your message"
              required>
            </textarea>
            <div className="button-div">
              <button type="submit" id="SUBMIT">SEND</button>
              <span id="OR-BUTTON" >OR</span>
              <span id="SUBMIT">Contact per E-MAIL</span>
            </div>
          </form>
      </section>
  );
}