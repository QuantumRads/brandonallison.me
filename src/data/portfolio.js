// Portfolio content: current role from Brandon's update; earlier work from his resume.
export const profile = {
  firstName: 'Brandon',
  lastName: 'Allison',
  handle: 'QuantumRads',
  domain: 'brandonallison.me',
  github: 'https://github.com/QuantumRads',
  title: 'NetOps Engineer',
  company: 'Optara',
  intro: 'I design networks, manage Microsoft cloud environments, and troubleshoot the systems people rely on.',
  about: "I'm a NetOps Engineer at Optara, a managed service provider with a four-person technical team. My work spans client troubleshooting, local network design, and internal systems administration.",
  aboutNote: 'I handle Microsoft 365, Intune, Azure virtual machines, security, deployments, project planning, and migrations. I also own our SOPs and internal documentation, helping make day-to-day operations easier to support.',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const capabilities = [
  {
    id: 'networks', icon: 'network', title: 'Network design & operations',
    description: 'Designing local networks and troubleshooting client connectivity, backed by hands-on networking and VLAN experience.',
    technologies: ['LAN design', 'Troubleshooting', 'VLANs'],
  },
  {
    id: 'cloud', icon: 'cloud', title: 'Microsoft cloud',
    description: 'Microsoft 365 administration, deployments, and migrations, alongside Azure virtual machine administration.',
    technologies: ['Microsoft 365', 'Azure VMs', 'Migrations'],
  },
  {
    id: 'endpoints', icon: 'shield', title: 'Endpoints & security',
    description: 'Intune administration, device deployments, and security work across the systems I support.',
    technologies: ['Intune', 'Device deployments', 'Security'],
  },
  {
    id: 'systems', icon: 'server', title: 'Systems administration',
    description: 'Administering internal systems, with an earlier foundation in Active Directory, virtualization, and Windows, Linux, and Apple environments.',
    technologies: ['Active Directory', 'VMware', 'Hyper-V'],
  },
  {
    id: 'delivery', icon: 'plan', title: 'Projects & migrations',
    description: 'Planning infrastructure changes, deployments, and migrations, then carrying the work through implementation.',
    technologies: ['Project planning', 'Deployments', 'Migrations'],
  },
  {
    id: 'documentation', icon: 'book', title: 'SOPs & documentation',
    description: 'Owning standard operating procedures and internal documentation for a small technical team.',
    technologies: ['SOPs', 'Internal documentation', 'Operations'],
  },
];

export const experience = [
  {
    id: 'optara', title: 'NetOps Engineer', company: 'Optara', period: 'Current role', current: true,
    summary: 'A broad engineering role within a four-person MSP technical team, covering client environments and internal operations.',
    responsibilities: [
      'Troubleshoot client issues and design local networks.',
      'Administer Microsoft 365, Intune, and Azure virtual machines.',
      'Handle security, deployments, project planning, and migrations.',
      'Manage internal systems administration, SOPs, and technical documentation.',
    ],
  },
  {
    id: 'vp', title: 'System / Network Administrator', company: 'VP Demand Creation Services', period: 'Earlier experience', current: false,
    summary: 'Supported end users and maintained the systems and infrastructure behind the business.',
    responsibilities: [
      'Handled support tickets, system upgrades, and infrastructure maintenance.',
      'Worked on network design and an Office 365 hybrid migration.',
      'Created support documentation.',
    ],
  },
  {
    id: 'tba', title: 'IT Intern', company: 'TBA Credit Union', period: 'February – June 2015', current: false,
    summary: 'Early hands-on experience with virtualization, networking, and technical documentation.',
    responsibilities: ['Set up a VMware lab environment, configured VLANs, and documented software configurations.'],
  },
];

export const projects = [
  {
    id: 'mail-migration', icon: 'cloud', title: 'Exchange to Office 365', category: 'Migration', kind: 'Earlier professional work',
    metric: '200+', metricLabel: 'mailboxes migrated',
    description: 'Migrated more than 200 mailboxes from Exchange 2010 to Office 365 using a hybrid configuration.',
    technologies: ['Exchange 2010', 'Office 365', 'Hybrid migration'],
  },
  {
    id: 'vmware-upgrade', icon: 'server', title: 'VMware platform upgrade', category: 'Virtualization', kind: 'Earlier professional work',
    metric: '3', metricLabel: 'ESXi hosts · 50+ virtual machines',
    description: 'Upgraded VMware 5.5 to 6.5 across three ESXi hosts with more than 50 virtual machines, completing the upgrade without downtime.',
    technologies: ['VMware', 'ESXi', 'Virtual machines'],
  },
  {
    id: 'ad-restructure', icon: 'network', title: 'Active Directory restructure', category: 'Identity & administration', kind: 'Earlier professional work',
    metric: 'AD', metricLabel: 'organization & group policy',
    description: 'Redesigned the company-wide organizational unit structure to make Group Policy administration more efficient.',
    technologies: ['Active Directory', 'Organizational units', 'Group Policy'],
  },
  {
    id: 'remote-access', icon: 'server', title: 'Remote application access', category: 'Remote access', kind: 'Earlier professional work',
    metric: 'ACCESS', metricLabel: 'terminal server & remote access',
    description: 'Configured a terminal server with Parallels so users could access it from outside the company.',
    technologies: ['Parallels', 'Terminal server', 'Remote access'],
  },
  {
    id: 'home-lab', icon: 'code', title: 'Infrastructure home lab', category: 'Personal lab', kind: 'Personal project',
    metric: 'LAB', metricLabel: 'a space to build & experiment',
    description: 'Built a Hyper-V lab with Active Directory, IIS and Apache, SQL, Exchange, Windows Deployment Services, and Network Policy Server.',
    technologies: ['Hyper-V', 'Windows Server', 'AD · SQL · WDS · NPS'],
  },
  {
    id: 'portfolio', icon: 'code', title: 'This personal portfolio', category: 'Website', kind: 'Current personal project',
    metric: 'WEB', metricLabel: 'a personal home for my work',
    description: 'A React portfolio for my network, cloud, and systems experience, packaged so it can also be opened directly as a local HTML file.',
    technologies: ['React', 'Vite', 'CSS'],
    href: 'https://github.com/QuantumRads/brandonallison.me',
  },
];

export const education = {
  school: 'Northwestern Michigan College',
  degree: 'Associate of Applied Science',
  program: 'CIT Infrastructure',
  completed: '2018',
};

// Historical earned dates from the resume; these do not imply current status.
// The Server Administration year is incomplete in the source, so it is omitted.
export const certifications = [
  { id: 'comptia-a-plus', issuer: 'CompTIA', title: 'CompTIA A+', earned: '2015' },
  { id: 'comptia-network-plus', issuer: 'CompTIA', title: 'CompTIA Network+', earned: '2017' },
  { id: 'comptia-security-plus', issuer: 'CompTIA', title: 'CompTIA Security+', earned: '2018' },
  { id: 'mta-networking', issuer: 'Microsoft', title: 'MTA: Networking Fundamentals', earned: '2016' },
  { id: 'mta-windows', issuer: 'Microsoft', title: 'MTA: Windows OS Fundamentals', earned: '2017' },
  { id: 'mta-server', issuer: 'Microsoft', title: 'MTA: Server Administration Fundamentals', earned: null },
  { id: 'mta-security', issuer: 'Microsoft', title: 'MTA: Security Fundamentals', earned: '2017' },
];
