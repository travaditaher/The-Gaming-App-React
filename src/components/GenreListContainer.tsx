import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GenreListContainerProps {
  children: ReactNode;
}

const GenreListContainer = ({ children }: GenreListContainerProps) => {
  return (
    <Box paddingY="5px" height="55px" borderRadius={2}>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default GenreListContainer;
