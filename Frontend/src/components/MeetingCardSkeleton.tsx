import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MeetingCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"300px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default MeetingCardSkeleton;
