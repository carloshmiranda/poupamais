"use client";

interface Bank {
  name: string;
  rating: number;
  monthlyFee: string;
  transferFees: string;
  atmNetwork: string;
  digitalFeatures: string[];
  highlights: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  affiliateUrl: string;
  color: string;
}

async function trackAffiliateClick(bankName: string, position: number) {
  try {
    await fetch("/api/affiliate-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bank_name: bankName,
        page: "/bancos",
        position: position,
      }),
    });
  } catch (error) {
    console.error("Error tracking affiliate click:", error);
  }
}

export function AffiliateButton({
  bankName,
  affiliateUrl,
  position,
  className = "",
  children
}: {
  bankName: string;
  affiliateUrl: string;
  position: number;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = async () => {
    await trackAffiliateClick(bankName, position);
    window.open(affiliateUrl, "_blank");
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export function BankCard({ bank, index }: { bank: Bank; index: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${bank.color} rounded-lg flex items-center justify-center text-white font-bold`}>
            {bank.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{bank.name}</h3>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-sm text-gray-600">{bank.rating}/5</span>
            </div>
          </div>
        </div>
        <AffiliateButton
          bankName={bank.name}
          affiliateUrl={bank.affiliateUrl}
          position={index + 1}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          Abrir Conta
        </AffiliateButton>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Mensalidade</span>
          <div className="text-lg font-bold text-gray-900">{bank.monthlyFee}</div>
        </div>
        <div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Transferências</span>
          <div className="text-lg font-bold text-gray-900">{bank.transferFees}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-sm font-medium text-gray-500">Destaques:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {bank.highlights.map((highlight, i) => (
              <span key={i} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm font-medium text-gray-500">Ideal para:</span>
          <p className="text-sm text-gray-700 mt-1">{bank.bestFor}</p>
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable({ banks }: { banks: Bank[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Banco</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Mensalidade</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Transferências</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Rede ATM</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Avaliação</th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-900">Ação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {banks.map((bank, index) => (
            <tr key={bank.name} className="hover:bg-gray-50">
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${bank.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
                    {bank.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900">{bank.name}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-900">{bank.monthlyFee}</td>
              <td className="px-4 py-4 text-gray-700">{bank.transferFees}</td>
              <td className="px-4 py-4 text-gray-700">{bank.atmNetwork}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-700">{bank.rating}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                <AffiliateButton
                  bankName={bank.name}
                  affiliateUrl={bank.affiliateUrl}
                  position={index + 1}
                  className="px-3 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition"
                >
                  Ver Oferta
                </AffiliateButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}