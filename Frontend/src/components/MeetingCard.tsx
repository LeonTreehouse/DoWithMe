import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Meeting from "../entities/Meeting";


interface Props {
  meeting: Meeting;
}


const MeetingCard = ( { meeting }: Props) => {
  return (
    <Card className="cardComponenet">
        <Box className="cardContainer">
          <CardBody>
            <Heading fontSize="2xl" className="meetingCardHeading">{meeting.name}</Heading>
            <Text className="meetingCardTime">{meeting.time}</Text>
            <Text className="meetingCardText">{meeting.location}</Text>
          </CardBody>
        </Box>
    </Card>
  );
};

export default MeetingCard;
