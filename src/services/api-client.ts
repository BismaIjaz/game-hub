import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'847b84f523894c4cbc7100ea8b901ec4'
    }

})