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

// Add this to your existing JavaScript file

class ProgressTracker {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 4;
        this.progressBar = document.getElementById('progressBar');
        this.currentStepElement = document.getElementById('currentStep');
        this.stepIndicators = document.querySelectorAll('.step-indicator');
        
        // Initialize the progress bar
        this.updateProgress(this.currentStep);
        
        // Add click handlers to step indicators (optional)
        this.stepIndicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const step = parseInt(indicator.dataset.step);
                if (step <= this.currentStep + 1) {
                    this.updateProgress(step);
                }
            });
        });
    }
    
    updateProgress(step) {
        // Update current step
        this.currentStep = step;
        
        // Update progress bar width
        const progressPercentage = ((step - 1) / (this.totalSteps - 1)) * 100;
        this.progressBar.style.width = `${progressPercentage}%`;
        
        // Update step number display
        this.currentStepElement.textContent = step;
        
        // Update step indicators
        this.stepIndicators.forEach(indicator => {
            const indicatorStep = parseInt(indicator.dataset.step);
            indicator.classList.remove('active', 'completed');
            
            if (indicatorStep < step) {
                indicator.classList.add('completed');
            } else if (indicatorStep === step) {
                indicator.classList.add('active');
            }
        });
        
        // Save progress in localStorage (optional)
        localStorage.setItem('currentStep', step);
    }
    
    // Method to be called when a step is completed
    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.updateProgress(this.currentStep + 1);
            return true;
        }
        return false;
    }
    
    // Method to go back a step
    previousStep() {
        if (this.currentStep > 1) {
            this.updateProgress(this.currentStep - 1);
            return true;
        }
        return false;
    }
    
    // Method to check if all steps are completed
    isComplete() {
        return this.currentStep === this.totalSteps;
    }
}

// Initialize the progress tracker
const progressTracker = new ProgressTracker();

// Example usage in your existing button click handlers:
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // Check if this button should trigger progress update
        if (this.dataset.progressStep === 'next') {
            progressTracker.nextStep();
        }
    });
});

// Optional: Load saved progress on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
        progressTracker.updateProgress(parseInt(savedStep));
    }
});