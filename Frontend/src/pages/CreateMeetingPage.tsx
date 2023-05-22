import { Grid, GridItem } from "@chakra-ui/react";
import CreateMeetingNavigation from "../components/CreateMeetingNavigation";
import FooterNavigation from "../components/FooterNavigation";
import MeetingGrid from "../components/MeetingGrid";
import MeetingHeading from "../components/MeetingHeading";
import "./App.css";

const HomePage: React.FC = () => {
  return (
    <Grid
  templateAreas={`"header"
                  "main"
                  "create"
                  "footer"`}
  gridTemplateRows={'50px 1fr 40px 50px'}
    className="homePageGrid"
>
  <GridItem area={'header'}>
    <MeetingHeading />
  </GridItem>

  <GridItem area={'main'}>
  <MeetingGrid />
  </GridItem>

  <GridItem area={"create"}>
    <CreateMeetingNavigation />
  </GridItem>

  <GridItem area={'footer'}>
  <FooterNavigation />
  </GridItem>

</Grid>
      
  );
};

export default HomePage;