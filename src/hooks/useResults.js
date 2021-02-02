import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm = "pasta") => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setError("Something went wrong");
    }
  };
  // we want to show default search results
  useEffect(() => {
    searchApi();
  }, []);
  return [searchApi, results, error];
};
