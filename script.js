const questions = [
    "What's the most significant way I've shown you my love?",
    "How do you feel most loved and appreciated by me?",
    "Can you describe a moment when you felt deeply connected to me?",
    "What makes our bond unique and special to you?",
    "Share a romantic idea or experience you've always wanted to have together.",
    "What are your biggest dreams and aspirations, and how can I support them?",
    "If we could travel anywhere in the world together, where would you want to go, and why?",
    "What's your ideal day spent with me?",
    "Envision our life together in five years. What do you see?",
    "What goals do you want us to achieve as a couple?",
    "Recall a favorite memory we've created together. What made it special?",
    "Was there a moment in our relationship when you knew I was the one for you?",
    "Share a funny or heartwarming story from our time together.",
    "Reflect on a challenging situation we've overcome as a couple. How did it impact us?",
    "If you could relive one day from our past, which day would you choose?",
    "Is there something about yourself that you've never shared with anyone else but want to share with me?",
    "How can I best support you during difficult or emotional times?",
    "Do you associate a particular song, movie, or book with our relationship's emotions?",
    "What's the most important lesson you've learned about love and relationships from our journey?",
    "How can we strengthen our emotional connection on a daily basis?",
    "If we could embark on a spontaneous adventure right now, what would it be?",
    "Describe your ideal date night that we haven't tried yet.",
    "If we swapped roles for a day, what part of my life would you want to experience?",
    "Share the most thrilling and spontaneous thing we've ever done together.",
    "What's a unique and delightful habit of mine that you adore?",
    "Is there a personal challenge or fear you'd like to conquer, and how can I support you?",
    "How do you envision your personal growth within our relationship's context?",
    "Share a moment when you felt proud of your growth as a partner.",
    "What's the most valuable life lesson you've learned from our relationship?",
    "If we were characters in a comedy movie, what would be our hilarious catchphrase?",
    "What's the silliest inside joke we share that always makes us laugh?",
    "Describe the funniest dream you've ever had involving us.",
    "If we were to switch personalities for a day, what's the first thing you'd do as me?",
    "Share a funny, embarrassing moment from your childhood that still makes you giggle.",
    "What's the weirdest food combination you secretly enjoy, but no one else knows about?",
    "If we were cartoon characters, what would our wacky superpowers be?",
    "What's the quirkiest habit of mine that you find endearing?",
    "Share a humorous pet peeve of yours that always manages to irritate you.",
    "If we were to create a comedy sketch together, what would be the hilarious scenario?",
    "What's the funniest text message or meme I've ever sent you?",
    "If we had to survive a zombie apocalypse together, what would be your comical survival strategy?",
    "Describe a time when you couldn't stop laughing uncontrollably with me.",
    "What's the most amusing prank you've ever pulled on someone (or had pulled on you)?",
    "If we had to compete on a crazy game show, which one would it be, and what would our strategy be?",
    "Share a comical childhood story about your first crush or romantic mishap.",
    "If we could have any wild and outlandish pet, what would it be, and what would we name it?",
    "Describe the most hilarious way we've celebrated a special occasion together.",
    "What's the most ridiculous item on your bucket list, and can I help you achieve it?",
    "If our relationship were a comedy movie, who would play us, and what's the film's wacky plot?",
    "Share a funny misunderstanding or miscommunication we've had that turned into a memorable moment.",
    "If we were characters on a reality TV show, what would our entertaining storyline be?",
    "Describe a time when we tried cooking together and the outcome was a hilarious disaster.",
    "What's the most amusing thing that has happened on one of our vacations or trips?",
    "If our love story were a stand-up comedy routine, what punchlines would we use?",
    "Share a laugh-out-loud memory from a family gathering or event we attended together.",
    "What's the craziest and most humorous adventure you'd love for us to go on someday?",
    "If we could time-travel together to any era, where and when would we visit, and why?",
    "Describe the most uproarious thing we've ever binge-watched together on TV.",
    "What's a funny nickname or pet name you've secretly given me that no one else knows?",
    "How do you envision our growth and evolution as a couple?"
];

const generateBtn = document.getElementById("generateBtn");
const questionText = document.getElementById("questionText");
const floatingHearts = document.getElementById("floatingHearts");

generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    questionText.textContent = randomQuestion;
    
    // Create a floating heart emoji
    const heartEmoji = document.createElement("div");
    heartEmoji.classList.add("floating-heart");
    heartEmoji.textContent = "❤️";
    floatingHearts.appendChild(heartEmoji);

    // Remove the heart emoji after the animation
    setTimeout(() => {
        heartEmoji.remove();
    }, 4000);
});