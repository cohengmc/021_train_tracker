export default function Nav() {
  return (
    <div className="navbar">
      <div id="logo-area">
        <img id="logo" src="/images/Train.gif" alt="Train animation logo" />
        <h1>Train Tracker</h1>
      </div>

      <ul id="navOptions">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
      </ul>
    </div>
  );
}
