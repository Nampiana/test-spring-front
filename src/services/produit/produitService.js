import axios from "axios";
import { ApiUrl, header } from "../../utils/modules";

class ProduitServices {
  getAll() {
    return axios.get(ApiUrl + "/products", header());
  }

  create(data) {
    return axios.post(ApiUrl + "/products", data, header());
  }

  update(id, data) {
    return axios.put(ApiUrl + `/products/${id}`, data, header());
  }

 getOne(id) {
    return axios.get(ApiUrl + `/products/${id}`, header());
  }

  delete(id) {
    return axios.delete(ApiUrl + `/products/${id}`, header());
  }
}


export default new ProduitServices();
