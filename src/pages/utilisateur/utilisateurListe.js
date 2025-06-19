import React, { useState } from "react";
import Sidebar from "../../templates/sidebar";
import Topbar from "../../templates/topbar";
import useUtilisateur from "../../hooks/utilisateur/utilisateurHook";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function Utilisateur() {
  const { utilisateur, getUtilisateur, deleteUtilisateur } = useUtilisateur();
  const navigate = useNavigate();
  const [selectedUtilisateur, setSelectedUtilisateur] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigateToCreateUser = () => {
    navigate("/create-utilisateur");
  };

  const handleShowDetails = (id) => {
    getUtilisateur(id, (data) => {
      setSelectedUtilisateur(data);
      setShowPopup(true);
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedUtilisateur(null);
  };

  return (
    <div className="full_container">
      <div className="inner_container">
        <Sidebar />
        <div id="content">
          <Topbar />
          <div className="middle_content">
            <div className="container-fluid">
              <div className="row column_title">
                <div className="col-md-12">
                  <div className="page_title">
                    <h2>Utilisateurs</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="white_shd full margin_bottom_30">
                  <div className="full graph_head">
                    <div className="heading1 margin_0">
                      <h2>Liste des utilisateir</h2>
                    </div>
                  </div>
                  <div className="table_section padding_infor_info">
                    <div className="table-responsive-sm">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Roles</th>
                          </tr>
                        </thead>
                        <tbody>
                          {utilisateur.map((utilisateur) => (
                            <tr key={utilisateur.id}>
                              <td>{utilisateur.id}</td>
                              <td>{utilisateur.username}</td>
                              <td>{utilisateur.email}</td>
                              <td>{utilisateur.roles}</td>
                              <td>
                                <div style={{ display: "flex", gap: "10px" }}>
                                  <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => handleShowDetails(utilisateur.id)}
                                  >
                                    Voir
                                  </button>
                                  <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() =>
                                      navigate(`/edit-utilisateur/${utilisateur.id}`)
                                    }
                                  >
                                    Modifier
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => {
                                      if (
                                        window.confirm(
                                          "Voulez-vous vraiment supprimer cette utilisateur ?"
                                        )
                                      ) {
                                        deleteUtilisateur(utilisateur.id);
                                      }
                                    }}
                                  >
                                    Supprimer
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="text-center mt-3">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={navigateToCreateUser}
                      >
                        Créer Produits
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Popup */}
              {showPopup && selectedUtilisateur && (
                <div className="popup-backdrop">
                  <div className="popup">
                    <h4>Détail du Produit</h4>
                    <p>
                      <strong>ID :</strong> {selectedUtilisateur.id}
                    </p>
                    <p>
                      <strong>Nom :</strong> {selectedUtilisateur.username}
                    </p>
                    <p>
                      <strong>Email :</strong> {selectedUtilisateur.email}
                    </p>
                    <p>
                      <strong>Role :</strong> {selectedUtilisateur.roles}
                    </p>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={closePopup}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilisateur;
