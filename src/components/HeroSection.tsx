import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (    <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/hero.png" // Pastikan gambar ada di public/images/hero.png
        alt="Sustainable solutions background"
        fill
        className="z-0 object-cover"
        quality={90}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-forest/40 z-10 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold font-rymaneco mb-4 text-clean-white drop-shadow-lg">
          Ecovera Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-clean-white drop-shadow-md">
          Dedicated to providing sustainable, eco-friendly solutions for a greener tomorrow.
        </p>
        <Link
          href="/services"
          className="px-8 py-3 bg-leaf-green text-clean-white rounded-full text-lg font-semibold hover:bg-deep-forest transition-colors duration-300 shadow-lg"
        >
          Discover Our Solutions
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
