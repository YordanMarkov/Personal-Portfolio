import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './MediaViewer.css';

export default function MediaViewer({ src, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    element.showModal();
    return () => {
      element.close();
      document.documentElement.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog className="media-viewer" ref={dialog} aria-label="Project media" onCancel={onClose} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    }}>
      <div className="media-viewer-toolbar">
        <button type="button" aria-label="Close project media" onClick={onClose} autoFocus>×</button>
      </div>
      {src.endsWith('.mp4')
        ? <video src={src} className="media-viewer-content" controls autoPlay playsInline />
        : <img src={src} className="media-viewer-content" alt="Expanded project screenshot" />}
    </dialog>, document.body
  );
}
