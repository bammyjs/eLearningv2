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
import elearningDashboard from '../assets/elearningDashbord.png';
import trainingSpeaker from '../assets/elearning_training1.jpg';
import trainingHall from '../assets/elearning_training2.jpg';
import trainingGroup from '../assets/elearning_training3.jpg';

export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  media: {
    image: string;
    imageAlt: string;
    imagePosition?: string;
    video?: {
      src: string;
      label: string;
      description: string;
    };
    eyebrow: string;
    label: string;
    previewTitle: string;
    previewDescription: string;
    previewPoints: string[];
    gallery: Array<{
      src: string;
      alt: string;
      caption: string;
      position?: string;
    }>;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  proofPoints: Array<{
    title: string;
    description: string;
  }>;
  audiences: string[];
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
    media: {
      image: elearningDashboard,
      imageAlt: 'Institutional portal dashboards for students, staff, and administrators',
      imagePosition: 'center top',
      eyebrow: 'Unified campus access',
      label: 'Student and staff self-service experience',
      previewTitle: 'See how the portal experience flows across campus touchpoints',
      previewDescription:
        'This preview presents how students, registry teams, and administrators move through one coordinated digital environment.',
      previewPoints: [
        'Branded dashboard experience for different user roles',
        'Self-service requests and records access in one place',
        'Clear visibility into pending approvals and next steps',
      ],
      gallery: [
        {
          src: trainingGroup,
          alt: 'Institutional stakeholders gathered during eLearning platform engagement',
          caption: 'Stakeholder alignment across administration and academic teams',
          position: 'center 28%',
        },
        {
          src: trainingSpeaker,
          alt: 'Live platform walkthrough during a university session',
          caption: 'Guided onboarding for teams adopting the portal experience',
          position: 'center 35%',
        },
      ],
    },
    stats: [
      { value: '24/7', label: 'access to core student services' },
      { value: '1 hub', label: 'for records, requests, and updates' },
      { value: 'Role-based', label: 'views for each campus stakeholder' },
    ],
    proofPoints: [
      {
        title: 'Self-service that feels organized',
        description:
          'Students and staff can complete important academic tasks without navigating disconnected systems or waiting on manual follow-ups.',
      },
      {
        title: 'Clear workflow ownership',
        description:
          'Requests move through the right units with visibility into status, pending actions, and approvals.',
      },
      {
        title: 'A branded digital front door',
        description:
          'Institutions present a more polished digital experience while improving internal coordination behind the scenes.',
      },
    ],
    audiences: ['Registry teams', 'Students', 'Academic staff', 'ICT administrators'],
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
    media: {
      image: trainingHall,
      imageAlt: 'Result processing workspace showing score validation and approval flow',
      imagePosition: 'center 42%',
      eyebrow: 'Academic accuracy at scale',
      label: 'Controlled uploads, approvals, and computation',
      previewTitle: 'Preview the flow from result upload to final approval',
      previewDescription:
        'This walkthrough focuses on how academic teams manage validation, computation, moderation, and approval with less manual reconciliation.',
      previewPoints: [
        'Structured upload and review stages for departments',
        'Computation logic backed by traceable records',
        'Approval-ready outputs for faculty and senate processes',
      ],
      gallery: [
        {
          src: trainingSpeaker,
          alt: 'Presenter explaining the digital result processing flow',
          caption: 'Workshops that translate policy-heavy processes into clear digital workflows',
          position: 'center 35%',
        },
        {
          src: elearningDashboard,
          alt: 'Academic operations dashboard with result statistics and management actions',
          caption: 'Operational dashboards that help teams monitor progress and approvals',
          position: 'center 18%',
        },
      ],
    },
    stats: [
      { value: 'Automated', label: 'GPA and CGPA computation' },
      { value: 'Audit-ready', label: 'history for corrections and approvals' },
      { value: 'Faster', label: 'release cycles during peak sessions' },
    ],
    proofPoints: [
      {
        title: 'Less spreadsheet dependency',
        description:
          'Departments move away from fragile offline processes into a structured workflow built for institutional controls.',
      },
      {
        title: 'Confidence in each release',
        description:
          'Validation rules, approval steps, and traceable activity reduce uncertainty before results reach students.',
      },
      {
        title: 'Operational relief for academic teams',
        description:
          'Staff spend less time reconciling files manually and more time resolving exceptions that actually need attention.',
      },
    ],
    audiences: ['Exams and records teams', 'Departments', 'Senate reviewers', 'Faculty administrators'],
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
    media: {
      image: trainingHall,
      imageAlt: 'Examination management overview with scheduling, compliance, and review stages',
      imagePosition: 'center 42%',
      video: {
        src: 'https://res.cloudinary.com/bamtech1/video/upload/v1777143985/elearning/20260325_095349_hlstbf.mp4',
        label: 'Live examination session',
        description: 'Students using the examination software in a real supervised session.',
      },
      eyebrow: 'Examination operations with oversight',
      label: 'Coordinated planning, reviews, and compliance visibility',
      previewTitle: 'Explore a clearer examination operations workflow',
      previewDescription:
        'The preview shows how examination teams and institutional leadership can monitor status, compliance checkpoints, and cross-team coordination.',
      previewPoints: [
        'Operational checkpoints for examination processes',
        'Cross-unit visibility for records and review status',
        'Better oversight for registry, ICT, and academic leadership',
      ],
      gallery: [
        {
          src: trainingGroup,
          alt: 'Staff and stakeholders involved in examination operations coordination',
          caption: 'Cross-unit collaboration for governance and delivery',
          position: 'center 28%',
        },
        {
          src: trainingHall,
          alt: 'Large institutional session discussing academic digitization',
          caption: 'Institution-wide coordination for operational readiness',
          position: 'center 42%',
        },
      ],
    },
    stats: [
      { value: 'End-to-end', label: 'workflow visibility across exam operations' },
      { value: 'Traceable', label: 'records for reviews and approvals' },
      { value: 'Aligned', label: 'coordination across academic stakeholders' },
    ],
    proofPoints: [
      {
        title: 'Stronger process integrity',
        description:
          'Examination activities are supported by checkpoints, ownership, and clearer documentation of decisions.',
      },
      {
        title: 'Better oversight for leadership',
        description:
          'Registry, ICT, and academic leadership gain visibility into process status without chasing updates manually.',
      },
      {
        title: 'More coordinated execution',
        description:
          'Cross-team collaboration becomes easier when teams operate from the same workflow and records environment.',
      },
    ],
    audiences: ['Examination officers', 'Registry leadership', 'ICT teams', 'Faculty committees'],
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
