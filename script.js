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



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY; 
    let offset =sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
      });
    };
  })};