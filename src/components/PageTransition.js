import './PageTransition.css';
import { useState, useEffect } from 'react';

function PageTransition({ children, activeKey }) {
  const [displayedChild, setDisplayedChild] = useState(children);
  const [animationState, setAnimationState] = useState('fade-in');

  useEffect(() => {
    setAnimationState('fade-out');

    const timeout = setTimeout(() => {
      setDisplayedChild(children);
      setAnimationState('fade-in');
    }, 300); // match CSS duration

    return () => clearTimeout(timeout);
  }, [activeKey, children]);

  return (
    <div className={`page-transition ${animationState}`}>
      {displayedChild}
    </div>
  );
}

export default PageTransition;
