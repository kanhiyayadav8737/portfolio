// Simple PDF generation for resume
// This script demonstrates how to create a basic PDF from HTML content
// In a real application, you might use libraries like Puppeteer or jsPDF

function generateResumePDF() {
    // Create a simple text-based resume content for download
    const resumeText = `
RESUME
======

Your Name
Aspiring Software Developer & Computer Science Student

Contact Information:
Email: your.email@example.com
Phone: +91 12345 67890
LinkedIn: linkedin.com/in/yourprofile
GitHub: github.com/yourusername

EDUCATION
=========

Bachelor of Technology - Computer Science Engineering
University Name (2021 - 2025)
CGPA: 8.5/10

Relevant Coursework: Data Structures & Algorithms, Database Management Systems, 
Web Development, Machine Learning, Software Engineering, Computer Networks

Higher Secondary Education (12th Grade)
School Name (2019 - 2021)
Percentage: 92%
Stream: Science (PCM + Computer Science)

EXPERIENCE
==========

Software Development Intern
Tech Company Name (June 2024 - August 2024)
• Developed responsive web applications using React.js and Node.js
• Collaborated with senior developers on client projects using Agile methodologies
• Improved application performance by 25% through code optimization
• Participated in code reviews and contributed to team documentation

Frontend Developer Intern
Startup Company (December 2023 - February 2024)
• Redesigned user interface components for better user experience
• Implemented responsive design principles for mobile compatibility
• Collaborated closely with UX/UI designers and backend developers

PROJECTS
========

E-Commerce Web Application
Technologies: React, Node.js, MongoDB, Stripe API
Full-stack e-commerce platform with user authentication, product catalog, 
shopping cart, and payment integration. Successfully deployed with 99% uptime 
and positive user feedback.

Task Management System
Technologies: Vue.js, Express.js, Socket.io, PostgreSQL
Collaborative task management application with real-time updates and team 
collaboration features. Improved team productivity by 40% in testing environment.

Machine Learning Prediction Model
Technologies: Python, TensorFlow, Pandas, Scikit-learn
Predictive model for stock price analysis using historical data. 
Achieved 85% accuracy in price prediction validation.

TECHNICAL SKILLS
================

Programming Languages: JavaScript, Python, Java, C++, SQL
Web Technologies: React.js, Node.js, HTML5/CSS3, Vue.js, Express.js
Databases & Tools: MongoDB, PostgreSQL, Git/GitHub, Docker, AWS

ACHIEVEMENTS & CERTIFICATIONS
=============================

• Dean's List (2023-2024) - Recognized for academic excellence with GPA above 8.5
• Hackathon Winner (2024) - 1st place in University Coding Hackathon
• Merit Scholarship (2022-2024) - Awarded for outstanding academic performance
• AWS Cloud Practitioner Certified (2024) - Amazon Web Services
• Full Stack Web Development Certificate (2023) - FreeCodeCamp
• Machine Learning Course (2023) - Coursera (Stanford University)

LEADERSHIP & ACTIVITIES
=======================

• Student Council President (2023-2024) - Led student body initiatives and organized campus events
• Coding Club Coordinator (2022-2024) - Organized workshops and coding competitions
• Community Volunteer (2021-Present) - Teaching programming to underprivileged children
• Debate Team Captain (2022-2023) - Led university debate team to regional championships

---
Generated from Student Portfolio Website
Built with HTML, CSS, and JavaScript
    `;

    // Create and download the file
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateResumePDF };
}
