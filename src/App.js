import './styles.css';

function App() {
  return (
    <div className='container'>
      <header className='app-header'>
        <nav className='app-navebar'>
          <div className='logo'>
            <span>Logo</span>Company
          </div>
          <div className='toggle'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className='menu'>
            <li>
              <a href='#about'>about</a>
            </li>
            <li>
              <a href='#services'>services</a>
            </li>
            <li>
              <a href='#contacts'>contacts</a>
            </li>
          </ul>
          <div className='btn-user'>
            <button className='btn-login'>login</button>
            <button className='btn-signup'>sign up</button>
          </div>
        </nav>
        <div className='hero-section'>
          <div className='content-text'>
            <h1>Data to enrich your online business</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <button className='seemore'>see more</button>
        </div>
      </header>
      <section className='ourservices'></section>
    </div>
  );
}
export default App;
