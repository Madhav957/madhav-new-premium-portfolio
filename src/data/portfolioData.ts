import { Project, SkillCategory, JourneyMilestone, ArticlePreview, ProblemSolvingData } from '../types';

export const personalInfo = {
  name: 'Madhav Jayanti',
  role: 'Computer Science Student & Aspiring Cloud Engineer',
  eyebrow: 'COMPUTER SCIENCE · CLOUD ENGINEERING',
  heroHeading: 'Building thoughtful\nsoftware for the cloud.',
  heroHighlight: 'for the cloud.',
  heroDescription:
    "I'm Madhav Jayanti, a Computer Science student exploring cloud infrastructure, automation, and AI-powered developer tools. I turn what I learn into practical projects.",
  aboutHeading: 'Curious by nature.\nAn engineer in progress.',
  aboutBody: [
    "I'm a Computer Science student interested in understanding how software systems work beneath the surface. My learning spans cloud infrastructure, networking, Linux, backend development, and automation.",
    "Most of what I know didn't come from a syllabus. It came from spinning up EC2 instances, automating operations with Python and Boto3 scripts, and reading IAM policy errors until they finally made sense.",
    "I enjoy turning concepts into practical projects, documenting what I learn, and continuously improving the way I build."
  ],
  availability: 'Open to Internship Opportunities',
  email: 'jssmadhav20@gmail.com',
  githubUrl: 'https://github.com/Madhav957',
  linkedinUrl: 'https://www.linkedin.com/in/madhav-jayanti-35ab46379/',
  leetcodeUrl: 'https://leetcode.com/u/Mdhv20/',
  resumeUrl: '/Madhav_Jayanti_Resume.pdf',
  productionDomain: 'https://madhavjayanti.dev',
};

export const problemSolvingData: ProblemSolvingData = {
  problemsSolved: 122,
  primaryLanguage: 'Java',
  leetcodeUrl: 'https://leetcode.com/u/Mdhv20/',
  description:
    'I strengthen my problem-solving skills through consistent practice with Data Structures and Algorithms, focusing on efficient solutions, edge cases, and algorithmic complexity. Java is my primary language for DSA practice.',
  focusAreas: [
    {
      title: 'Algorithmic Thinking & Decomposition',
      description:
        'Deconstructing complex problem statements into modular steps, identifying edge cases, and selecting optimal data structures.',
    },
    {
      title: 'Efficiency & Complexity Analysis',
      description:
        'Evaluating time and space complexity tradeoffs (Big-O) to write performant code suitable for high-throughput backends.',
    },
    {
      title: 'Cloud & Backend Readiness',
      description:
        'Applying strong DSA foundations to real-world cloud services, in-memory structures, and distributed backend logic.',
    },
  ],
};

export const flagshipProject: Project = {
  id: 'cloudpilot-ai',
  name: 'CloudPilot AI',
  headline: 'Cloud infrastructure.\nA more natural interface.',
  category: 'AI + Cloud Infrastructure',
  summary:
    'Translates natural-language infrastructure requests into verifiable Terraform plans and architecture diagrams, with mandatory human review before provisioning.',
  description:
    'CloudPilot AI explores a simpler way to work with cloud infrastructure: describe the outcome you need, review the proposed configuration, and understand the infrastructure before deployment.',
  problem:
    'Writing infrastructure-as-code from scratch is error-prone, requiring deep syntax familiarity and steep configuration overhead. Developers frequently misconfigure IAM roles, open public CIDR blocks by accident, or spend hours stitching together boilerplate Terraform templates.',
  solution:
    'CloudPilot AI parses user architectural intent using guided language models, checks design patterns against cloud security best practices (e.g., private subnets, security group segregation), generates clean HCL/Terraform declarations, and presents a dry-run plan requiring explicit human review before any apply phase.',
  architectureNotes: [
    'Intent Translation: Maps natural language requests to AWS resource topologies',
    'Rule-Based Safety Verification: Enforces principle of least privilege & private VPC isolation',
    'Human-in-the-Loop Review: Visual change diff and dry-run execution plan before provisioning',
    'Modular HCL Output: Produces clean, readable, reusable Terraform configurations'
  ],
  technologies: ['Python', 'FastAPI', 'Terraform', 'AWS Architecture', 'LangChain / LLM', 'Docker'],
  featured: true,
  githubUrl: 'https://github.com/Madhav957/Cloudpilot-AI',
  liveDemoUrl: '', // Open for deployment
  statusLabel: 'Active Prototype & Exploration',
  badges: ['Flagship Project', 'Infrastructure as Code', 'Human-in-the-Loop'],
  workflowSteps: [
    {
      title: '1. Natural Language Intent',
      description: 'Describe what you need in plain English without looking up syntax.',
      details: 'Example: "Create a private application environment with a VPC, public load balancer, private application subnet, and restricted network access."'
    },
    {
      title: '2. Architecture Topology',
      description: 'The engine proposes a visual layout of resources and relationships.',
      details: 'VPC (10.0.0.0/16) -> 2 Public Subnets (ALB) -> 2 Private Subnets (App) -> NAT Gateway'
    },
    {
      title: '3. Terraform HCL Plan',
      description: 'Clean, auditable infrastructure code generated according to AWS best practices.',
      details: 'resource "aws_vpc" "main" { cidr_block = "10.0.0.0/16" ... }'
    },
    {
      title: '4. Human Review Gate',
      description: 'Every resource addition, modification, and permission must be verified and approved.',
      details: 'Strict safety barrier: no uninspected provisioning or blind execution.'
    }
  ]
};

export const selectedProjects: Project[] = [
  flagshipProject,
  {
    id: 'cybershield',
    name: 'CyberShield',
    headline: 'Incident tracking and security telemetry dashboard.',
    category: 'Cybersecurity Analytics',
    summary:
      'A cybersecurity analytics platform with a MySQL-backed data store and web interface for tracking security events, incident severity, and access anomalies.',
    description:
      'CyberShield was built to address the difficulty of monitoring disparate security telemetry. It ingests access records and event logs into a structured relational schema, calculating severity scores and visualizing trends in real time.',
    problem:
      'Raw system security logs are unstructured, noisy, and difficult to query quickly during an active security incident.',
    solution:
      'Developed a normalized relational schema in MySQL to store timestamped security logs, paired with analytical queries that aggregate threat classifications and alert indicators across an intuitive administrative dashboard.',
    architectureNotes: [
      'Relational Database: Normalized MySQL tables for incident logs, IP origins, and severity indices',
      'Telemetry Aggregation: Queries to track peak intrusion attempts and unusual authentication spikes',
      'Web Dashboard: Responsive UI for filtering incidents by category, timestamp, and severity rating'
    ],
    technologies: ['MySQL', 'Python', 'SQL Analytics', 'JavaScript', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/Madhav957',
    liveDemoUrl: '',
    statusLabel: 'Completed Academic Project',
    badges: ['Database Design', 'Security Telemetry', 'MySQL']
  },
  {
    id: 'aws-automation',
    name: 'AWS Cloud Resource Manager & FinOps',
    headline: 'Programmatic AWS infrastructure management and cost optimization.',
    category: 'Cloud Automation',
    summary:
      'Python and Boto3 automation scripts to manage AWS S3, EC2, and IAM operations, paired with a serverless FinOps optimizer to detect and flag idle resources.',
    description:
      'A comprehensive CLI and serverless automation suite replacing manual AWS Management Console clicks with repeatable, scripted operations. Includes an automated cost auditor that flags unattached EBS volumes and idle EC2 instances.',
    problem:
      'Manual console operations in cloud environments lead to configuration drift, human mistakes in permission setups, and runaway cloud costs from neglected testing instances.',
    solution:
      'Wrote scripted lifecycle managers using Boto3 for instant provisioning and cleanup of S3 buckets and EC2 nodes. Built Lambda routines scheduled via Amazon EventBridge to automatically alert administrators when resource thresholds are exceeded.',
    architectureNotes: [
      'AWS SDK Integration: Python Boto3 scripts for repeatable resource lifecycle management',
      'Serverless Execution: AWS Lambda functions triggered on schedule via Amazon EventBridge',
      'Alerting Pipeline: Automated notifications delivered via Amazon SNS when orphan resources are found',
      'IAM Security: Scoped execution roles adhering to least-privilege principles'
    ],
    technologies: ['Python', 'Boto3', 'AWS Lambda', 'Amazon S3', 'Amazon EC2', 'EventBridge', 'CloudWatch'],
    githubUrl: 'https://github.com/Madhav957',
    liveDemoUrl: '',
    statusLabel: 'Production Tested Scripts',
    badges: ['AWS Boto3', 'Serverless', 'FinOps']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    description: 'Practical infrastructure building, resource automation, and cloud architecture patterns.',
    skills: [
      { name: 'AWS (EC2, S3, IAM, Lambda, VPC, CloudWatch)', context: 'Hands-on projects & scripts' },
      { name: 'Terraform', context: 'Infrastructure as Code exploration' },
      { name: 'Linux', context: 'CLI, bash scripting, server administration' },
      { name: 'FinOps / Cost Optimization', context: 'Idle resource detection' },
    ]
  },
  {
    title: 'Programming & Backend',
    description: 'Building APIs, relational schemas, and automation tooling with type safety and reliability.',
    skills: [
      { name: 'Python', context: 'Primary scripting, Boto3, backend APIs' },
      { name: 'Java', context: 'Object-oriented systems & CS coursework' },
      { name: 'SQL & Relational Databases', context: 'MySQL, schema design, data querying' },
      { name: 'FastAPI', context: 'RESTful API contracts & validation' },
      { name: 'C', context: 'Low-level systems and memory foundations' },
    ]
  },
  {
    title: 'Networking & Developer Tools',
    description: 'Fundamental protocols, version control, and developer workflows.',
    skills: [
      { name: 'Computer Networking', context: 'Subnets, CIDR, routing, DNS, HTTP/HTTPS' },
      { name: 'Git & GitHub', context: 'Branch workflows, pull requests, version control' },
      { name: 'Docker', context: 'Containerization basics & local runtimes' },
      { name: 'VS Code & CLI Workflows', context: 'Terminal-first development setup' },
    ]
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    phase: 'Completed',
    title: 'Foundations & Cloud Essentials',
    items: [
      'AWS Cloud Practitioner Essentials completed',
      'Programmatic Amazon S3 bucket & object management with Python Boto3',
      'Automated EC2 instance lifecycle routines (launch, stop, reboot, terminate)',
      'Relational database architecture & incident tracking with MySQL (CyberShield)'
    ]
  },
  {
    phase: 'Currently Exploring',
    title: 'Advanced AWS & Automation Tooling',
    items: [
      'Designing CloudPilot AI: Natural language to infrastructure configurations',
      'IAM fine-grained permissions, roles, and least-privilege policies',
      'Event-driven serverless architectures with AWS Lambda, EventBridge & SNS',
      'CloudWatch monitoring metrics, log aggregation, and alarm dispatching'
    ]
  },
  {
    phase: 'Up Next',
    title: 'Production Infrastructure & Scale',
    items: [
      'AWS Certified Solutions Architect – Associate preparation',
      'Comprehensive Infrastructure-as-Code workflows with Terraform & OpenTofu',
      'Container orchestration fundamentals with Docker & Kubernetes',
      'Microservices backend development with FastAPI & PostgreSQL'
    ]
  }
];

export const engineeringArticles: ArticlePreview[] = [
  {
    title: 'Why Infrastructure as Code Needs Human-in-the-Loop Review',
    topic: 'Cloud Architecture & Tooling',
    date: 'Upcoming',
    description:
      'Reflections from building CloudPilot AI on why autonomous cloud provisioning must prioritize preview stages and safety barriers over raw speed.',
    isPublished: false,
  },
  {
    title: 'Writing Predictable AWS Automation Scripts with Boto3',
    topic: 'AWS & Python',
    date: 'Upcoming',
    description:
      'Techniques for handling AWS API throttling, pagination, and IAM permission gotchas when writing automated cloud maintenance routines.',
    isPublished: false,
  },
  {
    title: 'Demystifying AWS Networking: VPCs, Subnets, and Route Tables',
    topic: 'Computer Networking',
    date: 'Upcoming',
    description:
      'A student engineer’s guide to understanding packet flow, private isolation, and NAT gateways in modern cloud environments.',
    isPublished: false,
  }
];
