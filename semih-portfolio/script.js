// Minimal JS for Gestalt interactions
document.addEventListener('DOMContentLoaded', () => {
    // Gestalt: Continuity and Similarity
    // A subtle reveal effect for projects to imply sequential relation
    const projects = document.querySelectorAll('.project-item');
    
    // Add a simple stagger entrance
    projects.forEach((project, index) => {
        // Start state
        project.style.opacity = '0';
        project.style.transform = 'translateY(10px)';
        
        // Ensure transition doesn't interfere with hover effects later
        project.style.transition = 'opacity 0.6s ease, transform 0.6s ease, background-color 0.2s ease, color 0.2s ease';
        
        // Trigger animation
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});
