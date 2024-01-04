import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface Genere{
    id: number;
    name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genere[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genere[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {

      const controller = new AbortController();
      
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal })
        .then((res) => {setGenres(res.data.results);
        setLoading(false)})
        .catch((error) => {
            if(error instanceof CanceledError) return;
            setError(error.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading};

};

export default useGenres; 