
import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Star, 
  AlertCircle, 
  Lock, 
  Crown, 
  ArrowLeftRight,
  Target,
  BarChart3,
  Users,
  Shield,
  ThumbsUp,
  ThumbsDown,
  Info,
  AlertTriangle,
  Skull,
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  Download,
  Activity
} from 'lucide-react';
import { DEPARTMENTS, METHODS, COMPARISON_METRICS, ICONS_MAP } from './constants';
import { MethodDetail, DepartmentInsight } from './types';

const App: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<number>(3);
  const [activeDept, setActiveDept] = useState<string | null>(null);

  // Dynamic date for today's representation
  const todayDate = useMemo(() => {
    return new Date().toLocaleDateString('ar-YE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={i < count ? "text-brand-gold fill-current" : "text-gray-200"} 
      />
    ));
  };

  const currentMethod = useMemo(() => METHODS.find(m => m.id === selectedMethod), [selectedMethod]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger': return 'bg-red-100 text-red-700 border-red-200';
      case 'warning': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'success': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const exportView = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 selection:bg-brand-gold selection:text-brand-dark">
      {/* Header Section */}
      <header className="bg-brand-dark text-white p-6 shadow-xl sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqmLkLwkVm7qO6CIkrMQ3hLvznp_sIZKvvmZLlPzyoZ9v5mx8M-qoCEHTjmJefqTQ66A&usqp=CAU" 
                alt="Aden Islamic Bank Logo" 
                className="h-14 rounded-lg shadow-md bg-white p-1"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full animate-pulse border-2 border-brand-dark"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-brand-gold">بنك عدن للتمويل</h1>
              <p className="text-white/80 font-bold text-sm tracking-widest uppercase">Aden Islamic Bank | Strategic Roadmap {currentYear}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={exportView}
              className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-bold border border-white/10 transition-all"
            >
              <Download size={16} /> تصدير التقرير
            </button>
            <div className="flex gap-2 text-[10px] font-black">
              <span className="bg-brand-red px-3 py-1 rounded-full border border-white/20 uppercase">Top Secret</span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 uppercase">Executive Only</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-12 space-y-16">
        
        {/* Level 0: Strategic Problem & Context */}
        <section className="text-center space-y-8 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-3 bg-brand-red/10 px-6 py-2 rounded-full border border-brand-red/20 text-brand-red">
             <Skull size={20} className="animate-bounce" />
             <span className="font-black text-sm uppercase tracking-widest">تنبيه المخاطر الاستراتيجية</span>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-black text-brand-dark leading-tight">الأموال تتسرب من "القلعة".. كيف نعيد السيطرة؟</h2>
            <p className="text-slate-500 font-bold text-lg leading-relaxed">
              كل تمويل تقليدي يمنحه البنك اليوم هو عبارة عن سيولة تخرج من سيطرتنا لتغذي أسواقاً لا نملك فيها أي رقابة. نحن بحاجة لتحويل "التمويل" إلى "دورة اقتصادية مغلقة".
            </p>
          </div>

          {/* Visual Cash Flow Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold shadow-lg">
                <Shield size={32} />
              </div>
              <span className="font-black text-brand-dark">بنك عدن الإسلامي</span>
              <p className="text-[10px] text-slate-400 font-bold">مصدر السيولة والضمانات</p>
            </div>

            <div className="flex flex-col items-center justify-center py-4">
               <div className="relative w-full h-8 flex items-center justify-center">
                  <div className="w-full h-1 bg-slate-200 absolute"></div>
                  <div className={`absolute h-1 bg-brand-red transition-all duration-1000 ${selectedMethod === 1 ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                  <div className={`absolute h-1 bg-brand-gold transition-all duration-1000 ${selectedMethod === 3 ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                  <div className="z-10 bg-white p-2 rounded-full shadow-md border border-slate-100">
                    {selectedMethod === 1 ? <AlertTriangle className="text-brand-red" /> : <Target className="text-brand-gold" />}
                  </div>
               </div>
               <span className="text-[10px] font-black uppercase mt-2 tracking-widest text-slate-500">
                 {selectedMethod === 1 ? "فقدان السيطرة 100%" : "سيطرة رقمية كاملة"}
               </span>
            </div>

            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <Users size={32} />
              </div>
              <span className="font-black text-slate-600">السوق / التاجر والعميل</span>
              <p className="text-[10px] text-slate-400 font-bold">نهاية الدورة المالية</p>
            </div>
          </div>
        </section>

        {/* Level 1: Methodology Comparison */}
        <section className="space-y-12">
          <div className="flex justify-between items-end">
             <div className="text-right">
                <h3 className="text-2xl font-black text-brand-dark">خيارات المواجهة الاستراتيجية</h3>
                <p className="text-slate-500 font-bold">حلل المخاطر والربحية لكل منهجية قبل اتخاذ القرار</p>
             </div>
             <div className="hidden md:flex gap-2">
                {METHODS.map(m => (
                  <button 
                    key={m.id}
                    onClick={() => setSelectedMethod(m.id)}
                    className={`px-6 py-2 rounded-xl text-xs font-black transition-all border-2 ${selectedMethod === m.id ? 'bg-brand-dark text-white border-brand-dark shadow-lg' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}
                  >
                    الخيار {m.id}
                  </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {METHODS.map((method) => (
              <button 
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`text-right group relative overflow-hidden p-8 rounded-[2.5rem] transition-all border-2 flex flex-col h-full ${
                  selectedMethod === method.id 
                    ? method.isSpecial ? 'border-brand-gold bg-white ring-8 ring-brand-gold/5' : 'border-brand-dark bg-white shadow-2xl scale-[1.02]'
                    : 'border-transparent bg-slate-100/50 grayscale hover:grayscale-0 hover:bg-white hover:border-slate-200 opacity-70'
                }`}
              >
                {method.isSpecial && (
                  <div className="absolute top-0 left-0 bg-brand-gold px-6 py-1.5 rounded-br-2xl font-black text-[10px] text-brand-dark flex items-center gap-2 uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                       <Crown size={12} /> التوصية الاستراتيجية
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 ${method.isSpecial ? 'bg-brand-gold/20 text-brand-gold' : 'bg-slate-200 text-slate-500'}`}>
                    {method.id === 1 && <Lock size={28} />}
                    {method.id === 2 && <ArrowLeftRight size={28} />}
                    {method.id === 3 && <Target size={28} />}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Method {method.id}</span>
                    <h4 className="font-black text-xl text-brand-dark leading-tight">{method.title}</h4>
                  </div>
                </div>

                <p className="text-sm text-slate-500 font-bold mb-8 leading-relaxed line-clamp-2">
                  {method.subtitle}
                </p>

                <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Risk Level</span>
                    <div className="flex gap-0.5">{renderStars(method.risk)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Profitability</span>
                    <div className="flex gap-0.5">{renderStars(method.profit)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Digital Control</span>
                    <div className="flex gap-0.5">{renderStars(method.control)}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Level 2: Inter-Departmental Analysis (Psychological Insights) */}
        <section className="bg-brand-dark rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-12">
             <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="text-right">
                  <h3 className="text-3xl font-black mb-2">تحليل التأثير على الأقسام</h3>
                  <p className="text-brand-periwinkle font-bold text-lg">كيف يتفاعل كل قطاع مع "الخيار المختار"؟</p>
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md flex items-center gap-3">
                   <Users className="text-brand-gold" />
                   <span className="font-bold text-sm tracking-widest uppercase">Dept Assessment</span>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {DEPARTMENTS.map((dept) => {
                 const feedback = currentMethod?.deptFeedback.find(f => f.deptId === dept.id);
                 return (
                   <div 
                     key={dept.id}
                     onMouseEnter={() => setActiveDept(dept.id)}
                     onMouseLeave={() => setActiveDept(null)}
                     className={`p-6 rounded-3xl border transition-all duration-300 group cursor-default ${
                       activeDept === dept.id ? 'bg-white/20 border-white/30 scale-105' : 'bg-white/5 border-white/10'
                     }`}
                   >
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-white/10 text-white transition-transform group-hover:rotate-12">
                           {ICONS_MAP[dept.icon as keyof typeof ICONS_MAP]}
                        </div>
                        <div className="text-right">
                           <h4 className="font-black text-lg leading-tight">{dept.name}</h4>
                           <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{dept.role}</p>
                        </div>
                     </div>

                     <div className={`p-4 rounded-2xl border-2 text-xs font-black leading-relaxed transition-all min-h-[100px] flex flex-col justify-center ${getStatusColor(feedback?.status || 'neutral')}`}>
                        <div className="flex items-center gap-2 mb-2">
                           {feedback?.status === 'danger' && <Skull size={14} />}
                           {feedback?.status === 'warning' && <AlertTriangle size={14} />}
                           {feedback?.status === 'success' && <ThumbsUp size={14} />}
                           <span>{feedback?.status === 'success' ? 'توافق كامل' : 'تحذير'}</span>
                        </div>
                        {feedback?.feedback}
                     </div>

                     <div className="mt-6 space-y-2">
                        {dept.focus.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-brand-periwinkle/60 justify-end">
                             {f} <div className="w-1 h-1 bg-brand-gold rounded-full" />
                          </div>
                        ))}
                     </div>
                   </div>
                 );
               })}
             </div>
          </div>
        </section>

        {/* Level 3: Hard Metrics Comparison Table */}
        <section className="bg-white rounded-[3rem] shadow-sm p-12 border border-slate-200">
           <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-slate-100 rounded-2xl text-slate-500">
                    <BarChart3 size={24} />
                 </div>
                 <h3 className="text-2xl font-black text-brand-dark">مصفوفة التقييم الاستراتيجي</h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-black text-slate-400 bg-slate-50 px-4 py-2 rounded-xl">
                 <Activity size={16} /> تحليل البيانات الفورية - {todayDate}
              </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-right border-separate border-spacing-y-2">
               <thead>
                 <tr>
                    <th className="py-4 px-6 text-sm font-black text-slate-400 uppercase tracking-widest">المعيار</th>
                    <th className="py-4 px-6 text-sm font-black text-slate-400 text-center uppercase">التقليدي</th>
                    <th className="py-4 px-6 text-sm font-black text-slate-400 text-center uppercase">المطور</th>
                    <th className="py-4 px-6 text-sm font-black text-brand-dark bg-brand-gold/10 rounded-t-2xl text-center uppercase">المنصة الذكية</th>
                 </tr>
               </thead>
               <tbody>
                 {COMPARISON_METRICS.map((m, idx) => (
                   <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                      <td className="py-6 px-6 font-black text-slate-700 border-b border-slate-50">{m.label}</td>
                      <td className="py-6 px-6 text-center border-b border-slate-50">
                         <div className="flex justify-center gap-0.5">{renderStars(m.method1)}</div>
                      </td>
                      <td className="py-6 px-6 text-center border-b border-slate-50">
                         <div className="flex justify-center gap-0.5">{renderStars(m.method2)}</div>
                      </td>
                      <td className="py-6 px-6 text-center bg-brand-gold/5 border-x border-brand-gold/10">
                         <div className="flex justify-center gap-0.5">{renderStars(m.method3)}</div>
                      </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </section>

        {/* Level 4: Final Recommendation & "The Lock" */}
        <section className="max-w-5xl mx-auto animate-in slide-in-from-bottom duration-1000">
           <div className="bg-brand-gold p-1 rounded-[3.5rem] shadow-2xl">
              <div className="bg-white rounded-[3.4rem] p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                 <div className="absolute top-0 left-0 p-8 opacity-5">
                    <Target size={300} className="text-brand-dark" />
                 </div>
                 
                 <div className="shrink-0 relative">
                    <div className="w-32 h-32 bg-brand-dark rounded-[2.5rem] flex items-center justify-center text-brand-gold shadow-2xl relative z-10 transition-transform hover:scale-110">
                       <Shield size={64} />
                    </div>
                    <div className="absolute -inset-4 bg-brand-gold/20 rounded-[3rem] animate-pulse"></div>
                 </div>

                 <div className="flex-1 space-y-6 text-right relative z-10">
                    <div className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                       Strategic Conclusion
                    </div>
                    <h4 className="text-3xl font-black text-brand-dark leading-tight">المنظومة المتكاملة هي صمام الأمان الوحيد</h4>
                    <p className="text-slate-600 font-bold text-lg leading-relaxed">
                      "لا يمكن تجزئة الحل الذكي. الاقتصاد الرقمي الموجه ينجح فقط عندما يكون حلقة مغلقة تسيطر على كل نقطة اتصال. نحن هنا لنكون العقل المدبر لهذه الدورة، نضمن السيولة، نحمي السمعة، ونعظم الربحية."
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4 justify-end">
                       <button className="bg-brand-dark text-white font-black px-10 py-4 rounded-2xl hover:bg-black shadow-xl transition-all flex items-center gap-3 group">
                         ابدأ التنفيذ الآن <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                       <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <AlertTriangle className="text-brand-gold" />
                          <span className="text-xs font-black text-slate-500">حقوق الفكرة محفوظة - مكتب مبروك مغرم</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* Footer Info */}
      <footer className="mt-20 border-t border-slate-200 py-12 print:hidden">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-4">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqmLkLwkVm7qO6CIkrMQ3hLvznp_sIZKvvmZLlPzyoZ9v5mx8M-qoCEHTjmJefqTQ66A&usqp=CAU" className="h-8 grayscale" alt="Bank Logo" />
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Aden Islamic Bank Strategic Lab © {currentYear}</p>
            </div>
            <div className="flex gap-8 text-[10px] font-black text-slate-500 uppercase tracking-tighter">
               <a href="#" className="hover:text-brand-dark transition-colors">Documentation</a>
               <a href="#" className="hover:text-brand-dark transition-colors">Security Protocols</a>
               <a href="#" className="hover:text-brand-dark transition-colors">Strategic Insights</a>
            </div>
         </div>
      </footer>

      {/* Floating Action Button for Contact/Next Step */}
      <div className="fixed bottom-8 left-8 print:hidden">
         <button className="w-16 h-16 bg-brand-gold text-brand-dark rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative">
            <TrendingUp size={28} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
               <span className="text-xs font-black text-brand-dark">عرض التوقعات المالية {currentYear}</span>
            </div>
         </button>
      </div>
    </div>
  );
};

export default App;
