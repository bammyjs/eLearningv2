import type { LucideIcon } from 'lucide-react';
import {
  ClipboardCheck,
  FileSpreadsheet,
  LayoutDashboard,
  ShieldCheck,
  Bell,
  Smartphone,
  Workflow,
  Users,
  ScrollText,
  GraduationCap,
} from 'lucide-react';

export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  heroPoints: string[];
  modules: string[];
  outcomes: string[];
};

export const services: ServiceDefinition[] = [
  {
    slug: 'portal',
    name: 'Institutional Portal',
    shortName: 'Portal',
    tagline: 'A connected digital front door for students, staff, and administrators.',
    summary:
      'Deliver a structured portal experience for registration, requests, records access, and everyday academic workflows.',
    description:
      'The eLearning Portal helps universities centralize student and staff interactions in one secure environment. From onboarding and profile management to requests and workflow visibility, the portal reduces friction across the institution.',
    icon: LayoutDashboard,
    heroPoints: [
      'Unified dashboards for students, lecturers, registry teams, and management',
      'Course registration, self-service requests, and workflow visibility',
      'Clearer communication with alerts, updates, and task tracking',
    ],
    modules: [
      'Role-based dashboards',
      'Student profile and records access',
      'Course registration and validation',
      'Request tracking and task visibility',
      'Announcements and notifications',
    ],
    outcomes: [
      'Better student experience across core academic touchpoints',
      'Fewer manual support requests for administrative teams',
      'Improved visibility into pending actions and approvals',
    ],
  },
  {
    slug: 'result-processing',
    name: 'Result Processing',
    shortName: 'Result Processing',
    tagline: 'Accurate, auditable academic computation and approval workflows.',
    summary:
      'Automate result upload, validation, approval routing, and broadsheet generation with less manual reconciliation.',
    description:
      'The result processing service is built to reduce delays, remove spreadsheet-heavy bottlenecks, and improve confidence in institutional records. Academic teams can upload, validate, compute, review, and approve results through a controlled workflow.',
    icon: FileSpreadsheet,
    heroPoints: [
      'Structured upload, moderation, and approval chains',
      'Automated GPA and CGPA computation with audit-ready records',
      'Faster release cycles for departments, senate, and students',
    ],
    modules: [
      'Result upload and correction workflows',
      'GPA and CGPA calculations',
      'Broadsheet generation',
      'Departmental and senate approval routing',
      'Audit trail and compliance history',
    ],
    outcomes: [
      'Faster academic processing during peak periods',
      'Reduced errors across result compilation and approvals',
      'Greater trust in official academic records',
    ],
  },
  {
    slug: 'examination',
    name: 'Examination Management',
    shortName: 'Examination',
    tagline: 'Operational control for examinations, records, and academic compliance.',
    summary:
      'Support examination-related planning, review, and institutional oversight with structured workflows and traceable records.',
    description:
      'eLearning extends beyond result management by helping institutions coordinate examination workflows with stronger controls, clearer accountability, and improved operational visibility. It supports examination teams, academic units, and leadership with tools built for institutional rigor.',
    icon: ClipboardCheck,
    heroPoints: [
      'Better coordination across exam administration and academic oversight',
      'Structured workflows for review, compliance, and record handling',
      'Clearer institutional accountability with complete history and traceability',
    ],
    modules: [
      'Examination workflow oversight',
      'Academic record review and status tracking',
      'Compliance-ready process visibility',
      'Institutional approval checkpoints',
      'Cross-team coordination support',
    ],
    outcomes: [
      'More consistent examination operations across departments',
      'Improved visibility for registry, ICT, and academic leadership',
      'Stronger process integrity for institutional governance',
    ],
  },
];

export const sharedPlatformCapabilities = [
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'Route tasks, validations, and approvals through the right institutional roles.',
  },
  {
    icon: Users,
    title: 'Role-based access',
    desc: 'Provide each stakeholder with the right tools, data, and level of control.',
  },
  {
    icon: ScrollText,
    title: 'Audit-ready records',
    desc: 'Maintain traceable histories for critical academic and administrative actions.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    desc: 'Keep students, staff, and decision-makers informed at the right moments.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure operations',
    desc: 'Protect institutional data with authentication, access control, and monitoring.',
  },
  {
    icon: Smartphone,
    title: 'Responsive experience',
    desc: 'Support desktops, tablets, and mobile devices across campus workflows.',
  },
  {
    icon: GraduationCap,
    title: 'Institutional scalability',
    desc: 'Support departments, faculties, and central administration with one platform.',
  },
];
