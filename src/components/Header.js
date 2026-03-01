import './Header.css';

function Header({ activePage, setActivePage }) {
  return (
    <header className="header">
      <div className="logo">Yordan</div>
      <nav className="nav">
        <button
          className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => setActivePage('home')}
        >
          Home
        </button>
        <button
          className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => setActivePage('about')}
        >
          About
        </button>
        <button
          className={`nav-link ${activePage === 'projects' ? 'active' : ''}`}
          onClick={() => setActivePage('projects')}
        >
          Projects
        </button>
      </nav>
    </header>
  );
}

export default Header;