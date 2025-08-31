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
            Choose the perfect plan to supercharge your calling campaigns with AI-powered insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="border border-white/15 rounded-2xl p-8 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">🚀 Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">₹1,999</span>
                <span className="text-white/60 text-lg">/month</span>
              </div>
              <p className="text-white/80 text-sm mb-2">500 minutes included</p>
              <p className="text-white/60 text-xs">₹3.0 per additional minute</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">📞 Campaign Features</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>1 Active Campaign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>1 Phone Number Included</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">🤖 AI & Customization</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>1 Standard AI Voice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Custom Scripts & Context</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">👥 Team Management</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>1 User (Admin)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Direct Calendar Update</span>
                  </li>
                </ul>
              </div>
            </div>
            
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
              <h3 className="text-2xl font-semibold text-white mb-2">⚡ Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">₹6,499</span>
                <span className="text-white/60 text-lg">/month</span>
              </div>
              <p className="text-white/80 text-sm mb-2">2,000 minutes included</p>
              <p className="text-white/60 text-xs">₹2.5 per additional minute</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">📞 Campaign Features</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>10 Active Campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>3 Phone Numbers Included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Bulk Number Upload (CSV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Call Scheduling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">🤖 AI & Customization</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>1 Premium AI Voice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Custom Scripts & Context</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">👥 Team Management</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Up to 5 Users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Direct Calendar Update</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="w-full">Get Pro</Button>
            </div>
          </div>

          {/* Scale Plan */}
          <div className="border border-white/15 rounded-2xl p-8 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">🚀 Scale</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">₹14,999</span>
                <span className="text-white/60 text-lg">/month</span>
              </div>
              <p className="text-white/80 text-sm mb-2">5,000 minutes included</p>
              <p className="text-white/60 text-xs">₹2.0 per additional minute</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">📞 Campaign Features</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Unlimited Active Campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Up to 10 Phone Numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Bulk Number Upload (CSV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Call Scheduling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">🤖 AI & Customization</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Full Library of Premium Voices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Custom Scripts & Context</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2 text-sm">👥 Team Management</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Advanced Roles & Permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Direct Calendar Update</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="w-full">Get Scale</Button>
            </div>
          </div>
        </div>

        {/* Analytics Tiers */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            📊 Analytics Tiers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Analytics */}
            <div className="border border-white/15 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold text-white mb-2">Basic Analytics</h4>
                <p className="text-white/70 text-sm">Monitor activity and see high-level results</p>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Total calls made</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Call connection rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Total minutes used</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Call transcripts and recordings</span>
                </li>
              </ul>
            </div>

            {/* Pro Analytics */}
            <div className="border border-white/30 rounded-2xl p-6 bg-white/10 backdrop-blur-sm">
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold text-white mb-2">Pro Analytics</h4>
                <p className="text-white/70 text-sm">Optimize campaigns and understand performance</p>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Conversion Rate Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Campaign Performance Comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Export Reports (CSV)</span>
                </li>
              </ul>
            </div>

            {/* Advanced Analytics */}
            <div className="border border-white/15 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h4>
                <p className="text-white/70 text-sm">Deep AI-driven insights to refine scripts</p>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Sentiment Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Keyword Spotting</span>
                </li>
              </ul>
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
