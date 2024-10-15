import "./home.css"
import HeaderSection from "./component/headerSection";
import MenuSection from "./component/menuSection";
import ReviewSection from "./component/reviewSection";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <MenuSection />
      <ReviewSection />
      <Footer />
    </>
  );
}
