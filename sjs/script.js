// Toggle menu for mobile
function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Contact form

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,

      message: document.getElementById("message").value,
    };

    const response = await fetch("https://formspree.io/f/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message.");
    }

   
  });





