function showDatetime() {
  const now = new Date();
  const options = {
    weekday: 'long',   // e.g., "Sunday"
    year: 'numeric',   // e.g., "2025"
    month: 'long',     // e.g., "April"
    day: 'numeric'     // e.g., "20"
  };

  const date = now.toLocaleDateString('en-IN', options);
  const time = now.toLocaleTimeString();

  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
}


setInterval(showDatetime, 1000); // calls showDateTime every 1 sec


// This is for when we scroll down to a page that name will be highlighted in navigation bar 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
      });
      const an = document.querySelector(`#${id} h1`);
      if (an) {
        gsap.from(an, {
          color: "white",
        }
        );
      }

    }
  });
};

let about = document.querySelector('.undersign');

document.querySelectorAll('.service-card').forEach(card => {
  const spotlight = card.querySelector('.spotlight');
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, #00eaff88 0%, #a020f088 40%, transparent 80%)`;
  });
  card.addEventListener('mouseleave', () => {
    spotlight.style.background = `radial-gradient(circle at 60% 40%, #00eaff88 0%, #a020f088 40%, transparent 80%)`;
  });
});


// This is for the navbar animation 
let header = document.querySelector('header');
header.addEventListener('mouseenter', () => {
  header.style.width = "12vw";

})
header.addEventListener('mouseleave', () => {
  header.style.width = "5vw";

})





// Panel content for each box
const panels1 = [
  {
    title: "About Me",
    content: `<div class="panel panel-1">
                    <div>
                        <h2>Hey, I’m <strong>Aditya Modani 👋</strong></h2>
                        <p>
                            An <strong>18-year-old</strong> aspiring developer from <strong>India</strong>,<br>
                            currently pursuing <strong>B.Tech in Computer Science</strong>.<br><br>

                            Welcome to a place where I share my <strong>journey, passion, and projects</strong> —
                            one scroll at a time.
                        </p>
                    </div>
                    <img src="AdityaModani_TechnologyClub_Co-Chair.jpg" alt="Aditya Mudani" class="intro-photo">
                </div>`
  },
  {
    title: "Passion for Tech 💻",
    content: `<div class="panel panel-2">
                        <img src="intrr.jpg" alt="">
                        <div>
                            <h2>Fueled by <strong>Passion for Tech 💻</strong></h2>

                            <p>
                                My journey into <strong>tech</strong> wasn’t just a choice —
                                it felt like a <strong>calling</strong>.<br><br>

                                From <strong>building small websites</strong> to exploring
                                <strong>AI-based solutions</strong>, I’m on a mission to discover how
                                <strong>technology</strong> can solve real problems.<br><br>

                                <strong>Frontend?</strong> <strong>Backend?</strong>
                                I enjoy learning it all — one challenge at a time.
                            </p>
                        </div>
                </div>`
  },
  {
    title: "Why I Do What I Do 🎯",
    content: `<div class="panel panel-3">
                    <div>
                        <h2>Why I Do <strong>What I Do 🎯</strong></h2>
                        <p>
                            I want more than just a <strong>degree</strong>.<br><br>

                            I want to <strong>build things that matter</strong> — clean, useful,
                            maybe even <strong>beautiful</strong>.<br><br>

                            I’m working on becoming <strong>independent</strong>,
                            growing my <strong>personality</strong>, and learning to be the
                            <strong>best version of myself</strong>, one project at a time.
                        </p>
                    </div>
                    <div>
                        <img src="3.webp" alt="">
                    </div>
                </div>`
  },
  {
    title: "More Than Code 🧠",
    content: `<div class="panel panel-4">
                    <div>
                        <img src="intrr.jpg" alt="">
                    </div>
                    <div>
                        <h2>More Than Just <strong>Code 🧠</strong></h2>
                        <p>
                            I’m an <strong>introvert</strong> who’s not afraid to <strong>stand out</strong>.<br><br>

                            I enjoy <strong>fitness</strong>, <strong>content creation</strong>, and
                            sharpening my <strong>communication skills</strong>.<br><br>

                            When I’m not coding, you’ll find me <strong>sketching ideas</strong>,
                            exploring <strong>new tools</strong>, or learning something random on YouTube.
                        </p>
                    </div>
                </div>`
  },
  {
    title: "The Road Ahead 🚀",
    content: `<div class="panel panel-5">
                    <h2>The Road <strong>Ahead 🚀</strong></h2>
                    <p>
                        I’m not where I want to be — <strong>yet</strong>.<br><br>

                        But every day, I’m making <strong>progress</strong> — learning,
                        building, and pushing my <strong>limits</strong>.<br><br>

                        This portfolio isn’t just a website. It’s a <strong>glimpse into my journey</strong> —
                        and trust me, I’m just getting <strong>started</strong>.
                    </p>
                </div>`
  }
];

document.querySelectorAll(".about-grid .box").forEach(box => {
  box.addEventListener("click", () => {
    const link = box.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
      return;
    }
    const index = +box.getAttribute("data-panel") - 1;
    const popup = document.getElementById("about-popup");
    const content = document.getElementById("popup-content");
    content.innerHTML = `
          <button class="close-btn" id="close-btn">&times;</button>
          <h2>${panels1[index].title}</h2>
          ${panels1[index].content}
        `;
    popup.classList.add("active");
    document.body.style.overflow = "hidden";

    // Add event listener again for newly injected close button
    document.getElementById("close-btn").onclick = () => {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    };
  });
});

// Also close on background click
document.getElementById("about-popup").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.remove("active");
    document.body.style.overflow = "";
  }
});
