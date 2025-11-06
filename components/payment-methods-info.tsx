'use client';

import { CreditCard, Smartphone, Shield, CheckCircle } from 'lucide-react';

interface PaymentMethodsInfoProps {
  className?: string;
}

export default function PaymentMethodsInfo({ className = '' }: PaymentMethodsInfoProps) {
  const paymentMethods = [
    { 
      category: 'Credit & Debit Cards',
      icon: <CreditCard className="w-6 h-6" />,
      methods: ['Visa', 'Mastercard', 'American Express'],
      bgColor: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30'
    },
    { 
      category: 'Online Banking',
      icon: <div className="w-6 h-6 flex items-center justify-center text-lg">🏦</div>,
      methods: ['Maybank', 'CIMB', 'Public Bank', 'RHB Bank'],
      bgColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    { 
      category: 'Digital Wallets',
      icon: <Smartphone className="w-6 h-6" />,
      methods: ['GrabPay', 'Apple Pay', 'Google Pay'],
      bgColor: 'from-[#F4BB44]/20 to-orange-500/20',
      borderColor: 'border-[#F4BB44]/30'
    }
  ];

  return (
    <div className={`bg-gradient-to-br from-gray-800/80 to-gray-900/60 rounded-2xl border border-gray-600/50 ${className}`}>
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-700/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#F4BB44]/20 to-blue-500/20 rounded-xl flex items-center justify-center">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4BB44]" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-barlow">Accepted Payment Methods</h3>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm">Choose from multiple secure payment options</p>
      </div>

      {/* Payment Methods Grid */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {paymentMethods.map((category, index) => (
          <div key={index} className={`bg-gradient-to-r ${category.bgColor} border ${category.borderColor} rounded-xl p-3 sm:p-4 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300`}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-white">{category.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm sm:text-base mb-2">{category.category}</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.methods.map((method, methodIndex) => (
                    <span 
                      key={methodIndex}
                      className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-white/10 text-white text-xs sm:text-sm rounded-lg border border-white/20"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Methods */}
        <div className="bg-gradient-to-r from-gray-700/30 to-gray-600/30 border border-gray-600/30 rounded-xl p-3 sm:p-4">
          <div className="text-center">
            <p className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">+ More payment methods available at checkout</p>
            <p className="text-gray-400 text-xs">Including Touch 'n Go eWallet, Boost, and more</p>
          </div>
        </div>
      </div>

      {/* Payment Processing Information */}
      <div className="p-4 sm:p-6 border-t border-gray-700/50 space-y-3 sm:space-y-4">
        {/* Payment Fees & Processing Information */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 text-blue-400">💰</div>
            </div>
            <h4 className="text-blue-400 font-semibold">Payment Fees & Processing</h4>
          </div>
          
          <div className="space-y-3">
            {/* Fee Structure */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
              <h5 className="text-yellow-400 font-semibold text-sm mb-2">🏷️ Payment Processing Fees</h5>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Credit/Debit Cards:</span>
                  <span className="text-yellow-300 font-medium">3.4% + RM 1.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Online Banking (FPX):</span>
                  <span className="text-green-300 font-medium">RM 2.00 flat</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Digital Wallets:</span>
                  <span className="text-blue-300 font-medium">3.4% + RM 1.50</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">
                * All fees are automatically included in your total. No hidden charges.
              </p>
            </div>

            {/* Processing Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Instant payment confirmation via email</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Processing time: 1-3 business days for refunds</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">24/7 automated payment processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-400" />
            </div>
            <h4 className="text-green-400 font-semibold">Bank-Level Security</h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span className="text-green-300 text-xs sm:text-sm">256-bit SSL encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span className="text-green-300 text-xs sm:text-sm">PCI DSS Level 1 compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span className="text-green-300 text-xs sm:text-sm">No sensitive data stored</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span className="text-green-300 text-xs sm:text-sm">Advanced fraud detection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span className="text-green-300 text-xs sm:text-sm">Real-time monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
              <span className="text-green-300 text-xs sm:text-sm">3D Secure authentication</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 text-orange-400">📋</div>
            </div>
            <h4 className="text-orange-400 font-semibold">Payment Terms & Conditions</h4>
          </div>
          
          <div className="space-y-2 text-xs text-gray-400">
            <p>• All payments are processed securely through Stripe Payment Services</p>
            <p>• Certification access is granted immediately upon successful payment</p>
            <p>• Refunds are subject to our 30-day money-back guarantee policy</p>
            <p>• Price includes all applicable taxes and processing fees</p>
            <p>• Digital certificates are non-transferable and tied to your account</p>
            <p>• Payment disputes should be raised within 60 days of transaction</p>
            <p>• By proceeding, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>

        {/* Compliance & Regulations */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 text-purple-400">⚖️</div>
            </div>
            <h4 className="text-purple-400 font-semibold">Regulatory Compliance</h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300">Bank Negara Malaysia compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300">GDPR data protection compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300">Anti-Money Laundering (AML)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300">Know Your Customer (KYC)</span>
            </div>
          </div>
        </div>
        
        {/* Stripe Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
            <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
              <span className="text-blue-400 text-xs font-bold">S</span>
            </div>
            <p className="text-gray-300 text-sm">
              Powered by <span className="text-blue-400 font-semibold">Stripe</span>
            </p>
          </div>
          <p className="text-gray-500 text-xs mt-2">Trusted by millions of businesses worldwide</p>
          <p className="text-gray-500 text-xs">License: MSB License #901181 (USA) | FCA Authorized (UK)</p>
        </div>
      </div>
    </div>
  );
}