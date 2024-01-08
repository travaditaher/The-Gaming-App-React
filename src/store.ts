import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (plaformId: number) => void;
    setSortOrder: (sorOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>( set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: {searchText} })),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery,  genreId}})),
    setPlatformId: (plaformId) => set(store => ({gameQuery: {...store.gameQuery, plaformId}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}}))

}) )

export default useGameQueryStore;