import statisticsImage from "../assets/statistics.png";

export type ProblemItem = {
  tab?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  backgroundClass: string;
  accentClass: string;
  learnMoreHref?: string;
};

export type ProblemSectionData = {
  id: string;
  theme: "light" | "dark";
  eyebrow: string;
  heading: string;
  items: ProblemItem[];
};

export const homeProblemSection: ProblemSectionData = {
  id: "the-problem",
  theme: "light",
  eyebrow: "COST OF FRAGMENTATION",
  heading: "Running a university shouldn’t mean juggling disconnected systems",
  items: [
    {
      tab: "Admissions Delays",
      title: "Admissions Delays",
      description:
        "Manual tracking of applications and paper reviews, along with disconnected portals, significantly delay admissions teams by weeks in every cycle. This inefficiency hampers the overall process and creates frustration for everyone involved.",
      image: statisticsImage,
      imageAlt: "University admissions statistics dashboard",
      backgroundClass: "bg-[#06BAD6]",
      accentClass: "bg-[#06BAD6]/5",
    },
    {
      tab: "Scattered Records",
      title: "Scattered Records",
      description:
        "Data is scattered across various spreadsheets, outdated databases, and endless email threads, making it nearly impossible to audit effectively. This disorganization poses serious risks when managing information at scale.",
      image: statisticsImage,
      imageAlt: "Scattered university records dashboard",
      backgroundClass: "bg-[#FFB60A]",
      accentClass: "bg-[#FFB60A]/5",
    },
    {
      tab: "Spreadsheet Operations",
      title: "Spreadsheet Operations",
      description:
        "Students are required to log into four to six different portals to complete their semester tasks. This confusion not only frustrates them but also consumes valuable hours for your support team every single day.",
      image: statisticsImage,
      imageAlt: "Spreadsheet operations dashboard",
      backgroundClass: "bg-[#B074CE]",
      accentClass: "bg-[#B074CE]/5",
    },
    {
      tab: "Portal Overload",
      title: "Portal Overload",
      description:
        "Students and staff have to remember a different portal for every task, making simple actions feel unnecessarily complicated.",
      image: statisticsImage,
      imageAlt: "Campus portal activity dashboard",
      backgroundClass: "bg-[#2661EF]",
      accentClass: "bg-[#2661EF]/5",
    },
  ],
};

export const productProblemSection: ProblemSectionData = {
  id: "product-challenges",
  theme: "dark",
  eyebrow: "INSIDE THE PLATFORM",
  heading: "Built module by module. Designed as one.",
  items: [
    {
      tab: "Onboarding",
      title: "From first login to a completed profile",
      description:
        "A redesigned, role-aware login leads new applicants straight into a guided admission flow, and every new student into a compulsory bio-data wizard, so no record starts incomplete.",
      image: statisticsImage,
      imageAlt: "Onboarding",
      backgroundClass: "bg-[#2661EF]",
      accentClass: "bg-[#2661EF]/5",
    },
    {
      tab: "Money & Finance",
      title: "Every naira tracked, from fees to reconciliation.",
      description:
        "Build fee schedules per programme and session, give students a live ledger, and let an optional wallet handle top-ups, loan credits and refunds automatically.",
      image: statisticsImage,
      imageAlt: "Money & Finance",
      backgroundClass: "bg-[#06BAD6]",
      accentClass: "bg-[#06BAD6]/5",
    },
    {
      tab: "Academic Life",
      title: "Registration, timetables and results in sync",
      description:
        "Course registration respects curriculum rules automatically, timetables draft and publish with conflict checks, and results carry the same clean view students already trust.",
      image: statisticsImage,
      imageAlt: "Academic Life",
      backgroundClass: "bg-[#FFB60A]",
      accentClass: "bg-[#FFB60A]/5",
    },
    {
      tab: "Request & Approval",
      title: "One inbox for every approval in the university",
      description:
        "Leave of absence, course updates, transcripts, clearance and exeat all move through the same configurable engine sequential or parallel, with SLA timers and a complete audit trail.",
      image: statisticsImage,
      imageAlt: "Request & Approval",
      backgroundClass: "bg-[#B074CE]",
      accentClass: "bg-[#B074CE]/5",
    },
    {
      tab: "Campus & Community",
      title: "Hostel, notices and the library, in one place",
      description:
        "From bedspace applications to targeted announcements, the modules that keep campus life running are as connected as the academic ones.",
      image: statisticsImage,
      imageAlt: "Campus & Community",
      backgroundClass: "bg-[#06BAD6]",
      accentClass: "bg-[#06BAD6]/5",
    },
    {
      tab: "People & Admin",
      title: "Every user, role and record, governed centrally",
      description:
        "Detailed profiles for students and staff, full permission control, and a complete appraisal-to-promotion workflow for staff performance.",
      image: statisticsImage,
      imageAlt: "Campus operations dashboard",
      backgroundClass: "bg-[#B074CE]",
      accentClass: "bg-[#B074CE]/5",
    },
  ],
};
