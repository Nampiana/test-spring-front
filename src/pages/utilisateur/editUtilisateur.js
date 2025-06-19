import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Topbar from "../../templates/topbar";
import useUtilisateur from "../../hooks/utilisateur/utilisateurHook";

function UpdateUtilisateur() {
  const { id } = useParams(); // récupère l'id dans l'URL
  const navigate = useNavigate();
  const { utilisateur, createUtilisateur, getUtilisateur, deleteUtilisateur, updateUtilisateur } = useUtilisateur();
  const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  roles: "",
});


  // Charger le produit actuel par son ID
  useEffect(() => {
    const ut = utilisateur.find((u) => u.id === id || u._id === id);
    if (ut) {
      setFormData({ username: ut.username, email: ut.email, password: ut.password, roles: ut.roles });
    }
  }, [utilisateur, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      roles: formData.roles,
    };

    updateUtilisateur(id, updated, () => {
      navigate("/utilisateur"); // retour à la liste après update
    });
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
                    <h2>Modifier un utilisateur</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="white_shd full margin_bottom_30">
                  <div className="full graph_head">
                    <div className="heading1 margin_0">
                      <h2>Formulaire</h2>
                    </div>
                  </div>
                  <div className="form_section padding_infor_info">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Nom</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="text"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group mt-2">
                        <label>Role</label>
                        <input
                          type="number"
                          className="form-control"
                          name="roles"
                          value={formData.roles}
                          onChange={handleChange}
                          required
                          step="0.01"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary mt-3">
                        Mettre à jour
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mt-3 ml-2"
                        onClick={() => navigate("/utilisateur")}
                      >
                        Annuler
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* <Footer /> si tu veux */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUtilisateur;
