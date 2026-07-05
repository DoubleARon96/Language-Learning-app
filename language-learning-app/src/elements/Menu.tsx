import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="menu">
        <li><button onClick={() => navigate('/')}>Home</button></li>
        <li><button onClick={() => navigate('/word-game')}>Word Game</button></li>
        <li><button onClick={() => navigate('/crossword')}>Crossword</button></li>
        <li><button onClick={() => navigate('/tips-and-hints')}>Tips and Hints</button></li>
      </ul>
    </div>
  );
}

export default Menu;
