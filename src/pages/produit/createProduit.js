import React, { useState } from "react";
import Sidebar from "../../templates/sidebar";
import Topbar from "../../templates/topbar";
import Footer from "../../templates/footer";
import useProduit from "../../hooks/produit/produitHook";
import { useNavigate } from "react-router-dom";

function CreateProduit() {
    const { produit, createProduit, deleteProduit  } = useProduit();
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        name: "",
        price: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            name: formData.name,
            price: parseFloat(formData.price),
        };

        createProduit(dataToSend, () => {
            // Réinitialiser le formulaire
            setFormData({ name: "", price: "" });
        });

        navigate("/produit")
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
                                        <h2>Produits</h2>
                                    </div>
                                </div>
                            </div>

                            {/* FORMULAIRE DE CREATION */}
                            <div className="col-md-12">
                                <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                        <div className="heading1 margin_0">
                                            <h2>Créer un produit</h2>
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
                                            <button type="submit" className="btn btn-success mt-3">
                                                Ajouter le produit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduit;
