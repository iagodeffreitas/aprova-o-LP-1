import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  XOctagon, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  UserX, 
  Target, 
  ShieldCheck, 
  BrainCircuit, 
  Zap, 
  CopyCheck, 
  ChevronDown, 
  MessageCircle,
  Star,
  Users
} from "lucide-react";

const WA_LINK = "https://wa.me/?text=Ol%C3%A1%2C%20quero%20saber%20como%20funciona%20o%20M%C3%A9todo%20Aprova%C3%A7%C3%A3o%20Matem%C3%A1tica.";

const CTAButton = ({ className = "", children, showIcon = true }: { className?: string, children: React.ReactNode, showIcon?: boolean }) => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-3 bg-brand hover:brightness-110 text-black font-extrabold uppercase tracking-wide px-8 py-5 rounded-sm transition-all hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] w-full sm:w-auto ${className}`}
  >
    {children}
    {showIcon && <ArrowRight className="w-5 h-5" />}
  </a>
);

function FakeLiveViewer() {
  const [viewers, setViewers] = useState(48);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + (Math.floor(Math.random() * 5) - 2));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-muted font-semibold">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_10px_rgba(0,255,0,1)]"></span>
      </div>
      {viewers} pessoas conectadas agora
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex justify-between items-center px-6 py-5 border-b border-dark-border bg-bg relative z-50">
      <div className="font-mono font-extrabold text-lg tracking-tighter">
        APROVAÇÃO<span className="text-brand">MATEMÁTICA</span>
      </div>
      <div className="hidden sm:block">
        <FakeLiveViewer />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 bg-bg border-b border-dark-border overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-10 right-10 md:top-14 md:right-14 border border-brand text-brand px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider z-20">
        Sistema Verificado
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center relative z-10 text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center lg:justify-start mb-6 sm:hidden">
            <FakeLiveViewer />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-6">
            Te ensino a <span className="text-brand block mt-2 mb-2">passar em mesa proprietária</span> em até 1 mês. <span className="inline-block bg-brand text-black px-4 pt-2 pb-1 mt-2 rotate-[-2deg] shadow-[6px_6px_0_rgba(255,255,255,1)] border-2 border-white">SEM RISCO.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Sem robôs, sem indicadores milagrosos e sem precisar contratar traders. Método focado em estratégia matemática e execução pura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <CTAButton>
              Quero saber como funciona no WhatsApp
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none lg:h-full flex items-center justify-center p-4"
        >
          <div className="relative w-full">            
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200" 
              alt="Trading Chart" 
              className="rounded-sm border-2 border-dark-border relative z-10 filter grayscale contrast-125"
              referrerPolicy="no-referrer"
            />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 mt-4 sm:-bottom-8 sm:-left-8 lg:-left-12 z-20 bg-brand text-black px-6 py-4 rounded-sm font-extrabold text-lg sm:text-xl shadow-[10px_10px_0_rgba(0,0,0,1)] flex items-center gap-3 border-2 border-black"
            >
              <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
              <span className="uppercase tracking-tight">Status: Aprovado</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const problems = [
  { text: "Estoura drawdown toda hora", icon: TrendingUp },
  { text: "Não sabe operar", icon: XOctagon },
  { text: "Já perdeu dinheiro em challenge", icon: AlertTriangle },
  { text: "Comprou indicador e não resolveu", icon: Clock },
  { text: "Não quer depender de terceiros", icon: UserX },
  { text: "Está travado sem saber como passar", icon: Target },
];

function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-bg border-b border-dark-border">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-4">Problema</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            Cansado de reprovar desafios?
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border border border-dark-border">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface p-8 flex items-start flex-col gap-6 hover:bg-[#151515] transition-colors"
            >
              <div className="bg-bg border border-dark-border p-3 rounded-sm">
                <prob.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="font-semibold text-white tracking-tight">{prob.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-surface border-b border-dark-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-brand tracking-widest uppercase mb-4">Solução</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            A forma inteligente de passar
          </h3>
          <p className="text-lg text-muted max-w-2xl font-medium">
            Ao invés de tentar adivinhar o mercado, você usa <span className="text-white">estratégia matemática + gerenciamento + execução simples</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-dark-border border border-dark-border">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-bg p-8 flex flex-col hover:bg-[#0a0a0a] transition-all"
          >
            <div className="mb-8">
              <BrainCircuit className="w-10 h-10 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Método para iniciantes</h3>
            <p className="text-muted text-sm leading-relaxed">Passo a passo lógico e fácil de seguir para quem está começando agora e não quer perder tempo.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-bg p-8 flex flex-col hover:bg-[#0a0a0a] transition-all"
          >
            <div className="mb-8">
              <Zap className="w-10 h-10 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Sem robôs ou EAs</h3>
            <p className="text-muted text-sm leading-relaxed">Você no controle total. Sem depender de ferramentas mágicas de inteligência artificial que falham.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-bg p-8 flex flex-col hover:bg-[#0a0a0a] transition-all"
          >
            <div className="mb-8">
              <ShieldCheck className="w-10 h-10 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight">Aprovação com Seguro</h3>
            <p className="text-muted text-sm leading-relaxed">Métodos e parcerias para proteger seu capital inicial sem arriscar o dinheiro do seu próprio bolso.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-24 px-4 bg-bg border-b border-dark-border">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-4">Processo</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            Como funciona o Método
          </h3>
        </motion.div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-4 md:items-start pl-2">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 border-l-2 border-dark-border pl-6 relative before:absolute before:left-[-6px] before:top-0 before:w-[10px] before:h-[10px] before:bg-brand before:rounded-full"
          >
            <div className="font-mono text-brand text-sm font-bold mb-2">01</div>
            <h3 className="text-xl font-extrabold text-white mb-3">Você entra na mesa</h3>
            <p className="text-muted text-sm font-medium">Adquire o challenge na sua mesa proprietária de preferência (FTMO, The5ers, etc).</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 border-l-2 border-dark-border pl-6"
          >
            <div className="font-mono text-brand text-sm font-bold mb-2">02</div>
            <h3 className="text-xl font-extrabold text-white mb-3">Aplica o Método</h3>
            <p className="text-muted text-sm font-medium">Utiliza nosso plano passo a passo com a equação exata para buscar os trades fáceis.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 border-l-2 border-dark-border pl-6"
          >
            <div className="font-mono text-brand text-sm font-bold mb-2">03</div>
            <h3 className="text-xl font-extrabold text-white mb-3">Busca Aprovação</h3>
            <p className="text-muted text-sm font-medium">Opera com previsibilidade total, sem surpresas, garantindo passagem e proteção da conta.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { title: "Pode começar iniciante", icon: Users },
    { title: "Não precisa estar o dia todo no PC", icon: Clock },
    { title: "Não depende do seu emocional", icon: BrainCircuit },
    { title: "Replicável em contas de terceiros", icon: CopyCheck },
    { title: "Processo mecânico restrito", icon: Target },
    { title: "Alta taxa de previsibilidade", icon: TrendingUp },
  ];

  return (
    <section className="py-24 px-4 bg-surface border-b border-dark-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-12">Benefícios</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border border border-dark-border">
          {benefits.map((bene, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-bg p-8 flex flex-col items-start hover:bg-[#0a0a0a] transition-colors"
            >
              <bene.icon className="w-8 h-8 text-brand mb-6" />
              <h4 className="text-lg font-bold text-white tracking-tight">{bene.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAForteSection() {
  return (
    <section className="py-24 px-4 bg-bg border-b border-dark-border">
      <div className="max-w-3xl mx-auto text-center border-4 border-dark-border p-10 md:p-16 relative bg-surface">
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-brand"></div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
          Se continuar no improviso, <span className="text-brand">continuará reprovando.</span>
        </h2>
        
        <div className="flex flex-col items-center">
          <CTAButton className="mb-6 text-lg">
            Falar no WhatsApp Agora
          </CTAButton>
          <p className="text-muted text-sm font-mono uppercase tracking-wide">
            EXPLICAÇÃO COMPLETA + VALOR PROMOCIONAL NO WHATSAPP
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Preciso saber trade ou ser experiente?", a: "Não. O método entrega a base lógica necessária e as regras matemáticas claras que até iniciantes aplicam desde o primeiro dia." },
    { q: "Preciso usar robô, EA ou HFT?", a: "Não. Você terá o controle absoluto e vai executar manualmente, de forma simples, rápida e dentro das regras de qualquer mesa." },
    { q: "Serve para iniciante absoluto?", a: "Sim, é desenhado justamente para quem não quer perder anos estudando Price Action, suportes ou SMC." },
    { q: "Serve para Hantec, FTMO e outras?", a: "Sim. Funciona na FTMO, The5ers, Funding Pips, The Trading Pit, Hantec e praticamente qualquer mesa que siga regras padrões de aprovação." },
    { q: "Quanto custa o método?", a: "Chame no WhatsApp clicando em qualquer botão desta página e o time passará todas as condições de acesso e valores promocionais de hoje." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-surface border-b border-dark-border">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-4">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Dúvidas Frequentes</h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-bg border border-dark-border rounded-sm overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[#0a0a0a] transition-colors"
                aria-expanded={openIdx === idx}
              >
                <span className="font-bold text-lg tracking-tight">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted border-t border-dark-border pt-4 text-sm font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-brand text-black p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 border-bg hover:brightness-110 transition-all duration-300 rounded-sm hover:-translate-y-1"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white font-sans selection:bg-brand selection:text-black flex flex-col">
      <TopBar />
      
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TimelineSection />
        <BenefitsSection />
        
        {/* Logos Strip */}
        <section className="py-12 bg-bg border-b border-dark-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center text-muted">
            <p className="text-sm font-mono font-bold tracking-widest uppercase md:mr-8 whitespace-nowrap">Aplica nas mesas:</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-black text-xl md:text-2xl uppercase tracking-widest filter grayscale opacity-50">
              <span>FTMO</span>
              <span>The5ers</span>
              <span>Hantec</span>
              <span>Trading Pit</span>
            </div>
          </div>
        </section>

        <CTAForteSection />
        <FAQSection />
      </main>
      
      <FloatingWhatsApp />
      
      <footer className="py-12 text-center text-muted text-sm bg-bg border-t border-dark-border flex flex-col items-center">
        <p className="font-mono text-white mb-2 tracking-tight">© {new Date().getFullYear()} APROVAÇÃO MATEMÁTICA</p>
        <p className="mt-2 text-xs max-w-2xl px-4 opacity-70">
          Aviso: Nenhuma rentabilidade passada é garantia de rentabilidade futura. O método não se trata de recomendação de investimentos. As plataformas citadas não possuem vínculo conosco.
        </p>
      </footer>
    </div>
  );
}
