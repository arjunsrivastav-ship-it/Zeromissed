import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-teal-600">ZeroMissed</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>
            <Link href="/dashboard" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
              Owner Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your rental portfolio.<br />
            <span className="text-teal-600">Finally under control.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            AI-powered WhatsApp-first property management for India's multi-unit landlords. 
            Zero missed rent. Zero tenant disputes. Zero site visits.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-teal-600 mb-2">₹99</div>
              <div className="text-sm font-medium text-gray-500">Per flat/month</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-teal-600 mb-2">15</div>
              <div className="text-sm font-medium text-gray-500">Smart modules</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-teal-600 mb-2">0</div>
              <div className="text-sm font-medium text-gray-500">New apps to download</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-gray-500">Automated monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stop losing money to manual chaos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You own 5-15 apartments but manage everything through WhatsApp, phone calls, and memory. 
              Every day costs you rent, tenant goodwill, and peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                ₹
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Missed rent collection</h3>
                <p className="text-gray-600 text-sm">
                  Manual reminders, late payments, and awkward follow-ups cost you thousands monthly
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                ⏰
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Endless WhatsApp chaos</h3>
                <p className="text-gray-600 text-sm">
                  Tenant requests lost in message flood, vendor coordination nightmares, no accountability
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                🏠
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Deposit disputes</h3>
                <p className="text-gray-600 text-sm">
                  Move-out battles over damages with no photo evidence or maintenance records
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                📊
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Zero visibility</h3>
                <p className="text-gray-600 text-sm">
                  No idea which flats are profitable, when agreements expire, or maintenance costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              One price per flat, all features included. No setup fees, no hidden costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 text-sm mb-8">Perfect for small landlords</p>
              <div className="text-5xl font-bold text-teal-600 mb-2">₹99</div>
              <div className="text-gray-500 text-sm mb-8">per flat/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>1-5 flats
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>Rent collection automation
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>Basic maintenance tracking
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>WhatsApp integration
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                Get Started
              </button>
            </div>
            
            <div className="bg-white border-2 border-teal-600 rounded-2xl p-8 text-center transform scale-105 shadow-lg">
              <div className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm mb-8">For growing portfolios</p>
              <div className="text-5xl font-bold text-teal-600 mb-2">₹99</div>
              <div className="text-gray-500 text-sm mb-8">per flat/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>6-20 flats
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>All Starter features
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>Living Flat Ledger
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>Hindi vendor coordination
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                Get Started
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 text-sm mb-8">For serious investors</p>
              <div className="text-5xl font-bold text-teal-600 mb-2">₹99</div>
              <div className="text-gray-500 text-sm mb-8">per flat/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>20+ flats
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>All Growth features
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>Priority support
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-teal-600 mr-3">✓</span>Custom integrations
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to eliminate rental stress?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Book a 15-minute WhatsApp demo. See how ZeroMissed transforms your portfolio management.
          </p>
          <a 
            href="https://wa.me/919999999999" 
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.11 1.51 5.84L0 24l6.35-1.47A11.86 11.86 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.21-3.48-8.52zM12 21.97c-1.78 0-3.52-.49-5.04-1.4l-.36-.21-3.76.87.87-3.67-.24-.38A9.95 9.95 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
            </svg>
            Book WhatsApp Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 ZeroMissed. Built for India's multi-unit landlords.</p>
        </div>
      </footer>
    </div>
  )
}
