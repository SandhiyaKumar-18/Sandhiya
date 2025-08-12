import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Award, GraduationCap, Code, Globe, Github, Linkedin, Mail, Shield, Zap, Terminal, GitBranch, Cloud, Server, Menu, X } from 'lucide-react';
import './Portfolio.css'; // Importing the new CSS file
import './image.png'

// Main App component that renders all sections of the portfolio.
export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Intro />
      <div className="main-content">
        <Timeline />
        <Skills />
        <Projects />
        <Certifications />
      </div>
      <Contact />
      {/* --------------------------------------- */}
    <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
    <div class="bubble x11"></div>
    <div class="bubble x12"></div>
    <div class="bubble x13"></div>
    <div class="bubble x14"></div>
    <div class="bubble x15"></div>
    <div class="bubble x16"></div>
    <div class="bubble x17"></div>
    <div class="bubble x18"></div>
    <div class="bubble x19"></div>
    <div class="bubble x20"></div>
    <div class="bubble x21"></div>
    <div class="bubble x22"></div>
    <div class="bubble x23"></div>
    <div class="bubble x24"></div>
    <div class="bubble x25"></div>
</div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Typewriter Animation Component
// ---------------------------------------------------------------------

const Typewriter = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, delay, text]);

  return (
    <div className="typewriter-text">
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

// ---------------------------------------------------------------------
// Navigation Bar Component
// ---------------------------------------------------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#experience'); // State to track the active link
  
  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const underlineClasses = (href) => `nav-link ${activeLink === href ? 'active' : ''}`;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">Sandhiya K</a>
        <div className="navbar-desktop-menu">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={underlineClasses(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-button"
        >
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>

      <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="navbar-mobile-items">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={`mobile-link ${activeLink === item.href ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// ---------------------------------------------------------------------
// Intro Section
// ---------------------------------------------------------------------
const Intro = () => (
  <header className="intro-header">
    <div className="intro-content-wrapper">
      <div className="intro-text-column">
        <Typewriter text="Hello...!" />
        <h1 className="intro-title">Sandhiya K</h1>
        <p className="intro-subtitle">Cybersecurity Engineer </p>
        <p className="intro-subtitle">Love for learning is endless!</p>
        
        <div className="intro-social-links">
          <a href="https://www.linkedin.com/in/sandhiya-kumar18/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin className="icon" />
          </a>
          <a href="https://github.com/SandhiyaKumar-18" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github className="icon" />
          </a>
          <a href="mailto:ksandhiya484@gmail.com" className="social-link">
            <Mail className="icon" />
          </a>
        </div>
        
        <div className="intro-actions">
          <a href="#projects" className="action-button">
            View Projects
          </a>
          <a href="#contact" className="action-button">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="intro-image-column">
        <img
          src={require('./image.png')}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  </header>
);

// ---------------------------------------------------------------------
// Timeline Section
// ---------------------------------------------------------------------

const experienceData = [
  {
    id: 1,
    title: 'Cyber Security Engineer',
    company: 'Cognizant',
    date: 'Sep 2023 - Present',
    description: 'Cybersecurity Engineer specializing in IAM, IGA, and PAM with expertise in Okta, RBAC, compliance, automation, governance, SSO/MFA, app onboarding, access reviews, API integration, and secure identity solutions aligned to Zero Trust.',
    skills: ['OKTA', 'IAM', 'IGA', 'Active Directory', 'CyberArk', 'ServiceNow', 'RBAC', 'SSO/MFA', 'API Integration', 'Automation & Workflows'],
    icon: 'briefcase',
    color: 'bg-color-1'
  },
  {
    id: 2,
    title: 'Cyber Security Intern',
    company: 'Cognizant',
    date: 'May 2023 - Sep 2023',
    description: 'Gained hands-on experience in OKTA, including SSO, MFA configuration, and Life Cycle Management.',
    skills: ['OKTA','IAM', 'Cyber Security Fundamentals', 'Networking'],
    icon: 'code',
    color: 'bg-color-2'
  },
  {
    id: 3,
    title: 'Digital Nurture Program',
    company: 'Cognizant',
    date: 'Jun 2022',
    description: 'Participated in Cognizant Digital Nurture 2.0, specializing in full-stack development with exposure to cybersecurity concepts, completing deep-skilling, coding assessments, and collaborative projects aligned with GenC Next standards and industry best practices.',
    skills: ['Cyber Security Fundamnetals', 'Java', 'SQL'],
    icon: 'award',
    color: 'bg-color-3'
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="timeline-section">
      <h2 className="section-title">My Experience</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experienceData.map((item, index) => (
          <TimelineItem key={item.id} item={item} isEven={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

const TimelineItem = ({ item, isEven }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'briefcase': return <Briefcase className="timeline-icon-svg" />;
      case 'award': return <Award className="timeline-icon-svg" />;
      case 'graduation': return <GraduationCap className="timeline-icon-svg" />;
      case 'code': return <Code className="timeline-icon-svg" />;
      default: return <Briefcase className="timeline-icon-svg" />;
    }
  };

  const getSkillBadgeColor = (index) => {
    const colors = ['skill-badge-1', 'skill-badge-2', 'skill-badge-1'];
    return colors[index % colors.length];
  }

  return (
    <div className={`timeline-item ${isEven ? 'timeline-item-left' : 'timeline-item-right'}`}>
      <div className="timeline-card">
        <div className="timeline-icon-wrapper">
          <div className={`timeline-icon-circle ${item.color}`}>
            {getIcon(item.icon)}
          </div>
        </div>
        <h3 className="timeline-card-title">{item.title}</h3>
        <h4 className="timeline-card-subtitle">{item.company}</h4>
        <div className="timeline-card-date">
          <Calendar className="timeline-date-icon" />
          <span>{item.date}</span>
        </div>
        <p className="timeline-card-description">{item.description}</p>
        <div className="timeline-skills">
          {item.skills.map((skill, index) => (
            <span key={index} className={`timeline-skill-badge ${getSkillBadgeColor(index)}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


// ---------------------------------------------------------------------
// Skills Section with Tabs and Animations
// ---------------------------------------------------------------------
const skillsData = {
  iam: ['OKTA', 'Active Directory', 'CyberArk', 'SSO', 'MFA', 'Identity Lifecycle Management', 'SailPoint IIQ', 'Microsoft Entra ID', 'Ping Identity', 'LDAP', 'Provisioning/Deprovisioning', 'Access Reviews'],
  iga: ['ServiceNow', 'SailPoint IIQ', 'Okta Workflows', 'Compliance Audits', 'Role-Based Access Control (RBAC)', 'Segregation of Duties (SoD)', 'Governance Frameworks', 'Access Reviews', 'Recertification Campaigns', 'SOX Compliance', 'GDPR Compliance', 'ITIL Processes', 'Certification Dashboards', 'Policy Enforcement'],
  cloudDevelopment: ['Python', 'Java','GCP','Azure', 'AWS','JavaScript', 'React', 'Git', 'GitHub', 'CI/CD Pipelines'],
   pam: ['CyberArk',  'Privileged Account Management', 'Password Vaulting', 'Session Monitoring', 'Privileged Session Management (PSM)', 'Access Control Policies', 'MFA for Admin Accounts', 'Least Privilege Enforcement', 'Break Glass Accounts', 'Audit & Compliance Reporting', 'Credential Rotation', 'Session Recording'],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('iam');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  }, [activeTab]);

  const getTabClasses = (tabName) => {
    return `skills-tab-button ${activeTab === tabName ? 'active' : ''}`;
  };

  const renderSkills = (skills) => {
    const getBadgeColor = (index) => {
      const colors = ['skill-badge-1', 'skill-badge-2', 'skill-badge-1'];
      return colors[index % colors.length];
    };
    return (
      <div className={`skills-grid ${isAnimating ? 'animate-fade-in-up' : ''}`}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`skills-badge ${getBadgeColor(index)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-tabs-header">
          <button onClick={() => setActiveTab('iam')} className={getTabClasses('iam')}>
            IAM
          </button>
          <button onClick={() => setActiveTab('iga')} className={getTabClasses('iga')}>
            IGA
          </button>
          <button onClick={() => setActiveTab('cloudDevelopment')} className={getTabClasses('cloudDevelopment')}>
            Cloud
          </button>
           <button onClick={() => setActiveTab('pam')} className={getTabClasses('pam')}>
            PAM
          </button>
        </div>
        <div className="skills-content">
          {activeTab === 'iam' && renderSkills(skillsData.iam)}
          {activeTab === 'iga' && renderSkills(skillsData.iga)}
          {activeTab === 'cloudDevelopment' && renderSkills(skillsData.cloudDevelopment)}
           {activeTab === 'pam' && renderSkills(skillsData.pam)}
        </div>
      </div>
    </section>
  );
};


// ---------------------------------------------------------------------
// Projects Section
// ---------------------------------------------------------------------

const projectsData = [
  {
    id: 1,
    title: 'Nutrition Anayzer',
    description: ' Developed a Nutrition Analyzer web app using Flask and CNN, classifying fruits from images and providing real-time nutritional data for fitness enthusiasts to improve dietary decisions',

    link: 'https://www.youtube.com/watch?v=rr25J_hu1L8',
    github: 'https://github.com/SandhiyaKumar-18/Nutrition-Analyzer',
     image: 'https://placehold.co/600x400/164659/e1e9ed?text=Nutrition+Analyzer',
  },
  {
    id: 2,
    title: 'Public Pulse',
    description: 'A Python script that automates the process of scanning and detecting common network vulnerabilities.',
    link: '#',
    github: '#',
    image: 'https://placehold.co/600x400/297893/e1e9ed?text=Public+Pulse'
  },
  {
    id: 3,
    title: 'DashBoard',
    description: 'The very website you are viewing! Built with React for a modern, responsive design.',
    link: '#',
    github: '#',
    image: 'https://placehold.co/600x400/5598ac/e1e9ed?text=Dashboard'
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-grid">
      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-overlay">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-actions">
        <a href={project.link} className="project-button">
          <Globe className="icon" />
          Live Demo
        </a>
        <a href={project.github} className="project-button project-github">
          <Github className="icon" />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------
// Certifications Section
// ---------------------------------------------------------------------

const certificationsData = [
  {
    id: 1,
    title: 'Google cloud Associate Cloud Engineer',
    organization: 'Google',
    date: 'Oct 2024',
    description: 'Validated expertise in deploying, managing, and securing applications and infrastructure on Google Cloud Platform',
    icon: <Award className="icon-white" />,
    color: 'bg-color-1'
  },
  {
    id: 2,
    title: 'OKTA Assement',
    organization: 'Cognizant',
    date: 'Nov 2024',
    description: 'Validated proficiency in Okta administration, application integration, and identity security best practices.',
    icon: <Award className="icon-white" />,
    color: 'bg-color-2'
  },
  {
    id: 3,
    title: 'SailPoint IdentityNow',
    organization: 'Cognizant',
    date: 'April 2025',
    description: 'Demonstrated proficiency in identity governance, access certifications, and lifecycle management using SailPoint IdentityNow..',
    icon: <Code className="icon-white" />,
    color: 'bg-color-3'
  },
];

const Certifications = () => (
  <section id="certifications" className="certifications-section">
    <h2 className="section-title">My Certifications</h2>
    <div className="certifications-grid">
      {certificationsData.map(cert => (
        <CertificationCard key={cert.id} cert={cert} />
      ))}
    </div>
  </section>
);

const CertificationCard = ({ cert }) => (
  <div className="certification-card">
    <div className="certification-card-header">
      <div className={`certification-icon-wrapper ${cert.color}`}>
        {cert.icon}
      </div>
      <div>
        <h3 className="certification-title">{cert.title}</h3>
        <p className="certification-organization">{cert.organization}</p>
      </div>
    </div>
    <p className="certification-description">{cert.description}</p>
    <div className="certification-date">
      <Calendar className="icon" />
      <span>Issued: {cert.date}</span>
    </div>
  </div>
);

// ---------------------------------------------------------------------
// Contact Section
// ---------------------------------------------------------------------
const Contact = () => (
  <footer id="contact" className="contact-footer">
    <h2 className="section-title">Get In Touch</h2>
    <p className="contact-subtitle">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
    
    <a href="mailto:ksandhiya484@gmail.com" className="email-button">
      <Mail className="icon" />
     ksandhiya484@gmail.com
    </a>

    <div className="contact-social-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <Github className="icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <Linkedin className="icon" />
      </a>
    </div>
  </footer>

  
);