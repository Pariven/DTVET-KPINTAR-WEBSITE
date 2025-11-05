'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Key, CheckCircle, AlertCircle } from 'lucide-react';

export default function StripeSetupPage() {
  const openStripeTestKeys = () => {
    window.open('https://dashboard.stripe.com/test/apikeys', '_blank');
  };

  const openStripeLiveKeys = () => {
    window.open('https://dashboard.stripe.com/apikeys', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Stripe Payment Setup</h1>
          <p className="text-gray-400">Get your Stripe API keys to enable real payments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Test Keys */}
          <Card className="bg-green-500/10 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Test Keys (Recommended)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-300 text-sm">
                Safe for development and testing. No real money involved.
              </p>
              
              <div className="space-y-2">
                <p className="text-white font-semibold">Steps:</p>
                <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                  <li>Click button below to open Stripe test dashboard</li>
                  <li>Make sure you're in "Test mode" (toggle top-left)</li>
                  <li>Copy "Secret key" (starts with sk_test_...)</li>
                  <li>Copy "Publishable key" (starts with pk_test_...)</li>
                  <li>Update your .env.local file</li>
                  <li>Restart your development server</li>
                </ol>
              </div>

              <Button 
                onClick={openStripeTestKeys}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Test Keys
              </Button>
            </CardContent>
          </Card>

          {/* Live Keys */}
          <Card className="bg-orange-500/10 border-orange-500/20">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Live Keys (Production)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-300 text-sm">
                For real payments. Requires account verification.
              </p>
              
              <div className="space-y-2">
                <p className="text-white font-semibold">Requirements:</p>
                <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                  <li>Verified Stripe account</li>
                  <li>Business information completed</li>
                  <li>Bank account linked</li>
                  <li>Tax information provided</li>
                </ul>
              </div>

              <Button 
                onClick={openStripeLiveKeys}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Live Keys
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Environment Setup */}
        <Card className="mt-6 bg-blue-500/10 border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-blue-400 flex items-center">
              <Key className="w-5 h-5 mr-2" />
              Environment File Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Update your <code className="bg-gray-800 px-2 py-1 rounded">.env.local</code> file with your keys:
            </p>
            
            <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-500"># For Test Keys</div>
              <div className="text-green-400">STRIPE_SECRET_KEY="sk_test_YOUR_SECRET_KEY_HERE"</div>
              <div className="text-green-400">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_YOUR_PUBLISHABLE_KEY_HERE"</div>
              <br />
              <div className="text-gray-500"># For Live Keys</div>
              <div className="text-orange-400">STRIPE_SECRET_KEY="sk_live_YOUR_SECRET_KEY_HERE"</div>
              <div className="text-orange-400">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_YOUR_PUBLISHABLE_KEY_HERE"</div>
            </div>

            <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-yellow-300 text-sm">
                <strong>⚠️ Important:</strong> Never commit your secret keys to Git. 
                Keep them only in your .env.local file.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card className="mt-6 bg-gray-500/10 border-gray-500/20">
          <CardHeader>
            <CardTitle className="text-gray-400">Current Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-yellow-400">
              <AlertCircle className="w-5 h-5" />
              <span>Currently using fallback mode - Real Stripe keys needed for actual payments</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
