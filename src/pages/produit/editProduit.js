import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../templates/sidebar";
import Topbar from "../../templates/topbar";
import useProduit from "../../hooks/produit/produitHook";

function UpdateProduit() {
  const { id } = useParams(); // récupère l'id dans l'URL
  const navigate = useNavigate();
  const { produit, updateProduit } = useProduit();
  const [formData, setFormData] = useState({ name: "", price: "" });

  // Charger le produit actuel par son ID
  useEffect(() => {
    const prod = produit.find((p) => p.id === id || p._id === id);
    if (prod) {
      setFormData({ name: prod.name, price: prod.price });
    }
  }, [produit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      name: formData.name,
      price: parseFloat(formData.price),
    };

    updateProduit(id, updated, () => {
      navigate("/produit"); // retour à la liste après update
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
                    <h2>Modifier un produit</h2>
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
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group mt-2">
                        <label>Prix</label>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          value={formData.price}
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
                        onClick={() => navigate("/produit")}
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

export default UpdateProduit;
