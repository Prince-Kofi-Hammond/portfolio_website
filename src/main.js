import './style.css'

// DOM Elements
const content = document.getElementById('content');
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.setAttribute('aria-label', `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`);
}

// Mobile Navigation
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    updateActiveNav(link.dataset.page);
  });
});

function updateActiveNav(page) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}



// Page Router
function loadPage(page) {
  updateActiveNav(page);
  content.innerHTML = '<div class="loading">Loading...</div>';
  
  switch(page) {
    case 'home':
      loadHomePage();
      break;
    case 'about':
      loadAboutPage();
      break;
    case 'projects':
      loadProjectsPage();
      break;
    case 'blogs':
      loadBlogsPage();
      break;
    case 'planner':
      loadPlannerPage();
      break;
    case 'games':
      loadGamesPage();
      break;
    default:
      loadHomePage();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Home Page
function loadHomePage() {
  content.innerHTML = `
    <section class="hero glass fade-in">
      <h1>Prince Hammond</h1>
      <p class="subtitle">Computer Science Student | Politics, Law & Agriculture Enthusiast</p>
      
      <div class="interests">
        <span class="interest-tag"><i class="fas fa-laptop-code"></i> Technology</span>
        <span class="interest-tag"><i class="fas fa-landmark"></i> Politics</span>
        <span class="interest-tag"><i class="fas fa-gavel"></i> Law</span>
        <span class="interest-tag"><i class="fas fa-seedling"></i> Agriculture</span>
      </div>
      
      <p style="margin-top: 2rem; opacity: 0.8; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.8;">
        Welcome to my professional portfolio. I'm a passionate Computer Science student at Sunyani Technical University 
        with diverse interests in governance, legal systems, and sustainable agriculture. 
        Explore my projects, read my thoughts, or try out the interactive features.
      </p>
      
       <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
         <a href="#about" class="btn btn-primary" onclick="event.preventDefault(); window.location.hash='about'">
           <i class="fas fa-user"></i> Learn About Me
         </a>
         <a href="#projects" class="btn btn-primary" onclick="event.preventDefault(); window.location.hash='projects'">
           <i class="fas fa-code"></i> View Projects
         </a>
         <a href="mailto:pcute7581@gmail.com" class="btn btn-primary">
           <i class="fas fa-envelope"></i> Contact Me
         </a>
       </div>
    </section>
  `;
}

// About Page
function loadAboutPage() {
  content.innerHTML = `
    <h2 class="page-title fade-in">About Me</h2>
    
    <section class="glass fade-in" style="padding: 2rem; margin-bottom: 2rem;">
      <h3 class="section-title">Who I Am</h3>
      <p style="line-height: 1.8; opacity: 0.9;">
        Hey there! 👋 I'm Prince Hammond, a BTech Computer Science student from Ghana who's passionate about building things that matter. 
        When I'm not debugging code at 2 AM, you'll find me diving deep into political theory, studying agricultural systems, 
        or geeking out over legal frameworks.
      </p>
      <p style="line-height: 1.8; opacity: 0.9; margin-top: 1rem;">
        I don't believe in boxes. Why choose between tech, governance, and agriculture when I can combine them? 
        I'm here to build solutions that actually help real people - whether that's building tools for smallholder farmers, 
        creating transparency systems for governance, or just writing really clean code.
      </p>
      <p style="line-height: 1.8; opacity: 0.9; margin-top: 1rem;">
        Currently on a mission to prove that African developers aren't just consumers of technology - we're the ones building 
        the next generation of solutions for our continent and the world.
      </p>
    </section>
    
    <h3 class="section-title fade-in">Education Timeline</h3>
    <div class="timeline fade-in">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass">
          <h4>Sunyani Technical University</h4>
          <p><strong>BTech. Computer Science</strong></p>
          <p>March 2025 - September 2028</p>
          <p style="opacity: 0.8; margin-top: 0.5rem;">Currently pursuing my degree in Computer Science, focusing on software development, algorithms, and systems design.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass">
          <h4>Navrongo Senior High School</h4>
          <p><strong>General Science</strong></p>
          <p>2022 - 2024</p>
          <p style="opacity: 0.8; margin-top: 0.5rem;">Completed senior high school with focus on Physics, Chemistry, Biology, and Mathematics.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass">
          <h4>Doayin Academy</h4>
          <p><strong>Elementary School</strong></p>
          <p style="opacity: 0.8; margin-top: 0.5rem;">Completed basic education with strong academic foundation.</p>
        </div>
      </div>
    </div>
    
    <section class="glass fade-in" style="padding: 2rem; margin-top: 2rem;">
      <h3 class="section-title">Programming Languages</h3>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <span class="interest-tag"><i class="fas fa-code"></i> C++</span>
        <span class="interest-tag"><i class="fab fa-js-square"></i> JavaScript</span>
        <span class="interest-tag"><i class="fab fa-php"></i> PHP</span>
        <span class="interest-tag"><i class="fab fa-html5"></i> HTML</span>
        <span class="interest-tag"><i class="fab fa-css3-alt"></i> CSS</span>
        <span class="interest-tag"><i class="fab fa-java"></i> Java</span>
      </div>
      <p style="margin-top: 1rem; opacity: 0.8;">
        I'm always learning and expanding my skill set with new technologies.
      </p>
    </section>
    
    <section class="glass fade-in" style="padding: 2rem; margin-top: 2rem;">
      <h3 class="section-title">Learning Platforms</h3>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div class="card glass" style="flex: 1; min-width: 200px;">
          <i class="fab fa-free-code-camp" style="font-size: 3rem; color: #006400;"></i>
          <h4>FreeCodeCamp</h4>
          <p>Used for learning web development, algorithms, and programming concepts through practical projects.</p>
          <a href="https://freecodecamp.org/certification/just_me_prince/responsive-web-design-v9" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">
            <i class="fas fa-certificate"></i> View Certificate
          </a>
        </div>
      </div>
    </section>
  `;
}

// Projects Page
function loadProjectsPage() {
  fetch('data/projects.json')
    .then(response => response.json())
    .then(projects => {
      content.innerHTML = `
        <h2 class="page-title fade-in">My Projects</h2>
        <div class="card-grid fade-in">
          ${projects.map((project, index) => `
            <div class="card glass">
              <div class="card-header">
                <i class="${project.icon || 'fas fa-project-diagram'}" style="font-size: 2rem; color: var(--primary);"></i>
                <h3>${project.title}</h3>
              </div>
              <p>${project.description}</p>
              <div class="card-footer">
                <span class="project-tag">${project.category || 'Technology'}</span>
                <a href="${project.link}" target="_blank" class="btn btn-primary">
                  <i class="fas fa-external-link-alt"></i> View
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    })
    .catch(() => {
      content.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
    });
}

// Load Project Application
function loadProjectApp(index) {
  const apps = [
    loadStreakTrackerApp,
    loadFarmManagementApp,
    loadSurveyFormApp,
    loadNumberGuessApp,
    loadRockPaperScissorsApp,
    loadTributePageApp
  ];
  
  if(apps[index]) {
    apps[index]();
  }
}

// Blogs Page
function loadBlogsPage() {
  fetch('./src/data/blogs.json')
    .then(response => response.json())
    .then(blogs => {
      content.innerHTML = `
        <h2 class="page-title fade-in">Blog Posts</h2>
        <div class="card-grid fade-in">
          ${blogs.map(blog => `
            <div class="card glass">
              <h3>${blog.title}</h3>
              <p style="font-size: 0.85rem; opacity: 0.7;">
                <i class="fas fa-calendar"></i> ${new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', month: 'long', day: 'numeric' 
                })}
              </p>
              <p>${blog.content}</p>
              <div class="card-footer">
                <span class="blog-tag">${blog.category || 'General'}</span>
                <button class="btn btn-primary">
                  <i class="fas fa-book-open"></i> Read More
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    })
    .catch(() => {
      content.innerHTML = `<p>Error loading blogs. Please try again later.</p>`;
    });
}

// Planner Page with Streak Setter
function loadPlannerPage() {
  let streak = parseInt(localStorage.getItem('streakCount') || '0');
  let streakGoal = localStorage.getItem('streakGoal') || 'Daily Learning';
  let lastStreakDate = localStorage.getItem('lastStreakDate') || '';
  const today = new Date().toDateString();
  
  content.innerHTML = `
    <h2 class="page-title fade-in">Planner & Streak Tracker</h2>
    
    <div class="planner-container glass fade-in">
      <div class="streak-display">
        <h3>Current Streak</h3>
        <div class="streak-number">${streak}</div>
        <p style="opacity: 0.8;">days</p>
      </div>
      
      <div style="text-align: center; margin: 1rem 0;">
        <h4>Current Goal: <span id="current-goal">${streakGoal}</span></h4>
      </div>
      
      <div class="streak-controls">
        <input type="text" id="streak-goal-input" placeholder="Set your daily goal" value="${streakGoal}">
        <button id="update-goal" class="btn btn-primary">
          <i class="fas fa-save"></i> Update Goal
        </button>
      </div>
      
      <div class="streak-controls">
        <button id="mark-done" class="btn btn-primary" ${lastStreakDate === today ? 'disabled style="opacity: 0.5; pointer-events: none;"' : ''}>
          <i class="fas fa-check"></i> ${lastStreakDate === today ? 'Already Marked Today' : 'Mark Today Complete'}
        </button>
        <button id="reset-streak" class="btn" style="background: var(--danger); color: white;">
          <i class="fas fa-redo"></i> Reset Streak
        </button>
      </div>
      
      <div style="margin-top: 2rem; padding: 1rem; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
        <h4><i class="fas fa-lightbulb"></i> Tips</h4>
        <ul style="margin-top: 1rem; line-height: 1.8; opacity: 0.8;">
          <li>Visit daily and mark your goal complete to maintain your streak</li>
          <li>Streaks are saved automatically on your device</li>
          <li>Set meaningful goals that align with your learning objectives</li>
        </ul>
      </div>
    </div>
  `;
  
  // Streak Event Listeners
  document.getElementById('update-goal').addEventListener('click', () => {
    const newGoal = document.getElementById('streak-goal-input').value.trim();
    if (newGoal) {
      localStorage.setItem('streakGoal', newGoal);
      document.getElementById('current-goal').textContent = newGoal;
    }
  });
  
  document.getElementById('mark-done').addEventListener('click', () => {
    streak++;
    localStorage.setItem('streakCount', streak);
    localStorage.setItem('lastStreakDate', today);
    document.querySelector('.streak-number').textContent = streak;
    this.disabled = true;
    this.textContent = '✓ Already Marked Today';
    this.style.opacity = '0.5';
  });
  
  document.getElementById('reset-streak').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your streak?')) {
      streak = 0;
      localStorage.setItem('streakCount', '0');
      localStorage.removeItem('lastStreakDate');
      document.querySelector('.streak-number').textContent = '0';
      document.getElementById('mark-done').disabled = false;
      document.getElementById('mark-done').innerHTML = '<i class="fas fa-check"></i> Mark Today Complete';
      document.getElementById('mark-done').style.opacity = '1';
    }
  });
}

// Games Page
function loadGamesPage() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let score = parseInt(localStorage.getItem('gameScore') || '0');
  let rpsPlayerScore = 0;
  let rpsComputerScore = 0;
  
  content.innerHTML = `
    <h2 class="page-title fade-in">Games</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
      <div class="game-container glass fade-in">
        <h3 class="game-title"><i class="fas fa-dice"></i> Guess the Number</h3>
        <p style="opacity: 0.8; margin-bottom: 1rem;">I'm thinking of a number between 1 and 100. Can you guess it?</p>
        
        <input type="number" id="guess-input" class="game-input" min="1" max="100" placeholder="1-100">
        <div style="margin: 1rem 0; gap: 0.5rem; display: flex; justify-content: center;">
          <button id="submit-guess" class="btn btn-primary">
            <i class="fas fa-paper-plane"></i> Guess!
          </button>
          <button id="reset-game" class="btn" style="background: var(--warning); color: white;">
            <i class="fas fa-redo"></i> New Game
          </button>
        </div>
        
        <p id="game-result" class="result"></p>
        <p>Attempts: <span id="attempts-count">0</span></p>
        <p>Total Wins: <span id="guess-wins">${score}</span></p>
        
        <div id="guess-history" style="margin-top: 1rem; max-height: 150px; overflow-y: auto;"></div>
      </div>

      <div class="game-container glass fade-in">
        <h3 class="game-title"><i class="fas fa-hand-rock"></i> Rock Paper Scissors</h3>
        <p style="opacity: 0.8; margin-bottom: 1rem;">Choose your move!</p>
        
        <div style="display: flex; gap: 1rem; justify-content: center; margin: 1rem 0;">
          <button class="btn rps-btn" data-choice="rock">
            <i class="fas fa-hand-rock fa-2x"></i>
          </button>
          <button class="btn rps-btn" data-choice="paper">
            <i class="fas fa-hand-paper fa-2x"></i>
          </button>
          <button class="btn rps-btn" data-choice="scissors">
            <i class="fas fa-hand-scissors fa-2x"></i>
          </button>
        </div>
        
        <p id="rps-result" class="result"></p>
        <div style="display: flex; justify-content: space-around; margin-top: 1rem;">
          <p>You: <span id="player-score">0</span></p>
          <p>Computer: <span id="computer-score">0</span></p>
        </div>
      </div>
    </div>
  `;
  
  // Guess the Number Game
  const guessInput = document.getElementById('guess-input');
  const submitBtn = document.getElementById('submit-guess');
  const resultEl = document.getElementById('game-result');
  const attemptsEl = document.getElementById('attempts-count');
  const historyEl = document.getElementById('guess-history');
  const resetBtn = document.getElementById('reset-game');
  const guessWins = document.getElementById('guess-wins');
  
  function checkGuess() {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      resultEl.textContent = 'Please enter a valid number between 1 and 100';
      resultEl.className = 'result error';
      return;
    }
    
    attempts++;
    attemptsEl.textContent = attempts;
    
    const historyItem = document.createElement('div');
    historyItem.style.padding = '0.3rem';
    historyItem.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    
    if (guess === randomNumber) {
      resultEl.textContent = `🎉 Correct! You got it in ${attempts} attempts!`;
      resultEl.className = 'result success';
      submitBtn.disabled = true;
      historyItem.textContent = `Attempt ${attempts}: ${guess} - Correct!`;
      historyItem.style.color = 'var(--success)';
      score++;
      localStorage.setItem('gameScore', score);
      guessWins.textContent = score;
    } else if (guess < randomNumber) {
      resultEl.textContent = 'Too low! Try higher.';
      resultEl.className = 'result error';
      historyItem.textContent = `Attempt ${attempts}: ${guess} - Too low`;
    } else {
      resultEl.textContent = 'Too high! Try lower.';
      resultEl.className = 'result error';
      historyItem.textContent = `Attempt ${attempts}: ${guess} - Too high`;
    }
    
    historyEl.prepend(historyItem);
    guessInput.value = '';
    guessInput.focus();
  }
  
  submitBtn.addEventListener('click', checkGuess);
  guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
  });
  
  resetBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsEl.textContent = '0';
    resultEl.textContent = '';
    historyEl.innerHTML = '';
    submitBtn.disabled = false;
    guessInput.value = '';
    guessInput.focus();
  });
  
  // Rock Paper Scissors Game
  const rpsResult = document.getElementById('rps-result');
  const playerScoreEl = document.getElementById('player-score');
  const computerScoreEl = document.getElementById('computer-score');
  const rpsButtons = document.querySelectorAll('.rps-btn');
  
  function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
      rpsResult.className = 'result';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = `You win! ${playerChoice} beats ${computerChoice}`;
      rpsResult.className = 'result success';
      rpsPlayerScore++;
      playerScoreEl.textContent = rpsPlayerScore;
    } else {
      result = `You lose! ${computerChoice} beats ${playerChoice}`;
      rpsResult.className = 'result error';
      rpsComputerScore++;
      computerScoreEl.textContent = rpsComputerScore;
    }
    
    rpsResult.textContent = result;
  }
  
  rpsButtons.forEach(btn => {
    btn.addEventListener('click', () => playRPS(btn.dataset.choice));
  });
}

// ========== PROJECT APPLICATIONS ==========

// Streak Tracker Application
function loadStreakTrackerApp() {
  let streak = parseInt(localStorage.getItem('appStreakCount') || '0');
  let streakGoal = localStorage.getItem('appStreakGoal') || 'Daily Learning';
  let lastStreakDate = localStorage.getItem('appLastStreakDate') || '';
  const today = new Date().toDateString();
  
  content.innerHTML = `
    <button onclick="loadPage('projects')" class="btn" style="margin-bottom: 1rem;"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    <h2 class="page-title fade-in">Streak Tracker</h2>
    
    <div class="planner-container glass fade-in">
      <div class="streak-display">
        <h3>Current Streak</h3>
        <div class="streak-number">${streak}</div>
        <p style="opacity: 0.8;">days</p>
      </div>
      
      <div style="text-align: center; margin: 1rem 0;">
        <h4>Current Goal: <span id="current-goal">${streakGoal}</span></h4>
      </div>
      
      <div class="streak-controls">
        <input type="text" id="streak-goal-input" placeholder="Set your daily goal" value="${streakGoal}">
        <button id="update-goal" class="btn btn-primary">
          <i class="fas fa-save"></i> Update Goal
        </button>
      </div>
      
      <div class="streak-controls">
        <button id="mark-done" class="btn btn-primary" ${lastStreakDate === today ? 'disabled style="opacity: 0.5; pointer-events: none;"' : ''}>
          <i class="fas fa-check"></i> ${lastStreakDate === today ? 'Already Marked Today' : 'Mark Today Complete'}
        </button>
        <button id="reset-streak" class="btn" style="background: var(--danger); color: white;">
          <i class="fas fa-redo"></i> Reset Streak
        </button>
      </div>
    </div>
  `;
  
  document.getElementById('update-goal').addEventListener('click', () => {
    const newGoal = document.getElementById('streak-goal-input').value.trim();
    if (newGoal) {
      localStorage.setItem('appStreakGoal', newGoal);
      document.getElementById('current-goal').textContent = newGoal;
    }
  });
  
  document.getElementById('mark-done').addEventListener('click', function() {
    streak++;
    localStorage.setItem('appStreakCount', streak);
    localStorage.setItem('appLastStreakDate', today);
    document.querySelector('.streak-number').textContent = streak;
    this.disabled = true;
    this.textContent = '✓ Already Marked Today';
    this.style.opacity = '0.5';
  });
  
  document.getElementById('reset-streak').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your streak?')) {
      streak = 0;
      localStorage.setItem('appStreakCount', '0');
      localStorage.removeItem('appLastStreakDate');
      document.querySelector('.streak-number').textContent = '0';
      document.getElementById('mark-done').disabled = false;
      document.getElementById('mark-done').innerHTML = '<i class="fas fa-check"></i> Mark Today Complete';
      document.getElementById('mark-done').style.opacity = '1';
    }
  });
}

// Farm Management System Demo
function loadFarmManagementApp() {
  const crops = [
    { name: "Maize", planted: "2026-03-10", expected: "2026-07-20", status: "Growing" },
    { name: "Tomatoes", planted: "2026-03-25", expected: "2026-06-15", status: "Growing" },
    { name: "Peppers", planted: "2026-04-01", expected: "2026-07-01", status: "Growing" }
  ];
  
  content.innerHTML = `
    <button onclick="loadPage('projects')" class="btn" style="margin-bottom: 1rem;"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    <h2 class="page-title fade-in">Farm Management System</h2>
    
    <div class="glass fade-in" style="padding: 2rem;">
      <h3 class="section-title">Crop Inventory</h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
        <thead>
          <tr style="border-bottom: 2px solid var(--primary);">
            <th style="padding: 1rem; text-align: left;">Crop</th>
            <th style="padding: 1rem; text-align: left;">Date Planted</th>
            <th style="padding: 1rem; text-align: left;">Expected Harvest</th>
            <th style="padding: 1rem; text-align: left;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${crops.map(crop => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 1rem;">${crop.name}</td>
              <td style="padding: 1rem;">${crop.planted}</td>
              <td style="padding: 1rem;">${crop.expected}</td>
              <td style="padding: 1rem;"><span style="background: var(--success); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">${crop.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div style="margin-top: 2rem;">
        <h4>Add New Crop</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
          <input type="text" id="crop-name" placeholder="Crop Name">
          <input type="date" id="plant-date">
          <button class="btn btn-primary" onclick="alert('Crop added successfully!')">Add Crop</button>
        </div>
      </div>
    </div>
  `;
}

// Survey Form Project
function loadSurveyFormApp() {
  content.innerHTML = `
    <button onclick="loadPage('projects')" class="btn" style="margin-bottom: 1rem;"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    <h2 class="page-title fade-in">Student Survey Form</h2>
    
    <div class="glass fade-in" style="padding: 2rem; max-width: 600px; margin: 0 auto;">
      <form id="survey-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem;">Full Name</label>
          <input type="text" style="width: 100%;" placeholder="Enter your name">
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem;">Email</label>
          <input type="email" style="width: 100%;" placeholder="Enter your email">
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem;">Which best describes you?</label>
          <select style="width: 100%; padding: 0.8rem; border-radius: 8px;">
            <option>Student</option>
            <option>Professional</option>
            <option>Freelancer</option>
            <option>Other</option>
          </select>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem;">How would you rate your programming skills?</label>
          <div style="display: flex; gap: 1rem;">
            <label><input type="radio" name="skill"> Beginner</label>
            <label><input type="radio" name="skill"> Intermediate</label>
            <label><input type="radio" name="skill"> Advanced</label>
          </div>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem;">Languages you know (check all):</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <label><input type="checkbox"> JavaScript</label>
            <label><input type="checkbox"> Python</label>
            <label><input type="checkbox"> C++</label>
            <label><input type="checkbox"> Java</label>
            <label><input type="checkbox"> PHP</label>
            <label><input type="checkbox"> Other</label>
          </div>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem;">Any comments or suggestions?</label>
          <textarea style="width: 100%; min-height: 100px; padding: 0.8rem; border-radius: 8px;" placeholder="Enter your comments here..."></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary" style="width: 100%;" onclick="event.preventDefault(); alert('Thank you for completing the survey!')">
          Submit Survey
        </button>
      </form>
    </div>
  `;
}

// Number Guess App
function loadNumberGuessApp() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  
  content.innerHTML = `
    <button onclick="loadPage('projects')" class="btn" style="margin-bottom: 1rem;"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    <h2 class="page-title fade-in">Guess The Number</h2>
    
    <div class="game-container glass fade-in">
      <h3 class="game-title"><i class="fas fa-dice"></i> Guess the Number</h3>
      <p style="opacity: 0.8; margin-bottom: 1rem;">I'm thinking of a number between 1 and 100. Can you guess it?</p>
      
      <input type="number" id="guess-input-app" class="game-input" min="1" max="100" placeholder="1-100">
      <div>
        <button id="submit-guess-app" class="btn btn-primary">
          <i class="fas fa-paper-plane"></i> Guess!
        </button>
        <button id="reset-game-app" class="btn" style="background: var(--warning); color: white;">
          <i class="fas fa-redo"></i> New Game
        </button>
      </div>
      
      <p id="game-result-app" class="result"></p>
      <p>Attempts: <span id="attempts-count-app">0</span></p>
      <div id="guess-history-app" style="margin-top: 1rem; max-height: 150px; overflow-y: auto;"></div>
    </div>
  `;
  
  const guessInput = document.getElementById('guess-input-app');
  const submitBtn = document.getElementById('submit-guess-app');
  const resultEl = document.getElementById('game-result-app');
  const attemptsEl = document.getElementById('attempts-count-app');
  const historyEl = document.getElementById('guess-history-app');
  const resetBtn = document.getElementById('reset-game-app');
  
  function checkGuess() {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      resultEl.textContent = 'Please enter a valid number between 1 and 100';
      resultEl.className = 'result error';
      return;
    }
    
    attempts++;
    attemptsEl.textContent = attempts;
    
    const historyItem = document.createElement('div');
    historyItem.style.padding = '0.3rem';
    historyItem.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    
    if (guess === randomNumber) {
      resultEl.textContent = `🎉 Correct! You got it in ${attempts} attempts!`;
      resultEl.className = 'result success';
      submitBtn.disabled = true;
      historyItem.textContent = `Attempt ${attempts}: ${guess} - Correct!`;
      historyItem.style.color = 'var(--success)';
    } else if (guess < randomNumber) {
      resultEl.textContent = 'Too low! Try higher.';
      resultEl.className = 'result error';
      historyItem.textContent = `Attempt ${attempts}: ${guess} - Too low`;
    } else {
      resultEl.textContent = 'Too high! Try lower.';
      resultEl.className = 'result error';
      historyItem.textContent = `Attempt ${attempts}: ${guess} - Too high`;
    }
    
    historyEl.prepend(historyItem);
    guessInput.value = '';
    guessInput.focus();
  }
  
  submitBtn.addEventListener('click', checkGuess);
  guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
  });
  
  resetBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsEl.textContent = '0';
    resultEl.textContent = '';
    historyEl.innerHTML = '';
    submitBtn.disabled = false;
    guessInput.value = '';
    guessInput.focus();
  });
}

// Rock Paper Scissors App
function loadRockPaperScissorsApp() {
  let playerScore = 0;
  let computerScore = 0;
  
  content.innerHTML = `
    <button onclick="loadPage('projects')" class="btn" style="margin-bottom: 1rem;"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    <h2 class="page-title fade-in">Rock Paper Scissors</h2>
    
    <div class="game-container glass fade-in">
      <h3 class="game-title"><i class="fas fa-hand-rock"></i> Rock Paper Scissors</h3>
      <p style="opacity: 0.8; margin-bottom: 1rem;">Choose your move!</p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; margin: 1rem 0;">
        <button class="btn rps-app-btn" data-choice="rock">
          <i class="fas fa-hand-rock fa-2x"></i>
        </button>
        <button class="btn rps-app-btn" data-choice="paper">
          <i class="fas fa-hand-paper fa-2x"></i>
        </button>
        <button class="btn rps-app-btn" data-choice="scissors">
          <i class="fas fa-hand-scissors fa-2x"></i>
        </button>
      </div>
      
      <p id="rps-result-app" class="result"></p>
      <div style="display: flex; justify-content: space-around; margin-top: 1rem;">
        <p>You: <span id="player-score-app">0</span></p>
        <p>Computer: <span id="computer-score-app">0</span></p>
      </div>
      
      <button id="reset-rps-app" class="btn" style="margin-top: 1rem; background: var(--warning); color: white;">
        <i class="fas fa-redo"></i> Reset Score
      </button>
    </div>
  `;
  
  const rpsResult = document.getElementById('rps-result-app');
  const playerScoreEl = document.getElementById('player-score-app');
  const computerScoreEl = document.getElementById('computer-score-app');
  const rpsButtons = document.querySelectorAll('.rps-app-btn');
  const resetBtn = document.getElementById('reset-rps-app');
  
  function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
      rpsResult.className = 'result';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = `You win! ${playerChoice} beats ${computerChoice}`;
      rpsResult.className = 'result success';
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      result = `You lose! ${computerChoice} beats ${playerChoice}`;
      rpsResult.className = 'result error';
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
    
    rpsResult.textContent = result;
  }
  
  rpsButtons.forEach(btn => {
    btn.addEventListener('click', () => playRPS(btn.dataset.choice));
  });
  
  resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    rpsResult.textContent = '';
  });
}

// Tribute Page Project
function loadTributePageApp() {
  content.innerHTML = `
    <button onclick="loadPage('projects')" class="btn" style="margin-bottom: 1rem;"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    <h2 class="page-title fade-in">Tribute Page</h2>
    
    <div class="glass fade-in" style="padding: 2rem; max-width: 800px; margin: 0 auto; text-align: center;">
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Dr. Kwame Nkrumah</h1>
      <p style="font-size: 1.2rem; opacity: 0.8; font-style: italic;">Founder of Modern Ghana</p>
      
      <div style="margin: 2rem 0;">
        <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); padding: 4rem; border-radius: 12px; color: white;">
          <i class="fas fa-user-tie fa-5x"></i>
          <p style="margin-top: 1rem;">1909 - 1972</p>
        </div>
      </div>
      
      <div style="text-align: left; line-height: 1.8;">
        <p style="margin-bottom: 1rem;">
          Dr. Kwame Nkrumah was a Ghanaian politician, political theorist, and revolutionary. He was the first Prime Minister and President of Ghana, having led the Gold Coast to independence from Britain in 1957.
        </p>
        <p style="margin-bottom: 1rem;">
          An influential advocate of Pan-Africanism, Nkrumah was a founding member of the Organization of African Unity and winner of the Lenin Peace Prize from the Soviet Union in 1962.
        </p>
        <p>
          His vision for a united and prosperous Africa continues to inspire generations of leaders and activists across the continent.
        </p>
      </div>
    </div>
  `;
}

// Hash Router
window.addEventListener('hashchange', () => {
  const page = window.location.hash.substring(1) || 'home';
  loadPage(page);
});

// Initial Load
loadPage(window.location.hash.substring(1) || 'home');
