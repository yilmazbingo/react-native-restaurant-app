import axios from "axios";
import { config } from "../config";

export default axios.create({
  baseURL: "http://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${config.yelpClient}`,
  },
});
