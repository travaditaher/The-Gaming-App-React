import { useQuery } from "@tanstack/react-query"
import APIClient from "../Services/api-client"
import Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games')

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useGame