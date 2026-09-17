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
    linkedin_url: "https://www.linkedin.com/in/bowale-olufiade",
    github_url: "https://github.com/bowale-olufiade",
    resume_updated: "September 2026",
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
      institution: "University of Houston",
      degree: "BBA in Management Information Systems",
      note: "GPA 3.9",
      start_date: "Aug 2025",
      end_date: "Expected Dec 2027"
    },
    {
      institution: "Lone Star College-CyFair",
      degree: "Associate of Arts in Business Administration with Honors",
      note: "GPA 3.7",
      start_date: "",
      end_date: "Earned"
    }
  ],

  skills: [
    { category: "Language", items: ["SQL (Oracle, DBeaver)", "JavaScript (NetBeans)", "HTML & CSS"] },
    { category: "Data & Analytics", items: ["Tableau", "Power BI (DAX, Power Query, API)", "Excel (PivotTables, Charts)"] },
    { category: "Tools", items: ["Microsoft Office Suite", "Supabase / Postgres", "GitHub"] },
    { category: "Professional", items: ["Research", "Problem-Solving", "Time Management", "Leadership", "Organization"] }
  ],

  experience: [
    {
      title: "Vice President of Administration",
      org: "University of Houston, Residence Hall Association (RHA)",
      location: "Houston, TX",
      start_date: "Apr 2026",
      end_date: "Dec 2027",
      current: true,
      bullets: [
        "Streamlined General Assembly processes by organizing agendas, legislation, and communications, enhancing meeting efficiency and participation across Hall Councils.",
        "Managed and maintained centralized records — minutes, attendance, legislation — ensuring data accuracy, accessibility, and organizational continuity.",
        "Serve as liaison between RHA, campus departments, and student organizations, supporting executive decision-making and coordinating leadership operations across 49 hall council members."
      ]
    },
    {
      title: "Cashier",
      org: "Wazobia Market",
      location: "Houston, TX",
      start_date: "Jan 2026",
      end_date: "",
      current: true,
      bullets: [
        "Process 100–150 transactions per shift totaling approximately $10,000 in daily sales across produce, packaged, and mixed taxable/non-taxable orders, operating POS and credit authorization systems during peak store hours.",
        "Resolve customer returns, pricing disputes, and escalated complaints independently at the register; apply daily price changes and promotional pricing by processing customer loyalty point redemptions to ensure accurate order totals.",
        "Maintain sole custody of a cash drawer handling up to $1,000 in cash tenders per shift, reconciling open and close counts with zero cash shortages while applying manual rounding adjustments to prevent cumulative drawer drifting."
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
        "Coordinated and documented 30+ hall council meetings, events, and initiatives to ensure consistent operations.",
        "Oversaw event planning logistics, including budgeting, scheduling, and resource allocation for 14+ residence hall events.",
        "Maintained organized records, reports, and photo documentation for all residence hall activities, creating a reusable archive for future councils."
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
        "Mentored peer apprentices, strengthening their leadership skills and engagement with the program.",
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
      description: "As Vice President of the Residence Hall Association, exec members are required to log a set number of office hours each week, and the president needed a way to actually track that. I designed and built a web app that works like a time punch — 11 exec board members across 9 positions check in and out during office hours, replacing a manual spreadsheet. I added a PIN so each member has to enter their own code (no one can check in or out for someone else), plus a CSV export for weeks that need manual correction. Behind it is a Postgres database on Supabase with security-definer functions, bcrypt-hashed PINs, and row-level security, so the site can read hours but nobody can write to the table directly.",
      link_url: "https://bowale-olufiade.github.io/RHA-Office-Hours/",
      link_label: "Open web app",
      tags: ["Web app", "Supabase / Postgres", "Row-level security", "CSV export"],
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
        "Designed SAiD Institute's year-long organizational structure, creating quarterly cycles for programming, grant applications, donor engagement, and partnership outreach to address inconsistent funding and limited community engagement.",
        "Conducted research on sustainability models used by cultural nonprofits, developing recommendations such as educational workshops, art showcases, book clubs, and membership-based revenue streams to strengthen long-term resilience.",
        "Collaborated with a cross-functional Bauer team to build a strategic framework integrating funding pipelines, partnership development, digital engagement strategies, and impact-tracking systems for SAiD's growth."
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
    { title: "Spring 2026 Dean's List", org: "University of Houston", term: "", group_label: "College" },
    { title: "Fall 2025 Dean's List", org: "University of Houston", term: "", group_label: "College" },
    { title: "Transfer Excellence Scholarship", org: "University of Houston", term: "", group_label: "College" },
    { title: "Jim Brown Political Science Scholar Award", org: "Lone Star College-CyFair", term: "", group_label: "College" },
    { title: "Spring 2025 President's List", org: "Lone Star College-CyFair", term: "", group_label: "College" },
    { title: "Honors Chancellor Fellows", org: "Lone Star College", term: "", group_label: "College" },
    { title: "Distinguished Honor Roll", org: "Cypress Park High School — Top 10% of class", term: "", group_label: "High School" },
    { title: "Most Outstanding Percussionist", org: "CyPark Marching Band", term: "", group_label: "High School" }
  ]
};
