import styled from "styled-components";
import tw from "twin.macro";

import Navbar from "../../components/Navbar";
import TopSection from "./topSection";
import { Marginer } from "../../components/Marginer";
import BookCard from "../../components/BookCard";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";
/*
import { Footer } from "../../components/footer";
import { TopCars } from "./topCars"; */

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      {/*
      <TopCars />
      <Footer /> */}
    </PageContainer>
  );
}

export default HomePage;
