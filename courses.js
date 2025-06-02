const courses = [
    { title: "Ageing Assets: Managing the Risks", date: "02 September 2025", length: "1 day", location: "Buxton", cost: "From £715", isNew: true },
    { title: "Asbestos Management in Buildings", date: "Multiple dates available", length: "1 day", location: "Buxton", cost: "From £580" },
    { title: "Biological Monitoring for Chemical Exposures", date: "30 July 2025", length: "1/2 day", location: "Buxton", cost: "From £410", isNew: true },
    { title: "Biosafety: Working Safely at Containment Level 3", date: "Multiple dates available", length: "5 days", location: "Buxton", cost: "From £2780" },
    { title: "Display Screen Equipment Risk Assessment", date: "15 August 2025", length: "1/2 day", location: "Manchester", cost: "From £200" },
    { title: "Fire Safety Management", date: "21 July 2025", length: "1 day", location: "London", cost: "From £500" },
    { title: "COSHH Essentials", date: "12 September 2025", length: "1 day", location: "Liverpool", cost: "From £450", isNew: true },
    { title: "Health Risk Management", date: "Multiple dates available", length: "3 days", location: "Edinburgh", cost: "From £980" },
    { title: "Legionella Risk Assessment", date: "05 October 2025", length: "2 days", location: "London", cost: "From £700" },
    { title: "Manual Handling at Work", date: "22 July 2025", length: "1/2 day", location: "York", cost: "From £150" },
    { title: "Occupational Hygiene Monitoring", date: "10 August 2025", length: "4 days", location: "Bootle", cost: "From £1200", isNew: true },
    { title: "Online Safety Fundamentals", date: "Multiple dates available", length: "1 day", location: "Live Online", cost: "From £350" },
    { title: "Safe Use of Chemicals", date: "07 November 2025", length: "1 day", location: "Buxton", cost: "From £580" },
    { title: "Slips and Trips Prevention", date: "17 July 2025", length: "1 day", location: "Manchester", cost: "From £400" },
    { title: "Stress and Wellbeing at Work", date: "28 August 2025", length: "1 day", location: "London", cost: "From £525" },
    { title: "Vibration Risk Assessment", date: "19 June 2025", length: "1 day", location: "Bootle", cost: "From £510" },
    { title: "Noise at Work Awareness", date: "09 October 2025", length: "1 day", location: "Liverpool", cost: "From £480" },
    { title: "Introduction to REACH", date: "Multiple dates available", length: "2 days", location: "London", cost: "From £750" },
    { title: "Working at Height Awareness", date: "05 July 2025", length: "1 day", location: "Birmingham", cost: "From £370", isNew: true },
    { title: "Chemical Incident Response", date: "14 August 2025", length: "3 days", location: "Edinburgh", cost: "From £1100" }
  ];
  
  const table = document.getElementById("courses-table");
  
  courses.forEach(course => {
    const row = document.createElement("tr");
  
    // Generate a slug from the course title
    const slug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const courseUrl = `detail.html?slug=${slug}`; // This now points to the dynamic course page
  
    row.innerHTML = `
      <td>
        <a href="${courseUrl}">${course.title}</a>
        ${course.isNew ? '<span class="new-tag">New</span>' : ''}
      </td>
      <td>${course.date}</td>
      <td>${course.length}</td>
      <td>${course.location}</td>
      <td>${course.cost}</td>
    `;
  
    table.appendChild(row);
    
  });
  