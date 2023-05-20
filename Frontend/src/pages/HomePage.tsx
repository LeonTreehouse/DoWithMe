import "./App.css";
import MeetingHeading from "../components/MeetingHeading";
import "./App.css";
import MeetingGrid from "../components/MeetingGrid";
import FooterNavigation from "../components/FooterNavigation";
// import MeetingGrid from "../components/MeetingGrid";

const HomePage: React.FC = () => {
  return (
    <>
      <MeetingHeading />
      <MeetingGrid />
      <FooterNavigation />
    </>
  );
};

export default HomePage;
