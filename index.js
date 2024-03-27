document.addEventListener("DOMContentLoaded", function() {
    const projects = [
      { name: "front-end Development", description: "I'm proficient in building front-end apps using HTML, CSS and Javascript with professional UI experienece.", link: "#" },
      { name: "Back-end Development", description: "contact me for databases, back-end logic, API architecture and servers. I work efficiently with tools and frameworks for quick and responsive end-user requests", link: "#" }
      // Add more projects as needed
    ];
  
    const projectsContainer = document.getElementById("projects");
  
    projects.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
  
      const heading = document.createElement("h3");
      heading.textContent = project.name;
  
      const description = document.createElement("p");
      description.textContent = project.description;
  
      const link = document.createElement("a");
      link.textContent = "View Project";
      link.href = project.link;
  
      projectElement.appendChild(heading);
      projectElement.appendChild(description);
      projectElement.appendChild(link);
  
      projectsContainer.appendChild(projectElement);
    });
  });
  