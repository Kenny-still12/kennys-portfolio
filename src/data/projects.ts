export type Project = {
  title: string;
  description: string; // 1-2 sentences
  tech: string[];
  year?: string;
  liveUrl?: string; // leave out to hide the link
  repoUrl?: string;
};

// Descriptions and tech come from each repo's README. Order here is the order on the page.
export const projects: Project[] = [
  {
    title: "HourMate AU",
    description:
      "A lightweight web app that helps international students in Australia track their work shifts and stay within the 48-hour fortnightly visa limit, with warnings when they get close.",
    tech: ["HTML", "CSS", "JavaScript", "Day.js"],
    year: "2026",
    liveUrl: "https://kenny-still12.github.io/HourMate_AU/",
    repoUrl: "https://github.com/Kenny-still12/HourMate_AU",
  },
  {
    title: "Gaku Registre",
    description:
      "A work and finance dashboard for international students in Australia that brings shift tracking, income and expenses, currency conversion, and study information into one place.",
    tech: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Exchange-rate API"],
    year: "2026",
    // [TODO] add liveUrl once it's deployed
    repoUrl: "https://github.com/Kenny-still12/StudentOS",
  },
  {
    title: "Weather App",
    description:
      "Search any city for its current conditions, temperature, wind, humidity, pressure, and visibility, powered by the OpenWeatherMap API.",
    tech: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
    year: "2026",
    liveUrl: "https://weather-app-henna-sigma-43.vercel.app",
    repoUrl: "https://github.com/Kenny-still12/weather-app",
  },
];
