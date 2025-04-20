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
