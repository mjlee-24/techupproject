// script.js

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Progress tracking functionality
    let currentStep = 1;
    const totalSteps = 4;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    function updateProgress(step) {
        currentStep = step;
        const percentage = (step / totalSteps) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${step}/${totalSteps} Steps`;
    }

    // Add click handlers to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            if (currentStep < totalSteps) {
                updateProgress(currentStep + 1);
            }
            // Add fade-in animation to the next step
            this.closest('.card').classList.add('fade-in');
        });
    });

    // Initialize cards with fade-in animation
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100); // Stagger the animations
    });

    // Simple form validation for any input fields
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
    });

    function validateInput(input) {
        const value = input.value.trim();
        if (!value) {
            input.classList.add('border-red-500');
        } else {
            input.classList.remove('border-red-500');
        }
    }

    // Add responsive navigation behavior
    const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        document.querySelectorAll('.card').forEach(card => {
            card.style.margin = isMobile ? '0 0 1rem 0' : '0';
        });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    // Optional: Add data visualization functionality
    function updateGrowthChart(currentSavings, potentialSavings) {
        const percentage = (currentSavings / potentialSavings) * 100;
        const growthBar = document.querySelector('.bg-green-500');
        if (growthBar) {
            growthBar.style.width = `${percentage}%`;
        }
    }

    // Optional: Add local storage for progress persistence
    function saveProgress() {
        localStorage.setItem('cpfOptimizerProgress', currentStep);
    }

    function loadProgress() {
        const savedProgress = localStorage.getItem('cpfOptimizerProgress');
        if (savedProgress) {
            updateProgress(parseInt(savedProgress));
        }
    }

    // Load saved progress on initialization
    loadProgress();

    // Save progress when updated
    function updateProgressWithSave(step) {
        updateProgress(step);
        saveProgress();
    }
});