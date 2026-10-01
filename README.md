# University Student Portal

A front-end prototype of a university student portal, built with HTML, CSS and JavaScript from the paper and screenshot prototype. A student signs in, opens a service from the home page and completes tasks such as registering for a class or paying a balance.

## Run the app

Open `index.html` in a current browser. Sign in with any user name and a password of at least six characters. No installation, external library or build step is needed.

## Things to try

The sample student, Yogesh Rana, starts with a $450 balance and a class schedule that includes Biology on Mon/Wed 10:30–11:45 AM.

1. **Financial hold.** Go to Academic > Register Class, open DB 210 and register for the evening section. Registration is blocked by the hold. Select **View balance**, confirm the payment, then **Continue registration**.
2. **Schedule conflict.** Open PSY 101 and register for Section 01. It overlaps with Biology. Select **Other sections** and register for Section 02, then **View schedule**.
3. **Other services.** Every home and Academic tile opens a working page: grades, transcript requests, degree progress, advising bookings, account, housing, library, support tickets, scholarships, fees and campus events.

**Reset demo data** in the footer restores the hold and the original schedule so both scenarios can be repeated.

## Files

- `index.html` contains the sign-in form and the portal shell (header, breadcrumb, footer).
- `styles.css` defines the layout, tiles, cards and responsive rules.
- `app.js` holds the sample data, hash-based routing, page rendering and actions.

## Pages and controls

The app has **22 unique pages**: the sign-in page plus 21 pages inside the portal.

| Area | Pages | Count |
|---|---|---|
| Sign-in | Sign in | 1 |
| Menus | Home, Academic | 2 |
| Course registration | Find a course, Course sections, Registration on hold, Schedule conflict, Registration successful | 5 |
| Academic | My class schedule, Grades, Request transcript, Degree Works, Academic advising | 5 |
| Billing | Fees & payments, Pay your balance, Payment received | 3 |
| Other services | Account, Housing, Library, Support, Scholarship, Campus events | 6 |

The app uses **53 distinct controls** of 7 types. A control that repeats for each item in a list, such as the Register button shown for every section, is counted once.

| Control | Type | Count |
|---|---|---|
| Text inputs (user name, recipient, subject) | `input type="text"` | 3 |
| Password input | `input type="password"` | 1 |
| Course search box | `input type="search"` | 1 |
| Dropdowns (copy type, delivery, area, topic) | `select` | 4 |
| Multi-line text boxes (maintenance details, ticket details) | `textarea` | 2 |
| Action buttons (Sign In, Register, Drop, Confirm payment, RSVP, Dark/Light, Log Out and others) | `button` | 17 |
| Navigation tiles (9 on Home, 6 on Academic) | link | 15 |
| Navigation buttons (View section, View balance, Other sections, View schedule and others) | link | 7 |
| Header and breadcrumb links (portal logo, Home, breadcrumb trail) | link | 3 |

## Prototype limits

Sign-in checks input format only; there is no real authentication, and passwords are not saved. All courses, grades, charges and people are fictional. Payments are simulated. Changes are stored in this browser's localStorage and do not sync anywhere.
