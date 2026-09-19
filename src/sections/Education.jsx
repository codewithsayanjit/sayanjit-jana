// Importing React for building UI components
import React from "react";

// Importing motion components and scroll hooks from Framer Motion for animations
import { motion, useScroll, useTransform } from "framer-motion";

// Array of education objects containing academic details
const education = [

  {
    role: "Secondary Education",
    company: "Khanchi Gunadhar Adarsha Vidyapith",
    duration: "Jan 2022 - Jan 2023",
    description:
      "West Bengal Board of Secondary Education. Overall Grade: AA. Grand Total: 637. Overall Percentage: 91%.",
  },

  {
    role: "Higher Secondary Education",
    company: "Khanchi Gunadhar Adarsha Vidyapith",
    duration: "Mar 2024 - Mar 2025",
    description:
      "West Bengal Council of Higher Secondary Education. Grade: A+. Overall Percentile: 95.146. Grand Total: 420.",
  },

  {
    role: "B.Tech CSE (AI & ML)",
    company: "Adamas University",
    duration: "2025 - 2029",
    description:
      "Computer Science and Engineering (Artificial Intelligence and Machine Learning).Currently in 2nd Year, 3rd Semester. CGPA: 7.96.",
  },

  {
    role: "Semester I",
    company: "Adamas University",
    duration: "2025 - 2026",
    description:
      "B.Tech CSE (Artificial Intelligence & Machine Learning). SGPA: 8.05. Secured A+ in Introduction to Programming.",
  },

  {
    role: "Semester II",
    company: "Adamas University",
    duration: "2026 - 2027",
    description:
      "B.Tech CSE (Artificial Intelligence & Machine Learning). SGPA: 7.86. Secured A in Principles and Applications of AI.",
  },


];

// Reusable component to render each education item with animations
function EducationItem({ edu, idx, start, end, scrollYProgress, layout }) {
  // Animates the size of the marker (dot) as user scrolls
  const markerScale = useTransform(scrollYProgress, [start, end], [0, 1]);

  // Animates the opacity of the marker
  const markerOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  // Animates the opacity of the card
  const cardOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  // Checks if card should be displayed above or below the timeline line
  const isAbove = idx % 2 === 0;

  // Animates vertical movement of cards for desktop layout
  const cardY = useTransform(
    scrollYProgress,
    [start, end],
    [isAbove ? 30 : -30, 0]
  );

  // Animates horizontal movement of cards for mobile layout
  const cardX = useTransform(scrollYProgress, [start, end], [-24, 0]);

  // Render for Desktop layout
  if (layout === "desktop") {
    return (
      <div
        className="relative flex-1 flex justify-center items-center min-w-0"
        key={`${edu.company}-${edu.role}-${idx}`}
      >
        {/* Marker dot on the timeline */}
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale: markerScale, opacity: markerOpacity }}
        />

        {/* Small vertical line above or below the marker */}
        <motion.div
          className={`absolute ${isAbove ? "-top-8" : "-bottom-8"
            } w-0.75 bg-white/40`}
          style={{ height: 40, opacity: cardOpacity }}
        />

        {/* Education card with degree, university, duration, description */}
        <motion.article
          className={`absolute ${isAbove ? "bottom-12" : "top-12"
            } bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
          style={{ opacity: cardOpacity, y: cardY, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
        >
          <h3 className="text-xl font-semibold">{edu.role}</h3>

          <p className="text-md text-gray-400 mb-3">
            {edu.company} | {edu.duration}
          </p>

          <p className="text-md text-gray-300 wrap-break-word">
            {edu.description}
          </p>
        </motion.article>
      </div>
    );
  }

  // Render for Mobile layout
  return (
    <div
      key={`${edu.company}-${edu.role}-m-${idx}`}
      className="relative flex items-start"
    >
      {/* Marker dot on mobile timeline */}
      <motion.div
        className="absolute -left-3.5 top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale: markerScale, opacity: markerOpacity }}
      />

      {/* Education card (mobile version) */}
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity: cardOpacity, x: cardX }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold wrap-break-word">
          {edu.role}
        </h3>

        <p className="text-sm text-gray-400 mb-2 wrap-break-word">
          {edu.company} | {edu.duration}
        </p>

        <p className="text-sm text-gray-300 wrap-break-word">
          {edu.description}
        </p>
      </motion.article>
    </div>
  );
}

// Main Education component
const Education = () => {
  const sceneRef = React.useRef(null); // Ref for the scrolling section

  const [isMobile, setIsMobile] = React.useState(false); // State to track if device is mobile

  // Detect window size and set isMobile state
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dynamic scene height based on device type and number of education entries
  const SCENE_HEIGHT_VH = isMobile
    ? 100 * education.length * 1.6
    : 100 * education.length * 1.2;

  // Get scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  // Calculate thresholds for each education card's animation start/end
  const numEducation = education.length;

  const thresholds = React.useMemo(
    () =>
      Array.from(
        { length: numEducation },
        (_, i) => (i + 1) / numEducation
      ),
    [numEducation]
  );

  // Animate timeline line width (desktop) and height (mobile)
  const lineWidth = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  const lineHeight = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="education" className="relative bg-black text-white">
      {/* Main container with dynamic height */}
      <div
        ref={sceneRef}
        style={{
          height: `${SCENE_HEIGHT_VH}vh`,
          minHeight: "120vh",
        }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Section Title */}
          <div className="shrink-0 px-6 pt-8">
            <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
              Education
            </h2>
          </div>

          {/* Timeline container */}
          <div className="flex-1 flex items-center justify-center px-6 pb-10">
            {/* Desktop Timeline */}
            <div className="relative w-full max-w-7xl hidden md:block">
              {/* Horizontal timeline line */}
              <div className="relative h-1.5 bg-white/15 rounded">
                <motion.div
                  className="absolute left-0 top-0 h-1.5 bg-white rounded origin-left"
                  style={{ width: lineWidth }}
                />
              </div>

              {/* Education items mapped for desktop */}
              <div className="relative flex justify-between mt-0">
                {education.map((edu, idx) => {
                  const start = idx === 0 ? 0 : thresholds[idx - 1];
                  const end = thresholds[idx];

                  return (
                    <EducationItem
                      key={`${edu.company}-${edu.role}-${idx}`}
                      edu={edu}
                      idx={idx}
                      start={start}
                      end={end}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="relative w-full max-w-md md:hidden">
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/15 rounded">
                <motion.div
                  className="absolute top-0 left-0 w-1.5 bg-white rounded origin-top"
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Education items mapped for mobile */}
              <div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
                {education.map((edu, idx) => {
                  const start = idx === 0 ? 0 : thresholds[idx - 1];
                  const end = thresholds[idx];

                  return (
                    <EducationItem
                      key={`${edu.company}-${edu.role}-m-${idx}`}
                      edu={edu}
                      idx={idx}
                      start={start}
                      end={end}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;