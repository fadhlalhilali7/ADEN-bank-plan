
export interface DepartmentInsight {
  name: string;
  role: string;
  color: string;
  focus: string[];
  icon: string;
  id: string;
}

export interface DepartmentFeedback {
  deptId: string;
  feedback: string;
  status: 'warning' | 'danger' | 'success' | 'neutral';
}

export interface ComparisonMetric {
  label: string;
  method1: number;
  method2: number;
  method3: number;
}

export interface MethodDetail {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pros: string[];
  cons: string[];
  risk: number;
  profit: number;
  ease: number;
  control: number;
  isSpecial?: boolean;
  deptFeedback: DepartmentFeedback[];
}
