import { useState } from 'react';
import "./contact.css"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xjvddykn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert('Mensaje enviado. ¡Gracias!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (

  <div className='contact'>
    <form onSubmit={handleSubmit} className='card w-96 bg-neutral-content text-primary-content' >
      <label style={{margin:"20px "}}>
        <input placeholder="Su nombre" type="text" style={{color:"white"}} value={name} onChange={(e) => setName(e.target.value)} className="top input input-bordered input-primary max-w-xl max-w-xs bg-base-300"/>
      </label>
      <br />
      <label style={{margin:"20px "}}>
        <input type="email" placeholder='Email' style={{color:"white"}} value={email} onChange={(e) => setEmail(e.target.value)} className="top input input-bordered input-primary w-full max-w-xs bg-base-300"/>
      </label>
      <br />
      <label style={{margin:"20px "}}>
        <textarea className="textarea textarea-primary bg-base-300 top" style={{color:"white"}} placeholder="Mensaje" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit" className="btn btn-success btn-outline" style={{margin:"20px "}}>Enviar</button>
    </form>
  </div>
  );
}

export default ContactForm;
