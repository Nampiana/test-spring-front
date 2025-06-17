import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { logout } = useContext(AuthContext);
  const [showDeconnexion, setShowDeconnexion] = useState(false);
  const [user, setUser] = useState({ nom: "", prenom: "", role: null });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser({
        nom: userData.nom,
        prenom: userData.prenom,
        role: userData.role,
      });
    }
  }, []);
  useEffect(() => {
    function handleResize() {
      const largeur = window.innerWidth;
      if (largeur <= 1200) {
        //code d'affichage
        setShowDeconnexion(true);
      } else {
        setShowDeconnexion(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Exécution immédiate au chargement
    handleResize();

    // Nettoyage à la désactivation du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav id="sidebar">
      <div className="sidebar_blog_1">
        <div className="sidebar-header">
          <div className="logo_section">
            <a href="index.html">
              <img
                className="logo_icon img-responsive"
                src="/images/logo/logo_icon.png"
                alt="#"
              />
            </a>
          </div>
        </div>
        <div className="sidebar_user_info">
          <div className="icon_setting"></div>
          <div className="user_profle_side">
            <div className="user_img">
              <img
                className="img-responsive"
                src="/images/layout_img/user_img.jpg"
                alt="#"
              />
            </div>
            <div className="user_info">
              <h6>
                {user.nom} {user.prenom}
              </h6>
              <p>
                <span className="online_animation"></span> Actif
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_blog_2">
        <ul className="list-unstyled components">
            <>
              <li>
                <Link to="/users">
                  <i className="fa fa-users orange_color"></i>{" "}
                  <span>Utilisateurs</span>
                </Link>
              </li>
              
            </>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
