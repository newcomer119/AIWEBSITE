import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div className="relative text-center">
            <h2 className="text-5xl md:text-6xl max-w-4xl mx-auto tracking-tighter text-center font-medium">
              Ready to Scale Your Calling Operations?
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mt-5 tracking-tight max-w-2xl mx-auto">
              Join thousands of businesses already using AI calling to generate leads, 
              qualify prospects, and book meetings automatically.
            </p>
            <div className="flex justify-center mt-8 gap-4">
              <Button>Start Free Trial</Button>
              <Button className="bg-transparent border border-white/30 hover:bg-white/10">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
