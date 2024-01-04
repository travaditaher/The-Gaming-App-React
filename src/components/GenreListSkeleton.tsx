import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card>
      {/* <Skeleton height="30px" /> */}
      <CardBody>
        <SkeletonText noOfLines={1} />
      </CardBody>
    </Card>
  );
};

export default GenreListSkeleton;
