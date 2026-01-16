import React from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, FileText, Cpu, UserCheck, LayoutDashboard, 
  Briefcase, GitMerge, Mail, MessageSquare, CheckCircle, 
  PhoneCall, Calendar, ArrowRight, ShieldCheck, Settings, 
  Zap, ChevronRight, Lock, Globe, Database, Terminal, Shield,
  Server, HardDrive, Share2, Search, BarChart3, ListChecks, Bell
} from 'lucide-react';

const steps = [
  {
    id: '0',
    phase: 'Phase 0',
    title: 'Platform Infrastructure',
    icon: Settings,
    color: 'blue',
    side: 'left',
    summary: 'One-time system initialization and service handshake.',
    details: [
      { label: 'SMTP Auth', value: 'Google/Outlook/Zoho verified', icon: Mail },
      { label: 'WhatsApp API', value: 'Meta Cloud API v20.0', icon: MessageSquare },
      { label: 'Security', value: 'RBAC & Multi-tenant Lock', icon: Shield },
      { label: 'AI Tuning', value: 'Zero-shot Prompt Eng.', icon: Terminal }
    ],
    technical: [
      'Configure company-owned SMTP (hr@company.com)',
      'Webhook endpoint for incoming WhatsApp replies',
      'Secure storage of API keys via env variables',
      'Rate limiting & retry logic implementation'
    ]
  },
  {
    id: '1',
    phase: 'Phase 1',
    title: 'CV Intelligent Intake',
    icon: Upload,
    color: 'indigo',
    side: 'right',
    summary: 'High-speed ingestion and document normalization.',
    details: [
      { label: 'Formats', value: 'PDF, DOCX, PNG, JPG', icon: FileText },
      { label: 'Processing', value: 'Neural OCR Engine', icon: Cpu },
      { label: 'Storage', value: 'Encrypted S3 Bucket', icon: HardDrive },
      { label: 'Queue', value: 'Redis-backed Pipeline', icon: Server }
    ],
    technical: [
      'File Validation (Type, Size, Corruption)',
      'Hash-based Duplicate CV Detection',
      'Layout-aware Native Text Extraction',
      'Tesseract OCR with Noise Reduction',
      'Standardized Data Normalization'
    ],
    intelligence: [
      'Structured Semantic Parsing (GPT-4o)',
      'No-Hallucination Extraction Protocol',
      'Confidence-based Explainability Layer',
      'Persistent Candidate Profile Creation',
      'Immutable Audit Logging & Traceability'
    ]
  },
  {
    id: '2',
    phase: 'Phase 1',
    title: 'Neural CV Parsing',
    icon: Cpu,
    color: 'purple',
    side: 'left',
    summary: 'Context-aware extraction using GPT-4o architecture.',
    details: [
      { label: 'Accuracy', value: '99.2% via JSON schema', icon: ListChecks },
      { label: 'Analysis', value: 'Sentiment & Tone Detect', icon: Share2 },
      { label: 'Language', value: 'Multi-lingual Support', icon: Globe },
      { label: 'Fields', value: '25+ Data Points Extracted', icon: Database }
    ],
    technical: [
      'Extract Experience, Skills, and Timelines',
      'No guessing: returns null if data missing',
      'Timelines normalized to standard formats',
      'Education & certification verification'
    ]
  },
  {
    id: '3',
    phase: 'Phase 1',
    title: 'AI Recommendation',
    icon: GitMerge,
    color: 'cyan',
    side: 'right',
    summary: 'Weighted similarity scoring for optimal job matching.',
    details: [
      { label: 'Matching', value: 'Vector Semantic Search', icon: Search },
      { label: 'Logic', value: 'Multi-criteria Weighted', icon: BarChart3 },
      { label: 'Output', value: 'Human-readable Match Score', icon: FileText },
      { label: 'Transparency', value: 'Explainable AI (XAI)', icon: Zap }
    ],
    technical: [
      'Skill overlap vs. Required skill weights',
      'Experience range compatibility checking',
      'Role relevance based on past titles',
      'Location & budget preference alignment',
      'Match percentage + logical explanation'
    ],
    intelligence: [
      'Ranked Job Recommendations (1-3 roles)',
      'Optional suggestions: No auto-assignment',
      'Human-in-the-loop: Admin control mandatory',
      'Explainable logic: Why a job is suggested',
      'Traceable: All recommendations logged'
    ]
  },
  {
    id: '4',
    phase: 'Phase 2',
    title: 'Multi-channel Outreach',
    icon: Mail,
    color: 'orange',
    side: 'left',
    summary: 'Automated candidate engagement and verification.',
    details: [
      { label: 'Email', value: 'Authenticated SMTP Relay', icon: Mail },
      { label: 'WhatsApp', value: 'Interactive Bot Templates', icon: MessageSquare },
      { label: 'Tracking', value: 'Open & Reply Webhooks', icon: Bell },
      { label: 'Intent', value: 'YES/NO Capture Engine', icon: CheckCircle }
    ],
    technical: [
      'SMTP Auth: Company official domain relay',
      'WhatsApp Business Cloud API v20.0',
      'Webhook capture for real-time replies',
      'Immutable message & status logging',
      'Auto-transition based on YES/NO intent'
    ],
    intelligence: [
      'Admin-triggered sending only (No Auto-spam)',
      'Pre-approved non-editable templates',
      'Capture candidate YES/NO interest intent',
      'Live Response Status in Dashboard',
      'Traceable: Full communication audit trail'
    ]
  },
  {
    id: '5',
    phase: 'Phase 2',
    title: 'HR Approval Gateway',
    icon: CheckCircle,
    color: 'emerald',
    side: 'right',
    summary: 'Human-in-the-loop decision and phase locking.',
    details: [
      { label: 'Decision', value: 'Manual Admin Approval', icon: LayoutDashboard },
      { label: 'Audit', value: 'Full Action Logging', icon: Lock },
      { label: 'Status', value: 'Candidate Lifecycle Sync', icon: Zap },
      { label: 'Roles', value: 'RBAC Enforcement', icon: ShieldCheck }
    ],
    technical: [
      'Response dashboard monitoring (YES/NO)',
      'Human-in-the-loop verification gate',
      'Audit log for every admin decision',
      'Final progression lock for Phase 3'
    ]
  },
  {
    id: '6',
    phase: 'Phase 3',
    title: 'Voice AI Finalization',
    icon: PhoneCall,
    color: 'red',
    side: 'left',
    summary: 'Automated scheduling and IVR verification.',
    details: [
      { label: 'Voice', value: 'Twilio/Exotel AI Bridge', icon: PhoneCall },
      { label: 'Calendar', value: 'Auto-slot Booking', icon: Calendar },
      { label: 'IVR', value: 'Keypad (1/2) Capture', icon: Terminal },
      { label: 'Result', value: 'Final Status Update', icon: ArrowRight }
    ],
    technical: [
      'Outgoing voice calls for confirmation',
      'Capture Press 1 (Confirm) / 2 (Reschedule)',
      'Automatic sync with Company ERP/ATS',
      'Interview completion status triggers'
    ]
  }
];

const ConnectorLine = () => (
  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden lg:block">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
  </div>
);

const TechnicalSpecs = ({ items, side }) => (
  <div className={`mt-6 pt-6 border-t border-zinc-800/50 flex flex-col items-start text-left`}>
    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
      <ChevronRight className="w-3 h-3 text-blue-500" />
      Technical Architecture
    </h4>
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="text-[11px] text-zinc-400 font-medium flex items-center gap-2 group/item">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover/item:bg-blue-500 transition-colors" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const DetailGrid = ({ details, side }) => (
  <div className={`grid grid-cols-2 gap-3 mb-6`}>
    {details.map((detail, i) => (
      <div key={i} className={`p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors flex flex-row gap-3`}>
        <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400">
          <detail.icon className="w-4 h-4" />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider block">{detail.label}</span>
          <span className="text-[11px] font-bold text-zinc-200 truncate">{detail.value}</span>
        </div>
      </div>
    ))}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      {/* Abstract Background Noise */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="relative z-10">
        <header className="max-w-7xl mx-auto pt-24 pb-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
          >
            <ShieldCheck className="w-4 h-4" />
            Devtri Seczone Cloud Architecture
          </motion.div>
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600">HR ENGINE</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-medium leading-relaxed">
            The ultimate recruitment automation framework. Built for performance, designed for enterprise security, powered by neural intelligence.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-48 relative">
          <ConnectorLine />
          
          <div className="space-y-32 lg:space-y-48">
            {steps.map((step) => (
              <div key={step.id} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
                {/* Center Pulse Point */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]" />
                  </motion.div>
                </div>

                {/* Content Logic */}
                <div className={`${step.side === 'left' ? 'lg:order-1' : 'lg:order-1'}`}>
                  {step.side === 'left' ? (
                    <motion.div 
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="group bg-zinc-950/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-zinc-800/80 shadow-2xl hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2"
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <div className={`p-4 rounded-2xl bg-${step.color}-600/10 border border-${step.color}-500/20 text-${step.color}-400 group-hover:bg-${step.color}-500 group-hover:text-white transition-all duration-500`}>
                          <step.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{step.phase}</span>
                          <h3 className="text-2xl font-black text-white tracking-tight mt-1">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 italic font-serif">"{step.summary}"</p>
                      
                      <DetailGrid details={step.details} side="left" />
                      <TechnicalSpecs items={step.technical} side="left" />
                    </motion.div>
                  ) : (
                    <div className="hidden lg:block">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 text-right"
                      >
                         <h4 className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.3em] mb-4">Core Infrastructure</h4>
                         {step.id === '0' ? (
                           <div className="space-y-4">
                             <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                               Full-stack deployment pipeline with automated GitHub-to-Vercel CI/CD.
                             </p>
                             <ul className="space-y-2 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
                               <li className="flex items-center gap-2 justify-end">Admin Dashboard with CV Upload <LayoutDashboard className="w-3 h-3 text-blue-500" /></li>
                               <li className="flex items-center gap-2 justify-end">Real-time CV Approval Logic <CheckCircle className="w-3 h-3 text-emerald-500" /></li>
                               <li className="flex items-center gap-2 justify-end">Job List Management <ListChecks className="w-3 h-3 text-indigo-500" /></li>
                               <li className="flex items-center gap-2 justify-end">Vercel Password Protection <Lock className="w-3 h-3 text-red-500" /></li>
                               <li className="flex items-center gap-2 justify-end">Custom Domain Verification <Globe className="w-3 h-3 text-cyan-500" /></li>
                             </ul>
                           </div>
                         ) : step.id === '4' ? (
                           <div className="space-y-4">
                             <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                               Multi-channel engagement & intent verification.
                             </p>
                             <ul className="space-y-2 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
                               {step.intelligence.map((item, i) => (
                                 <li key={i} className="flex items-center gap-2 justify-end">
                                   {item} <Zap className="w-3 h-3 text-orange-500" />
                                 </li>
                               ))}
                             </ul>
                           </div>
                         ) : step.id === '1' ? (
                           <div className="space-y-4">
                             <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                               AI-Assisted Resume Understanding & Data Normalization Engine.
                             </p>
                             <ul className="space-y-2 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
                               {step.intelligence.map((item, i) => (
                                 <li key={i} className="flex items-center gap-2 justify-end">
                                   {item} <Zap className="w-3 h-3 text-indigo-500" />
                                 </li>
                               ))}
                             </ul>
                           </div>
                         ) : (
                           <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                              {step.summary} This modular architecture ensures high availability and zero-data loss during critical HR operations.
                           </p>
                         )}
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className={`${step.side === 'right' ? 'lg:order-2' : 'lg:order-2'}`}>
                  {step.side === 'right' ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="group bg-zinc-950/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-zinc-800/80 shadow-2xl hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2"
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <div className={`p-4 rounded-2xl bg-${step.color}-600/10 border border-${step.color}-500/20 text-${step.color}-400 group-hover:bg-${step.color}-500 group-hover:text-white transition-all duration-500`}>
                          <step.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{step.phase}</span>
                          <h3 className="text-2xl font-black text-white tracking-tight mt-1">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 italic font-serif">"{step.summary}"</p>
                      
                      <DetailGrid details={step.details} side="right" />
                      <TechnicalSpecs items={step.technical} side="right" />
                    </motion.div>
                  ) : (
                    <div className="hidden lg:block">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 text-left"
                      >
                         <h4 className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.3em] mb-4">Core Infrastructure</h4>
                         {step.id === '2' ? (
                           <div className="space-y-4">
                             <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Output Schema Example</p>
                             <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 font-mono text-[10px] text-blue-400 overflow-x-auto shadow-inner">
                               <pre>{`{
  "name": "Amit Verma",
  "phone": "+91XXXXXXXXXX",
  "email": "amit@example.com",
  "education": [
    {
      "degree": "B.Tech",
      "field": "CS",
      "institution": "ABC Uni"
    }
  ],
  "experience": [
    {
      "role": "Backend Dev",
      "company": "XYZ Ltd",
      "duration": "2 years"
    }
  ],
  "skills": ["Node.js", "PostgreSQL"],
  "location": "Bangalore",
  "age": null
}`}</pre>
                             </div>
                           </div>
                         ) : step.id === '3' ? (
                           <div className="space-y-4">
                             <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                               AI Matching Engine for high-intent job alignment.
                             </p>
                             <ul className="space-y-2 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
                               {step.intelligence.map((item, i) => (
                                 <li key={i} className="flex items-center gap-2">
                                   <Zap className="w-3 h-3 text-cyan-500" /> {item}
                                 </li>
                               ))}
                             </ul>
                           </div>
                         ) : step.id === '4' ? (
                            <div className="space-y-4">
                              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                                Multi-channel engagement & intent verification.
                              </p>
                              <ul className="space-y-2 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
                                {step.intelligence.map((item, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <Zap className="w-3 h-3 text-orange-500" /> {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                         ) : step.id === '0' ? (
                           <div className="space-y-4">
                             <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                               Full-stack deployment pipeline with automated GitHub-to-Vercel CI/CD.
                             </p>
                             <ul className="space-y-2 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
                               <li className="flex items-center gap-2">Admin Dashboard with CV Upload <LayoutDashboard className="w-3 h-3 text-blue-500" /></li>
                               <li className="flex items-center gap-2">Real-time CV Approval Logic <CheckCircle className="w-3 h-3 text-emerald-500" /></li>
                               <li className="flex items-center gap-2">Job List Management <ListChecks className="w-3 h-3 text-indigo-500" /></li>
                               <li className="flex items-center gap-2">Vercel Password Protection <Lock className="w-3 h-3 text-red-500" /></li>
                               <li className="flex items-center gap-2">Custom Domain Verification <Globe className="w-3 h-3 text-cyan-500" /></li>
                             </ul>
                           </div>
                         ) : (
                           <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                              Implementing high-fidelity data extraction and semantic mapping allows for {step.title.toLowerCase()} with unparalleled precision.
                           </p>
                         )}
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-zinc-950 py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/20 mb-10 group cursor-pointer hover:rotate-12 transition-transform duration-500">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Devtri Seczone Architecture</h2>
            <p className="text-zinc-500 text-lg max-w-xl mb-16 font-medium leading-relaxed">
              Proprietary recruitment automation framework. Built for performance, designed for security, optimized for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">
              <span className="hover:text-blue-500 transition-colors">Cloud Native</span>
              <span className="hover:text-blue-500 transition-colors">AI Augmented</span>
              <span className="hover:text-blue-500 transition-colors">Zero Trust</span>
              <span className="hover:text-blue-500 transition-colors">Full Audit</span>
            </div>
          </div>
        </footer >
      </div >
    </div >
  );
}