/**
 * FALLBACK DATA
 * -----------------------------------------------------------------------
 * This is what renders when Supabase isn't configured yet, or if a fetch
 * to it ever fails — the site should never show a blank page to a
 * visitor. Shape matches the Supabase tables field-for-field, so once
 * you're pulling from the database this file just becomes a backup.
 * Edit it directly any time for a quick local change, or treat
 * supabase/seed.sql as the source of truth once you're set up.
 * -----------------------------------------------------------------------
 */
const DEFAULT_DATA = {

  profile: {
    name: "Bowale Olufiade",
    tagline: "Management Information Systems student · University of Houston",
    location: "Houston, Texas",
    email: "olufiadeolabowale@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/olabowale-olufiade",
    github_url: "https://github.com/bowale-olufiade",
    resume_updated: "2026",
    bio: [
      "I'm a Management Information Systems student at the University of Houston's C.T. Bauer College of Business, and I care about data — finding it, cleaning it, and using it to think more clearly about a problem. I originally set out to become an accountant, but I started paying closer attention to how fast AI was reshaping business, and I wanted a career that would grow alongside it instead of being replaced by it. MIS let me stay in business while building the technical and analytical side that field is going to need.",
      "My path started at Lone Star College, where a full-ride Honors College scholarship let me dig into research the way I wanted to — past the surface-level answer, into the why behind it. As an Honors Lead, I was juggling my own coursework, workshops, and mentoring at the same time, and being new to college, I needed a system to keep it all straight. That need is what got me building trackers and small tools in the first place — and it hasn't stopped since."
    ],
    personal_intro: [
      "Outside of class and meetings, I'm usually in the gym. I've been skinny most of my life, and I'm working on changing that — consistently training but, for a long time, not eating in a way that matched it."
    ]
  },

  education: [
    {
      institution: "C.T. Bauer College of Business, University of Houston",
      degree: "B.A., Management Information Systems",
      note: "GPA 4.0",
      start_date: "2025",
      end_date: "Expected May 2027"
    },
    {
      institution: "Honors College at Lone Star College–CyFair",
      degree: "Honors Associate of Arts, Business Administration",
      note: "Full-ride scholarship",
      start_date: "Aug 2023",
      end_date: "May 2025"
    }
  ],

  skills: [
    { category: "Technical", items: ["Excel (Data Analysis, PivotTables)", "Access", "Word", "PowerPoint"] },
    { category: "Language", items: ["SQL (Oracle & MySQL)", "DBeaver"] },
    { category: "Professional", items: ["Data Analysis", "Research", "Problem-Solving", "Time Management", "Leadership", "Organization"] }
  ],

  experience: [
    {
      title: "Vice President of Administration",
      org: "University of Houston, Residence Hall Association (RHA)",
      location: "Houston, TX",
      start_date: "Aug 2026",
      end_date: "Dec 2027",
      current: true,
      bullets: [
        "Streamlined General Assembly processes by organizing agendas, legislation, and communications, enhancing meeting efficiency and participation across Hall Councils.",
        "Managed and maintained centralized records — minutes, attendance, legislation — ensuring data accuracy, accessibility, and organizational continuity.",
        "Facilitated cross-functional communication between RHA, campus departments, and student organizations while supporting executive decision-making and leadership operations."
      ]
    },
    {
      title: "Hall Council Administrator",
      org: "University of Houston, Residence Hall Association (RHA)",
      location: "Houston, TX",
      start_date: "Sept 2025",
      end_date: "Apr 2026",
      current: false,
      bullets: [
        "Coordinated and documented hall council meetings, events, and initiatives to ensure smooth operations.",
        "Oversaw event planning logistics, including budgeting, scheduling, and resource allocation.",
        "Maintained organized records, reports, and photo documentation for all residence hall activities."
      ]
    },
    {
      title: "Honors Lead",
      org: "Lone Star College–CyFair, Honors College Leadership Program (HCLP)",
      location: "Cypress, TX",
      start_date: "Sept 2023",
      end_date: "May 2025",
      current: false,
      bullets: [
        "Hosted 15+ student-led workshops and forums focused on student development and engagement.",
        "Mentored peers and apprentices while promoting student engagement.",
        "Worked alongside 9 lead partners while serving as a liaison between students and faculty."
      ]
    },
    {
      title: "Marching Band Drum Technician",
      org: "Cypress Park High School",
      location: "Cypress, TX",
      start_date: "June 2022",
      end_date: "Mar 2025",
      current: false,
      bullets: [
        "Collaborated with the Band Director to train and develop a drumline of 9th–12th grade students, improving performance quality and consistency.",
        "Instructed students in percussion techniques, fostering skill development in a high-performance environment.",
        "Prepared students for regional, state, and national-level performances, contributing to competitive readiness."
      ]
    }
  ],

  projects: [
    {
      title: "Assignment Tracker",
      description: "Since freshman year I've used a Google Sheets tracker to manage every assignment for the semester, pulled straight from the syllabus. I needed a solid way to stay organized with my time, keep up with coursework, and prep for tests, so I built this and color-coded the due dates — red if it's past due, yellow if it's due that day, green if it's more than a day out. It's kept me on track as a student, and I liked it enough that I shared the template with friends, who use it too.",
      link_url: "https://docs.google.com/spreadsheets/d/1fPbxekqLfqf7zL9QV2IWrpHCZeUkFwOdu8abqRjMR3Y/edit?usp=sharing",
      link_label: "View template",
      tags: ["Google Sheets", "Personal system"],
      category: "work"
    },
    {
      title: "Budget Sheet Tracker",
      description: "As Hall Council Administrator at UH, my team managed a $1,000 semester budget for dorm events and programs. I built a budget sheet in Word that automatically calculated how much we'd spent on each event and how much was left for everything else planned that semester — made it a lot easier to plan responsibly and avoid overspending.",
      link_url: "",
      link_label: "",
      tags: ["Microsoft Word", "Budgeting"],
      category: "work"
    },
    {
      title: "Office Hours Tracker",
      description: "As Vice President of the Residence Hall Association, exec members are required to log a set number of office hours each week, and the president needed a way to actually track that. I designed and built a web app that works like a time punch — members check in and out during office hours. I added a PIN so each member has to enter their own code (no one can check in or out for someone else), plus a CSV export for weeks that need manual correction.",
      link_url: "https://bowale-olufiade.github.io/RHA-Office-Hours/",
      link_label: "Open web app",
      tags: ["Web app", "CSV export", "PIN auth"],
      category: "work"
    },
    {
      title: "Calorie Tracker",
      description: "A personal project: I'm consistent in the gym, but my eating wasn't matching that consistency, so I built a calorie tracker that calculates how much I need to eat per day based on my current weight, goal weight, and target date, then breaks that down into daily calorie and protein targets. I log meals as I go to stay on track, and I've noticed how much more deliberate my eating has become now that I'm holding myself to a number each day.",
      link_url: "https://bowale-olufiade.github.io/Calorie-Tracker-WebApp/",
      link_label: "Open web app",
      tags: ["Web app", "Personal", "Health"],
      category: "personal"
    }
  ],

  research: [
    {
      title: "SAiD Institute Strategic Partnership Capstone",
      org: "C.T. Bauer College of Business, University of Houston",
      date_range: "Sept 2025 – Nov 2025",
      description: "",
      bullets: [
        "Partnered with the SAiD Institute, a nonprofit promoting African Diaspora art and culture.",
        "Collaborated with five other Bauer students to develop a sustainable organizational framework.",
        "Conducted research on funding strategies and long-term planning to enhance community impact."
      ]
    },
    {
      title: "Research Foundations, Honors College",
      org: "Lone Star College–CyFair",
      date_range: "Aug 2023 – May 2025",
      description: "The full-ride Honors College scholarship is where I built my research habits — learning to critical-think through a problem and look past the surface-level answer for real knowledge underneath. That grounding shaped how I approach every project since, academic or personal.",
      bullets: []
    }
  ],

  awards: [
    { title: "C.T. Bauer College of Business President's List", org: "University of Houston", term: "Spring 2026" },
    { title: "C.T. Bauer College of Business Dean's List", org: "University of Houston", term: "Fall 2025" },
    { title: "Transfer Excellence Scholarship Award", org: "University of Houston", term: "Spring 2025" },
    { title: "President's List", org: "Lone Star College–CyFair", term: "Fall 2024" },
    { title: "Honors Chancellor Fellows Scholarship Award", org: "Lone Star College", term: "Fall 2023" }
  ]
};
