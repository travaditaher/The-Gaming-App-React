import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";
import GenreListContainer from "./GenreListContainer";
import GenreListSkeleton from "./GenreListSkeleton";


interface GenereListProps{
  onSelectGenre: (genre: Genre) => void;
}

const GenereList = ({onSelectGenre}: GenereListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return null;
  // if(isLoading) return <Spinner />
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer key={skeleton}>
            <GenreListSkeleton />
          </GenreListContainer>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
