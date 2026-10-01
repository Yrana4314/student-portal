"use strict";

const STORAGE_KEY = "student-portal-prototype-v1";
const TERM = "Fall 2026";

const student = {
  name: "Yogesh Rana",
  id: "S-2048117",
  program: "B.S. Information Technology",
  year: "Sophomore",
  email: "yogesh.rana@university.example",
  advisor: "Dr. Helen Ortiz"
};

const icons = {
  cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  headset: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/><path d="M6 15h3"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  register: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 17v-6"/>',
  chart: '<path d="M3 20h18"/><path d="M6 20v-6"/><path d="M12 20V4"/><path d="M18 20V10"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  advising: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M16 3h6v5h-3l-2 2V8h-1z"/>'
};

// Times are minutes after midnight so sections can be compared for overlap.
const catalog = [
  { code: "PSY 101", title: "Introduction to Psychology", sections: [
    { id: "PSY101-01", label: "Section 01", days: ["Mon", "Wed"], start: 600, end: 675, room: "Hall B 204", instructor: "Dr. L. Moreno" },
    { id: "PSY101-02", label: "Section 02", days: ["Tue", "Thu"], start: 780, end: 855, room: "Hall B 110", instructor: "Dr. L. Moreno" }
  ]},
  { code: "DB 210", title: "Database Systems", sections: [
    { id: "DB210-EV", label: "Evening section", days: ["Tue"], start: 1080, end: 1245, room: "Tech Center 301", instructor: "Prof. A. Nwosu" },
    { id: "DB210-02", label: "Section 02", days: ["Fri"], start: 540, end: 705, room: "Tech Center 301", instructor: "Prof. A. Nwosu" }
  ]},
  { code: "BIO 110", title: "Biology", sections: [
    { id: "BIO110-01", label: "Section 01", days: ["Mon", "Wed"], start: 630, end: 705, room: "Science 120", instructor: "Dr. P. Lindqvist" }
  ]},
  { code: "ENG 102", title: "College Composition II", sections: [
    { id: "ENG102-01", label: "Section 01", days: ["Tue", "Thu"], start: 540, end: 615, room: "Hall A 015", instructor: "Prof. R. Okafor" }
  ]},
  { code: "MAT 201", title: "Statistics", sections: [
    { id: "MAT201-01", label: "Section 01", days: ["Mon", "Wed"], start: 780, end: 855, room: "Hall C 310", instructor: "Dr. S. Tanaka" }
  ]},
  { code: "ART 105", title: "Drawing Fundamentals", sections: [
    { id: "ART105-01", label: "Section 01", days: ["Fri"], start: 780, end: 945, room: "Studio 2", instructor: "Prof. M. Delgado" }
  ]},
  { code: "HIS 120", title: "World History Since 1500", sections: [
    { id: "HIS120-01", label: "Section 01", days: ["Tue", "Thu"], start: 660, end: 735, room: "Hall A 220", instructor: "Dr. J. Whitfield" },
    { id: "HIS120-02", label: "Section 02", days: ["Mon", "Wed"], start: 900, end: 975, room: "Hall A 220", instructor: "Dr. J. Whitfield" }
  ]}
];

const charges = [
  ["Fall 2026 tuition", 4200],
  ["Lab fee", 150],
  ["Technology fee", 100],
  ["Merit scholarship credit", -2000],
  ["Payment received Aug 15, 2026", -2000]
];
const HOLD_AMOUNT = charges.reduce((sum, [, amount]) => sum + amount, 0);

const grades = [
  { term: "Spring 2026", courses: [["ENG 101", "College Composition I", 3, "A-"], ["MAT 110", "College Algebra", 3, "B+"], ["CS 120", "Programming Fundamentals", 3, "A"], ["COM 100", "Public Speaking", 3, "B"], ["SOC 101", "Introduction to Sociology", 3, "A-"]] },
  { term: "Fall 2025", courses: [["CS 101", "Introduction to Computing", 3, "A"], ["MAT 105", "Quantitative Reasoning", 3, "B"], ["HUM 110", "Introduction to Humanities", 3, "B+"], ["SCI 100", "Environmental Science", 3, "A-"], ["UNV 100", "First-Year Seminar", 3, "A"]] }
];
const gradePoints = { "A": 4, "A-": 3.7, "B+": 3.3, "B": 3, "B-": 2.7, "C+": 2.3, "C": 2 };

const requirements = [["General education", 18, 36], ["Major core", 9, 48], ["Electives", 3, 36]];

const loans = [
  { id: "l1", title: "Database System Concepts", due: "Oct 9, 2026" },
  { id: "l2", title: "Thinking, Fast and Slow", due: "Oct 14, 2026" },
  { id: "l3", title: "The Elements of Style", due: "Oct 21, 2026" }
];

const scholarships = [
  { id: "s1", name: "STEM Excellence Award", amount: 1500, deadline: "Nov 1, 2026" },
  { id: "s2", name: "Community Service Grant", amount: 750, deadline: "Nov 15, 2026" },
  { id: "s3", name: "International Student Scholarship", amount: 2500, deadline: "Dec 1, 2026" }
];

const events = [
  { id: "e1", name: "Fall Career Fair", when: "Oct 8, 2026 · 10:00 AM", where: "Student Union Ballroom" },
  { id: "e2", name: "Midterm Study Night", when: "Oct 13, 2026 · 6:00 PM", where: "Library, Level 2" },
  { id: "e3", name: "International Food Festival", when: "Oct 22, 2026 · 12:00 PM", where: "Main Quad" },
  { id: "e4", name: "Hackathon Kickoff", when: "Nov 6, 2026 · 5:00 PM", where: "Tech Center Atrium" }
];

const advisingSlots = ["Mon, Oct 5 · 10:00 AM", "Wed, Oct 7 · 2:30 PM", "Thu, Oct 8 · 11:00 AM", "Tue, Oct 13 · 3:00 PM"];

const state = loadState();
let courseQuery = "";
let toastTimer;

const authView = document.querySelector("#authView");
const appView = document.querySelector("#appView");
const main = document.querySelector("#mainContent");
const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const toast = document.querySelector("#toast");

function defaultState() {
  return {
    session: false,
    balance: HOLD_AMOUNT,
    enrolled: ["BIO110-01", "ENG102-01", "MAT201-01"],
    pending: "",
    payments: [],
    renewed: [],
    applied: [],
    rsvps: [],
    appointment: "",
    tickets: [],
    maintenance: [],
    transcripts: []
  };
}

function loadState() {
  const fallback = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return fallback;
    const loaded = { ...fallback };
    Object.keys(fallback).forEach((key) => {
      const value = saved[key];
      if (Array.isArray(fallback[key]) ? Array.isArray(value) : typeof value === typeof fallback[key]) loaded[key] = value;
    });
    loaded.enrolled = [...new Set(loaded.enrolled.filter((id) => findSection(id)))];
    if (!findSection(loaded.pending)) loaded.pending = "";
    if (!(loaded.balance >= 0)) loaded.balance = fallback.balance;
    return loaded;
  } catch {
    return fallback;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    document.querySelector("#storageStatus").hidden = true;
    return true;
  } catch {
    document.querySelector("#storageStatus").hidden = false;
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
}

function money(amount) {
  return `${amount < 0 ? "−" : ""}$${Math.abs(amount).toLocaleString("en-US")}`;
}

function today() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2600);
}

function formatRange(start, end) {
  const period = (time) => (time >= 720 ? "PM" : "AM");
  const clock = (time) => `${Math.floor(time / 60) % 12 || 12}:${String(time % 60).padStart(2, "0")}`;
  return period(start) === period(end)
    ? `${clock(start)}–${clock(end)} ${period(end)}`
    : `${clock(start)} ${period(start)}–${clock(end)} ${period(end)}`;
}

function sectionTime(section) {
  return `${section.days.join("/")} ${formatRange(section.start, section.end)}`;
}

function courseKey(course) {
  return course.code.replace(" ", "");
}

function findSection(id) {
  for (const course of catalog) {
    const section = course.sections.find((item) => item.id === id);
    if (section) return { course, section };
  }
  return null;
}

function enrolledSections() {
  return state.enrolled.map(findSection).filter(Boolean);
}

function findConflict(section) {
  return enrolledSections().find(({ section: other }) =>
    other.id !== section.id && other.days.some((day) => section.days.includes(day)) && section.start < other.end && other.start < section.end);
}

function hasHold() {
  return state.balance > 0;
}

/* Sign-in */

function setFieldError(input, message) {
  input.classList.toggle("is-invalid", Boolean(message));
  input.setAttribute("aria-invalid", String(Boolean(message)));
  const error = document.querySelector(`#${input.id}Error`);
  error.textContent = message;
  input.setAttribute("aria-describedby", error.id);
}

function validateLogin() {
  const usernameOkay = usernameInput.value.trim().length >= 3;
  const passwordOkay = passwordInput.value.length >= 6;
  setFieldError(usernameInput, usernameOkay ? "" : "Enter your user name.");
  setFieldError(passwordInput, passwordOkay ? "" : "Use at least six characters.");
  return usernameOkay && passwordOkay;
}

function showApp() {
  authView.hidden = true;
  appView.hidden = false;
  document.querySelector("#studentName").textContent = student.name;
  render();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateLogin()) {
    loginForm.querySelector('[aria-invalid="true"]').focus();
    return;
  }
  loginForm.reset();
  document.querySelector("#loginStatus").textContent = "";
  state.session = true;
  saveState();
  if (location.hash !== "#/home") history.replaceState(null, "", "#/home");
  showApp();
});

[usernameInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => setFieldError(input, ""));
});

document.querySelector("#forgotPassword").addEventListener("click", () => {
  document.querySelector("#loginStatus").textContent = "Password reset is not part of this demo. Any password of at least six characters works.";
});

function logout() {
  state.session = false;
  const saved = saveState();
  appView.hidden = true;
  authView.hidden = false;
  document.title = "University Student Portal";
  document.querySelector("#loginStatus").textContent = saved
    ? "You have been logged out."
    : "Signed out for this visit. Device storage could not be updated, so reloading may reopen the saved demo session.";
  usernameInput.focus();
}

/* Page building blocks */

function heading(title, status = "", statusClass = "") {
  return `<div class="page-heading"><h1>${escapeHtml(title)}</h1>${status ? `<span class="status ${statusClass}">${escapeHtml(status)}</span>` : ""}</div>`;
}

function tileGrid(tiles) {
  return `<ul class="tile-grid">${tiles.map(([path, iconName, label, hint]) => `
    <li><a class="tile" href="#/${path}">${icon(iconName)}<span class="tile__label">${label}</span>${hint ? `<span class="tile__hint">${hint}</span>` : ""}</a></li>`).join("")}</ul>`;
}

function splitCard({ panelTitle, panelLines, title, sub, actions, alert = false }) {
  return `
    <section class="card card--split">
      <div class="panel ${alert ? "panel--alert" : ""}">
        <p><strong>${escapeHtml(panelTitle)}</strong></p>
        ${panelLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </div>
      <div class="card__body">
        <h2>${escapeHtml(title)}</h2>
        <p class="muted">${escapeHtml(sub)}</p>
        <div class="card__actions">${actions}</div>
      </div>
    </section>`;
}

function listForm(list, fields, submitLabel) {
  return `
    <form data-form="${list}" novalidate>
      <div class="form-grid">${fields.map(({ name, label, options, textarea }) => `
        <div class="field ${textarea ? "field--full" : ""}">
          <label for="${list}-${name}">${label}</label>
          ${options
            ? `<select id="${list}-${name}" name="${name}">${options.map((option) => `<option>${option}</option>`).join("")}</select>`
            : textarea
              ? `<textarea id="${list}-${name}" name="${name}" rows="3" maxlength="300" required></textarea>`
              : `<input id="${list}-${name}" name="${name}" maxlength="80" required>`}
        </div>`).join("")}
      </div>
      <div class="form-footer">
        <p class="form-status" role="status" aria-live="polite"></p>
        <button class="button" type="submit">${submitLabel}</button>
      </div>
    </form>`;
}

function submittedList(list, title, describe) {
  if (!state[list].length) return "";
  return `<section class="card"><h2>${title}</h2>${state[list].map((item) => `
    <div class="row"><p>${describe(item)}</p><span class="status">${escapeHtml(item.date)}</span></div>`).join("")}</section>`;
}

function toggleButton(list, id, onLabel, offLabel) {
  const active = state[list].includes(id);
  return `<button class="button ${active ? "button--secondary" : ""}" type="button" data-action="toggle" data-list="${list}" data-id="${id}" aria-pressed="${active}">${active ? onLabel : offLabel}</button>`;
}

/* Pages */

function homePage() {
  return `<h1 class="sr-only">Home</h1>` + tileGrid([
    ["academic", "cap", "Academic"],
    ["account", "user", "Account"],
    ["housing", "home", "Housing"],
    ["library", "book", "Library"],
    ["support", "headset", "Support"],
    ["scholarship", "award", "Scholarship"],
    ["billing", "card", "Fees &amp; Payments"],
    ["academic/schedule", "calendar", "Class Schedule"],
    ["events", "flag", "Campus Events"]
  ]);
}

function academicPage() {
  return `<h1 class="sr-only">Academic</h1>` + tileGrid([
    ["academic/register", "register", "Register Class", "Search &amp; add / drop classes"],
    ["academic/schedule", "calendar", "My Class Schedule", "Weekly timetable &amp; rooms"],
    ["academic/grades", "chart", "Grades", "View grades &amp; GPA by term"],
    ["academic/transcript", "file", "Request Transcript", "Official / unofficial copies"],
    ["academic/degree", "check", "Degree Works", "Degree audit &amp; progress"],
    ["academic/advising", "advising", "Academic Advising", "Book an advisor meeting"]
  ]);
}

function courseResults() {
  const query = courseQuery.trim().toLowerCase();
  const results = catalog.filter((course) => !query || `${course.code} ${courseKey(course)} ${course.title}`.toLowerCase().includes(query));
  if (!results.length) return `<div class="card"><p class="muted">No courses match “${escapeHtml(courseQuery)}”. Try a course code such as PSY 101 or a title keyword.</p></div>`;
  return results.map((course) => {
    const enrolled = course.sections.find((section) => state.enrolled.includes(section.id));
    const [first, ...others] = course.sections;
    const note = enrolled ? `Enrolled in ${enrolled.label}` : others.length ? `${others.map((section) => section.label).join(", ")} also available` : "One section offered";
    return splitCard({
      panelTitle: "Search",
      panelLines: [`${course.code} | ${TERM}`, note],
      title: `${course.code}  ${course.title}`,
      sub: `${first.label} • ${sectionTime(first)}`,
      actions: `<a class="button" href="#/academic/register/sections/${courseKey(course)}">View section</a>`
    });
  }).join("");
}

function registerPage() {
  return `
    ${heading("Find a course", hasHold() ? "Hold on account" : "", "status--alert")}
    <form class="search-bar" role="search" data-search>
      <label class="sr-only" for="courseSearch">Search courses</label>
      <input id="courseSearch" type="search" placeholder="Course code or title, e.g. PSY 101" value="${escapeHtml(courseQuery)}">
    </form>
    <div id="courseResults" aria-live="polite">${courseResults()}</div>`;
}

function sectionsPage(key) {
  const course = catalog.find((item) => courseKey(item) === key);
  if (!course) return redirect("academic/register");
  return `
    ${heading(`${course.code}  ${course.title}`)}
    <p class="lead">${TERM} · 3 credits</p>
    <section class="card">${course.sections.map((section) => {
      const enrolled = state.enrolled.includes(section.id);
      return `
        <div class="row">
          <div><p><strong>${section.label}</strong> • ${sectionTime(section)}</p><p class="muted">${section.room} · ${section.instructor}</p></div>
          ${enrolled
            ? `<span><span class="status status--ok">Enrolled</span> <button class="button button--secondary" type="button" data-action="drop" data-id="${section.id}">Drop</button></span>`
            : `<button class="button" type="button" data-action="register" data-id="${section.id}">Register</button>`}
        </div>`;
    }).join("")}</section>`;
}

function holdPage() {
  const pending = findSection(state.pending);
  if (!hasHold() || !pending) return redirect("academic/register");
  const { course, section } = pending;
  return heading("Registration on hold", "Action needed") + splitCard({
    alert: true,
    panelTitle: "Account alert",
    panelLines: [`Outstanding balance: ${money(state.balance)}`, "Pay to clear the hold"],
    title: `${course.code}  ${section.label} • ${sectionTime(section)}`,
    sub: "Financial hold prevents enrollment",
    actions: `<a class="button" href="#/billing/pay">View balance</a>`
  });
}

function conflictPage(id) {
  const found = findSection(id);
  const conflict = found && findConflict(found.section);
  if (!conflict) return redirect("academic/register");
  const { course, section } = found;
  const alternative = course.sections.find((other) => other.id !== section.id && !findConflict(other));
  return heading("Schedule conflict", "Action needed") + splitCard({
    panelTitle: "Your schedule",
    panelLines: [`${conflict.course.title}  ${conflict.section.days.join("/")}`, formatRange(conflict.section.start, conflict.section.end)],
    title: `${section.label} overlaps with ${conflict.course.title}`,
    sub: alternative ? `Choose ${alternative.label} to avoid the conflict` : "No other section of this course fits your schedule",
    actions: `<a class="button" href="#/academic/register/sections/${courseKey(course)}">Other sections</a>`
  });
}

function successPage(id) {
  const found = findSection(id);
  if (!found || !state.enrolled.includes(id)) return redirect("academic/register");
  const { course, section } = found;
  return `
    ${heading("Registration successful", "Confirmed", "status--ok")}
    <section class="card card__body">
      <h2>${course.code} • ${section.label}</h2>
      <p class="muted">${sectionTime(section)} • Added to schedule</p>
      <div class="card__actions"><a class="button" href="#/academic/schedule">View schedule</a></div>
    </section>`;
}

function schedulePage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const classes = enrolledSections();
  return `
    ${heading("My class schedule")}
    <p class="lead">${TERM} · ${classes.length} ${classes.length === 1 ? "class" : "classes"} · ${classes.length * 3} credits</p>
    <div class="timetable">${days.map((day) => `
      <section class="timetable__day">
        <h2>${day}</h2>
        ${classes.filter(({ section }) => section.days.includes(day)).sort((a, b) => a.section.start - b.section.start).map(({ course, section }) => `
          <div class="timetable__class"><strong>${course.code}</strong>${course.title}<br>${formatRange(section.start, section.end)}<br>${section.room}</div>`).join("") || `<p class="muted">No classes</p>`}
      </section>`).join("")}
    </div>
    <div class="card__actions"><a class="button" href="#/academic/register">Add / drop classes</a></div>`;
}

function gpa(courses) {
  const credits = courses.reduce((sum, course) => sum + course[2], 0);
  return (courses.reduce((sum, course) => sum + course[2] * gradePoints[course[3]], 0) / credits).toFixed(2);
}

function gradesPage() {
  return `
    ${heading("Grades", `Cumulative GPA ${gpa(grades.flatMap((term) => term.courses))}`)}
    ${grades.map((term) => `
      <section class="card">
        <h2>${term.term}</h2>
        <div class="table-wrap"><table>
          <thead><tr><th scope="col">Course</th><th scope="col">Title</th><th scope="col" class="num">Credits</th><th scope="col" class="num">Grade</th></tr></thead>
          <tbody>${term.courses.map(([code, title, credits, grade]) => `<tr><td>${code}</td><td>${title}</td><td class="num">${credits}</td><td class="num">${grade}</td></tr>`).join("")}</tbody>
          <tfoot><tr><td colspan="3">Term GPA</td><td class="num">${gpa(term.courses)}</td></tr></tfoot>
        </table></div>
      </section>`).join("")}`;
}

function transcriptPage() {
  return `
    ${heading("Request transcript")}
    <section class="card">
      ${listForm("transcripts", [
        { name: "type", label: "Copy type", options: ["Unofficial (free)", "Official ($10)"] },
        { name: "delivery", label: "Delivery", options: ["Download to portal", "Email PDF", "Mail paper copy"] },
        { name: "recipient", label: "Recipient name" }
      ], "Submit request")}
    </section>
    ${submittedList("transcripts", "Your requests", (item) => `${escapeHtml(item.type)} · ${escapeHtml(item.delivery)} · for ${escapeHtml(item.recipient)}`)}`;
}

function degreePage() {
  const done = requirements.reduce((sum, item) => sum + item[1], 0);
  const total = requirements.reduce((sum, item) => sum + item[2], 0);
  const inProgress = state.enrolled.length * 3;
  const bar = (value, max) => `<div class="progress" role="img" aria-label="${value} of ${max} credits"><span style="width:${Math.round(value / max * 100)}%"></span></div>`;
  return `
    ${heading("Degree Works", `${Math.round(done / total * 100)}% complete`)}
    <p class="lead">${student.program} · ${done} of ${total} credits earned · ${inProgress} in progress this term</p>
    <section class="card">
      ${bar(done, total)}
      ${requirements.map(([name, value, max]) => `<div class="row"><p>${name}</p><span class="muted">${value} / ${max} credits</span></div>${bar(value, max)}`).join("")}
    </section>`;
}

function advisingPage() {
  return `
    ${heading("Academic advising", state.appointment ? "Meeting booked" : "", "status--ok")}
    <p class="lead">Your advisor is ${student.advisor}, Office 214, Hall A.</p>
    <section class="card">
      <h2>Available meeting times</h2>
      ${advisingSlots.map((slot) => {
        const booked = state.appointment === slot;
        return `<div class="row"><p>${slot}</p><button class="button ${booked ? "button--secondary" : ""}" type="button" data-action="book" data-id="${slot}" aria-pressed="${booked}">${booked ? "Cancel booking" : "Book"}</button></div>`;
      }).join("")}
    </section>`;
}

function accountPage() {
  return `
    ${heading("Account")}
    <section class="card">
      <h2>Student profile</h2>
      <dl class="details">
        <dt>Name</dt><dd>${student.name}</dd>
        <dt>Student ID</dt><dd>${student.id}</dd>
        <dt>Program</dt><dd>${student.program}</dd>
        <dt>Class standing</dt><dd>${student.year}</dd>
        <dt>Email</dt><dd>${student.email}</dd>
        <dt>Advisor</dt><dd>${student.advisor}</dd>
      </dl>
    </section>
    <section class="card">
      <h2>Holds</h2>
      ${hasHold()
        ? `<div class="row"><p>Financial hold: outstanding balance of ${money(state.balance)} blocks registration.</p><a class="button" href="#/billing/pay">Pay balance</a></div>`
        : `<p class="muted">No holds on your account.</p>`}
    </section>`;
}

function billingPage() {
  const rows = [...charges, ...state.payments.map((payment) => [`Payment received ${payment.date}`, -payment.amount])];
  return `
    ${heading("Fees & payments", hasHold() ? "Balance due" : "Paid in full", hasHold() ? "status--alert" : "status--ok")}
    <section class="card">
      <h2>${TERM} statement</h2>
      <div class="table-wrap"><table>
        <thead><tr><th scope="col">Item</th><th scope="col" class="num">Amount</th></tr></thead>
        <tbody>${rows.map(([label, amount]) => `<tr><td>${escapeHtml(label)}</td><td class="num">${money(amount)}</td></tr>`).join("")}</tbody>
        <tfoot><tr><td>Balance due</td><td class="num">${money(state.balance)}</td></tr></tfoot>
      </table></div>
      ${hasHold() ? `<div class="card__actions"><a class="button" href="#/billing/pay">Pay balance</a></div>` : ""}
    </section>`;
}

function payPage() {
  if (!hasHold()) return redirect("billing");
  return heading("Pay your balance") + splitCard({
    panelTitle: "Payment details",
    panelLines: ["Bank account ending 4821", "Receipt sent to portal"],
    title: `Amount due: ${money(state.balance)} • Total: ${money(state.balance)}`,
    sub: "Payment removes the registration hold",
    actions: `<button class="button" type="button" data-action="pay">Confirm payment</button>`
  });
}

function receiptPage() {
  const payment = state.payments.at(-1);
  if (!payment) return redirect("billing");
  const pending = findSection(state.pending);
  return `
    ${heading("Payment received", "Confirmed", "status--ok")}
    <section class="card card__body">
      <h2>${money(payment.amount)} paid • ${escapeHtml(payment.date)}</h2>
      <p class="muted">Bank account ending 4821 • Registration hold removed</p>
      <div class="card__actions">
        <a class="button button--secondary" href="#/billing">View statement</a>
        ${pending ? `<button class="button" type="button" data-action="register" data-id="${pending.section.id}">Continue registration</button>` : ""}
      </div>
    </section>`;
}

function housingPage() {
  return `
    ${heading("Housing")}
    <section class="card">
      <h2>${TERM} assignment</h2>
      <dl class="details">
        <dt>Residence</dt><dd>Maple Hall, Room 214</dd>
        <dt>Room type</dt><dd>Double</dd>
        <dt>Roommate</dt><dd>Daniel Osei</dd>
        <dt>Meal plan</dt><dd>14 meals per week</dd>
        <dt>Move-out</dt><dd>Dec 18, 2026</dd>
      </dl>
    </section>
    <section class="card">
      <h2>Maintenance request</h2>
      ${listForm("maintenance", [
        { name: "area", label: "Area", options: ["Room", "Bathroom", "Common area", "Laundry"] },
        { name: "details", label: "What needs attention?", textarea: true }
      ], "Send request")}
    </section>
    ${submittedList("maintenance", "Your requests", (item) => `${escapeHtml(item.area)}: ${escapeHtml(item.details)}`)}`;
}

function libraryPage() {
  return `
    ${heading("Library")}
    <p class="lead">Open today 8:00 AM–11:00 PM · Study rooms on Level 2</p>
    <section class="card">
      <h2>Checked-out items</h2>
      ${loans.map((loan) => {
        const renewed = state.renewed.includes(loan.id);
        return `<div class="row"><div><p><strong>${loan.title}</strong></p><p class="muted">Due ${loan.due}${renewed ? " · renewed for 14 more days" : ""}</p></div>
          <button class="button" type="button" data-action="toggle" data-list="renewed" data-id="${loan.id}" ${renewed ? "disabled" : ""}>${renewed ? "Renewed" : "Renew"}</button></div>`;
      }).join("")}
    </section>`;
}

function supportPage() {
  return `
    ${heading("Support")}
    <div class="cards-2">
      <section class="card"><h2>IT Help Desk</h2><p class="muted">Portal, Wi-Fi and email problems<br>Mon–Fri 8:00 AM–8:00 PM · Tech Center 101</p></section>
      <section class="card"><h2>Student Services</h2><p class="muted">Registration, records and billing questions<br>Mon–Fri 9:00 AM–5:00 PM · Hall A lobby</p></section>
    </div>
    <section class="card">
      <h2>Open a support ticket</h2>
      ${listForm("tickets", [
        { name: "topic", label: "Topic", options: ["Portal access", "Registration", "Billing", "Housing", "Other"] },
        { name: "subject", label: "Subject" },
        { name: "details", label: "Describe the problem", textarea: true }
      ], "Submit ticket")}
    </section>
    ${submittedList("tickets", "Your tickets", (item) => `<strong>${escapeHtml(item.subject)}</strong> · ${escapeHtml(item.topic)}`)}`;
}

function scholarshipPage() {
  return `
    ${heading("Scholarship")}
    <section class="card">
      <h2>Awarded</h2>
      <div class="row"><p><strong>Merit scholarship</strong><br><span class="muted">Applied to your ${TERM} statement</span></p><span>${money(2000)}</span></div>
    </section>
    <section class="card">
      <h2>Open applications</h2>
      ${scholarships.map((item) => `
        <div class="row"><div><p><strong>${item.name}</strong> · ${money(item.amount)}</p><p class="muted">Deadline ${item.deadline}</p></div>
        ${toggleButton("applied", item.id, "Withdraw application", "Apply")}</div>`).join("")}
    </section>`;
}

function eventsPage() {
  return `
    ${heading("Campus events", state.rsvps.length ? `${state.rsvps.length} RSVP${state.rsvps.length === 1 ? "" : "s"}` : "")}
    <section class="card">
      ${events.map((item) => `
        <div class="row"><div><p><strong>${item.name}</strong></p><p class="muted">${item.when} · ${item.where}</p></div>
        ${toggleButton("rsvps", item.id, "Cancel RSVP", "RSVP")}</div>`).join("")}
    </section>`;
}

/* Routing */

const pages = {
  "home": { crumb: "Home", render: homePage },
  "academic": { crumb: "Academic", parent: "home", render: academicPage },
  "academic/register": { crumb: "Register", parent: "academic", render: registerPage },
  "academic/register/sections": { crumb: "Register", parent: "academic", render: sectionsPage },
  "academic/register/hold": { crumb: "Register", parent: "academic", render: holdPage },
  "academic/register/conflict": { crumb: "Register", parent: "academic", render: conflictPage },
  "academic/register/success": { crumb: "Register", parent: "academic", render: successPage },
  "academic/schedule": { crumb: "Class Schedule", parent: "academic", render: schedulePage },
  "academic/grades": { crumb: "Grades", parent: "academic", render: gradesPage },
  "academic/transcript": { crumb: "Transcript", parent: "academic", render: transcriptPage },
  "academic/degree": { crumb: "Degree Works", parent: "academic", render: degreePage },
  "academic/advising": { crumb: "Advising", parent: "academic", render: advisingPage },
  "account": { crumb: "Account", parent: "home", render: accountPage },
  "housing": { crumb: "Housing", parent: "home", render: housingPage },
  "library": { crumb: "Library", parent: "home", render: libraryPage },
  "support": { crumb: "Support", parent: "home", render: supportPage },
  "scholarship": { crumb: "Scholarship", parent: "home", render: scholarshipPage },
  "billing": { crumb: "Billing", parent: "home", render: billingPage },
  "billing/pay": { crumb: "Pay", parent: "billing", render: payPage },
  "billing/receipt": { crumb: "Pay", parent: "billing", render: receiptPage },
  "events": { crumb: "Campus Events", parent: "home", render: eventsPage }
};

function go(path) {
  if (location.hash === `#/${path}`) render();
  else location.hash = `#/${path}`;
}

// Used by pages whose precondition no longer holds; the hashchange re-renders.
function redirect(path) {
  location.replace(`#/${path}`);
  return null;
}

function currentRoute() {
  const path = location.hash.replace(/^#\/?/, "");
  const key = Object.keys(pages).filter((item) => path === item || path.startsWith(`${item}/`)).sort((a, b) => b.length - a.length)[0];
  return key ? { key, param: path.slice(key.length + 1) } : null;
}

function renderBreadcrumb(key) {
  const trail = [];
  for (let item = key; item; item = pages[item].parent) trail.unshift(item);
  document.querySelector("#breadcrumb").innerHTML = trail.length < 2 ? "" : icon("cap") + trail.map((item, index) =>
    index === trail.length - 1
      ? `<span aria-current="page">${pages[item].crumb}</span>`
      : `<a href="#/${item}">${pages[item].crumb}</a><span aria-hidden="true">›</span>`).join("");
}

function render({ focus = false } = {}) {
  if (!state.session) return;
  const route = currentRoute();
  if (!route) return void redirect("home");
  const html = pages[route.key].render(route.param);
  if (html === null) return;
  main.innerHTML = html;
  renderBreadcrumb(route.key);
  const isHome = route.key === "home";
  document.querySelector("#backButton").hidden = isHome;
  document.querySelector("#homeLink").hidden = isHome;
  document.title = `${main.querySelector("h1").textContent.trim()} · University Student Portal`;
  if (focus) {
    main.focus();
    window.scrollTo(0, 0);
  }
}

window.addEventListener("hashchange", () => render({ focus: true }));

/* Actions */

function attemptRegister(id) {
  const found = findSection(id);
  if (!found) return;
  const { course, section } = found;
  if (state.enrolled.includes(id)) return go(`academic/register/success/${id}`);
  if (hasHold()) {
    state.pending = id;
    saveState();
    return go("academic/register/hold");
  }
  state.pending = "";
  if (findConflict(section)) {
    saveState();
    return go(`academic/register/conflict/${id}`);
  }
  // Registering for another section of the same course is a section change.
  state.enrolled = state.enrolled.filter((other) => !course.sections.some((item) => item.id === other));
  state.enrolled.push(id);
  saveState();
  go(`academic/register/success/${id}`);
}

const actions = {
  back: () => history.back(),
  logout,
  register: ({ id }) => attemptRegister(id),
  drop: ({ id }) => {
    const found = findSection(id);
    state.enrolled = state.enrolled.filter((item) => item !== id);
    saveState();
    render();
    showToast(`${found.course.code} ${found.section.label} dropped.`);
  },
  pay: () => {
    if (!hasHold()) return;
    state.payments.push({ amount: state.balance, date: today() });
    state.balance = 0;
    saveState();
    go("billing/receipt");
  },
  book: ({ id }) => {
    state.appointment = state.appointment === id ? "" : id;
    saveState();
    render();
    showToast(state.appointment ? `Meeting booked for ${id}.` : "Booking cancelled.");
  },
  toggle: ({ list, id }) => {
    const index = state[list].indexOf(id);
    if (index >= 0) state[list].splice(index, 1);
    else state[list].push(id);
    saveState();
    render();
  },
  reset: () => {
    if (!window.confirm("Reset all demo data? This restores the financial hold and the original schedule.")) return;
    Object.assign(state, defaultState(), { session: true });
    courseQuery = "";
    saveState();
    go("home");
    showToast("Demo data reset.");
  }
};

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (target && !target.disabled) actions[target.dataset.action](target.dataset);
});

main.addEventListener("input", (event) => {
  if (event.target.id === "courseSearch") {
    courseQuery = event.target.value;
    document.querySelector("#courseResults").innerHTML = courseResults();
  } else {
    event.target.classList.remove("is-invalid");
  }
});

main.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (!form.dataset.form) return;
  const entry = { date: today() };
  let firstInvalid = null;
  form.querySelectorAll("[name]").forEach((input) => {
    const value = input.value.trim();
    input.classList.toggle("is-invalid", !value);
    if (!value && !firstInvalid) firstInvalid = input;
    entry[input.name] = value;
  });
  if (firstInvalid) {
    form.querySelector(".form-status").textContent = "Fill in every field before submitting.";
    firstInvalid.focus();
    return;
  }
  state[form.dataset.form].unshift(entry);
  saveState();
  render();
  showToast("Request submitted.");
});

document.querySelectorAll("[data-icon]").forEach((element) => {
  element.innerHTML = icon(element.dataset.icon);
});

if (state.session) showApp();
