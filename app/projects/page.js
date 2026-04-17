import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AllProjects from "@/app/projects/_components/AllProjects";

export const metadata = {
  title: "All Projects — Zuldika Putra",
  description: "Full portfolio of web development projects by Zuldika Putra.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <AllProjects />
      </main>
      <Footer />
    </>
  );
}
