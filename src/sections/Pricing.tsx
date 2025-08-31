import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const Pricing = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
            Pricing Plans
          </h2>
          <p className="text-lg md:text-xl text-white/70 mt-5 max-w-2xl mx-auto">
            Choose the perfect analytics plan to supercharge your calling campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="border border-white/15 rounded-2xl p-8 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">📊 Basic Analytics</h3>
              <p className="text-white/60 text-sm">Starter Plan</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Total calls made</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Call connection rates</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Total minutes used</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Viewing individual call transcripts and recordings</span>
              </li>
            </ul>
            <div className="text-center">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="border border-white/30 rounded-2xl p-8 bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-4 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">📈 Pro Analytics</h3>
              <p className="text-white/60 text-sm">Professional Plan</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Everything in Basic, plus:</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Conversion Rate Tracking</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Campaign Performance Comparison</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Export Reports (CSV)</span>
              </li>
            </ul>
            <div className="text-center">
              <Button className="w-full">Get Pro</Button>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="border border-white/15 rounded-2xl p-8 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">📈 Advanced Analytics</h3>
              <p className="text-white/60 text-sm">Enterprise Plan</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Everything in Pro, plus:</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Sentiment Analysis</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Keyword Spotting</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-sm">Advanced reporting & insights</span>
              </li>
            </ul>
            <div className="text-center">
              <Button className="w-full">Get Advanced</Button>
            </div>
          </div>
        </div>

        {/* Upcoming Features */}
        <div
          className="border border-white/15 rounded-2xl p-8 overflow-hidden relative"
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
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              🚀 Upcoming Features
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-medium text-white mb-3">
                  CRM Integration (Webhook)
                </h4>
                <p className="text-white/80 text-lg">
                  We&apos;re building a feature to automatically sync your call data and outcomes directly into your CRM. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
