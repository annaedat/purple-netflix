import React from 'react'
import "./Nav.css";


function Nav() {
  /*const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);*/
// {`nav ${show && "nav__black"}`}
  return (
    <div className="nav">
      <div className="nav__logo">NETFLIX</div>
      <img className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Profile"
      />
    </div>
  );
}

export default Nav;