export const resume = {
  name: "Rumaisha Qadeer",
  role: "UI/UX Designer",
  pdf: "/Rumaisha_Qadeer_Resume.pdf", // lives in /public (see step 3)

  contacts: [
    { label: "rumaishaqadeer@gmail.com", href: "mailto:rumaishaqadeer@gmail.com" },
    { label: "+91-7238029774", href: "tel:+917238029774" },
    { label: "linkedin.com/in/rumaishaqadeer02", href: "https://linkedin.com/in/rumaishaqadeer02" },
    { label: "behance.net/rumaishaqadeer", href: "https://behance.net/rumaishaqadeer" },
    { label: "github.com/Rumaisha02/", href: "https://github.com/Rumaisha02/" },
  ],

  education: [
    {
      school: "Babu Banarasi Das University",
      detail: "B.Tech, Computer Science and Engineering | GPA: 8.18/10.0",
      meta: "Lucknow, UP · Expected Graduation July 2027",
    },
  ],

  experience: [
    {
      title: "UI/UX Design Intern",
      org: "Kraftors AI&R . Lucknow . UP . (On-site)",
      dates: "July 2026 - September 2026",
      bullets: [
        "Working on-site under the UI/UX lead at a 25–30 person startup, auditing existing product websites to identify usability gaps.",
        "Making direct design alterations to live interfaces, creating UI mockups and demo videos for live project and turning audit findings into implemented UI changes.",
      ],
    },
  ],

  projects: [
    {
      title: "Healthians App Home Screen Redesign | Figma",
      linkLabel: "https://shorturl.at/vg6JH",
      href: "https://www.behance.net/gallery/251231291/Healthian-App-Redesign",
      bullets: [
        "Identified a structural mismatch in the existing home screen, persuasion-first layout applied to a trust-sensitive health context, creating cognitive overload for already anxious users.",
        "Restructured information architecture by consolidating excess category scrolls, repositioning trust signals above the fold, and establishing a strict brand/neutral/accent color system.",
        "Refined overall visual hierarchy and layout to create a cleaner, more scannable experience.",
      ],
    },
    {
      title: "Telegram Mobile Navigation Redesign",
      linkLabel: "https://shorturl.at/kyqUj",
      href: "https://www.behance.net/gallery/244538923/Redesigning-Telegram-A-UIUX-Case%20Study",
      bullets: [
        "Replaced hamburger menu with a persistent bottom navigation bar, reducing cognitive load and improving one handed usability.",
        "Designed 20+ reusable component library in Figma maintaining brand consistency and a uniform design system across all screens.",
        "Delivered high-fidelity prototypes with interaction flows to simulate real user journeys and validate design decisions",
      ],
    },
  ],

  // **double asterisks** = bold
  achievements: [
    "**Beep School UX Hackathon**: Got shortlisted in top 15, advanced to the final Stage 2 (Visual Design round), earned LinkedIn-certified participation certificate.",
    "**Hackathons**: 2nd place in “**Vibe designing Hackathon**” organized by college and participated in multiple tech and design sprints organized by different organizations.",
    "**Volunteering**: Created digital posters, social media graphics, and web mockups for community events as **design volunteer** at **Google Developer groups** Lucknow. Learned to balance brand consistency with creative freedom while meeting deadlines",
  ],

  skills: [
    "**Design Tools:** Figma (Wireframing, Prototyping, Design Systems), Adobe XD, Adobe Illustrator, Canva",
    "**Design Process:** Design Thinking, User Flows, Information Architecture, Iterative Design, Mobile-First & Responsive Design, Micro-interactions",
    "**UX Research:** UX Audits, Usability Analysis, Usability Testing, User Behavior Analysis, User Empathy",
    "**Soft Skills:** Storytelling, Presentation, Cross-functional Collaboration, Creativity, Rapid Iteration Work",
  ],
};

export const email = "rumaishaqadeer@gmail.com";

export const socials = [
  { name: "instagram", href: "https://www.instagram.com/theclownfaced_rumi/" }, // put your real handle
  { name: "linkedin", href: "https://linkedin.com/in/rumaishaqadeer02" },
  { name: "behance", href: "https://behance.net/rumaishaqadeer" },
] as const;