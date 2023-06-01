import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        slug: "pmd-id",
        title: "PMD.ID Website",
        image: "/project-1.png",
        description: "Company profile site for PMD.ID",
        developed: "2023",
        tech: ["Laravel", "Bootstrap"],
        demo: "",
      },
      {
        slug: "unitrend",
        title: "Unitrend",
        image: "/project-2.png",
        description: "Data-driven political information site",
        developed: "2023",
        tech: ["Laravel", "Bootstrap"],
        demo: "https://unitrend.id",
      },
      {
        slug: "scheduling-content",
        title: "Scheduling Content",
        image: "/project-3.png",
        description: "Scheduling content site for social media",
        developed: "2022",
        tech: ["Laravel", "Bootstrap"],
        demo: "https://sc.admasolusi.space",
      },
    ],
  }),
});
