import Hero from "../components/Hero";

const HeroSection = () => {
  return (
    <div className="w-full grid grid-cols-2 h-screen">
      <div className="">
        <h1>Hero Sections</h1>
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default HeroSection;
