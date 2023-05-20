import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Meeting from "../entities/Meeting";

interface Props {
  meeting: Meeting;
}

const MeetingCard = ({ meeting }: Props) => {
  return (
    <Card>
      <Image src={meeting.picture} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}></HStack>
        <Heading fontSize="2xl"></Heading>
      </CardBody>
    </Card>
  );
};

export default MeetingCard;
