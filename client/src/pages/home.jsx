import WingleHeader from "@/components/wingle-header";
import TopHeader from "@/components/top-header";
import CompanyProfile from "@/components/company-profile";
import Navigation from "@/components/navigation";
import PromotionalBanner from "@/components/promotional-banner";
import MainContent from "@/components/main-content";
import ProductGallery from "@/components/product-gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <WingleHeader />
      <TopHeader />
      <CompanyProfile />
      <Navigation />
      <PromotionalBanner />
      <MainContent />
      <ProductGallery />
      <Footer />
    </div>
  );
}