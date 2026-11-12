import React, { useState, useEffect } from "react";

// --- Icons (Fully Inlined for Maximum Compatibility) ---

const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const UsersIcon = () => (
  <Icon>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);
const BookIcon = () => (
  <Icon>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Icon>
);
const SwordsIcon = () => (
  <Icon>
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" y1="19" x2="19" y2="13" />
    <line x1="16" y1="16" x2="20" y2="20" />
    <line x1="19" y1="21" x2="21" y2="19" />
    <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
    <line x1="5" y1="14" x2="9" y2="18" />
    <line x1="7" y1="17" x2="4" y2="20" />
    <line x1="3" y1="19" x2="5" y2="21" />
  </Icon>
);
const BulbIcon = () => (
  <Icon>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.3-2.7-6-6-6S6 4.7 6 8c0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </Icon>
);
const PlusIcon = () => (
  <Icon>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
);
const TrashIcon = () => (
  <Icon>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </Icon>
);
const BackIcon = () => (
  <Icon>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </Icon>
);
const SaveIcon = () => (
  <Icon>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </Icon>
);
const EditIcon = () => (
  <Icon>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </Icon>
);
const PlayIcon = () => (
  <Icon>
    <polygon points="5 3 19 12 5 21 5 3" />
  </Icon>
);
const PauseIcon = () => (
  <Icon>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </Icon>
);
const ResetIcon = () => (
  <Icon>
    <path d="M3 2v6h6" />
    <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
  </Icon>
);
const GearIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);
const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
);

// --- Initial Data ---

const INITIAL_SCENARIOS = [
  {
    id: "1",
    title: "The Crowded Beach",
    level: "A2",
    context:
      "It is a very hot Saturday in August. The beach is extremely crowded. One group of tourists has set up their towels right in front of another group, blocking their view of the ocean.",
    roles: [
      {
        id: "r1",
        name: "The Relaxed Tourist",
        objective:
          "You arrived early to get this spot. You want the new group to move somewhere else.",
        color: "bg-blue-100 text-blue-900 border-blue-300",
        hints: [
          { id: "h1", text: "I was here first" },
          { id: "h2", text: "Blocking the view" },
          { id: "h3", text: "Respect personal space" },
          { id: "h4", text: "Call the lifeguard" },
        ],
      },
      {
        id: "r2",
        name: "The Latecomer",
        objective:
          "There is nowhere else to sit. You want to stay right here and enjoy your music.",
        color: "bg-orange-100 text-orange-900 border-orange-300",
        hints: [
          { id: "h5", text: "Public beach" },
          { id: "h6", text: "It's just sand" },
          { id: "h7", text: "Be friendly" },
          { id: "h8", text: "We can share" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Restaurant Complaint",
    level: "B1",
    context:
      "A customer is unhappy with their soup at a fancy restaurant. The waiter needs to manage the situation without refunding the meal if possible.",
    roles: [
      {
        id: "r3",
        name: "The Angry Customer",
        objective:
          "Your soup is cold. You refuse to eat it and want it taken off the bill.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h9", text: "Ice cold" },
          { id: "h10", text: "Unacceptable service" },
          { id: "h11", text: "Speak to manager" },
          { id: "h12", text: "Refuse to pay" },
        ],
      },
      {
        id: "r4",
        name: "The Nervous Waiter",
        objective:
          "Apologize and offer to reheat it, but explain that refunds are against policy for eaten food.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h13", text: "Very sorry" },
          { id: "h14", text: "Reheat immediately" },
          { id: "h15", text: "Store policy" },
          { id: "h16", text: "Complimentary dessert?" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Library Dispute",
    level: "B1",
    context:
      "Two students are studying in the library. One is making noise with music and snacks",
    roles: [
      {
        id: "r5",
        name: "The Serious Student",
        objective: "You want silence to focus on your exam preparation.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h17", text: "Quiet zone" },
          { id: "h18", text: "Respect rules" },
          { id: "h19", text: "Disturbing concentration" },
          { id: "h20", text: "Report to librarian" },
        ],
      },
      {
        id: "r6",
        name: "The Relaxed Student",
        objective:
          "You want to enjoy your break and think the library rules are too strict.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h21", text: "Everyone needs a break" },
          { id: "h22", text: "It's not that loud" },
          { id: "h23", text: "Sharing space" },
          { id: "h24", text: "Chill out" },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "The Group Project Conflict",
    level: "C1",
    context:
      "Two classmates are working on a group project. One wants to divide tasks equally, the other prefers to do it all alone.",
    roles: [
      {
        id: "r7",
        name: "The Team Player",
        objective: "You want everyone to contribute fairly to the project.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h25", text: "Equal responsibility" },
          { id: "h26", text: "Teamwork" },
          { id: "h27", text: "Sharing ideas" },
          { id: "h28", text: "Not fair" },
        ],
      },
      {
        id: "r8",
        name: "The Independent Worker",
        objective:
          "You want to do the project alone because you don't trust others' work.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h29", text: "Faster alone" },
          { id: "h30", text: "Avoid mistakes" },
          { id: "h31", text: "Grade is important" },
          { id: "h32", text: "Waiting times" },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "The Gym Equipment Disagreement",
    level: "B1",
    context:
      "At the gym, one person is using the treadmill for a long time while others are waiting.",
    roles: [
      {
        id: "r9",
        name: "The Waiting Gym-Goer",
        objective: "You want to use the treadmill",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h33", text: "Time limit" },
          { id: "h34", text: "Share equipment" },
          { id: "h35", text: "Be fair" },
          { id: "h36", text: "Others are waiting" },
        ],
      },
      {
        id: "r10",
        name: "The Marathon Trainee",
        objective:
          "You want to keep using the treadmill because you're training seriously.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h37", text: "Training schedule" },
          { id: "h38", text: "I was here first" },
          { id: "h39", text: "Need endurance practice" },
          { id: "h40", text: "There are other machines" },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "A fight with a friend",
    level: "C1",
    context:
      "You and a friend have had an argument and are not speaking to each other. You are talking to another friend who knows you both.",
    roles: [
      {
        id: "r11",
        name: "Angry friend",
        objective:
          "Explain why you are angry and why your friend should apologize.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h41", text: "On top of that" },
          { id: "h42", text: "Besides" },
          { id: "h43", text: "Yet" },
          { id: "h44", text: "However" },
        ],
      },
      {
        id: "r12",
        name: "The other friend",
        objective:
          "Understand why your friends are angry with each other and to find who is at fault.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h45", text: "While" },
          { id: "h46", text: "Whereas" },
          { id: "h47", text: "Is responsible for" },
          { id: "h48", text: "For example" },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Talking to a politician",
    level: "C1",
    context:
      "You are part of a campaign group protesting against the building of a large road near your town. You have been nominated by your group to speak to the local political leader to present your views.",
    roles: [
      {
        id: "r13",
        name: "Campaign group spokesperson",
        objective:
          "Try to persuade the politician to allow you to present your views to the local council.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h49", text: "Regarding" },
          { id: "h50", text: "Besides" },
          { id: "h51", text: "Undoubtedly" },
          { id: "h52", text: "Despite" },
        ],
      },
      {
        id: "r14",
        name: "Politician",
        objective:
          "Understand why the group is against the large road being built and try to convince them of the benefits.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h53", text: "Leads to" },
          { id: "h54", text: "Causes" },
          { id: "h55", text: "On the other hand" },
          { id: "h56", text: "Ultimately" },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Getting your deposit back",
    level: "C1",
    context:
      "The property manager made deductions to the security deposit of the tenant in 1A. The tenant has asked the property manager for a meeting to understand where the deductions come from.",
    roles: [
      {
        id: "r15",
        name: "Tenant 1A",
        objective:
          "You believe the landlord is 'nickel and diming' you to upgrade the unit. You must argue that the apartment was returned in acceptable condition and demand a higher refund.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h57", text: "Itemized list" },
          { id: "h58", text: "Breach of contract" },
          { id: "h59", text: "To substantiate" },
        ],
      },
      {
        id: "r16",
        name: "Property Manager",
        objective:
          "You must protect the property owner's investment. You rely on the lease terms to justify the costs for repairs and cleaning, insisting the damage goes beyond normal usage.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h60", text: "In accordance with..." },
          { id: "h61", text: "With all due respect..." },
          { id: "h62", text: "To reach an amicable agreement" },
          { id: "h63", text: "To mitigate" },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Requesting Home Office",
    level: "C1",
    context:
      "A senior employee is meeting with their department head to discuss the company's new Return to Office mandate. The employee has been working remotely for two years with excellent results and wishes to make the arrangement permanent to accommodate a change in lifestyle. The company, however, is worried about team culture and wants everyone back in the office at least four days a week.",
    roles: [
      {
        id: "r17",
        name: "The Employee",
        objective:
          "Secure a fully remote or flexible 'hybrid' contract. If not, quitting is an option.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h64", text: "To touch base" },
          { id: "h65", text: "Autonomy" },
          { id: "h66", text: "To create a precedent" },
          { id: "h67", text: "Burnout" },
        ],
      },
      {
        id: "r18",
        name: "The Department Head",
        objective:
          "Retain the employee but ensure they commit to specific days on-site for meetings and mentorship.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h68", text: "Team cohesion" },
          { id: "h69", text: "Face time" },
          { id: "h70", text: "Collaborative friction" },
          { id: "h71", text: "Morale" },
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Cancelling a High-Profile Speaker",
    level: "C2",
    context:
      "A prestigious university is facing mounting pressure after it invited a controversial public intellectual to give a keynote lecture. Student groups, alumni, and some faculty members argue that the speaker's views are harmful and divisive. Others insist that withdrawing the invitation would undermine academic freedom and open debate. An emergency meeting has been arranged between the Dean and the President of the Student Union to decide whether the event should proceed.",
    roles: [
      {
        id: "r20",
        name: "The Student Union President",
        objective:
          "Convince the university to cancel the event or significantly alter its format. If necessary, threaten protests, media campaigns, or sponsor pressure.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h64", text: "Duty of care" },
          { id: "h65", text: "Platforming" },
          { id: "h66", text: "Reputational damage" },
          { id: "h67", text: "Marginalized communities" },
        ],
      },
      {
        id: "r21",
        name: "The Dean",
        objective:
          "Protect the university's commitment to freedom of expression while preventing unrest and maintaining the institution's reputation.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h68", text: "Academic freedom" },
          { id: "h69", text: "Intellectual rigor" },
          { id: "h70", text: "A dangerous precedent" },
          { id: "h71", text: "Marketplace of ideas" },
        ],
      },
    ],
  },
  {
    id: "13",
    title: "Negotiating a Salary",
    level: "B2",
    context:
      "A candidate has just been offered a job at a growing marketing company after a successful interview. The salary offered is lower than what the candidate expected. The candidate and the HR manager are meeting to discuss the offer before the contract is signed.",
    roles: [
      {
        id: "r26",
        name: "The Candidate",
        objective:
          "Negotiate a higher salary or better benefits. You really want the job, but you know your experience is valuable and you are not willing to accept the first offer.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h96", text: "Based on my experience" },
          { id: "h97", text: "Market rate" },
          { id: "h98", text: "Meet me halfway" },
          { id: "h99", text: "Review after six months" },
        ],
      },
      {
        id: "r27",
        name: "The HR Manager",
        objective:
          "Keep the salary as close to the original offer as possible. You can offer some extras, such as flexible hours or training, but the budget is limited.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h100", text: "Within our budget" },
          { id: "h101", text: "Compensation package" },
          { id: "h102", text: "Room for growth" },
          { id: "h103", text: "I'm afraid we can't" },
        ],
      },
    ],
  },
  {
    id: "14",
    title: "The Holiday Disagreement",
    level: "B2",
    context:
      "Two friends are planning a week-long holiday together. One wants a relaxing beach resort and has a limited budget. The other wants an adventurous trip with hiking and sightseeing, and is happy to spend more. They need to agree on a destination by the end of the day.",
    roles: [
      {
        id: "r28",
        name: "The Relaxed Traveller",
        objective:
          "Convince your friend to choose a beach holiday. You need a proper rest after a stressful year and you cannot afford an expensive trip.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h104", text: "I could do with a break" },
          { id: "h105", text: "Stick to the budget" },
          { id: "h106", text: "What about a compromise?" },
          { id: "h107", text: "Unwind" },
        ],
      },
      {
        id: "r29",
        name: "The Adventurous Traveller",
        objective:
          "Convince your friend to choose an active holiday. You get bored lying on a beach and think a trip like this is worth spending more money on.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h108", text: "Make the most of it" },
          { id: "h109", text: "Once-in-a-lifetime" },
          { id: "h110", text: "It's worth the extra cost" },
          { id: "h111", text: "Step out of your comfort zone" },
        ],
      },
    ],
  },
  {
    id: "15",
    title: "Changing Your Degree",
    level: "B2",
    context:
      "A second-year university student is unhappy with their current degree and wants to switch to a completely different subject. The student has arranged a meeting with an academic advisor to discuss the idea. The advisor is concerned about the consequences of changing course so late.",
    roles: [
      {
        id: "r30",
        name: "The Student",
        objective:
          "Persuade the advisor to support your decision to change degrees. Explain why you are unhappy and why this change is important for your future.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h112", text: "I've given it a lot of thought" },
          { id: "h113", text: "I'm not motivated" },
          { id: "h114", text: "Transferable skills" },
          { id: "h115", text: "It's better to change now than later" },
        ],
      },
      {
        id: "r31",
        name: "The Academic Advisor",
        objective:
          "Make sure the student understands the risks, such as extra time and cost. Encourage them to consider other options before making a final decision.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h116", text: "Have you considered...?" },
          { id: "h117", text: "Lose credits" },
          { id: "h118", text: "Weigh up the pros and cons" },
          { id: "h119", text: "Speak to someone in the department" },
        ],
      },
    ],
  },
  {
    id: "16",
    title: "Returning Cultural Artifacts",
    level: "C2",
    context:
      "A major European museum holds a collection of ancient artifacts that were taken from another country over a century ago. That country's government has formally requested their return. The museum argues that it has preserved the objects for generations and tmade them accessible to millions of visitors. The museum's director and the country's cultural ambassador are meeting to try to reach an agreement.",
    roles: [
      {
        id: "r32",
        name: "The Museum Director",
        objective:
          "Defend the museum's right to keep the collection, or at least a long-term loan arrangement instead of a full return. Avoid setting a precedent that could empty the museum.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h120", text: "Universal Heritage" },
          { id: "h121", text: "Custodianship" },
          { id: "h122", text: "Legitimately acquired" },
          { id: "h123", text: "Set a far-reaching precedent" },
        ],
      },
      {
        id: "r33",
        name: "The Cultural Ambassador",
        objective:
          "Insist on the full return of the artifacts. Argue that they were taken unjustly and that keeping them is continuing injustice. A loan is not acceptable.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h124", text: "Colonial legacy" },
          { id: "h125", text: "Restitution" },
          { id: "h126", text: "Rightful custodians" },
          { id: "h127", text: "Redress a historical wrong" },
        ],
      },
    ],
  },
  {
    id: "17",
    title: "Replacing Staff with AI",
    level: "C2",
    context:
      "A large customer service company has announced plans to replace around a third of its staff with an AI system over the next two years. The company says this is essential to remain competitive. Employees are alarmed and have asked their union to intervene. The Managing Director has agreed to meet the union representative.",
    roles: [
      {
        id: "r34",
        name: "The Union Representative",
        objective:
          "Challenge the plan and demand guarantees to protect workers, such as retraining, no forecd redundancies, and a say in how the technology is introduced.",
        color: "bg-red-100 text-red-900 border-red-300",
        hints: [
          { id: "h120", text: "Job displacement" },
          { id: "h121", text: "Collective bargainihg" },
          { id: "h122", text: "Reskilling" },
          { id: "h123", text: "Bear the brunt of" },
        ],
      },
      {
        id: "r35",
        name: "The Managing Director",
        objective:
          "Justify the decision for the company's survival, while reassuring the union enough to avoid strike action. Offer some support, but keep the plan largely intact.",
        color: "bg-green-100 text-green-900 border-green-300",
        hints: [
          { id: "h124", text: "Remain competitive" },
          { id: "h125", text: "Streamline operations" },
          { id: "h126", text: "Natural attrition" },
          { id: "h127", text: "Redeployment" },
        ],
      },
    ],
  },
];

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

// --- Main Component ---

export default function App() {
  const isTeacherMode = window.location.search.includes("teacher=sarah2026");

  const [scenarios, setScenarios] = useState(INITIAL_SCENARIOS);

  const [view, setView] = useState("home");
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(null);
  const [editingScenario, setEditingScenario] = useState(null);

  // Level filter
  const [filterLevel, setFilterLevel] = useState("All");

  // Timer State
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes default
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Inject Tailwind CSS
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  }, []);

  // Save to LocalStorage whenever scenarios change
  // Timer Countdown Effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Filtered list (must come AFTER `scenarios` is defined)
  const filteredScenarios =
    filterLevel === "All"
      ? scenarios
      : scenarios.filter((s) => s.level === filterLevel);

  const currentScenario = scenarios.find((s) => s.id === selectedScenarioId);
  const currentRole =
    currentScenario && selectedRoleIndex !== null
      ? currentScenario.roles[selectedRoleIndex]
      : null;

  const goHome = () => {
    setView("home");
    setSelectedScenarioId(null);
    setSelectedRoleIndex(null);
  };

  const startEditing = (scenario) => {
    if (scenario) {
      setEditingScenario({ ...scenario });
    } else {
      setEditingScenario({
        id: Date.now().toString(),
        title: "",
        level: "B1",
        context: "",
        roles: [
          {
            id: "ra",
            name: "Role A",
            objective: "",
            color: "bg-blue-100 text-blue-900 border-blue-300",
            hints: [],
          },
          {
            id: "rb",
            name: "Role B",
            objective: "",
            color: "bg-orange-100 text-orange-900 border-orange-300",
            hints: [],
          },
        ],
      });
    }
    setView("teacher_edit");
  };

  const saveScenario = () => {
    if (!editingScenario || !editingScenario.title) return;

    setScenarios((prev) => {
      const exists = prev.find((s) => s.id === editingScenario.id);
      if (exists) {
        return prev.map((s) =>
          s.id === editingScenario.id ? editingScenario : s
        );
      }
      return [...prev, editingScenario];
    });
    setView("teacher_list");
  };

  const deleteScenario = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setScenarios((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const resetToDefaults = () => {
    if (
      window.confirm(
        "This will erase all your custom scenarios and return to the original examples. Are you sure?"
      )
    ) {
      setScenarios(INITIAL_SCENARIOS);
    }
  };

  // --- Views ---

  if (view === "home") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full mb-4 shadow-sm">
            <SwordsIcon />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Roleplay Ready
          </h1>
          <p className="text-gray-500 max-w-xs mx-auto">
            Practice for the Pearson test Section 13. Wait for Miss Sarah's
            instructions.
          </p>
        </div>

        <div className="grid gap-4 w-full max-w-md">
          <button
            onClick={() => setView("student_select")}
            className="group relative flex items-center p-6 bg-white border-2 border-indigo-100 hover:border-indigo-500 rounded-2xl shadow-sm hover:shadow-md transition-all text-left"
          >
            <div className="bg-indigo-50 p-4 rounded-xl mr-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <UsersIcon />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                I am a Student
              </h2>
              <p className="text-sm text-gray-500">
                Join an activity and view my card
              </p>
            </div>
          </button>
          {isTeacherMode && (
            <button
              onClick={() => setView("teacher_list")}
              className="group relative flex items-center p-6 bg-white border-2 border-gray-100 hover:border-gray-400 rounded-2xl shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="bg-gray-50 p-4 rounded-xl mr-5 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                <EditIcon />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  I am a Teacher
                </h2>
                <p className="text-sm text-gray-500">
                  Create scenarios and edit hints
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    );
  }

  if (view === "student_select") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 font-sans">
        <div className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={goHome}
              className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <BackIcon />
            </button>
            <h1 className="text-xl font-bold tracking-tight">
              Choose a Situation
            </h1>
          </div>
          <button
            onClick={goHome}
            className="p-1 hover:bg-indigo-700 rounded-full opacity-80 hover:opacity-100"
          >
            <GearIcon />
          </button>
        </div>

        {/* Level filter */}
        <div className="p-4 max-w-2xl mx-auto flex flex-wrap gap-2">
          {["All", ...CEFR_LEVELS].map((level) => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                filterLevel === level
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Scenario list */}
        <div className="px-4 max-w-2xl mx-auto grid gap-4">
          {filteredScenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => {
                setSelectedScenarioId(scenario.id);
                setView("student_role_select");
              }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:ring-2 hover:ring-indigo-500 transition-all text-left w-full"
            >
              <div className="flex items-center justify-between mb-2 gap-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {scenario.title}
                </h3>
                {scenario.level && (
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md font-bold">
                    {scenario.level}
                  </span>
                )}
              </div>
              <p className="text-gray-600 line-clamp-2">{scenario.context}</p>
              <div className="mt-4 flex items-center gap-2 text-indigo-600 text-sm font-medium">
                <PlayIcon />
                <span>Start Activity</span>
              </div>
            </button>
          ))}
          {filteredScenarios.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No scenarios found for this level.
            </div>
          )}
        </div>
      </div>
    );
  }

  if (view === "student_role_select") {
    if (!currentScenario) return null;
    return (
      <div className="min-h-screen bg-gray-50 pb-20 font-sans">
        <div className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setView("student_select")}
              className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <BackIcon />
            </button>
            <h1 className="text-xl font-bold tracking-tight">
              Choose Your Role
            </h1>
          </div>
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-2 text-gray-500 uppercase tracking-wide text-xs font-bold mb-2">
              <BookIcon /> The Situation
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">
              {currentScenario.context}
            </p>
          </div>

          <h3 className="text-center text-gray-500 font-medium mb-4">
            Who will you be?
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {currentScenario.roles.map((role, idx) => (
              <button
                key={role.id}
                onClick={() => {
                  setSelectedRoleIndex(idx);
                  setTimeLeft(120);
                  setIsTimerRunning(false);
                  setView("student_game");
                }}
                className={`p-6 rounded-xl border-2 transition-all text-left relative overflow-hidden group w-full
                  ${role.color} border-opacity-50 hover:border-opacity-100 hover:shadow-md
                `}
              >
                <div className="relative z-10">
                  <div className="text-sm font-bold opacity-70 mb-1">
                    Role {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                  <div className="flex items-center gap-1 text-sm font-medium opacity-80">
                    Tap to Select
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (view === "student_game") {
    if (!currentScenario || !currentRole) return null;
    return (
      <div className="min-h-screen bg-gray-100 pb-10 font-sans">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setView("student_role_select")}
              className="text-gray-600 flex items-center gap-1 text-sm font-medium"
            >
              <BackIcon /> Change Role
            </button>
            <span className="font-bold text-gray-800 truncate max-w-[150px]">
              {currentScenario.title}
            </span>
          </div>

          {/* Timer Section */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-2 flex items-center justify-between">
            <div
              className={`flex items-center gap-2 pl-2 ${
                timeLeft < 10 ? "text-red-500 animate-pulse" : "text-gray-700"
              }`}
            >
              <ClockIcon />
              <span className="font-mono text-xl font-bold">
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`p-2 rounded-md text-white transition-colors ${
                  isTimerRunning
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isTimerRunning ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimeLeft(120);
                }}
                className="p-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
              >
                <ResetIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-gray-400 uppercase tracking-wide text-xs font-bold mb-2">
              <BookIcon /> Context
            </div>
            <p className="text-gray-700">{currentScenario.context}</p>
          </div>

          <div
            className={`rounded-2xl p-6 shadow-md border-2 ${currentRole.color} relative overflow-hidden`}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-white/50 rounded-md text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
                    Your Role
                  </span>
                  <h2 className="text-3xl font-extrabold leading-tight">
                    {currentRole.name}
                  </h2>
                </div>
                <div className="opacity-20">
                  <UsersIcon />
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/50">
                <div className="flex items-center gap-2 font-bold opacity-80 mb-1 text-sm uppercase">
                  <SwordsIcon /> Your Objective
                </div>
                <p className="text-lg font-medium leading-snug">
                  {currentRole.objective}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-yellow-500">
                <BulbIcon />
              </span>
              <h3 className="font-bold text-gray-700">
                Vocabulary & Counterattacks
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {currentRole.hints.map((hint) => (
                <div
                  key={hint.id}
                  className="bg-white p-4 rounded-xl border-l-4 border-indigo-500 shadow-sm flex items-center justify-between group cursor-default"
                >
                  <span className="text-gray-800 font-medium">{hint.text}</span>
                  <span className="w-2 h-2 rounded-full bg-indigo-200 group-hover:bg-indigo-500 transition-colors"></span>
                </div>
              ))}
              {currentRole.hints.length === 0 && (
                <div className="text-center p-4 text-gray-400 italic bg-white rounded-xl border border-dashed border-gray-300">
                  No specific hints provided. Use your creativity!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Teacher Views ---

  if (view === "teacher_list") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 font-sans">
        <div className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={goHome}
              className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <BackIcon />
            </button>
            <h1 className="text-xl font-bold tracking-tight">
              Teacher Dashboard
            </h1>
          </div>
          <button
            onClick={goHome}
            className="p-1 hover:bg-indigo-700 rounded-full opacity-80 hover:opacity-100"
          >
            <GearIcon />
          </button>
        </div>

        <div className="p-4 max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Scenarios</h2>
            <button
              onClick={() => startEditing()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors"
            >
              <PlusIcon /> New Scenario
            </button>
          </div>

          <div className="grid gap-4">
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {scenario.title}
                    </h3>
                    {scenario.level && (
                      <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md font-bold">
                        {scenario.level}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-1 mb-2">
                    {scenario.context}
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-md font-medium">
                      {scenario.roles[0].name}
                    </span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-md font-medium">
                      {scenario.roles[1].name}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0">
                  <button
                    onClick={() => startEditing(scenario)}
                    className="flex-1 md:flex-none px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteScenario(scenario.id)}
                    className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-8">
            <h4 className="text-gray-500 uppercase tracking-wide text-xs font-bold mb-4">
              Storage Settings
            </h4>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-sm text-yellow-800 mb-4">
              <strong>Note:</strong> Changes are saved to this browser only. To
              share scenarios with students, you must copy them into the code.
            </div>
            <button
              onClick={resetToDefaults}
              className="text-red-500 underline text-sm hover:text-red-700"
            >
              Reset all scenarios to default
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === "teacher_edit") {
    if (!editingScenario) return null;

    const updateRole = (roleIndex, field, value) => {
      setEditingScenario((prev) => {
        if (!prev) return null;
        const newRoles = [...prev.roles];
        newRoles[roleIndex] = { ...newRoles[roleIndex], [field]: value };
        return { ...prev, roles: newRoles };
      });
    };

    const addHint = (roleIndex) => {
      setEditingScenario((prev) => {
        if (!prev) return null;
        const newRoles = [...prev.roles];
        newRoles[roleIndex] = {
          ...newRoles[roleIndex],
          hints: [
            ...newRoles[roleIndex].hints,
            { id: Date.now().toString(), text: "" },
          ],
        };
        return { ...prev, roles: newRoles };
      });
    };

    const updateHint = (roleIndex, hintId, text) => {
      setEditingScenario((prev) => {
        if (!prev) return null;
        const newRoles = [...prev.roles];
        newRoles[roleIndex] = {
          ...newRoles[roleIndex],
          hints: newRoles[roleIndex].hints.map((h) =>
            h.id === hintId ? { ...h, text } : h
          ),
        };
        return { ...prev, roles: newRoles };
      });
    };

    const removeHint = (roleIndex, hintId) => {
      setEditingScenario((prev) => {
        if (!prev) return null;
        const newRoles = [...prev.roles];
        newRoles[roleIndex] = {
          ...newRoles[roleIndex],
          hints: newRoles[roleIndex].hints.filter((h) => h.id !== hintId),
        };
        return { ...prev, roles: newRoles };
      });
    };

    return (
      <div className="min-h-screen bg-gray-50 pb-20 font-sans">
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-20 flex justify-between items-center shadow-sm">
          <button
            onClick={() => setView("teacher_list")}
            className="text-gray-500 hover:text-gray-800"
          >
            Cancel
          </button>
          <h2 className="font-bold text-lg">Edit Scenario</h2>
          <button
            onClick={saveScenario}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            <SaveIcon /> Save
          </button>
        </div>

        <div className="max-w-4xl mx-auto p-6 space-y-8">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 uppercase tracking-wide text-xs font-bold mb-4">
              General Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Scenario Title
                </label>
                <input
                  type="text"
                  value={editingScenario.title}
                  onChange={(e) =>
                    setEditingScenario({
                      ...editingScenario,
                      title: e.target.value,
                    })
                  }
                  placeholder="e.g., At the Pharmacy"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level (CEFR)
                </label>
                <select
                  value={editingScenario.level || "B1"}
                  onChange={(e) =>
                    setEditingScenario({
                      ...editingScenario,
                      level: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                >
                  {CEFR_LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Context / Situation
                </label>
                <textarea
                  value={editingScenario.context}
                  onChange={(e) =>
                    setEditingScenario({
                      ...editingScenario,
                      context: e.target.value,
                    })
                  }
                  placeholder="Describe the situation for both students..."
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1].map((roleIdx) => {
              const role = editingScenario.roles[roleIdx];
              return (
                <section
                  key={role.id}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${
                      roleIdx === 0
                        ? "bg-blue-100 text-blue-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    Role {roleIdx + 1}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Role Name
                      </label>
                      <input
                        type="text"
                        value={role.name}
                        onChange={(e) =>
                          updateRole(roleIdx, "name", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Objective
                      </label>
                      <textarea
                        value={role.objective}
                        onChange={(e) =>
                          updateRole(roleIdx, "objective", e.target.value)
                        }
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-medium text-gray-500">
                        Hints / Vocabulary
                      </label>
                      <button
                        onClick={() => addHint(roleIdx)}
                        className="text-indigo-600 text-xs font-bold flex items-center gap-1"
                      >
                        <PlusIcon /> Add Hint
                      </button>
                    </div>
                    <div className="space-y-2">
                      {role.hints.map((hint) => (
                        <div key={hint.id} className="flex gap-2">
                          <input
                            type="text"
                            value={hint.text}
                            onChange={(e) =>
                              updateHint(roleIdx, hint.id, e.target.value)
                            }
                            placeholder="e.g. Too expensive"
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                          />
                          <button
                            onClick={() => removeHint(roleIdx, hint.id)}
                            className="text-gray-400 hover:text-red-500 p-2"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
