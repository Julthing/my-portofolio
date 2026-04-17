/**
 * lib/projects.js
 * Single source of truth for all project data.
 * Update this file to add/edit projects across the whole site.
 */

export const projects = [
  {
    id: 1,
    slug: "stiinfo",
    title: "STIINFO",
    subtitle: "HIV Information Website",
    description:
      "A website about HIV/AIDS developed for the Faculty of Health at Universitas Muhammadiyah Mataram, commissioned by a lecturer from the Sistem dan Teknologi Informasi (STI) department. Features responsive design, modern UI, and streamlined health information content management.",
    longDescription:
      "STIINFO is a health information platform developed for the Faculty of Health at Universitas Muhammadiyah Mataram. This project was assigned by a lecturer from the Sistem dan Teknologi Informasi (STI) department. The site serves as a public educational resource on HIV/AIDS — providing prevention information, statistics, and health resources in a clean, accessible interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://stiinfo.id/",
    githubUrl: "#",
    image: "/images/projects/stiinfo.png",
    icon: "solar:monitor-bold-duotone",
    category: "web",
    client: "Fakultas Ilmu Kesehatan, Universitas Muhammadiyah Mataram",
    year: "2024",
  },
  {
    id: 2,
    slug: "tekadesa",
    title: "TekaDesa",
    subtitle: "Village Information System",
    description:
      "Village Information System (Sistem Informasi Desa) built during my internship at PT Begawe Inti Media as a Frontend Developer. Designed to provide fast and efficient services for village administration and management.",
    longDescription:
      "TekaDesa is a comprehensive Village Information System developed during my internship at PT Begawe Inti Media. As part of the frontend team, I was responsible for building and refining the user interface, translating design concepts into interactive, responsive components, and ensuring a smooth experience for village administrators and citizens alike.",
    tech: ["Vue.js", "Laravel", "MySQL"],
    liveUrl: "https://demo.tekadesa.com/",
    githubUrl: "#",
    image: "/images/projects/tekadesa.png",
    icon: "solar:buildings-bold-duotone",
    category: "web",
    client: "PT Begawe Inti Media (Internship)",
    year: "2024",
  },
  {
    id: 3,
    slug: "ml-web-integration",
    title: "ML Web Integration",
    subtitle: "Undergraduate Thesis",
    description:
      "Undergraduate thesis exploring the integration of machine learning models into web-based systems, building a platform that is visually appealing, interactive, and technologically advanced.",
    longDescription:
      "This project is my undergraduate thesis at Universitas Muhammadiyah Mataram, exploring the intersection of machine learning and web development. The system integrates trained ML models into a web-based interface, enabling real-time predictions and analysis within a user-friendly platform.",
    tech: ["Python", "Laravel", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    image: null,
    icon: "solar:chart-bold-duotone",
    category: "research",
    client: "Universitas Muhammadiyah Mataram",
    year: "2025",
  },
];

export const categories = [
  { id: "all", label: "All", icon: "solar:widget-bold-duotone" },
  { id: "web", label: "Web Apps", icon: "solar:monitor-bold-duotone" },
  { id: "research", label: "Research", icon: "solar:document-bold-duotone" },
];
