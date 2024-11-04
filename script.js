// Recommendation logic based on user profiles
const recommendations = {
    // Young Adults (20-30)
    young: {
        home: {
            quickWin: {
                title: "Make Voluntary Contributions to your Ordinary Account",
                benefit: "Enjoy tax relief for up to $16,000 per year – up to $8,000 each when you make cash top-ups for (i) yourself and (ii) your loved ones!",
                link: "https://www.cpf.gov.sg/member/account-services/make-voluntary-contributions"
            },
            additional: [
                {
                    title: "Set up GIRO for Monthly Top-ups",
                    benefit: "Automate your savings with just one form submission!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-cash-top-ups-for-retirement"
                },
                {
                    title: "Join the CPF LIFE Scheme Early",
                    benefit: "Lock in lower premiums and secure lifetime monthly payouts!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/retirement-income/cpf-life"
                },
                {
                    title: "Start CPF Investment Scheme (CPFIS)",
                    benefit: "Potential to earn higher returns while maintaining security!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/investments/cpfis"
                }
            ]
        },
        retirement: {
            quickWin: {
                title: "Transfer $20,000 from OA to SA",
                benefit: "Earn 1.5% more interest annually - that's $300 extra per year, compounded!",
                link: "https://www.cpf.gov.sg/member/account-services/transfer-between-accounts"
            },
            additional: [
                {
                    title: "Set up Monthly SA Top-up",
                    benefit: "Earn 4% interest with minimal effort!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/manage-recurring-cash-top-ups-for-retirement"
                },
                {
                    title: "Make Retirement Sum Topping-Up",
                    benefit: "Get tax relief while building retirement funds!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement?utm_source=glepax&utm_medium=1200x628&utm_campaign=rtmplng&utm_term=&utm_content=i12&https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement%3Futm_source%3Dglepax%26utm_medium%3D1200x628%26utm_campaign%3Drtmplng%26utm_term%3D%26utm_content%3Di12%26gad_source%3D1&gclid=Cj0KCQjwvpy5BhDTARIsAHSilylsc21boDaKSiW0-3Z8lan7RzUq1XqBJxyUyCxNoTw84v0nEl9JZ3oaAr02EALw_wcB"
                },
                {
                    title: "Start Regular Investments",
                    benefit: "Dollar-cost average into low-risk investments!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings"
                }
            ]
        }
    },
    // Add more age groups and their recommendations...
};

// Form submission handling
document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const profile = {
        nickname: document.getElementById('nickname').value,
        age: document.getElementById('age').value,
        goals: Array.from(document.getElementById('goals').selectedOptions).map(option => option.value),
        income: document.getElementById('income').value,
        liquidity: document.getElementById('liquidity').value
    };

    // Generate and display recommendations
    generateRecommendations(profile);
});

function generateRecommendations(profile) {
    // Determine age category
    let ageCategory;
    if (profile.age.startsWith('2')) ageCategory = 'young';
    // Add more age categories as needed...

    // Get primary goal (first selected goal)
    const primaryGoal = profile.goals[0];

    // Get recommendations for this profile
    const userRecommendations = recommendations[ageCategory][primaryGoal];

    // Display Quick Win
    displayQuickWin(userRecommendations.quickWin);

    // Display Additional Recommendations
    displayAdditionalRecommendations(userRecommendations.additional);

    // Show hidden sections
    document.getElementById('quick-wins').classList.remove('hidden');
    document.getElementById('maximize-cpf').classList.remove('hidden');
}

function displayQuickWin(quickWin) {
    document.getElementById('quick-win-title').textContent = quickWin.title;
    document.getElementById('quick-win-benefit').textContent = quickWin.benefit;
    document.getElementById('quick-win-link').href = quickWin.link;
}

function displayAdditionalRecommendations(recommendations) {
    const container = document.getElementById('additional-recommendations');
    container.innerHTML = ''; // Clear existing recommendations

    recommendations.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        
        card.innerHTML = `
            <h3>${rec.title}</h3>
            <div class="time-indicator">⏱ ${rec.time}</div>
            <p class="benefit-text">${rec.benefit}</p>
            <div class="action-container">
                <a href="${rec.link}" target="_blank" class="action-btn">Take Action</a>
            </div>
        `;

        container.appendChild(card);
    });
}

// Add smooth scrolling when recommendations are generated
function scrollToRecommendations() {
    document.getElementById('quick-wins').scrollIntoView({ 
        behavior: 'smooth' 
    });
}