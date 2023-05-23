import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import FooterNavigation from "../components/FooterNavigation";


import "./App.css";
import CreateMeetingForm from "../components/CreateMeetingForm";

const HomePage: React.FC = () => {
  return (
    <Grid
  templateAreas={`"header"
                  "main"
                  "buttons"
                  "footer"`}
  gridTemplateRows={'300px 1fr 50px 50px'}
    className="createMeetingGrid"
>
  <GridItem area={'header'} >
      <h2 className="createMeetingHeading">Fyll i</h2>
    </GridItem>

  <GridItem area={"main"} >
    <CreateMeetingForm />
  </GridItem>

  <GridItem area={"buttons"} >
    <HStack className="formButtons">
  <Button colorScheme='red' variant='solid' size="md" type="reset">
    Rensa
  </Button>
    <Button colorScheme="blue"size="md" variant={'outline'}>
      Skapa
    </Button>
    </HStack>
  </GridItem>

  <GridItem area={'footer'}>
  <FooterNavigation />
  </GridItem>

</Grid>
      
  );
};

export default HomePage;