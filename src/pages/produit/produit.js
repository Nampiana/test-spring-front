import React from "react";
import Sidebar from "../../templates/sidebar";
import Topbar from "../../templates/topbar";
import Footer from "../../templates/footer";
import useProduit from "../../hooks/produit/produitHook";
import { useNavigate } from "react-router-dom";

function Produit() {
    const { produit, deleteProduit } = useProduit();
    const navigate = useNavigate();

      const navigateToCreateUser = () => {
        navigate("/create-produit");
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

                            <div className="col-md-12">
                                <div className="white_shd full margin_bottom_30">
                                    <div className="full graph_head">
                                        <div className="heading1 margin_0">
                                            <h2>Liste des produits</h2>
                                        </div>
                                    </div>
                                    <div className="table_section padding_infor_info">
                                        <div className="table-responsive-sm">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom</th>
                                                        <th>Adresse</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {produit.map((produit) => (
                                                        <tr key={produit._id}>
                                                            <td>{produit.id}</td>
                                                            <td>{produit.name}</td>
                                                            <td>{produit.price}</td>
                                                             <td>
                                                                <div style={{ display: "flex", gap: "10px" }}>
                                                                    <button
                                                                        className="btn btn-primary btn-sm"
                                                                        onClick={() => navigate(`/edit-produit/${produit.id}`)}
                                                                    >
                                                                        Modifier
                                                                    </button>
                                                                    <button
                                                                    className="btn btn-danger btn-sm ml-2"
                                                                    onClick={() => {
                                                                        if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
                                                                        deleteProduit(produit.id);
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
                                            <button className="btn btn-success btn-sm"
                                            onClick={navigateToCreateUser}
                                            >
                                                Créer Produits
                                            </button>
                                        </div>
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

export default Produit;
