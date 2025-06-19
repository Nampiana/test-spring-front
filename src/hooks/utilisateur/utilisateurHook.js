import { useEffect, useState } from "react";
import UtilisateurServices from "../../services/utilisateur/utilisateurService";

function useUtilisateur() {
  const [utilisateur, setUtilisateur] = useState([]);

  function fetchUtilisateur() {
    UtilisateurServices.getAll()
      .then((res) => {        
        if (Array.isArray(res.data)) {                     
            setUtilisateur(res.data);
        } else {
          console.error("La réponse de l'API n'est pas un tableau.");
        }
      })
      .catch((err) => console.error("Erreur API :", err));
  }
  
  useEffect(() => {
    fetchUtilisateur();
  }, []);

    const createUtilisateur = (data, callback = () => {}) => {
      UtilisateurServices.create(data)
        .then(() => {
          fetchUtilisateur();
          callback();
        })
        .catch((err) => console.error(err));
    };

    const updateUtilisateur = (id, data, callback = () => {}) => {
        UtilisateurServices.update(id, data)
          .then(() => {
            fetchUtilisateur();
            callback();
          })
          .catch((err) => console.error(err));
      };

    const getUtilisateur = (id, callback = () => {}) => {
      UtilisateurServices.getOne(id)
        .then((res) => {
          callback(res.data);
        })
        .catch((err) => console.error(err));
    };

    const deleteUtilisateur = (id, callback = () => {}) => {
        UtilisateurServices.delete(id)
          .then(() => {
            fetchUtilisateur();
            callback();
          })
          .catch((err) => console.error(err));
      };



  return { utilisateur, createUtilisateur, getUtilisateur, deleteUtilisateur, updateUtilisateur };
}

export default useUtilisateur;
