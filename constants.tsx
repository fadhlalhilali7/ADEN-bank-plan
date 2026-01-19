
import React from 'react';
import { Layout, Users, Shield, Zap, Database, Wallet, Smartphone, Globe, AlertTriangle, TrendingUp, Cpu, CreditCard, Activity, Eye, Landmark } from 'lucide-react';
import { DepartmentInsight, MethodDetail, ComparisonMetric } from './types';

export const DEPARTMENTS: DepartmentInsight[] = [
  {
    id: "board",
    name: "مجلس الإدارة",
    role: "القرار الاستراتيجي",
    color: "#1e3a8a", // Dark Blue
    focus: ["الأرقام والنمو", "السيطرة الكاملة", "السمعة البنكية"],
    icon: "Landmark"
  },
  {
    id: "exec",
    name: "الإدارة التنفيذية",
    role: "التشغيل والأداء",
    color: "#10b981", // Green
    focus: ["سرعة التنفيذ", "تجنب المخاطر التشغيلية", "الكفاءة الميدانية"],
    icon: "Zap"
  },
  {
    id: "it",
    name: "قسم التقنية IT",
    role: "البنية التحتية",
    color: "#f59e0b", // Orange
    focus: ["بساطة الربط", "مسؤولية الطرف الثالث", "أمن البيانات"],
    icon: "Cpu"
  },
  {
    id: "cash",
    name: "عدن كاش",
    role: "المحفظة الرقمية",
    color: "#6b7280", // Gray
    focus: ["حماية التدفقات", "توسيع شبكة التجار", "دقة التسويات"],
    icon: "Wallet"
  }
];

export const METHODS: MethodDetail[] = [
  {
    id: 1,
    title: "التمويل التقليدي المرن",
    subtitle: "رصيد نقدي حر - خطر تسرب السيولة",
    description: "البنك يمنح التمويل كرصيد نقدي حر؛ العميل يمكنه السحب، التحويل، أو الدفع لأي جهة دون قيود تقنية.",
    pros: ["سهولة التنفيذ الفوري", "مرونة كاملة للعميل", "توافق مع السياسات الحالية"],
    cons: ["خروج الأموال من البنك", "فقدان السيطرة على الدورة", "ضعف العائد التشغيلي", "مخاطر عالية للتعثر"],
    risk: 5,
    profit: 1,
    ease: 5,
    control: 1,
    deptFeedback: [
      { deptId: "board", status: "danger", feedback: "خطر على أرباح الموسم وضياع فرصة السيطرة على السوق." },
      { deptId: "exec", status: "warning", feedback: "سهولة في الإطلاق ولكن كوابيس في تحصيل الديون لاحقاً." },
      { deptId: "it", status: "success", feedback: "لا عبء تقني، الأنظمة الحالية تكفي." },
      { deptId: "cash", status: "danger", feedback: "فشل في الحفاظ على التدفقات داخل المحفظة." }
    ]
  },
  {
    id: 2,
    title: "التمويل المطور (رصيد شراء)",
    subtitle: "تحويل رقمي جزئي - مخاطر الالتفاف",
    description: "استخدام تطبيقات لتقييد التمويل للشراء فقط، مع محاولة توجيه العميل لشبكة تجار محددة.",
    pros: ["تحسن طفيف في السرعة", "تقليل الورقيات", "بداية التحول الرقمي"],
    cons: ["مقاومة التجار والالتفاف", "تعقيد تشغيلي يستنزف الإدارة", "ثغرات في الرقابة الميدانية"],
    risk: 3,
    profit: 3,
    ease: 3,
    control: 3,
    deptFeedback: [
      { deptId: "board", status: "warning", feedback: "خطوة جيدة لكنها غير كافية لحماية السمعة من تلاعب التجار." },
      { deptId: "exec", status: "danger", feedback: "ضغط هائل على الموظفين للمتابعة اليدوية للعمليات." },
      { deptId: "it", status: "warning", feedback: "تعديلات برمجية مستمرة ومرهقة دون رؤية شاملة." },
      { deptId: "cash", status: "neutral", feedback: "تحسن جزئي في بقاء السيولة لكن التسويات معقدة." }
    ]
  },
  {
    id: 3,
    title: "المنصة الذكية المتكاملة",
    subtitle: "نظام الحلقة المغلقة - السيطرة المطلقة",
    description: "تحويل التمويل إلى دورة مغلقة تماماً بين البنك والتاجر والعميل، تضمن بقاء السيولة داخل المنظومة وزيادة العائد الاستراتيجي.",
    pros: ["سيطرة 100% على الكاش", "بيانات فورية للسلوك الشرائي", "صفر مخاطر تلاعب", "تعظيم السمعة والانتشار"],
    cons: ["يتطلب شريك استراتيجي خبير للإدارة"],
    risk: 1,
    profit: 5,
    ease: 4,
    control: 5,
    isSpecial: true,
    deptFeedback: [
      { deptId: "board", status: "success", feedback: "تحول البنك إلى قائد للسوق وضمان نمو أرباح مستدام." },
      { deptId: "exec", status: "success", feedback: "أتمتة كاملة تقلل الأخطاء البشرية وتلغي مخاطر التشغيل." },
      { deptId: "it", status: "success", feedback: "مسؤولية التنفيذ تقع على الشريك الخارجي (Outsourced Implementation)." },
      { deptId: "cash", status: "success", feedback: "حماية التدفقات المالية 100% وتوسيع قاعدة التجار رقمياً." }
    ]
  }
];

export const COMPARISON_METRICS: ComparisonMetric[] = [
  { label: "السيطرة على التدفقات", method1: 1, method2: 3, method3: 5 },
  { label: "معدل الربحية المتوقع", method1: 1, method2: 2, method3: 5 },
  { label: "مستوى الأمان التشغيلي", method1: 1, method2: 2, method3: 5 },
  { label: "سرعة الاستجابة للسوق", method1: 5, method2: 2, method3: 5 },
];

export const ICONS_MAP = {
  Layout: <Layout className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />
};
