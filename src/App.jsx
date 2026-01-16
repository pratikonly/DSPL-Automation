import React from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, FileText, Cpu, UserCheck, LayoutDashboard, 
  Briefcase, GitMerge, Mail, MessageSquare, CheckCircle, 
  PhoneCall, Calendar, ArrowRight, ShieldCheck, Database,
  Zap, Settings, Bell, Users, Clock, Globe, Lock, ChevronRight
} from 'lucide-react';

const steps = [
  {
    id: '0',
    phase: 'Setup',
    title: 'System Initialization',
    icon: Settings,
    color: 'blue',
    side: 'left',
    details: [
      'SMTP & WhatsApp API handshake',
      'AI Prompt Engineering configuration',
      'Role-based access control setup',
      'Job post template indexing'
    ],
    summary: 'One-time platform infrastructure readiness.'
  },
  {
    id: '1',
    phase: 'Intake',
    title: 'CV Intelligent Intake',
    icon: Upload,
    color: 'indigo',
    side: 'right',
    details: [
      'Multi-format CV ingestion (PDF/DOC)',
      'Neural OCR for scanned documents',
      'Extraction queue management',
      'Duplicate detection & filtering'
    ],
    summary: 'Raw document to structured data conversion.'
  },
  {
    id: '2',
    phase: 'AI Core',
    title: 'GPT-4 Neural Parsing',
    icon: Cpu,
    color: 'purple',
    side: 'left',
    details: [
      'Contextual skill extraction',
      'Experience timeline mapping',
      'Education verification check',
      'JSON structured profile output'
    ],
    summary: 'Deep semantic understanding of candidate history.'
  },
  {
    id: '3',
    phase: 'Matching',
    title: 'AI Recommendation Engine',
    icon: GitMerge,
    color: 'cyan',
    side: 'right',
    details: [
      'Vector similarity scoring',
      'Job description skill mapping',
      'Location & budget compatibility',
      'Weighted match explanation'
    ],
    summary: 'Intelligent alignment with active roles.'
  },
  {
    id: '4',
    phase: 'Engagement',
    title: 'Automated Outreach',
    icon: Mail,
    color: 'orange',
    side: 'left',
    details: [
      'Multi-channel shortlist alerts',
      'WhatsApp interactive bot triggers',
      'Email open-rate tracking',
      'Interest capture webhooks'
    ],
    summary: 'Verification of candidate availability & interest.'
  },
  {
    id: '5',
    phase: 'Approval',
    title: 'HR Decision Gateway',
    icon: CheckCircle,
    color: 'emerald',
    side: 'right',
    details: [
      'Response dashboard monitoring',
      'Manual approval/rejection toggle',
      'Feedback loop integration',
      'Phase 3 progression lock'
    ],
    summary: 'Human-in-the-loop quality assurance.'
  },
  {
    id: '6',
    phase: 'Final',
    title: 'Voice AI Confirmation',
    icon: PhoneCall,
    color: 'red',
    side: 'left',
    details: [
      'Automated interview scheduling',
      'Outgoing voice IVR calls',
      'Keypad response (1/2) capture',
      'Sync with Enterprise ATS/ERP'
    ],
    summary: 'Finalized scheduling & verification.'
  }
];

const ConnectorLine = () => (
  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden lg:block">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20" />
  </div>
);

const DetailBox = ({ title, items, side }) => (
  <div className={`flex flex-col ${side === 'left' ? 'items-end text-right' : 'items-start text-left'}`}>
    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
      {side === 'right' && <ChevronRight className="w-3 h-3 text-blue-500" />}
      Technical Operations
      {side === 'left' && <ChevronRight className="w-3 h-3 text-blue-500 rotate-180" />}
    </h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-slate-600 font-medium flex items-center gap-2">
          {side === 'right' && <div className="w-1 h-1 rounded-full bg-slate-300" />}
          {item}
          {side === 'left' && <div className="w-1 h-1 rounded-full bg-slate-300" />}
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100">
      <header className="max-w-7xl mx-auto pt-20 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
        >
          <Zap className="w-3 h-3" />
          System Architecture Visualizer
        </motion.div>
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
          Master <span className="text-blue-600">HR Pipeline</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
          An advanced three-tier architecture separating infrastructure, intelligence, and communication for robust enterprise-scale recruitment automation.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-32 relative">
        <ConnectorLine />
        
        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <div key={step.id} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Central Node Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                />
              </div>

              {/* Left Side: Content or Details */}
              <div className={`${step.side === 'right' ? 'lg:order-1' : 'lg:order-1'}`}>
                {step.side === 'left' ? (
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-2xl bg-${step.color}-500 shadow-lg shadow-${step.color}-500/20`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{step.phase}</span>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 italic">"{step.summary}"</p>
                    <DetailBox title="Ops" items={step.details} side="left" />
                  </motion.div>
                ) : (
                  <div className="hidden lg:block">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <DetailBox title="Technical Specs" items={step.details} side="left" />
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Right Side: Content or Details */}
              <div className={`${step.side === 'left' ? 'lg:order-2' : 'lg:order-2'}`}>
                {step.side === 'right' ? (
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-2xl bg-${step.color}-500 shadow-lg shadow-${step.color}-500/20`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{step.phase}</span>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 italic">"{step.summary}"</p>
                    <DetailBox title="Ops" items={step.details} side="right" />
                  </motion.div>
                ) : (
                  <div className="hidden lg:block">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <DetailBox title="Technical Specs" items={step.details} side="right" />
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 py-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <ShieldCheck className="w-12 h-12 text-blue-500 mb-6" />
          <h2 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">Devtri Seczone Architecture</h2>
          <p className="text-slate-500 text-sm max-w-lg mb-12 font-medium">
            Proprietary recruitment automation framework. Built for performance, designed for human-centric talent acquisition.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            <span>Cloud Native</span>
            <span>AI Augmented</span>
            <span>Secure Edge</span>
          </div>
        </div>
      </footer>
    </div>
  );
}