import "../cssFiles/contact.css"
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const { t } = useTranslation();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value,
    };
    

    try {
      setLoading(true);
      console.log("API URL:", process.env.REACT_APP_SERVER_API_URL);
      const response = await fetch(process.env.REACT_APP_SERVER_API_URL+'/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("email response",data);
      
      if (response.ok) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);

      event.target.reset();
    }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };


  
  return (
      <section className="contact-section">
          <h2 id="form-title">{t('contact.title')}</h2>
          <form id="form" onSubmit={handleSubmit}>
            <input type="text" name="name" id="form-box" placeholder="Name" required/><br/>
            <input type="email" name="email" id="form-box" placeholder="Email" required/><br/>
            <input type="text" name="subject" id="form-box" placeholder={t('contact.subject')} required/><br/>
            <textarea
              name="message"
              id="message-box"
              cols="30"
              rows="10"
              placeholder={t('contact.message')}
              required>
            </textarea>
            <div className="button-div">
              <button type="submit" id="SUBMIT" disabled={loading}>
            {loading ? t('contact.sending') : sent ? t('contact.sent') : t('contact.send')}</button>
              <span id="OR-BUTTON" >{t('contact.or')}</span>
              <span  id="SUBMIT">
              <Link to={`mailto:?to=ahmadodeh67gt@gmail.com&subject=Email%20aus%20dem%20Portfolio`} id="EMAIL" >{t('contact.email')}</Link>
              </span>
            </div>
          </form>
      </section>
  );
}