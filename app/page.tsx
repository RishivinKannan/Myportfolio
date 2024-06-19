import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <main className="flex overflow-hidden relative flex-col justify-center items-center px-5 mx-auto bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <HeroSection />
      </div>
    </main>
  );
}
