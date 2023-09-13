/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muiz Siddiqui",
  title: "Hi all, I'm Muhammad Muiz Siddiqui",
  subTitle: emoji(
    "A passionate FrontEnd Software Developer 🚀 having an experience of building Web and mobile applications with JavaScript / Reactjs / Nextjs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16h2pxc3cNi99zvwOTceppbVAmaCkkyLi/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/muhammad-muiz-siddiqui-302287273/",
  github: "https://github.com/M-Muiz",
  display: true,
}

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Front End DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: false,
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "94%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Front-End Developer",
      company: "SMIT",
      companylogo: require("./assets/images/smit.png"),
      date: "November 2022 – Present",
      desc: "Almost One Year Experience of Font End Developer.",
    }
  ]
};


const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY STARTUPS PROJECTS.",
  projects: [
    {
      image: require("./assets/images/weatherText.png"),
      projectName: "Weather App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://649ddbf0fb7ef7259588b5fb--benevolent-llama-7e9f00.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/nft.png"),
      projectName: "NFT Clone",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://m-muiz.github.io/NFT-MArketPlace-LandingPage/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false 
};

// Blogs Section

const blogSection = {
  display: false 
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false 
};

// Podcast Section

const podcastSection = {
  display: false 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "0311-2884425",
  email_address: "mmuizsiddiqui@gmail.com"
};

// Twitter Section

const twitterDetails = {
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
