import { Metadata } from "next";
import Link from "next/link";
import { BankCard, ComparisonTable } from "./components";

export const metadata: Metadata = {
  title: "Melhores Bancos em Portugal 2026 - Comparação Completa | PoupaMais",
  description: "Compare os melhores bancos em Portugal: taxas, custos, serviços e benefícios. Guia completo atualizado para 2026 com análise imparcial.",
  openGraph: {
    title: "Melhores Bancos em Portugal 2026 - Comparação Completa",
    description: "Compare os melhores bancos em Portugal: taxas, custos, serviços e benefícios. Guia completo atualizado para 2026 com análise imparcial.",
    type: "article",
  },
};

// Bank data - in real app this would come from API/database
const banks = [
  {
    name: "Banco CTT",
    rating: 4.2,
    monthlyFee: "€0",
    transferFees: "Grátis na UE",
    atmNetwork: "Multibanco",
    digitalFeatures: ["App móvel", "Homebanking", "MB WAY"],
    highlights: ["Sem anuidade cartão débito", "Conta ordenado sem custos", "Gestão 100% digital"],
    pros: ["Sem comissões de manutenção", "Boa app móvel", "Atendimento digital eficiente"],
    cons: ["Rede de balcões limitada", "Sem cartão de crédito próprio"],
    bestFor: "Jovens profissionais e utilizadores digitais",
    affiliateUrl: "https://example.com/banco-ctt",
    color: "bg-red-500",
  },
  {
    name: "ActivoBank",
    rating: 4.1,
    monthlyFee: "€0",
    transferFees: "Grátis na UE",
    atmNetwork: "Millennium",
    digitalFeatures: ["App premium", "Trading", "Poupanças automáticas"],
    highlights: ["Banco 100% digital", "Trading integrado", "Cashback em compras"],
    pros: ["Interface moderna", "Funcionalidades avançadas", "Sem papelada"],
    cons: ["Sem balcões físicos", "Suporte limitado aos fins de semana"],
    bestFor: "Investidores e tech-savvy",
    affiliateUrl: "https://example.com/activobank",
    color: "bg-blue-500",
  },
  {
    name: "Santander Totta",
    rating: 3.9,
    monthlyFee: "€5-15",
    transferFees: "€1-3",
    atmNetwork: "Santander + Multibanco",
    digitalFeatures: ["App Santander", "1|2|3 Smart", "Way2Pay"],
    highlights: ["Rede internacional", "Produtos diversificados", "Programa 1|2|3"],
    pros: ["Rede de balcões ampla", "Experiência internacional", "Muitos produtos financeiros"],
    cons: ["Comissões mais altas", "App menos intuitiva"],
    bestFor: "Clientes que valorizam atendimento presencial",
    affiliateUrl: "https://example.com/santander",
    color: "bg-red-600",
  },
  {
    name: "Millennium BCP",
    rating: 3.8,
    monthlyFee: "€0-10",
    transferFees: "€0.50-2",
    atmNetwork: "Millennium + Multibanco",
    digitalFeatures: ["Millennium app", "Net24", "MBPhone"],
    highlights: ["Maior banco português", "Extensa rede de balcões", "Histórico sólido"],
    pros: ["Maior rede de balcões", "Solidez financeira", "Experiência de décadas"],
    cons: ["Digitalização mais lenta", "Interface menos moderna"],
    bestFor: "Clientes tradicionais e famílias",
    affiliateUrl: "https://example.com/millennium",
    color: "bg-green-600",
  },
  {
    name: "Revolut",
    rating: 4.3,
    monthlyFee: "€0-14.99",
    transferFees: "Grátis",
    atmNetwork: "Todos os ATM (até limite)",
    digitalFeatures: ["App Revolut", "Câmbio real-time", "Budgeting", "Crypto"],
    highlights: ["Sem comissões de câmbio", "Funcionalidades inovadoras", "Conta multi-moeda"],
    pros: ["Excelente para viagens", "Tecnologia de ponta", "Sem custos ocultos"],
    cons: ["IBAN não português", "Suporte por chat", "Limitações em levantamentos"],
    bestFor: "Viajantes e nómadas digitais",
    affiliateUrl: "https://example.com/revolut",
    color: "bg-purple-500",
  },
];


export default function BancosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-gray-900">
            PoupaMais
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/bancos" className="font-medium text-gray-900">Bancos</Link>
            <a href="#" className="hover:text-gray-900 transition">Cartões</a>
            <a href="#" className="hover:text-gray-900 transition">Corretoras</a>
            <a href="#" className="hover:text-gray-900 transition">Calculadoras</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
            Atualizado em Março 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Melhores Bancos em Portugal 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Compare os melhores bancos portugueses com base em taxas, custos, serviços digitais e
            atendimento ao cliente. Análise imparcial e dados atualizados para 2026.
          </p>
        </div>

        {/* Quick filters/tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Sem mensalidade</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Bancos digitais</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Rede internacional</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Melhor app</span>
        </div>

        {/* Top picks section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Os Nossos Favoritos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.slice(0, 3).map((bank, index) => (
              <BankCard key={bank.name} bank={bank} index={index} />
            ))}
          </div>
        </section>

        {/* Full comparison table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparação Completa</h2>
          <ComparisonTable banks={banks} />
        </section>

        {/* Additional bank cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Outras Opções</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {banks.slice(3).map((bank, index) => (
              <BankCard key={bank.name} bank={bank} index={index + 3} />
            ))}
          </div>
        </section>

        {/* Guide content */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Como Escolher o Melhor Banco</h2>
          <div className="prose prose-gray max-w-none">
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fatores a Considerar:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Custos mensais:</strong> Comissões de manutenção, anuidades do cartão</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Transferências:</strong> Custos para SEPA, Multibanco, internacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Rede de ATM:</strong> Disponibilidade e custos de levantamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Serviços digitais:</strong> Qualidade da app, homebanking, funcionalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Atendimento:</strong> Horários, canais disponíveis, qualidade do suporte</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bancos Tradicionais vs Digitais</h3>
            <p className="text-gray-700 mb-6">
              Os bancos tradicionais como Millennium BCP e Santander oferecem redes extensas de balcões
              e produtos diversificados, mas tendem a ter custos mais elevados. Já os bancos digitais
              como ActivoBank e Banco CTT focam na experiência digital com custos reduzidos.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fintech vs Bancos Tradicionais</h3>
            <p className="text-gray-700 mb-6">
              Soluções como Revolut trazem inovação e funcionalidades avançadas, mas podem ter limitações
              em termos de IBAN português e suporte local. São ideais como conta secundária ou para
              utilizadores com necessidades específicas como viagens frequentes.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                q: "Qual é o melhor banco em Portugal?",
                a: "Depende das suas necessidades. Para utilizadores digitais recomendamos Banco CTT ou ActivoBank. Para quem valoriza atendimento presencial, Millennium BCP ou Santander são boas opções."
              },
              {
                q: "É possível ter conta bancária sem custos em Portugal?",
                a: "Sim, bancos como Banco CTT e ActivoBank oferecem contas sem comissões de manutenção. Mesmo em bancos tradicionais é possível obter isenções cumprindo requisitos de domiciliação ou idade."
              },
              {
                q: "Que documentos preciso para abrir conta bancária?",
                a: "Cartão de Cidadão ou BI, comprovativo de morada, número de contribuinte e comprovativo de rendimentos. Alguns bancos podem pedir documentos adicionais."
              },
              {
                q: "Posso trocar de banco facilmente?",
                a: "Sim, existe o serviço de mobilidade bancária que facilita a transferência de domiciliações e débitos diretos. O processo demora cerca de 12 dias úteis."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 px-6 py-4">
                <summary className="cursor-pointer font-medium text-gray-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
          <p className="mb-2">
            <strong>Aviso:</strong> Esta informação é apenas para fins educacionais e não constitui aconselhamento financeiro personalizado.
            As condições dos produtos podem variar e devem ser confirmadas diretamente com cada instituição.
          </p>
          <p>
            Última atualização: {new Date().toLocaleDateString("pt-PT")}.
            PoupaMais pode receber comissões através de links afiliados, sem custo adicional para o utilizador.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="font-bold text-gray-900 text-lg block mb-4">
                PoupaMais
              </Link>
              <p className="text-gray-600 text-sm">
                Comparações imparciais para decisões financeiras inteligentes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Comparações</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/bancos" className="hover:text-gray-900 transition">Bancos</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition">Cartões de Crédito</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Corretoras</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Seguros</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Ferramentas</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Calculadora Habitação</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Simulador Investimento</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Calculadora PPR</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Sobre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Como funcionamos</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2026 PoupaMais. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}