/**
 * FALLBACK CONTENT
 * -----------------------------------------------------------------------
 * Shown ONLY when Supabase can't be reached (e.g. the free project is
 * paused). Keep it identical to what's in the Supabase dashboard —
 * every dashboard edit needs a matching edit here.
 * Last synced from the live database: September 23, 2026.
 * -----------------------------------------------------------------------
 */
const DEFAULT_DATA = {

  profile: {
    name: "Bowale Olufiade",
    tagline: "Aspiring Business/Data Analyst",
    location: "Houston, Texas",
    email: "olufiadeolabowale@gmail.com",
    linkedin_url: "https://www.linkedin.com/in/olabowale-olufiade",
    github_url: "https://github.com/bowale-olufiade",
    resume_updated: "September 17, 2026",
    photo_url: "assets/photo.jpg",
    bio: [
      "I'm a Management Information Systems student at the University of Houston. I started out wanting to be an accountant because I liked working with numbers, money and overall transaction data. But at some point, I realized that I didn't want to do that forever. I still wanted to stay in business, but I also wanted a career that could grow with the world, especially with how fast AI and technology are changing everything. MIS ended up being the perfect fit. It lets me stay grounded in business while building the technical and analytical skills that are only going to matter more down the line."
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
    { category: "Language", items: ["SQL (Oracle, DBeaver)", "JavaScript", "HTML & CSS"] },
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
      end_date: "",
      current: true,
      bullets: [
        "Streamline General Assembly processes by organizing agendas, legislation, and communications, enhancing meeting efficiency and participation across Hall Councils.",
        "Manage and maintain a centralized records system (minutes, attendance, legislation), ensuring data accuracy, accessibility, and organizational continuity within the Board and Hall Council.",
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
      org: "Lone Star College-CyFair, Honors College Leadership Program (HCLP)",
      location: "Cypress, TX",
      start_date: "Sept 2023",
      end_date: "May 2025",
      current: false,
      bullets: [
        "Hosted 15+ student-led workshops and forums that focused on student development and engagement.",
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
      title: "SAiD Institute Strategic Partnership",
      org: "University of Houston, C. T. Bauer College of Business",
      date_range: "Sept 2025 – Nov 2025",
      description: "Designed SAiD Institute's year-long organizational structure, creating quarterly cycles for programming, grant applications, donor engagement, and partnership outreach to address inconsistent funding and limited community engagement. Conducted research on sustainability models used by cultural nonprofits, developing recommendations such as educational workshops, art showcases, book clubs, virtual events, and membership-based revenue streams. Collaborated with a cross-functional Bauer team to build a strategic framework integrating funding pipelines, partnership development, digital engagement strategies, and impact-tracking systems.",
      link_url: "",
      link_label: "",
      tags: ["Strategy", "Nonprofit", "Cross-functional team"],
      image_urls: ["assets/capstone-said-1.jpg", "assets/capstone-said-2.jpg"],
      deck_url: "assets/said-capstone-presentation.pdf",
      deck_label: "View our presentation to SAiD Institute leadership",
      subgroup: "capstone",
      category: "work"
    },
    {
      title: "Honors International Capstone Project, New Orleans",
      org: "Lone Star College-CyFair, Honors College",
      date_range: "May 2025",
      description: "Partnered with local community organizations to support recovering neighborhoods still impacted by Hurricane Katrina. Explored the city's rich culture and engaged with cultural leaders to understand the social and historical significance of New Orleans' rebuilding process. Led group reflection sessions to connect cultural immersion experiences with academic learning outcomes.",
      link_url: "",
      link_label: "",
      tags: ["Community partnership", "Cultural immersion", "Facilitation"],
      image_urls: ["assets/capstone-neworleans-1.jpg", "assets/capstone-neworleans-2.jpg"],
      subgroup: "capstone",
      category: "work"
    },
    {
      title: "RHA Office Hours Tracker — Web Application",
      org: "",
      date_range: "Aug 2026 – Present",
      description: "Designed and deployed a live web-based time-tracking system for executive board office hours, using a PIN-based check-in/check-out flow with real-time session timers and automated weekly hour tallying. Built a Postgres backend (Supabase) with security-definer RPC functions, bcrypt-hashed credentials, and row-level security policies to ensure safe, role-restricted data writes across a multi-user team. Implemented live data sync via real-time subscriptions, eliminating full-table rewrites and improving performance over a prior spreadsheet-based system; added CSV export and week-by-week navigation for administrative reporting.",
      link_url: "https://bowale-olufiade.github.io/RHA-Office-Hours/",
      link_label: "View the live app",
      tags: ["Supabase", "Postgres", "Row-level security", "Real-time sync", "CSV export"],
      image_urls: ["assets/officehours.jpg"],
      subgroup: "technical",
      category: "work"
    },
    {
      title: "Calorie Tracker — Web Application",
      org: "",
      date_range: "",
      description: "A goal-based calorie and weight tracking web app. Set a current and target weight, pick an activity level and a pace, and it calculates the daily targets needed to get there.",
      link_url: "https://bowale-olufiade.github.io/Calorie-Tracker-WebApp/",
      link_label: "View the live app",
      tags: ["Web app", "Goal tracking"],
      image_urls: ["assets/calorie-tracker.jpg"],
      subgroup: "technical",
      category: "work"
    },
    {
      title: "Assignment Tracker — Template",
      org: "",
      date_range: "",
      description: "A semester-long coursework tracker with per-class colour coding, due dates, completion checkboxes, and submission dates, so nothing slips between courses. Download the template and use it for your own semester — it comes with a blank sheet ready to fill in.",
      link_url: "assets/assignment-tracker-template.xlsx",
      link_label: "Download the template",
      tags: ["Spreadsheet", "Conditional formatting", "Filters"],
      image_urls: ["assets/assignment-tracker.jpg"],
      subgroup: "technical",
      category: "work"
    },
    {
      title: "Budget Sheet Tracker — Template",
      org: "",
      date_range: "",
      description: "The event budgeting sheet I use for RHA and Hall Council programming. Tracks quantity, item, source, unit fee, and line total against a main balance and a flex balance, so remaining funds update as items are added. Download the template and use it for your own events.",
      link_url: "assets/budget-sheet-template.xlsx",
      link_label: "Download the template",
      tags: ["Excel", "Formulas", "Event budgeting"],
      image_urls: ["assets/budget-tracker.jpg"],
      subgroup: "technical",
      category: "work"
    }
  ],

  research: [
    {
      title: "From the Battlefield to the Stage: The Cultural Transformation of Drums as a Military Tool to an Art Instrument",
      course: "HISTH 1302: U.S. History II Honors",
      semester: "Fall 2023",
      org: "Lone Star College-CyFair, Honors College",
      description: "The goal of this research is to trace the evolution of the use of drums in the United States spanning from 1862 to 1945, identifying the transition from a military tool to relay commands to an instrument of art expression. The means of communication in the military in this period notably exemplifies the pivotal role of drums. With the rise of technological advancements, telecommunication became a more reliable, efficient, and faster way for communication not only on the battlefield but across borders rendering the drum usage of communicating ineffectual. An analysis was conducted on how drums were used in the Civil War, specifically the Battle of Shiloh, and how telecommunications in the post-Civil War era were utilized (WWI & II). This research highlights the significance of historical context, international comparisons, technological shifts, and the cultural impact of music, illuminating how seemingly simple instruments mirror broader societal changes, and revealing the intricate connections between history, culture, and technology.",
      bullets: [
        "Presented at the Great Plains Honors Council Annual Conference, Oklahoma State University, Stillwater, OK — March 2024",
        "Presented at the World History Association of Texas Annual Conference, San Antonio College — April 2024",
        "Selected for Honors Undergraduate Research Day, Lone Star College-CyFair"
      ],
      paper_url: "assets/drums-battlefield-to-stage-HISTH1302-Fall2023.pdf"
    },
    {
      title: "Interplay of Buddhist and Daoist Philosophies in Ming Dynasty China: A Cultural Analysis of Journey to the West",
      course: "ENGLH 2332: World Literature Honors",
      semester: "Spring 2024",
      org: "Lone Star College-CyFair, Honors College",
      description: "With an aim to explore the philosophy of Buddhism and Daoism as depicted through the two protagonists of Journey to the West, the goal of this research is to analyze their portrayal and significance within the context of this historical period, with the prevalence of these teachings during the Ming Dynasty from 1368 to 1644. During the Ming Dynasty, a renaissance in Chinese literature positioned novels as their famous literary media, with Journey to the West exemplifying this through its rich narrative interplay of Buddhist and Daoist philosophies. In this epic tale, Tripitaka embodies the Buddhist virtues of determination and compassion, guiding the quest for enlightenment, while Sun Wukung, with his Daoist spontaneity and rebellious spirit, illustrates how Buddhism and Daoism influenced people's views and behaviors during this era. This research concludes that the journey and interactions between Tripitaka and Sun WuKung reflect the dynamic relationship between societal values, cultural beliefs, and philosophical views in Ming Dynasty China.",
      bullets: [],
      paper_url: "assets/journey-to-the-west-buddhist-daoist-ENGLH2332-Spring2024.pdf"
    },
    {
      title: "Economic Impact of the COVID-19 Pandemic on Small Businesses",
      course: "ECONH 2302: Principles of Economics Honors",
      semester: "Spring 2024",
      org: "Lone Star College-CyFair, Honors College",
      description: "With an aim to examine the economic effect of the shift to remote jobs on small businesses before, during, and after the COVID-19 pandemic, the goal of this research is to investigate how this shift affected the profitability and revenue of small businesses during and post-pandemic. In 2020, the COVID-19 pandemic dramatically shifted the U.S. economic landscape, forcing many small businesses to close while others thrived due to a rapid transition to remote work. A data analysis from the Pew Research Center was utilized to differentiate the statistics of workers that switched to remote from October 2020 to January 2022, and Alexander W. Bartik's \"The Impact of COVID-19 on Small Business Outcomes and Expectations\" was used to explore how small businesses were impacted. A trend analysis from Moody Analytics was also used to observe the profitability of small business before the pandemic. This research concludes that the economic effect of the pandemic on small businesses — some thriving due to adaptability and remote work capabilities while others did not — underscores the disparities in business resilience and the urgent need for strategic adaptation in the face of such crises.",
      bullets: [],
      paper_url: "assets/covid-small-business-impact-ECONH2302-Spring2024.pdf"
    },
    {
      title: "Bridging the Gap: A Comparative Analysis of High School Educational Policies in the U.S. and Finland",
      course: "GOVT 2332: Introduction to Political Science",
      semester: "Spring 2024",
      org: "Lone Star College-CyFair",
      description: "The disparities in academic performance between the United States and Finland have become a subject of interest and concern among policymakers, educators, and researchers in recent years. Despite both countries having a highly developed education system, they are differentiated in their disciplinary policies that are influenced by their cultural nuances, which is reflected in the quality performance of students from these countries and the gap between them. Through a detailed comparative analysis of high school educational policies and governance structures in Finland and the United States, this study highlights how differences in disciplinary policies, driven by cultural nuances, contribute to significant disparities in academic performance, and explores how each country's approach to handling disciplinary measures and academic emphasis correlates with student outcomes on international assessments.",
      bullets: [],
      paper_url: "assets/bridging-the-gap-us-finland-education-GOVT2332-Spring2024.pdf"
    },
    {
      title: "Impact of the Missouri Compromise on Enslaved African Americans",
      course: "HISTH 1301: U.S. History I Honors",
      semester: "Fall 2024",
      org: "Lone Star College-CyFair, Honors College",
      description: "This research analyzes the lived experience of enslaved African Americans during the era of the Missouri Compromise from 1820 to 1854, focusing on how this legislative act affected their daily lives and struggles for freedom. Anchored by the case of Dred Scott — an enslaved man who lived in both free and slave territories, and whose fight for liberation reached the Supreme Court in Dred Scott v. Sandford — the paper examines how the legal framework surrounding the Compromise failed the people it governed. By examining the experiences of men, women, and children, including the harsh realities of their living conditions and housing during enslavement, it becomes evident that the Compromise effectively solidified the institution of slavery in the new territories, reinforcing systemic oppression that left enslaved Africans with no avenue for liberation.",
      bullets: [],
      paper_url: "assets/missouri-compromise-enslaved-african-americans-HISTH1301-Fall2024.pdf"
    },
    {
      title: "A Lone Star's Loyalty: How the Texas Pledge Reflects State Identity and Traditionalistic Values",
      course: "GOVTH 2306: Texas Politics Honors",
      semester: "Fall 2024",
      org: "Lone Star College-CyFair, Honors College",
      description: "The purpose of this research was to explore how Texas's traditionalistic values have shaped public expressions of state identity, focusing on the Texas Pledge of Allegiance as a focal example from its inception in 1933 to 2024. The simple expression of state pride has evolved over the years, first with the removal of \"1836\" to accurately reflect the current flag adopted in 1839, and later with the addition of the words \"under God\" in 2007. These changes beg questions as to the factors that would have motivated such and how they aligned with the values in the political and cultural context of Texas. A qualitative case study approach was employed, examining legislative documents, historical records, news articles, and public commentary to highlight the influence of these values on policy. The findings reveal that Texas's commitment to traditionalism was reflected in both symbolic and practical governance.",
      bullets: [
        "Honors College capstone case study, reviewed and approved by a faculty review committee — December 2024",
        "Recipient of the Jim Brown Political Science Scholar Award, 2025"
      ],
      paper_url: "assets/lone-stars-loyalty-texas-pledge-GOVTH2306-Fall2024.pdf"
    },
    {
      title: "Realism and Abstraction: A Cross-Cultural Study of Michelangelo's David and the Yoruba's Ere Ibeji",
      course: "ARTSH 1301: Art Appreciation Honors",
      semester: "Spring 2025",
      org: "Lone Star College-CyFair, Honors College",
      description: "The purpose of this research is to compare two distinct ideals of the human form as represented in Michelangelo's David and the Yoruba's Ere Ibeji, examining how each sculpture reflects the values, beliefs, and artistic goals of its respective culture. During the Italian Renaissance, artists pursued naturalism and anatomical complexity as a reflection of humanist ideals, while in Yoruba culture, spiritual symbolism shaped artistic expression rooted in ritual and ancestral presence. A comparative visual and contextual analysis was conducted using scholarly sources, including William Wallace's studies on Michelangelo and Suzanne Blier and Monica Visona's interpretations of African art. This research concludes that David expresses civic virtue through physical idealization, whereas Ere Ibeji conveys spiritual continuity through symbolic form.",
      bullets: [],
      paper_url: "assets/realism-abstraction-david-ere-ibeji-ARTSH1301-Spring2025.pdf"
    },
    {
      title: "The Persistence of Superstition: How Culture and Cognition Keep Old Beliefs Alive",
      course: "SPCHH 1315: Public Speaking Honors",
      semester: "Spring 2025",
      org: "Lone Star College-CyFair, Honors College",
      description: "The purpose of this research is to understand how superstitions continue to influence human behavior in modern society, examining the psychological behavior that drives people to believe in them. Superstitions have existed across cultures for centuries, often rooted in fear, religion, or folklore. While many originate from historical events or ancient beliefs, they have evolved into everyday habits that still guide behavior and decision-making. A qualitative and historical analysis was conducted by examining cultural folklore and psychological interpretations, tracing recurring patterns to reveal how superstitions continue to shape behavior across time and cultures. This research concludes that superstitions persist not because people believe in them literally, but because they offer emotional relief, familiarity, and a sense of control in uncertain situations.",
      bullets: [],
      paper_url: "assets/persistence-of-superstition-SPCHH1315-Spring2025.pdf"
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
