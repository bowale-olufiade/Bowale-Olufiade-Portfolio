-- =========================================================================
-- CONTENT — every row for the updated portfolio.
--
-- Run this AFTER migration.sql (or after schema.sql).
-- It clears each content table and reinserts everything, so it is safe to
-- re-run and easy to tweak: edit a value below, run the whole file again.
--
-- NOTE: this deletes existing rows in these tables. If you have content in
-- Supabase you want to keep that isn't below, copy it out first.
-- =========================================================================

-- ---- PROFILE -------------------------------------------------------------
-- Replace the email / linkedin / github values if any are out of date.
delete from public.profile;
insert into public.profile (id, name, tagline, location, email, linkedin_url, github_url, resume_updated, photo_url, bio)
values (
  1,
  'Bowale Olufiade',
  'Aspiring Business/Data Analyst',
  'Houston, Texas',
  'olufiadeolabowale@gmail.com',
  'https://www.linkedin.com/in/olabowale-olufiade',
  'https://github.com/bowale-olufiade',
  'September 10, 2026',
  'assets/photo.jpg',
  'My path started at Lone Star College, where a full-ride Honors College scholarship let me dig into research the way I wanted to — past the surface-level answer, into the why behind it. As an Honors Lead, I was juggling my own coursework, workshops, and mentoring at the same time, and being new to college, I needed a system to keep it all straight. That need is what got me building trackers and small tools in the first place — and it hasn''t stopped since.'
);

-- ---- EDUCATION -----------------------------------------------------------
-- Lone Star has a blank start_date on purpose: the site shows just "Earned".
delete from public.education;
insert into public.education (institution, degree, note, start_date, end_date, order_index) values
  ('University of Houston', 'B.A. in Management Information Systems', 'GPA 3.9', 'Aug 2025', 'Expected Dec 2027', 10),
  ('Lone Star College-CyFair', 'Associate of Arts in Business Administration with Honors', 'GPA 3.7', '', 'Earned', 20);

-- ---- SKILLS --------------------------------------------------------------
-- Add your Professional skills back at the bottom (category = 'Professional').
delete from public.skills;
insert into public.skills (category, item, order_index) values
  ('Language',         'SQL (Oracle, DBeaver)',              10),
  ('Language',         'JavaScript (NetBeans)',              20),
  ('Language',         'HTML & CSS',                         30),
  ('Data & Analytics', 'Tableau',                            40),
  ('Data & Analytics', 'Power BI (DAX, Power Query, API)',   50),
  ('Data & Analytics', 'Excel (PivotTables, Charts)',        60),
  ('Tools',            'Microsoft Office Suite',             70);

-- ---- EXPERIENCE ----------------------------------------------------------
delete from public.experience;
insert into public.experience (title, org, location, start_date, end_date, current, bullets, order_index) values
(
  'Vice President of Administration',
  'University of Houston, Residence Hall Association (RHA)',
  'Houston, TX',
  'Apr 2026', '', true,
  'Streamline General Assembly processes by organizing agendas, legislation, and communications, enhancing meeting efficiency and participation across Hall Councils.
Manage and maintain a centralized records system (minutes, attendance, legislation), ensuring data accuracy, accessibility, and organizational continuity within the Board and Hall Council.
Serve as liaison between RHA, campus departments, and student organizations, supporting executive decision-making and coordinating leadership operations across 49 hall council members.',
  10
),
(
  'Hall Council Administrator',
  'University of Houston, Residence Hall Association (RHA)',
  'Houston, TX',
  'Sept 2025', 'Apr 2026', false,
  'Coordinated and documented 30+ hall council meetings, events, and initiatives to ensure consistent operations.
Oversaw event planning logistics, including budgeting, scheduling, and resource allocation for 14+ residence hall events.
Maintained organized records, reports, and photo documentation for all residence hall activities, creating a reusable archive for future councils.',
  20
),
(
  'Honors Lead',
  'Lone Star College-CyFair, Honors College Leadership Program (HCLP)',
  'Cypress, TX',
  'Sept 2023', 'May 2025', false,
  'Hosted 15+ student-led workshops and forums that focused on student development and engagement.
Mentored peer apprentices, strengthening their leadership skills and engagement with the program.
Worked alongside 9 lead partners while serving as a liaison between students and faculty.',
  30
);

-- ---- ADD YOUR DRUM TECHNICIAN ROLE HERE ---------------------------------
-- Fill in the blanks and uncomment. Keeping the same column shape as the
-- rows above is what makes it format identically on the site.
--
-- insert into public.experience (title, org, location, start_date, end_date, current, bullets, order_index) values
-- (
--   'Drum Technician',
--   'ORGANIZATION NAME',
--   'CITY, STATE',
--   'START', 'END', false,
--   'First bullet.
-- Second bullet.
-- Third bullet.',
--   40
-- );

-- ---- PROJECTS ------------------------------------------------------------
delete from public.projects;

-- Capstone projects
insert into public.projects (title, org, date_range, description, tags, image_urls, subgroup, category, order_index) values
(
  'SAiD Institute Strategic Partnership',
  'University of Houston, C. T. Bauer College of Business',
  'Sept 2025 – Nov 2025',
  'Designed SAiD Institute''s year-long organizational structure, creating quarterly cycles for programming, grant applications, donor engagement, and partnership outreach to address inconsistent funding and limited community engagement. Conducted research on sustainability models used by cultural nonprofits, developing recommendations such as educational workshops, art showcases, book clubs, virtual events, and membership-based revenue streams. Collaborated with a cross-functional Bauer team to build a strategic framework integrating funding pipelines, partnership development, digital engagement strategies, and impact-tracking systems.',
  'Strategy, Nonprofit, Cross-functional team',
  'assets/capstone-said-1.jpg, assets/capstone-said-2.jpg',
  'capstone', 'work', 10
),
(
  'Honors International Capstone Project, New Orleans',
  'Lone Star College-CyFair, Honors College',
  'May 2025',
  'Partnered with local community organizations to support recovering neighborhoods still impacted by Hurricane Katrina. Explored the city''s rich culture and engaged with cultural leaders to understand the social and historical significance of New Orleans'' rebuilding process. Led group reflection sessions to connect cultural immersion experiences with academic learning outcomes.',
  'Community partnership, Cultural immersion, Facilitation',
  'assets/capstone-neworleans-1.jpg, assets/capstone-neworleans-2.jpg',
  'capstone', 'work', 20
);

-- Technical projects
insert into public.projects (title, date_range, description, link_url, link_label, tags, image_urls, subgroup, category, order_index) values
(
  'RHA Office Hours Tracker — Web Application',
  'Aug 2026 – Present',
  'Designed and deployed a live web-based time-tracking system for executive board office hours, using a PIN-based check-in/check-out flow with real-time session timers and automated weekly hour tallying. Built a Postgres backend (Supabase) with security-definer RPC functions, bcrypt-hashed credentials, and row-level security policies to ensure safe, role-restricted data writes across a multi-user team. Implemented live data sync via real-time subscriptions, eliminating full-table rewrites and improving performance over a prior spreadsheet-based system; added CSV export and week-by-week navigation for administrative reporting.',
  '', '',
  'Supabase, Postgres, Row-level security, Real-time sync, CSV export',
  'assets/screenshots/officehours.jpg',
  'technical', 'work', 30
),
(
  'Assignment Tracker',
  '',
  'A semester-long coursework tracker built in Google Sheets, with per-class colour coding, due dates, completion checkboxes, and submission dates so nothing slips between courses.',
  '', '',
  'Google Sheets, Conditional formatting, Filters',
  'assets/screenshots/assignment-tracker.jpg',
  'technical', 'work', 40
),
(
  'Budget Sheet Tracker — Template',
  '',
  'The event budgeting sheet I use for RHA and Hall Council programming. Tracks quantity, item, source, unit fee, and line total against a main balance and a flex balance, so remaining funds update as items are added. Download the template and use it for your own events.',
  'assets/templates/budget-sheet-template.xlsx', 'Download the template',
  'Excel, Formulas, Event budgeting',
  'assets/screenshots/budget-tracker.jpg',
  'technical', 'work', 50
),
(
  'Calorie Tracker',
  '',
  'A goal-based calorie and weight tracking web app. Set a current and target weight, pick an activity level and a pace, and it calculates the daily targets needed to get there.',
  '', '',
  'Web app, Goal tracking',
  'assets/screenshots/calorie-tracker.jpg',
  'technical', 'work', 60
);

-- ---- RESEARCH ------------------------------------------------------------
-- Titles match each paper's own title page exactly.
delete from public.research;

insert into public.research (title, course, semester, org, description, bullets, paper_url, order_index) values
(
  'From the Battlefield to the Stage: The Cultural Transformation of Drums as a Military Tool to an Art Instrument',
  'HISTH 1302: U.S. History II Honors',
  'Fall 2023',
  'Lone Star College-CyFair, Honors College',
  'The goal of this research is to trace the evolution of the use of drums in the United States spanning from 1862 to 1945, identifying the transition from a military tool to relay commands to an instrument of art expression. The means of communication in the military in this period notably exemplifies the pivotal role of drums. With the rise of technological advancements, telecommunication became a more reliable, efficient, and faster way for communication not only on the battlefield but across borders rendering the drum usage of communicating ineffectual. An analysis was conducted on how drums were used in the Civil War, specifically the Battle of Shiloh, and how telecommunications in the post-Civil War era were utilized (WWI & II). This research highlights the significance of historical context, international comparisons, technological shifts, and the cultural impact of music, illuminating how seemingly simple instruments mirror broader societal changes, and revealing the intricate connections between history, culture, and technology.',
  'Presented at the Great Plains Honors Council Annual Conference, Oklahoma State University, Stillwater, OK — March 2024
Presented at the World History Association of Texas Annual Conference, San Antonio College — April 2024
Selected for Honors Undergraduate Research Day, Lone Star College-CyFair',
  'assets/research/drums-battlefield-to-stage-HISTH1302-Fall2023.pdf',
  10
),
(
  'Interplay of Buddhist and Daoist Philosophies in Ming Dynasty China: A Cultural Analysis of Journey to the West',
  'ENGLH 2332: World Literature Honors',
  'Spring 2024',
  'Lone Star College-CyFair, Honors College',
  'With an aim to explore the philosophy of Buddhism and Daoism as depicted through the two protagonists of Journey to the West, the goal of this research is to analyze their portrayal and significance within the context of this historical period, with the prevalence of these teachings during the Ming Dynasty from 1368 to 1644. During the Ming Dynasty, a renaissance in Chinese literature positioned novels as their famous literary media, with Journey to the West exemplifying this through its rich narrative interplay of Buddhist and Daoist philosophies. In this epic tale, Tripitaka embodies the Buddhist virtues of determination and compassion, guiding the quest for enlightenment, while Sun Wukung, with his Daoist spontaneity and rebellious spirit, illustrates how Buddhism and Daoism influenced people''s views and behaviors during this era. This research concludes that the journey and interactions between Tripitaka and Sun WuKung reflect the dynamic relationship between societal values, cultural beliefs, and philosophical views in Ming Dynasty China.',
  '',
  'assets/research/journey-to-the-west-buddhist-daoist-ENGLH2332-Spring2024.pdf',
  20
),
(
  'Economic Impact of the COVID-19 Pandemic on Small Businesses',
  'ECONH 2302: Principles of Economics Honors',
  'Spring 2024',
  'Lone Star College-CyFair, Honors College',
  'With an aim to examine the economic effect of the shift to remote jobs on small businesses before, during, and after the COVID-19 pandemic, the goal of this research is to investigate how this shift affected the profitability and revenue of small businesses during and post-pandemic. In 2020, the COVID-19 pandemic dramatically shifted the U.S. economic landscape, forcing many small businesses to close while others thrived due to a rapid transition to remote work. A data analysis from the Pew Research Center was utilized to differentiate the statistics of workers that switched to remote from October 2020 to January 2022, and Alexander W. Bartik''s "The Impact of COVID-19 on Small Business Outcomes and Expectations" was used to explore how small businesses were impacted. A trend analysis from Moody Analytics was also used to observe the profitability of small business before the pandemic. This research concludes that the economic effect of the pandemic on small businesses — some thriving due to adaptability and remote work capabilities while others did not — underscores the disparities in business resilience and the urgent need for strategic adaptation in the face of such crises.',
  '',
  'assets/research/covid-small-business-impact-ECONH2302-Spring2024.pdf',
  30
),
(
  'Bridging the Gap: A Comparative Analysis of High School Educational Policies in the U.S. and Finland',
  'GOVT 2332: Introduction to Political Science',
  'Spring 2024',
  'Lone Star College-CyFair',
  'The disparities in academic performance between the United States and Finland have become a subject of interest and concern among policymakers, educators, and researchers in recent years. Despite both countries having a highly developed education system, they are differentiated in their disciplinary policies that are influenced by their cultural nuances, which is reflected in the quality performance of students from these countries and the gap between them. Through a detailed comparative analysis of high school educational policies and governance structures in Finland and the United States, this study highlights how differences in disciplinary policies, driven by cultural nuances, contribute to significant disparities in academic performance, and explores how each country''s approach to handling disciplinary measures and academic emphasis correlates with student outcomes on international assessments.',
  '',
  'assets/research/bridging-the-gap-us-finland-education-GOVT2332-Spring2024.pdf',
  40
),
(
  'Impact of the Missouri Compromise on Enslaved African Americans',
  'HISTH 1301: U.S. History I Honors',
  'Fall 2024',
  'Lone Star College-CyFair, Honors College',
  'This research analyzes the lived experience of enslaved African Americans during the era of the Missouri Compromise from 1820 to 1854, focusing on how this legislative act affected their daily lives and struggles for freedom. Anchored by the case of Dred Scott — an enslaved man who lived in both free and slave territories, and whose fight for liberation reached the Supreme Court in Dred Scott v. Sandford — the paper examines how the legal framework surrounding the Compromise failed the people it governed. By examining the experiences of men, women, and children, including the harsh realities of their living conditions and housing during enslavement, it becomes evident that the Compromise effectively solidified the institution of slavery in the new territories, reinforcing systemic oppression that left enslaved Africans with no avenue for liberation.',
  '',
  'assets/research/missouri-compromise-enslaved-african-americans-HISTH1301-Fall2024.pdf',
  50
),
(
  'A Lone Star''s Loyalty: How the Texas Pledge Reflects State Identity and Traditionalistic Values',
  'GOVTH 2306: Texas Politics Honors',
  'Fall 2024',
  'Lone Star College-CyFair, Honors College',
  'The purpose of this research was to explore how Texas''s traditionalistic values have shaped public expressions of state identity, focusing on the Texas Pledge of Allegiance as a focal example from its inception in 1933 to 2024. The simple expression of state pride has evolved over the years, first with the removal of "1836" to accurately reflect the current flag adopted in 1839, and later with the addition of the words "under God" in 2007. These changes beg questions as to the factors that would have motivated such and how they aligned with the values in the political and cultural context of Texas. A qualitative case study approach was employed, examining legislative documents, historical records, news articles, and public commentary to highlight the influence of these values on policy. The findings reveal that Texas''s commitment to traditionalism was reflected in both symbolic and practical governance.',
  'Honors College capstone case study, reviewed and approved by a faculty review committee — December 2024
Recipient of the Jim Brown Political Science Scholar Award, 2025',
  'assets/research/lone-stars-loyalty-texas-pledge-GOVTH2306-Fall2024.pdf',
  60
),
(
  'Realism and Abstraction: A Cross-Cultural Study of Michelangelo''s David and the Yoruba''s Ere Ibeji',
  'ARTSH 1301: Art Appreciation Honors',
  'Spring 2025',
  'Lone Star College-CyFair, Honors College',
  'The purpose of this research is to compare two distinct ideals of the human form as represented in Michelangelo''s David and the Yoruba''s Ere Ibeji, examining how each sculpture reflects the values, beliefs, and artistic goals of its respective culture. During the Italian Renaissance, artists pursued naturalism and anatomical complexity as a reflection of humanist ideals, while in Yoruba culture, spiritual symbolism shaped artistic expression rooted in ritual and ancestral presence. A comparative visual and contextual analysis was conducted using scholarly sources, including William Wallace''s studies on Michelangelo and Suzanne Blier and Monica Visona''s interpretations of African art. This research concludes that David expresses civic virtue through physical idealization, whereas Ere Ibeji conveys spiritual continuity through symbolic form.',
  '',
  'assets/research/realism-abstraction-david-ere-ibeji-ARTSH1301-Spring2025.pdf',
  70
),
(
  'The Persistence of Superstition: How Culture and Cognition Keep Old Beliefs Alive',
  'SPCHH 1315: Public Speaking Honors',
  'Spring 2025',
  'Lone Star College-CyFair, Honors College',
  'The purpose of this research is to understand how superstitions continue to influence human behavior in modern society, examining the psychological behavior that drives people to believe in them. Superstitions have existed across cultures for centuries, often rooted in fear, religion, or folklore. While many originate from historical events or ancient beliefs, they have evolved into everyday habits that still guide behavior and decision-making. A qualitative and historical analysis was conducted by examining cultural folklore and psychological interpretations, tracing recurring patterns to reveal how superstitions continue to shape behavior across time and cultures. This research concludes that superstitions persist not because people believe in them literally, but because they offer emotional relief, familiarity, and a sense of control in uncertain situations.',
  '',
  'assets/research/persistence-of-superstition-SPCHH1315-Spring2025.pdf',
  80
);

-- ---- AWARDS --------------------------------------------------------------
-- College awards below are the ones already on your site — adjust the terms
-- if any are wrong, and add any that are missing.
delete from public.awards;
insert into public.awards (title, org, term, group_label, order_index) values
  ('Jim Brown Political Science Scholar Award', 'Lone Star College-CyFair', '2025', 'College', 10),
  ('Honors Chancellor Fellows', 'Lone Star College', '2023 – 2025', 'College', 20),
  ('President''s List', 'Lone Star College-CyFair', '', 'College', 30),
  ('Dean''s List', 'Lone Star College-CyFair', '', 'College', 40),
  ('Transfer Excellence Scholarship', 'University of Houston', '', 'College', 50),
  ('Distinguished Honor Roll', 'Cypress Park High School — Top 10% of class', '', 'High School', 60),
  ('Most Outstanding Percussionist', 'CyPark Marching Band', '', 'High School', 70);
