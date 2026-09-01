-- =========================================================================
-- SEED DATA
-- Run after schema.sql. This loads the same content that ships in
-- js/data.js as a fallback, so the two stay in sync on day one.
-- Safe to re-run: it clears each table first.
--
-- TO ADD SOMETHING LATER: you don't need this file again. Just add a new
-- row through the Supabase Table Editor (Table Editor -> pick the table
-- -> Insert row). It shows up on the site on the next page load, no
-- redeploy needed.
-- =========================================================================

truncate table public.profile, public.education, public.skills,
              public.experience, public.projects, public.research,
              public.awards restart identity;

-- ---- profile ----------------------------------------------------------------
insert into public.profile (id, name, tagline, location, email, linkedin_url, github_url, resume_updated, bio, personal_intro)
values (
  1,
  'Bowale Olufiade',
  'Management Information Systems student · University of Houston',
  'Houston, Texas',
  'olufiadeolabowale@gmail.com',
  'https://www.linkedin.com/in/olabowale-olufiade',
  'https://github.com/bowale-olufiade',
  '2026',
$bio$I'm a Management Information Systems student at the University of Houston's C.T. Bauer College of Business, and I care about data — finding it, cleaning it, and using it to think more clearly about a problem. I originally set out to become an accountant, but I started paying closer attention to how fast AI was reshaping business, and I wanted a career that would grow alongside it instead of being replaced by it. MIS let me stay in business while building the technical and analytical side that field is going to need.

My path started at Lone Star College, where a full-ride Honors College scholarship let me dig into research the way I wanted to — past the surface-level answer, into the why behind it. As an Honors Lead, I was juggling my own coursework, workshops, and mentoring at the same time, and being new to college, I needed a system to keep it all straight. That need is what got me building trackers and small tools in the first place — and it hasn't stopped since.$bio$,
$pi$Outside of class and meetings, I'm usually in the gym. I've been skinny most of my life, and I'm working on changing that — consistently training but, for a long time, not eating in a way that matched it.$pi$
);

-- ---- education ----------------------------------------------------------
insert into public.education (institution, degree, note, start_date, end_date, order_index) values
('C.T. Bauer College of Business, University of Houston', 'B.A., Management Information Systems', 'GPA 4.0', '2025', 'Expected May 2027', 10),
($$Honors College at Lone Star College–CyFair$$, 'Honors Associate of Arts, Business Administration', 'Full-ride scholarship', 'Aug 2023', 'May 2025', 20);

-- ---- skills -----------------------------------------------------------------
insert into public.skills (category, item, order_index) values
('Technical', 'Excel (Data Analysis, PivotTables)', 10),
('Technical', 'Access', 11),
('Technical', 'Word', 12),
('Technical', 'PowerPoint', 13),
('Language', 'SQL (Oracle & MySQL)', 20),
('Language', 'DBeaver', 21),
('Professional', 'Data Analysis', 30),
('Professional', 'Research', 31),
('Professional', 'Problem-Solving', 32),
('Professional', 'Time Management', 33),
('Professional', 'Leadership', 34),
('Professional', 'Organization', 35);

-- ---- experience ---------------------------------------------------------
insert into public.experience (title, org, location, start_date, end_date, current, bullets, order_index) values
(
  'Vice President of Administration',
  'University of Houston, Residence Hall Association (RHA)',
  'Houston, TX', 'Aug 2026', 'Dec 2027', true,
$b1$Streamlined General Assembly processes by organizing agendas, legislation, and communications, enhancing meeting efficiency and participation across Hall Councils.
Managed and maintained centralized records — minutes, attendance, legislation — ensuring data accuracy, accessibility, and organizational continuity.
Facilitated cross-functional communication between RHA, campus departments, and student organizations while supporting executive decision-making and leadership operations.$b1$,
  10
),
(
  'Hall Council Administrator',
  'University of Houston, Residence Hall Association (RHA)',
  'Houston, TX', 'Sept 2025', 'Apr 2026', false,
$b2$Coordinated and documented hall council meetings, events, and initiatives to ensure smooth operations.
Oversaw event planning logistics, including budgeting, scheduling, and resource allocation.
Maintained organized records, reports, and photo documentation for all residence hall activities.$b2$,
  20
),
(
  'Honors Lead',
  'Lone Star College–CyFair, Honors College Leadership Program (HCLP)',
  'Cypress, TX', 'Sept 2023', 'May 2025', false,
$b3$Hosted 15+ student-led workshops and forums focused on student development and engagement.
Mentored peers and apprentices while promoting student engagement.
Worked alongside 9 lead partners while serving as a liaison between students and faculty.$b3$,
  30
),
(
  'Marching Band Drum Technician',
  'Cypress Park High School',
  'Cypress, TX', 'June 2022', 'Mar 2025', false,
$b4$Collaborated with the Band Director to train and develop a drumline of 9th–12th grade students, improving performance quality and consistency.
Instructed students in percussion techniques, fostering skill development in a high-performance environment.
Prepared students for regional, state, and national-level performances, contributing to competitive readiness.$b4$,
  40
);

-- ---- projects (category 'work' -> Projects tab, 'personal' -> Personal tab) --
insert into public.projects (title, description, link_url, link_label, tags, category, order_index) values
(
  'Assignment Tracker',
$p1$Since freshman year I've used a Google Sheets tracker to manage every assignment for the semester, pulled straight from the syllabus. I needed a solid way to stay organized with my time, keep up with coursework, and prep for tests, so I built this and color-coded the due dates — red if it's past due, yellow if it's due that day, green if it's more than a day out. It's kept me on track as a student, and I liked it enough that I shared the template with friends, who use it too.$p1$,
  'https://docs.google.com/spreadsheets/d/1fPbxekqLfqf7zL9QV2IWrpHCZeUkFwOdu8abqRjMR3Y/edit?usp=sharing',
  'View template', 'Google Sheets, Personal system', 'work', 10
),
(
  'Budget Sheet Tracker',
$p2$As Hall Council Administrator at UH, my team managed a $1,000 semester budget for dorm events and programs. I built a budget sheet in Word that automatically calculated how much we'd spent on each event and how much was left for everything else planned that semester — made it a lot easier to plan responsibly and avoid overspending.$p2$,
  '', '', 'Microsoft Word, Budgeting', 'work', 20
),
(
  'Office Hours Tracker',
$p3$As Vice President of the Residence Hall Association, exec members are required to log a set number of office hours each week, and the president needed a way to actually track that. I designed and built a web app that works like a time punch — members check in and out during office hours. I added a PIN so each member has to enter their own code (no one can check in or out for someone else), plus a CSV export for weeks that need manual correction.$p3$,
  'https://bowale-olufiade.github.io/RHA-Office-Hours/',
  'Open web app', 'Web app, CSV export, PIN auth', 'work', 30
),
(
  'Calorie Tracker',
$p4$A personal project: I'm consistent in the gym, but my eating wasn't matching that consistency, so I built a calorie tracker that calculates how much I need to eat per day based on my current weight, goal weight, and target date, then breaks that down into daily calorie and protein targets. I log meals as I go to stay on track, and I've noticed how much more deliberate my eating has become now that I'm holding myself to a number each day.$p4$,
  'https://bowale-olufiade.github.io/Calorie-Tracker-WebApp/',
  'Open web app', 'Web app, Personal, Health', 'personal', 40
);

-- ---- research -------------------------------------------------------------
insert into public.research (title, org, date_range, description, bullets, order_index) values
(
  'SAiD Institute Strategic Partnership Capstone',
  'C.T. Bauer College of Business, University of Houston',
  'Sept 2025 – Nov 2025',
  '',
$r1$Partnered with the SAiD Institute, a nonprofit promoting African Diaspora art and culture.
Collaborated with five other Bauer students to develop a sustainable organizational framework.
Conducted research on funding strategies and long-term planning to enhance community impact.$r1$,
  10
),
(
  'Research Foundations, Honors College',
  $$Lone Star College–CyFair$$,
  'Aug 2023 – May 2025',
$r2$The full-ride Honors College scholarship is where I built my research habits — learning to critical-think through a problem and look past the surface-level answer for real knowledge underneath. That grounding shaped how I approach every project since, academic or personal.$r2$,
  '',
  20
);

-- ---- awards -----------------------------------------------------------------
insert into public.awards (title, org, term, order_index) values
($$C.T. Bauer College of Business President's List$$, 'University of Houston', 'Spring 2026', 10),
($$C.T. Bauer College of Business Dean's List$$, 'University of Houston', 'Fall 2025', 20),
('Transfer Excellence Scholarship Award', 'University of Houston', 'Spring 2025', 30),
($$President's List$$, $$Lone Star College–CyFair$$, 'Fall 2024', 40),
('Honors Chancellor Fellows Scholarship Award', 'Lone Star College', 'Fall 2023', 50);
