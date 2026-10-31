import type { Tool } from "../components/ui/ToolTile";

// Add your exports in src/assets/tools/ and src/assets/work/, then uncomment:
// import figma from "../assets/tools/figma.png";
// import xd from "../assets/tools/xd.png";
// import canva from "../assets/tools/canva.png";
// import chatgpt from "../assets/tools/chatgpt.png";
// import claude from "../assets/tools/claude.png";
// import healthianCover from "../assets/work/healthian.png";
// import telegramCover from "../assets/work/telegram.png";

const figma: Tool = { name: "Figma" /* , icon: figma */ };
const xd: Tool = { name: "Adobe XD" };
const canva: Tool = { name: "Canva" };
const chatgpt: Tool = { name: "ChatGPT" };
const claude: Tool = { name: "Claude" };

export type Project = {
  id: string;
  tag: string;
  tagVariant: "white" | "pink";
  title: string;
  description: string;
  cover?: string;
  designTools: Tool[];
  aiTools: Tool[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "healthian",
    tag: "UI/UX Design",
    tagVariant: "white",
    title: "Healthian App",
    description:
      "Healthian lets users book services like blood tests from home, but the app was packed with ads and clutter, so it felt like it was selling to you instead of helping you. I redesigned the home screen as a trust-first experience: less noise, lower cognitive load, and a calmer layout that gives users a sense of relief the moment they open it.",
    // cover: healthianCover,
    designTools: [figma, xd, canva],
    aiTools: [chatgpt, claude],
    href: "#",
  },
  {
    id: "telegram",
    tag: "UI/UX Design",
    tagVariant: "pink",
    title: "Telegram Redesign",
    description:
      "A UX-focused redesign of Telegram that started with finding usability gaps in the existing app. I replaced the tiny search icon with a prominent search bar at the top, and moved key sections out of the hidden side drawer into a bottom navigation bar (Channels, Chats, Contacts, Saved). The result is a clearer visual hierarchy and faster one-tap access, with all of Telegram’s core functionality kept intact.",
    // cover: telegramCover,
    designTools: [figma, canva],
    aiTools: [claude],
    href: "#",
  },
];