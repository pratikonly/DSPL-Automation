import React from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, FileText, Cpu, UserCheck, LayoutDashboard, 
  Briefcase, GitMerge, Mail, MessageSquare, CheckCircle, 
  PhoneCall, Calendar, ArrowRight, ShieldCheck, Database,
  Zap, Settings, Bell, Users, Clock, Globe, Lock
} from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const IconWrapper = ({ icon: Icon, color, className = "" }) => (
  <div className={`p-2.5 rounded-xl ${color} shadow-lg shadow-current/10 ${className}`}>
    <Icon className="w-5 h-5 text-white" />
  </div>
);

const FlowStep = ({ icon: Icon, title, description, color, delay, status, phase }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className="group relative"
  >
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-12 h-12" />
      </div>
      
      <div className="flex items-start gap-4 mb-4">
        <IconWrapper icon={Icon} color={color} />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
            Phase {phase} • {status}
          </span>
          <h3 className="font-bold text-slate-800 leading-tight">{title}</h3>
        </div>
      </div>
      
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
        {description}
      </p>

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Automated
        </span>
        <Zap className={`w-3 h-3 ${color.replace('bg-', 'text-')}`} />
      </div>
    </Card>
  </motion.div>
);

const SectionHeader = ({ number, title, subtitle, color }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-2">
      <div className={`w-10 h-10 rounded-xl ${color} text-white flex items-center justify-center font-black shadow-lg shadow-current/20`}>
        {number}
      </div>
      <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
    </div>
    <p className="text-slate-500 ml-14 text-sm font-medium">{subtitle}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] selection:bg-blue-100">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-100/40 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-emerald-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="max-w-7xl mx-auto pt-16 pb-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            Devtri Seczone Architecture v2.0
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">HR Automation</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            The next generation of recruitment intelligence. Seamlessly automating the entire candidate lifecycle from initial CV upload to final interview confirmation.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-32 space-y-24">
          
          {/* Phase 0: Infrastructure */}
          <section>
            <SectionHeader 
              number="00" 
              title="System Initialization" 
              subtitle="One-time platform configuration for enterprise readiness."
              color="bg-slate-900"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FlowStep 
                icon={Lock} title="Secure Auth" color="bg-slate-900" delay={0.1} phase="0" status="Security"
                description="RBAC based access control with multi-tenant isolation for HR managers."
              />
              <FlowStep 
                icon={Briefcase} title="Job Engine" color="bg-slate-900" delay={0.2} phase="0" status="Setup"
                description="Dynamic job post builder with skill taxonomy and experience leveling."
              />
              <FlowStep 
                icon={Globe} title="Gateway Config" color="bg-slate-900" delay={0.3} phase="0" status="Integration"
                description="Centralized SMTP, WhatsApp Business, and Voice API orchestration."
              />
              <FlowStep 
                icon={Settings} title="Prompt Tuning" color="bg-slate-900" delay={0.4} phase="0" status="AI Core"
                description="Configure AI parsing parameters and decision logic thresholds."
              />
            </div>
          </section>

          {/* Phase 1: Intake */}
          <section>
            <SectionHeader 
              number="01" 
              title="Intelligence Layer" 
              subtitle="Converting unstructured resume data into actionable talent insights."
              color="bg-blue-600"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <FlowStep 
                icon={Upload} title="Smart Intake" color="bg-blue-600" delay={0.5} phase="1" status="Active"
                description="Bulk ingestion pipeline supporting PDF, DOCX, and high-res images."
              />
              <FlowStep 
                icon={FileText} title="Deep OCR" color="bg-blue-600" delay={0.6} phase="1" status="OCR"
                description="Neural network powered text extraction for scanned or non-selectable files."
              />
              <FlowStep 
                icon={Cpu} title="GPT Analysis" color="bg-blue-600" delay={0.7} phase="1" status="AI"
                description="Zero-shot parsing into structured JSON with contextual understanding."
              />
              <FlowStep 
                icon={Users} title="Profile Store" color="bg-blue-600" delay={0.8} phase="1" status="DB"
                description="Elasticsearch indexed candidate profiles for instant discovery."
              />
              <FlowStep 
                icon={GitMerge} title="Match Scoring" color="bg-indigo-600" delay={0.9} phase="1" status="Logic"
                description="Multi-vector similarity scoring between candidate skills and job needs."
              />
            </div>
          </section>

          {/* Phase 2: Outreach */}
          <section>
            <SectionHeader 
              number="02" 
              title="Engagement Pipeline" 
              subtitle="Automated multi-channel communication to verify candidate interest."
              color="bg-orange-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FlowStep 
                icon={Mail} title="Auto-Email" color="bg-orange-500" delay={1.0} phase="2" status="SMTP"
                description="Dynamic template rendering for personalized shortlist notifications."
              />
              <FlowStep 
                icon={MessageSquare} title="WhatsApp Bot" color="bg-green-500" delay={1.1} phase="2" status="Bot"
                description="Two-way interactive conversation to capture YES/NO interest intent."
              />
              <FlowStep 
                icon={Bell} title="Intent Monitor" color="bg-orange-500" delay={1.2} phase="2" status="Webhook"
                description="Real-time capture of responses via secure webhook listeners."
              />
              <FlowStep 
                icon={CheckCircle} title="HR Approval" color="bg-emerald-500" delay={1.3} phase="2" status="Manual"
                description="Human-in-the-loop verification before final phase progression."
              />
            </div>
          </section>

          {/* Phase 3: Finalization */}
          <section>
            <SectionHeader 
              number="03" 
              title="Final Conversion" 
              subtitle="Scheduling and automated verification for high-intent candidates."
              color="bg-red-600"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FlowStep 
                icon={Calendar} title="Smart Scheduling" color="bg-red-600" delay={1.4} phase="3" status="CRM"
                description="Calendar integration for automated interview slot management."
              />
              <FlowStep 
                icon={PhoneCall} title="Voice AI" color="bg-red-600" delay={1.5} phase="3" status="Twilio"
                description="Outgoing voice confirmation call with IVR response capture."
              />
              <FlowStep 
                icon={ArrowRight} title="Confirmation" color="bg-red-600" delay={1.6} phase="3" status="Final"
                description="Automatic status transition to 'Interview Confirmed' on successful IVR."
              />
              <FlowStep 
                icon={Database} title="Talent Pool" color="bg-emerald-600" delay={1.7} phase="3" status="Success"
                description="Final selection status sync with organizational ERP/ATS."
              />
            </div>
          </section>
        </main>

        <footer className="max-w-7xl mx-auto border-t border-slate-200 mt-12 py-12 px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            Devtri Seczone Master Architecture
          </div>
          <div>© 2026 AI HR Automation Platform • Confidential & Proprietary</div>
        </footer>
      </div>
    </div>
  );
}