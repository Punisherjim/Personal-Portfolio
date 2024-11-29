// Elements
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.createElement("ul");
mobileMenu.classList.add("nav-links-mobile");

// Duplicate menu for mobile view
const menuItems = document.querySelectorAll(".nav-links li");
menuItems.forEach((item) => {
    const clone = item.cloneNode(true);

    // Modify cart icon for mobile menu
    if (clone.classList.contains("cart-icon")) {
        clone.innerHTML = `<a href="#">Cart</a>`; // Change to text
    }

    mobileMenu.appendChild(clone);
});

// Append mobile menu to navbar
if (navbar) {
    navbar.appendChild(mobileMenu);

    // Hamburger Menu Toggle
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
        // Prevent body scroll
        document.body.style.overflow = navbar.classList.contains("active") ? "hidden" : "";
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            document.body.style.overflow = ""; // Allow body scroll
        }
    });
}

// Home Section Typewriter 
const typewriterElement = document.getElementById("typewriter");

if (typewriterElement) {
    const professions = [
        "Front End Developer",
        "Freelancer",
        "Web Designer",
        "Editor"
    ];
    let professionIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < professions[professionIndex].length) {
            typewriterElement.textContent += professions[professionIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100); // Speed of typing
        } else {
            setTimeout(() => {
                deleteEffect();
            }, 2000); // Delay before deleting
        }
    }

    function deleteEffect() {
        if (charIndex > 0) {
            typewriterElement.textContent = professions[professionIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteEffect, 50); // Speed of deleting
        } else {
            professionIndex = (professionIndex + 1) % professions.length; // Move to the next profession
            setTimeout(typeEffect, 200); // Delay before typing again
        }
    }

    // Start the typewriter effect
    typeEffect();
}

// Section Shop
// Buttons functionality
const cartButtons = document.querySelectorAll('.btn-cart');
const buyButtons = document.querySelectorAll('.btn-buy');

// Add to Cart Functionality
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

// Buy Now Functionality
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Proceed to checkout!');
    });
});

// Service Section 
// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("service-modal");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close-modals");
    const learnMoreButtons = document.querySelectorAll(".learn-more");

    // Data for services
    const serviceDescriptions = {
        "web-development": "Detailed description of Web Development services. This includes responsive websites, custom solutions, and much more tailored to your business needs.",
        "graphic-design": "Comprehensive Graphic Design services to create logos, promotional materials, and captivating visuals that represent your brand.",
        "social-media": "Social Media Management services to increase engagement, brand visibility, and manage content effectively across platforms.",
        "content-writing": "Content Writing services to provide SEO-optimized and compelling content for blogs, websites, and marketing materials."
    };

    // Open modal on "Learn More" button click
    learnMoreButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const serviceType = button.getAttribute("data-service");
            modalDescription.textContent = serviceDescriptions[serviceType] || "Service details not available.";
            modal.style.display = "block";
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Skills Section 
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    const skillsSection = document.getElementById("skills-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function animateProgressBars() {
        if (isElementInViewport(skillsSection)) {
            progressBars.forEach((bar) => {
                const percentage = bar.getAttribute("data-percentage");
                bar.style.width = `${percentage}%`;
            });
        }
    }

    if (skillsSection) {
        // Trigger animation on scroll
        window.addEventListener("scroll", animateProgressBars);
    }
});

// Recent Project Section 
//Modal Visible
// Get the modal and the button that opens the modal
const modal = document.getElementById('projects-modal');
const viewMoreButton = document.getElementById('view-more-btn');
const closeModalButton = document.querySelector('.close-modal');  // Get the close button (X)
const body = document.body;  // Get the body element to disable scrolling

// Function to open the modal and disable body scroll
viewMoreButton.addEventListener('click', function() {
    modal.style.display = 'block';  // Show the modal
    body.style.overflow = 'hidden';  // Disable scrolling on the body
});

// Function to close the modal and enable body scroll
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';  // Hide the modal
    body.style.overflow = 'auto';  // Enable body scroll
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {  // If the target is the modal background
        modal.style.display = 'none';  // Close the modal
        body.style.overflow = 'auto';  // Re-enable body scrolling
    }
});

// About Section 
const aboutSection = document.querySelector('#about');
const aboutCard = document.querySelector('.about-card');

if (aboutSection && aboutCard) {
    window.addEventListener('scroll', () => {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionHeight = aboutSection.offsetHeight;

        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
            aboutCard.classList.add('active');
        } else {
            aboutCard.classList.remove('active');
        }
    });
}

// Contact Us Section 
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for contacting us!");
    });
}

// Footer Section 
document.querySelectorAll('.footer-column a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// No Disable Scroll When Hamburger menu open 
// Toggle ng klase para i-lock/unlock ang body scroll
hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open'); // toggle the mobile menu visibility
    document.body.classList.toggle('menu-open'); // i-lock/unlock ang scroll ng body
});

//New Sample 
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: false,   // Enable reverse animation on scroll up
    });
});

// For Download CV Button 
// Modal Elements
const modalz = document.getElementById("modalz");
const cvPreviewz = document.getElementById("cv-previewz");
const animationz = document.getElementById("download-animationz");
const downloadIconz = document.getElementById("download-iconz");

// Open Modal
document.getElementById("download-cv-btnz").addEventListener("click", () => {
    modalz.style.display = "block";
});

// Close Modal
document.querySelectorAll(".closez").forEach((close) => {
    close.addEventListener("click", () => {
        modalz.style.display = "none";
        cvPreviewz.style.display = "none";
    });
});

// Validate Code and Show CV Preview
document.getElementById("submit-codez").addEventListener("click", () => {
    const accessCode = document.getElementById("access-codez").value;
    if (accessCode === "1234") {
        modalz.style.display = "none";
        cvPreviewz.style.display = "block";
    } else {
        alert("Invalid Code");
    }
});

// Download Animation
downloadIconz.addEventListener("click", () => {
    cvPreviewz.style.display = "none"; // Hide CV preview
    animationz.style.display = "block"; // Show animation

    let progress = 0;
    const parachuteContainerz = document.querySelector(".parachute-containerz");
    const progressBarz = document.querySelector(".progressz");
    const progressTextz = document.getElementById("progress-textz");

    // Add animations to icons and progress bar
    parachuteContainerz.style.animation = "fallz 3s linear forwards";
    progressBarz.style.animation = "progressz 3s linear forwards";

    // Simulate progress bar text update
    const interval = setInterval(() => {
        progress += 1;
        progressTextz.textContent = `${progress}%`;

        if (progress === 100) {
            clearInterval(interval);

            // Change progress bar color and display complete message
            progressBarz.style.backgroundColor = "green";
            progressTextz.textContent = "Complete!";

            setTimeout(() => {
                animationz.style.display = "none"; // Hide animation
                alert("Download Complete"); // Notify user
                location.reload(); // Return to home
            }, 1000);
        }
    }, 30); // Adjust interval duration for smoother updates
});

// For Hire Button 
// Elements
const hireBtnk = document.getElementById("hire-btnk");
const hirePagek = document.getElementById("hire-message-pagek");
const sendBtnk = document.getElementById("send-btnk");
const hireFormk = document.getElementById("hire-formk");

// Open Hire Page
hireBtnk.addEventListener("click", () => {
    hirePagek.style.display = "flex"; // Show message page
});

// Send Button Click Event
sendBtnk.addEventListener("click", () => {
    // Collect form data
    const companyName = document.getElementById("company-namek").value;
    const name = document.getElementById("namek").value;
    const email = document.getElementById("emailk").value;

    // Validate inputs
    if (companyName && name && email) {
        // Example sending via email (replace with your own email handling code)
        const emailBody = `
            Company Name: ${companyName}
            Name: ${name}
            Email: ${email}
            Message: Congratulations, you're Hired!
        `;
        
        // Simulate sending (e.g., via email or server)
        console.log("Message Sent:", emailBody);
        
        // Display success message
        alert("Your message has been sent successfully!");
        
        // Close the hire page
        hirePagek.style.display = "none";
        hireFormk.reset(); // Reset form fields
    } else {
        alert("Please fill in all fields!");
    }
});

// Close Hire Page when clicking outside the form
hirePagek.addEventListener("click", (e) => {
    if (e.target === hirePagek) {
        hirePagek.style.display = "none"; // Hide message page
    }
});