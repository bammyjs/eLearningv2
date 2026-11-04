export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPolicy = {
  id: "privacy" | "terms" | "dpa" | "security";
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export const legalPolicies: LegalPolicy[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    effectiveDate: "1 January 2025",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          'eLearning Technologies Ltd ("eLearning", "we", "us", or "our") operates a university management platform accessible via web and mobile applications. This Privacy Policy describes how we collect, use, store, and share information when you use the services.',
          "We are committed to protecting the privacy of students, staff, and institutional administrators who interact with the eLearning platform. This policy is designed to meet the requirements of the Nigeria Data Protection Regulation (NDPR) and related data protection legislation.",
        ],
      },
      {
        title: "Information We Collect",
        paragraphs: [
          "We collect information that institutions provide to us as part of the platform configuration and operation. This includes student records, staff records, and institutional configuration data such as programmes, levy structures, and approval workflows.",
          "We also collect technical data generated during use of the platform, including log data, session identifiers, IP addresses, browser types, and device information. This supports security monitoring, performance analysis, and troubleshooting.",
          "Payment data processed through integrated payment gateways is subject to those providers’ privacy policies. eLearning does not store full payment card details.",
        ],
      },
      {
        title: "How We Use Your Information",
        paragraphs: [
          "We use the information we collect to provide, maintain, and improve the eLearning platform; process and track student and institutional transactions; communicate with authorised administrators; prevent unauthorised activity; and comply with legal obligations under Nigerian law.",
          "We do not sell, rent, or trade personal data to third parties for marketing purposes. We do not use student data for advertising or institutional data for competitive intelligence.",
        ],
      },
      {
        title: "Data Residency and Storage",
        paragraphs: [
          "By default, data processed by the eLearning platform is stored on servers located within Nigeria. Institutions requiring specific residency arrangements may request an on-premise deployment within their own data centres.",
          "Data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3 or higher. Encryption keys are managed using industry-standard key management practices and rotated on a defined schedule.",
        ],
      },
      {
        title: "Data Retention",
        paragraphs: [
          "We retain student and institutional records for as long as an institution’s eLearning subscription is active. On termination, institutions receive a standard-format data export and have 90 days to retrieve their data before deletion.",
          "System logs and audit trail data are retained for a minimum of 12 months. Backup snapshots are retained for 90 days, unless a longer period is required for accreditation or regulatory purposes.",
        ],
      },
      {
        title: "Data Subject Rights",
        paragraphs: [
          "Individuals may request access to their personal information, correction of inaccurate records, restriction of processing, or deletion where permitted by law. Requests should first be directed to the relevant institution, which remains responsible for the records it controls.",
          "Where eLearning receives a request directly, we will work with the institution and respond in accordance with applicable data protection law.",
        ],
      },
      {
        title: "Security",
        paragraphs: [
          "We use role-based access controls, audit logging, encrypted connections, regular backups, and monitored infrastructure to help protect data against unauthorised access, loss, alteration, and disclosure.",
          "If we identify an incident that is likely to create a significant risk to affected individuals, we will notify the relevant institution and take the steps required by applicable law.",
        ],
      },
      {
        title: "Changes to This Policy",
        paragraphs: [
          "We may update this policy when our services, security practices, or legal obligations change. The latest version will always be available on this page with its effective date.",
          "For material changes, we will give institutions reasonable notice through the platform or by email.",
        ],
      },
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    effectiveDate: "1 January 2025",
    sections: [
      {
        title: "Agreement to These Terms",
        paragraphs: [
          "By accessing or using eLearning, an institution and its authorised users agree to these Terms of Service. If you use the platform on behalf of an institution, you confirm that you have authority to bind that institution to these terms.",
          "These terms govern the platform, related support services, and updates made available by eLearning, except where a signed agreement expressly states otherwise.",
        ],
      },
      {
        title: "Accounts and Authorised Use",
        paragraphs: [
          "Institutions are responsible for assigning appropriate roles, maintaining accurate account information, and ensuring that login credentials are not shared. Each user may use the platform only for legitimate institutional activities.",
          "You must promptly notify us if you suspect unauthorised use of an account or a security incident affecting the platform.",
        ],
      },
      {
        title: "Service Availability",
        paragraphs: [
          "We work to keep the platform available and secure. Scheduled maintenance, emergency updates, or events outside our reasonable control may occasionally affect availability.",
          "We will use reasonable efforts to communicate planned maintenance that could materially affect access to the service.",
        ],
      },
      {
        title: "Acceptable Use",
        paragraphs: [
          "You must not misuse the platform, attempt to gain unauthorised access, interfere with service operation, upload malicious code, or use the service in violation of applicable law or institutional policy.",
          "We may suspend access where necessary to protect the platform, users, or institutional data.",
        ],
      },
    ],
  },
  {
    id: "dpa",
    title: "Data Processing Agreement",
    effectiveDate: "1 January 2025",
    sections: [
      {
        title: "Scope and Roles",
        paragraphs: [
          "For personal data processed through the eLearning platform, the institution acts as the data controller and eLearning acts as the data processor, except where applicable law provides otherwise.",
          "We process personal data only on the institution’s documented instructions and only as necessary to provide, secure, and support the services.",
        ],
      },
      {
        title: "Processing Instructions",
        paragraphs: [
          "The subject matter, duration, nature, and purpose of processing are determined by the services selected by the institution. The categories of data subjects may include students, applicants, staff, alumni, guardians, and authorised administrators.",
          "The institution is responsible for ensuring that it has a lawful basis for its instructions and for providing required privacy notices to affected individuals.",
        ],
      },
      {
        title: "Confidentiality and Security",
        paragraphs: [
          "We ensure that personnel authorised to process personal data are subject to appropriate confidentiality obligations. We maintain technical and organisational measures designed to protect the data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access.",
          "We review safeguards regularly and update them in response to material changes in risk, technology, or the services.",
        ],
      },
      {
        title: "Assistance and Deletion",
        paragraphs: [
          "Taking account of the nature of processing, we will provide reasonable assistance with data subject requests, security incidents, and compliance assessments where required by applicable law.",
          "At the end of the service, we will return or delete personal data in line with the institution’s instructions and our documented retention practices, unless a longer retention period is required by law.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security Policy",
    effectiveDate: "1 January 2025",
    sections: [
      {
        title: "Security Programme",
        paragraphs: [
          "eLearning maintains a security programme designed to protect the confidentiality, integrity, and availability of the platform and the information it processes. The programme is reviewed regularly as our services and risk profile evolve.",
          "Security responsibilities are assigned across engineering, operations, and leadership teams, with clear escalation paths for material incidents.",
        ],
      },
      {
        title: "Access Controls",
        paragraphs: [
          "Access to production systems and customer data is limited to authorised personnel with a legitimate business need. We use least-privilege access, role-based permissions, and periodic reviews to reduce unnecessary access.",
          "Institutions can manage roles and permissions for their users within the platform and should regularly review account access.",
        ],
      },
      {
        title: "Infrastructure and Encryption",
        paragraphs: [
          "Data is encrypted in transit using modern TLS protocols and protected at rest using industry-standard encryption. We maintain backups and monitoring controls to support availability and recovery.",
          "We assess infrastructure changes for security impact and apply security updates according to the severity and nature of the risk.",
        ],
      },
      {
        title: "Incident Response",
        paragraphs: [
          "We maintain procedures for identifying, containing, investigating, and recovering from security incidents. Where an incident affects an institution’s data, we will provide timely information to support its response obligations.",
          "We use lessons learned from incidents and exercises to improve our controls and response processes.",
        ],
      },
    ],
  },
];

export const privacyPolicy = legalPolicies[0];
