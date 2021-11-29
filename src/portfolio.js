/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Zeeshan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Zeeshan Ashraf Portfolio",
    type: "website",
    url: "https://github.com/MuhammadZeeshanAshraf",
  },
};

//Home Page
const greeting = {
  title: "Zeeshan Ashraf",
  logo_name: "Zeeshan Ashraf",
  nickname: "Software Engineer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "https://github.com/MuhammadZeeshanAshraf",
  portfolio_repository: "https://github.com/MuhammadZeeshanAshraf",
  githubProfile: "https://github.com/MuhammadZeeshanAshraf",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/MuhammadZeeshanAshraf",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zeeshan-ashraf-3279a6168/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:cs16b633@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.udemy.com/user/muhammad-zeeshan-ashraf-5/",
    },
    {
      siteName: "Pluralsight",
      iconifyClassname: "simple-icons:pluralsight",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.pluralsight.com/?exp=3",
    },
    {
      siteName: "Linkedin",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.linkedin.com/in/zeeshan-ashraf-3279a6168/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UET Lahore | University of Engineering and Technology",
      subtitle: "BSc Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "UET Lahore",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.uet.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Scrum Fundamentals Certified (SFC)",
      subtitle: "Scrum Fundamentals Certified (SFC)",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MuhammadZeeshanAshraf-827651.pdf",
      alt_name: "Scrum Fundamentals Certified (SFC)",
      color_code: "#8C151599",
    },
    {
      title: "Git Master",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.pluralsight.com/courses/how-git-works",
      alt_name: "Git Master",
      color_code: "#00000099",
    },
    {
      title: "The Git & GitHub Bootcamp",
      subtitle: "The Git & GitHub Bootcamp",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-58f89d88-6662-4fb9-91c7-2a33de7b1c14/",
      alt_name: "The Git & GitHub Bootcamp",
      color_code: "#0C9D5899",
    },
    {
      title: "Micro Frontend",
      subtitle: "Micro Frontend",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d7ca6e39-2eb9-46f2-91f2-8046fa3249cc/",
      alt_name: "Micro Frontend",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "An undergraduate student with software development capabilities. A productive team player, able to work with deadlines and targets.Seeking an opportunity to do experience from your well esteemed organization to enhance my professional expertise.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "GoSaaS Lab",
          company_url: "https://www.gosaas.io/",
          logo_path: "muffito_logo.png",
          duration: "Nov 2020 - Present",
          location: "Lahore, Pakistan",
          description:
            "• Enhancements and support of GoSaaS's different products.• Understand the business requirements and their implementation / development.• Architecting and development of new products.• Web based applications along with complex databases.• Deployment of various service and CI / CD pipeline configuration.• Working ETL based migration projects.• Development of service for integration with Oracle cloud and agile PLM.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "Jeux Developers",
          company_url: "https://www.linkedin.com/company/jeux-developers/",
          logo_path: "muffito_logo.png",
          duration: "Jul 2020 - Nov 2020",
          location: "Lahore, Pakistan",
          description:
            "• Analyzed user interface and design conventions.• Professionally completed given tasks on time.• Responsible for development of all application components and UI resources.• Worked on various e - commerce & other kinds of apps.• Contributed to the full mobile application development lifecycle from planning, requirement gathering, development, testing and launching on Google play store for beta testing.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Android Developer",
          company: "Delhivery Pvt. Ltd.",
          company_url: "Al-Khawarizmi Institute of Computer Science (KICS)",
          logo_path: "delhivery_logo.png",
          duration: "Jan 2020 - Jul 2020",
          location: "Lahore, Pakistan",
          description:
            "I worked on different technological platforms such as Android SDK, Cloud (Google Firebase), Google Maps, Web APIs, volley/Retrofit. My responsibilities here were to support the development team in creating mobile-oriented applications from scratch, modifying the existing ones, optimizing code, updating Front end UI. Project on which I worked: Teeela an ecommerce app(https://play.google.com/store/apps/details?id=com.teeelamob) Yelow Taxi Driver app (https://play.google.com/store/apps/details?id=com.yelowtaxi.driver)",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
