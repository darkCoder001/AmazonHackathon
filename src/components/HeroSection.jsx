
import { Fade } from "react-awesome-reveal";
export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-black bg-opacity-30 mt-12">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-start px-4 py-20 text-center">
        
        <Fade  direction="left" duration={2500}>
            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white text-opacity-90 sm:text-6xl md:text-7xl lg:text-8xl">
            X-MCF Versatile Tool for <span className="text-[#FF9900]">Amazon MCF </span>
            </h1>
        </Fade>
         <Fade  direction="left" duration={2500}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 text-opacity-80 sm:text-xl ">
            Our innovative solution simplifies order management and fulfillment, streamlining operations across multiple sales channels with Amazon reliable logistics.
        </p>
        </Fade>
        
        <div className="mt-20 w-full max-w-6xl overflow-hidden rounded-lg">
          <img
            src="/images/hero.png"
            alt="UI Dashboard Preview"
            width={1200}
            height={600}
            className="w-full"
            
          />
        </div>
      </div>
    </div>
  );
}
