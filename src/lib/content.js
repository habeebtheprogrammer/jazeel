import {
  BookOpen,
  BookOpenText,
  ChartLine,
  Earth,
  Gauge,
  Layers,
  Moon,
  Sparkles,
  Sprout,
  UserRound,
} from "lucide-react";

export const verses = {
  iqra: {
    arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
    translation: "Read in the name of your Lord who created.",
    source: "Surah Al-ʿAlaq 96:1",
  },
  bestOfYou: {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    translation: "The best of you are those who learn the Quran and teach it.",
    source: "Sahih al-Bukhari 5027",
  },
  tartil: {
    arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
    translation: "And recite the Quran with measured recitation.",
    source: "Surah Al-Muzzammil 73:4",
  },
};

export const pillars = [
  { title: "Accessible", text: "Learn from the comfort of home, wherever you are in the world." },
  { title: "Simplified", text: "Clear, age-appropriate lessons that never feel overwhelming." },
  { title: "Engaging", text: "Interactive classes, relatable examples and games for children." },
  { title: "Practical", text: "Knowledge that shapes character, conduct and everyday life." },
];

export const offerings = [
  {
    id: "structured",
    icon: Layers,
    title: "Structured & Standardized Learning",
    short:
      "A carefully designed curriculum that guides every student progressively from their current level to the next stage of learning.",
    body: [
      "At Jazeel Quran Academy, we believe that effective learning requires the right structure. That is why we use a standardized and carefully designed curriculum that guides students progressively from their current level to the next stage of learning.",
      "Our lessons are organized according to the learner's age, ability, level of understanding and location, making the learning process simple and impactful.",
    ],
  },
  {
    id: "studies",
    icon: BookOpenText,
    title: "Quran & Islamic Studies Classes",
    short:
      "Programmes that go beyond reading — nurturing a meaningful relationship with Allah and a deep understanding of Islaam.",
    body: [
      "Our programmes go beyond only reading the Quran. We have curated curricula that reflect the growing demands of today's Western world and offer solutions for navigating them in the light of the Quran.",
      "We help students develop a meaningful relationship with Allah and a deep understanding of the teachings and values embedded in Islaam through a combination of subjects — giving them an all-round understanding of Islaam and laying a solid foundation for grooming them into Young Scholars.",
    ],
  },
  {
    id: "personalized",
    icon: UserRound,
    title: "Personalized Online Classes",
    short:
      "Interactive live classes with qualified, dedicated teachers who know each learner's strengths and areas to improve.",
    body: [
      "Learning takes place through interactive online classes with qualified and dedicated teachers.",
      "We understand that every learner is different. Our approach allows teachers to identify individual strengths and areas that need improvement. Students receive guidance, mentorship, encouragement, and support throughout their learning journey.",
      "Our online model also makes it possible for students to learn from the comfort of their homes, wherever they are in the world.",
    ],
  },
  {
    id: "pace",
    icon: Gauge,
    title: "Learn at the Right Pace",
    short:
      "Beginning, reading fluently or memorizing — every student progresses steadily at a pace that suits their ability, goals and schedule.",
    body: [
      "We understand that every student learns differently. Some are just beginning their Quran journey, while others are already reading fluently or working towards memorization. Some seek a deeper understanding of Islam, while others need guidance in developing strong moral values, good character, and a sense of purpose.",
      "Our curriculum is designed to accommodate different learning levels and needs, allowing each student to progress steadily at a pace that suits their ability, goals, and schedule.",
    ],
  },
  {
    id: "simplify",
    icon: Sparkles,
    title: "We Simplify Islamic Learning",
    short:
      "Simple, clear, age-appropriate lessons — with engaging methods, relatable examples and interactive games for children.",
    body: [
      "Islamic education should not feel overwhelming or complicated.",
      "We break lessons into simple, clear, and age-appropriate concepts. For children especially, we use engaging teaching methods, practical relatable examples and interactive games to make learning enjoyable and memorable.",
    ],
  },
  {
    id: "global",
    icon: Earth,
    title: "A Global Learning Community",
    short: "Geographical location no longer has to be a barrier to quality Islamic education.",
    body: [
      "Jazeel Quran Academy brings Quranic and Islamic education to Muslims across the globe.",
      "Through our online platform, geographical location does not have to be a barrier to quality Islamic education. Families can access structured learning from wherever they are while building a consistent Quran and Islamic learning routine.",
    ],
  },
  {
    id: "progress",
    icon: ChartLine,
    title: "Progress Tracking & Support",
    short:
      "Learning is a journey, not a one-time activity — we pay attention to every student's progress, consistency and growth.",
    body: [
      "We believe that learning is a journey, not a one-time activity.",
      "Students are guided throughout their learning journey, with attention given to their progress, consistency, strengths, and areas for improvement.",
    ],
  },
];

export const subjects = [
  { arabic: "التلاوة", title: "Quran Reading with Tajweed" },
  { arabic: "الحفظ", title: "Quran Memorization (Hifz)" },
  { arabic: "التجويد", title: "Advanced Tajweed" },
  { arabic: "العربية", title: "Arabic Reading & Foundations" },
  { arabic: "الحديث", title: "Hadith" },
  { arabic: "قصص الأنبياء", title: "Stories of the Prophets" },
  { arabic: "الآداب والأخلاق", title: "Islamic Manners & Character" },
  { arabic: "الفقه", title: "Fiqh (Islamic Jurisprudence)" },
];

export const programmesIntro = [
  "At Jazeel Quran Academy, we believe that meaningful Islamic education is a journey. Every learner begins from a different point, grows at their own pace, and flourishes under the right guidance.",
  "Our programmes are carefully designed to take learners through different stages of their Quranic and Islamic development — from building fluency in Quran reading, to memorizing the Quran, to developing strong Islamic knowledge and character.",
];

export const programmes = [
  {
    slug: "quran-foundations",
    number: "01",
    icon: BookOpen,
    stage: "Stage 1 · Beginners",
    name: "The Quran Foundations Class",
    shortName: "Quran Foundations",
    tagline: "Building a strong foundation for a lifelong relationship with the Quran.",
    audience: "Learners with little or no prior knowledge of Quran reading.",
    summary:
      "For beginners — from recognizing the Quranic letters to reading fluently with basic Tajweed.",
    path: ["Letters", "Words", "Verses", "Fluency"],
    intro: [
      "The Quran Foundations Class is designed for learners with little or no prior knowledge of Quran reading.",
      "Students begin with the fundamentals of Quranic reading, learning to recognize and articulate the Quranic letters correctly before progressing to letter combinations, words, verses, and eventually fluent Quran recitation.",
    ],
    focusTitle: "The programme focuses on",
    focus: [
      "Quranic and Arabic letter recognition",
      "Correct pronunciation and articulation",
      "Harakat and basic reading principles",
      "Joining letters and reading words",
      "Developing reading confidence and fluency",
      "Introduction to basic Tajweed concepts",
    ],
    closing: [],
    aim: "Our goal is to give every beginner a strong and accurate foundation upon which they can continue building their Quranic journey.",
    finder: "can't read the Quran yet, or needs to rebuild the basics",
  },
  {
    slug: "quran-stewards",
    number: "02",
    icon: Moon,
    stage: "Stage 2 · Hifz",
    name: "The Quran Stewards Memorization Program",
    shortName: "Quran Stewards",
    tagline: "Memorize. Preserve. Recite. Live the Quran.",
    audience: "Learners with a reasonable level of fluency in Quran recitation.",
    summary:
      "Structured Hifz with proper Tajweed, effective revision, personal learning plans and continuous progress tracking.",
    path: ["Memorize", "Preserve", "Recite", "Live"],
    intro: [
      "The Quran Stewards Memorization Program is designed for learners who have attained a reasonable level of fluency in Quran recitation and are ready to embark on, strengthen, or refine their Hifz journey.",
      "The programme combines structured Quran memorization with proper Tajweed, effective revision, personalized learning plans, and continuous progress tracking.",
    ],
    focusTitle: "Students are guided to",
    focus: [
      "Memorize the Quran accurately",
      "Apply proper Tajweed during memorization and recitation",
      "Develop effective memorization and revision habits",
      "Strengthen previously memorized portions",
      "Build consistency and long-term retention",
      "Develop a deeper connection with the Quran",
    ],
    closing: [
      "We believe that Hifz is more than simply memorizing verses. It is about preserving the Quran in the heart, reciting it with excellence, and allowing its guidance to shape one's life.",
    ],
    aim: "Our aim is to nurture Quran Stewards — learners who carry the Quran with responsibility, love, and commitment.",
    finder: "reads fluently and is ready to begin, strengthen or refine their Hifz",
  },
  {
    slug: "moral-mentorship-builders",
    number: "03",
    icon: Sprout,
    stage: "Alongside every stage",
    name: "The Moral & Mentorship Builders Program",
    shortName: "Moral & Mentorship Builders",
    tagline: "Building character. Nurturing confidence. Guiding purpose.",
    audience: "Learners at every level, as a complement to their Quranic learning.",
    summary:
      "Character, values and mentorship — so that what a learner knows is reflected in who they become.",
    path: ["Character", "Confidence", "Purpose"],
    intro: [
      "The Moral & Mentorship Builders Program is designed to complement Quranic learning by focusing on the development of strong Islamic character, positive values and responsible decision-making.",
      "We believe that Islamic education should not end with what a learner knows. It should also influence who they become.",
      "Through age-appropriate lessons, mentorship, discussions, practical activities, Islamic stories, and real-life guidance, learners are encouraged to grow in the qualities below.",
    ],
    focusTitle: "Learners are encouraged to develop",
    focus: [
      "Islamic identity and values",
      "Good manners and respectful conduct",
      "Honesty and responsibility",
      "Self-discipline and accountability",
      "Respect for parents, teachers, and others",
      "Compassion, empathy, and service",
    ],
    closing: [
      "The programme provides learners with a supportive environment where they can ask questions, develop confidence, navigate challenges, and receive guidance as they grow.",
    ],
    aim: "Our goal is to nurture well-rounded Muslims whose knowledge is reflected in their character, conduct, and contribution to society.",
    finder: "would benefit from guidance in character, confidence and purpose",
  },
];

export function getProgramme(slug) {
  return programmes.find((p) => p.slug === slug);
}

export const steps = [
  {
    title: "Tell us about your learner",
    text: "Share the learner's age, current level, goals and location through our enrollment form.",
  },
  {
    title: "Get placed at the right level",
    text: "We match each student to the right programme and class by age, ability, level of understanding and location.",
  },
  {
    title: "Learn live with a dedicated teacher",
    text: "Interactive online classes with qualified teachers who identify strengths and areas to improve.",
  },
  {
    title: "Grow with ongoing support",
    text: "We keep track of progress, consistency, strengths and areas for improvement every step of the way.",
  },
];

// Transcribed from the academy's review graphics (emoji removed).
export const testimonials = [
  {
    name: "Ibraheem's Mum",
    location: "USA",
    role: "Parent",
    quote:
      "Assalamu'alaykum Mallam, I just want to appreciate your efforts in teaching my kid the Quran. Most times I walk by when he's in class and I just wonder how you are able to get my hyper boy to stay calm and enthusiastic about learning for a whole hour every time. And now, he can join the letters effortlessly and recite many Surahs all by himself! As a parent, I feel really proud of his evident progress. Thank you very much sir, jazakaLlahu khayran.",
  },
  {
    name: "Sister H",
    location: "Canada",
    role: "Student",
    quote:
      "Mallam, honestly I can't explain how blessed I feel for learning from you, especially considering that I have tried some other platforms before I enrolled with Jazeel. The way you teach with so much calm and patience and break every hard concept into bits till I get it clearly would always make me fall in love with learning the Quran and Tajweed. You have also made memorization easier for me, I can't believe I've completed a whole Juz online in just 4 months!! It's getting me sooo motivated!! AlhamduliLlah Your words of encouragements has also helped me this far. Thank you sir! May Allah bless you",
  },
  {
    name: "Bilaal's Mum",
    location: "UK",
    role: "Parent",
    quote:
      "My kids are doing well and I'm so proud to watch them fall in love with the Holy Quran. Your academy has made it possible for us to achieve easily what their dad and I have always worried about especially because of living far away from home. Bilal can even lead the prayers now and his brother loves to follow him pray while they both recite aloud.",
  },
  {
    name: "Umm Mas'ud",
    location: "Abuja, Nigeria",
    role: "Student",
    quote:
      "Jazeel Quran Academy will always be the best thing that I stumbled upon. They have helped me restructure my life in a way that gives me more peace as I pursue the knowledge of my religion. As a working mom of 4 beautiful children, they helped me design a class structure that is so easy to stick by. I remember how I was skeptical about having enough time for learning as I was always busy, even though I really wanted to start learning, but I was wowed when a very practical class structure was sent to me and I immediately stopped doubting my abilities to learn. Today, I'm proud of that decision I made several months back because I am no where near who I used to be. Al Hamdulilaa.",
  },
  {
    name: "Abdallah's Mum",
    location: "UK",
    role: "Parent",
    quote:
      "I know this review might seem too early as this is our first month but I can affirm that your teaching style is very unique and I see the way my kids are excited about the Quran class and I can't stop comparing their reactions now to how they were in their last online islamiyah. I can tell from the very first session that you understand children very well and you know just how best to handle them in a great way.",
  },
  {
    name: "Sis Maryam",
    location: "UAE",
    role: "Student",
    quote:
      "When I got here at first, I thought how would I blend in with this people — there's a huge language barrier here! Then I searched for Arabic learning platforms and found one and enrolled, but it was far from what I had anticipated. Then I remembered your academy and decided to reach out, just like that I'm understanding Arabic better when people speak to me and I can even reply back in Arabic!! I'm happy!!",
  },
  {
    name: "Imraan's Mum",
    location: "Ilorin, Nigeria",
    role: "Parent",
    quote:
      "I had noticed that my son has a natural affinity towards the Quran and I knew it had to be nurtured lest the zeal dies. But my major concern was getting a Quran tutor who would be patient enough with him because he's really playful. I'm glad that I was introduced to you by my neighbor, her kids were already enrolled with your academy, she had reassured me that you have good Quran tutors and I'm glad I followed through. My son's love for the Quran keeps growing and I love to watch him recite the Quran.",
  },
  {
    name: "Sis Asiyah",
    location: "Lagos, Nigeria",
    role: "Student",
    quote:
      "I enrolled for 4 courses at once, I initially felt overwhelmed by so many courses at the same time plus dealing with university work too. But when I received the structural breakdown, I felt I could do it, and I actually did it! I've been able to juggle between school work and my Quran and Arabic courses effortlessly and efficiently. I must say, Jazeel academy did a huge job scraping out my initial fear and now I'm achieving what I felt I couldn't achieve. Been enrolled for 4 months and I have no regrets.",
  },
];
