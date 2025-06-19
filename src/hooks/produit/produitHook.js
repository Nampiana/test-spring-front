import { useEffect, useState } from "react";
import ProduitServices from "../../services/produit/produitService";

function useProduit() {
  const [produit, setProduit] = useState([]);

  function fetchProduit() {
    ProduitServices.getAll()
      .then((res) => {        
        if (Array.isArray(res.data)) {                     
            setProduit(res.data);
        } else {
          console.error("La réponse de l'API n'est pas un tableau.");
        }
      })
      .catch((err) => console.error("Erreur API :", err));
  }
  
  useEffect(() => {
    fetchProduit();
  }, []);

  const createProduit = (data, callback = () => {}) => {
    ProduitServices.create(data)
      .then(() => {
        fetchProduit();
        callback();
      })
      .catch((err) => console.error(err));
  };

  const updateProduit = (id, data, callback = () => {}) => {
    ProduitServices.update(id, data)
      .then(() => {
        fetchProduit();
        callback();
      })
      .catch((err) => console.error(err));
  };

  const getProduit = (id, callback = () => {}) => {
  ProduitServices.getOne(id)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.error(err));
};

 
  const deleteProduit = (id, callback = () => {}) => {
    ProduitServices.delete(id)
      .then(() => {
        fetchProduit();
        callback();
      })
      .catch((err) => console.error(err));
  };

  return { produit, createProduit, updateProduit, deleteProduit, getProduit };
}

export default useProduit;
