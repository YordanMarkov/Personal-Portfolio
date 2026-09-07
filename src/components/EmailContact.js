import { useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import mail from '../images/mail.svg';
import './EmailContact.css';
import './ContactSurface.css';

const address = 'yordanmarkov2004@gmail.com';

export default function EmailContact({ label }) {
  const dialog = useRef(null);
  const addressInput = useRef(null);
  const inputId = useId();
  const [status, setStatus] = useState('');

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setStatus('Email address copied.');
    } catch {
      addressInput.current.focus();
      addressInput.current.select();
      setStatus('Select and copy the address above.');
    }
  };

  return (
    <>
      <button type="button" className="email-trigger" aria-label="Email Yordan" onClick={() => dialog.current.showModal()}>
        <img src={mail} alt="" />{label && <span>{label}</span>}
      </button>
      {createPortal(
        <dialog className="email-dialog" ref={dialog} aria-label="Contact Yordan by email" onClose={() => setStatus('')}>
          <button type="button" className="email-close" aria-label="Close email options" onClick={() => dialog.current.close()}>×</button>
          <h2>Let’s talk.</h2>
          <p>Choose where to write your message, or copy my address.</p>
          <label htmlFor={inputId}>Email address</label>
          <input id={inputId} ref={addressInput} value={address} readOnly onFocus={e => e.target.select()} />
          <div className="email-actions">
            <a href={`mailto:${address}`}>Open email app</a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">Open Gmail</a>
            <button type="button" onClick={copyAddress}>Copy address</button>
          </div>
          <p className="email-hint">No email app configured? Use Gmail or paste the address into your preferred email service.</p>
          <p role="status">{status}</p>
        </dialog>, document.body
      )}
    </>
  );
}
