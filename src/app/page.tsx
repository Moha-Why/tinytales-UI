import Image from "next/image";
import HeroSection from "../components/Hero";
import ProductPage from "../components/Product";
import RatingReviews from "../components/Review";
import SimilarItems from "../components/OtherProducts";
import Breadcrumb from "../components/BreadCrumb";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Breadcrumb />
    <ProductPage />
    <RatingReviews />
    <SimilarItems />
    </>
  );
}
