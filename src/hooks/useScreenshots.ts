import { useQuery } from '@tanstack/react-query'
import APIClient from '../Services/api-client'
import ScreenShot from '../entities/ScreenShot'



const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`)
    return useQuery({
    queryKey: ['screenshot', gameId],
    queryFn: apiClient.getAll
})
}

export default useScreenshots;