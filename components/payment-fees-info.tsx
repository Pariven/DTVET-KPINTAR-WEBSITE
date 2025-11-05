'use client';

import { CreditCard, Banknote, Smartphone, Info } from 'lucide-react';

interface PaymentFeesInfoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'inline';
  showTitle?: boolean;
}

export default function PaymentFeesInfo({ 
  className = '', 
  variant = 'full',
  showTitle = true 
}: PaymentFeesInfoProps) {
  
  const feeStructure = [
    {
      method: 'Credit/Debit Cards',
      icon: <CreditCard className="w-4 h-4" />,
      fee: '3.4% + RM 1.50',
      color: 'text-yellow-300',
      description: 'Visa, Mastercard, American Express'
    },
    {
      method: 'Online Banking (FPX)',
      icon: <Banknote className="w-4 h-4" />,
      fee: 'RM 2.00 flat',
      color: 'text-green-300',
      description: 'Maybank, CIMB, Public Bank, RHB'
    },
    {
      method: 'Digital Wallets',
      icon: <Smartphone className="w-4 h-4" />,
      fee: '3.4% + RM 1.50',
      color: 'text-blue-300',
      description: 'GrabPay, Apple Pay, Google Pay'
    }
  ];

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 text-xs text-gray-400 ${className}`}>
        <Info className="w-3 h-3" />
        <span>Payment fees: Cards 3.4%+RM1.50 | FPX RM2.00 | Wallets 3.4%+RM1.50</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-800/40 border border-gray-600/30 rounded-lg p-3 ${className}`}>
        {showTitle && (
          <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#F4BB44]" />
            Payment Processing Fees
          </h4>
        )}
        <div className="space-y-1 text-xs">
          {feeStructure.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-300">{item.method}:</span>
              <span className={item.color}>{item.fee}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2 italic">
          * All fees are included at checkout. No hidden charges.
        </p>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600/40 rounded-xl p-6 ${className}`}>
      {showTitle && (
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#F4BB44]/20 to-orange-500/20 rounded-xl flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[#F4BB44]" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Payment Processing Fees</h3>
            <p className="text-gray-400 text-sm">Transparent pricing with no hidden costs</p>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {feeStructure.map((item, index) => (
          <div 
            key={index}
            className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-4 hover:border-gray-500/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600/40 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-white font-medium">{item.method}</span>
              </div>
              <span className={`font-bold text-lg ${item.color}`}>{item.fee}</span>
            </div>
            <p className="text-gray-400 text-sm ml-11">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
            <span className="text-green-400 text-xs">✓</span>
          </div>
          <span className="text-green-400 font-semibold text-sm">Best Value Recommendation</span>
        </div>
        <p className="text-green-300 text-sm">
          💡 <strong>Choose Online Banking (FPX)</strong> for the lowest processing fee - only RM 2.00 flat rate regardless of purchase amount!
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-600/30">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>All fees processed securely by Stripe</span>
          <span>Updated: November 2025</span>
        </div>
      </div>
    </div>
  );
}