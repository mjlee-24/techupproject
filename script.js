// Recommendation logic based on user profiles
const recommendations = {
    // Young Adults (20-30)
    young: {
        home: {
            quickWin: {
                title: "Make Voluntary Contributions to your Ordinary Account",
                benefit: "Increase your home loan eligibility by up to 4x your contribution!",
                link: "https://www.cpf.gov.sg/member/account-services/make-voluntary-contributions"
            },
            additional: [
                {
                    title: "Set up GIRO for Monthly Top-ups",
                    benefit: "Automate your savings with just one form submission!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/account-services/giro-arrangements"
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
                    link: "https://www.cpf.gov.sg/member/account-services/giro-arrangements"
                },
                {
                    title: "Make Retirement Sum Topping-Up",
                    benefit: "Get tax relief while building retirement funds!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/retirement-income/retirement-sum-topping-up"
                },
                {
                    title: "Start Regular Investments",
                    benefit: "Dollar-cost average into low-risk investments!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/investments/regular-savings"
                }
            ]
        },
        education: {
            quickWin: {
                title: "Start Monthly CPF Top-ups of $100",
                benefit: "Get $1,200 tax relief annually while building your nest egg!",
                link: "https://www.cpf.gov.sg/member/account-services/make-voluntary-contributions"
            },
            additional: [
                {
                    title: "Set up GIRO for Regular Top-ups",
                    benefit: "Automate your savings journey effortlessly!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/account-services/giro-arrangements"
                },
                {
                    title: "Top up MediSave Account",
                    benefit: "Secure healthcare needs while enjoying tax benefits!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/healthcare/medisave-top-up"
                },
                {
                    title: "Explore Education Endowment Scheme",
                    benefit: "Plan ahead for education expenses with guaranteed returns!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/schemes"
                }
            ]
        }
    },

    // Mid-Career Adults (31-45)
    midCareer: {
        home: {
            quickWin: {
                title: "Refinance HDB Loan to Bank Loan",
                benefit: "Potential savings of $200/month in loan payments plus 2.5% interest on your OA!",
                link: "https://www.cpf.gov.sg/member/home-ownership"
            },
            additional: [
                {
                    title: "Make Voluntary Housing Refund",
                    benefit: "Boost your retirement savings while maintaining property ownership!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/home-ownership/refund-housing-withdrawal"
                },
                {
                    title: "Top up MediSave to Basic Healthcare Sum",
                    benefit: "Maximize healthcare coverage and get tax relief up to $8,000!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/healthcare/medisave-top-up"
                },
                {
                    title: "Start RSTU to Spouse's SA",
                    benefit: "Double your tax relief up to $14,000 while helping spouse build retirement funds!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/retirement-income/retirement-sum-topping-up"
                }
            ]
        },
        retirement: {
            quickWin: {
                title: "Top up MediSave Account to Basic Healthcare Sum",
                benefit: "Maximize tax relief ($8,000 cap) while ensuring healthcare needs are covered!",
                link: "https://www.cpf.gov.sg/member/healthcare/medisave-top-up"
            },
            additional: [
                {
                    title: "Split Voluntary Contributions",
                    benefit: "Optimize between 4% interest and maximum tax relief with 70% SA, 30% MA split!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/account-services/make-voluntary-contributions"
                },
                {
                    title: "Set up Regular SA Top-ups",
                    benefit: "Earn higher interest while building retirement savings!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/account-services/giro-arrangements"
                },
                {
                    title: "Review CPF Investments",
                    benefit: "Optimize your portfolio for long-term growth!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/investments/cpfis"
                }
            ]
        },
        education: {
            quickWin: {
                title: "Make RSTU Contributions to Your SA",
                benefit: "Get immediate tax relief while securing your retirement!",
                link: "https://www.cpf.gov.sg/member/retirement-income/retirement-sum-topping-up"
            },
            additional: [
                {
                    title: "Set up Education Scheme",
                    benefit: "Secure your children's education with guaranteed returns!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/schemes"
                },
                {
                    title: "Top up MediSave Account",
                    benefit: "Balance healthcare and education needs with tax benefits!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/healthcare/medisave-top-up"
                },
                {
                    title: "Start Regular Savings Plan",
                    benefit: "Build education fund through disciplined investing!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/investments/regular-savings"
                }
            ]
        }
    },

    // Mature Adults (46-55)
    mature: {
        retirement: {
            quickWin: {
                title: "Top up to Enhanced Retirement Sum",
                benefit: "Get up to $2,350 monthly CPF LIFE payouts for life!",
                link: "https://www.cpf.gov.sg/member/retirement-income/retirement-sum-topping-up"
            },
            additional: [
                {
                    title: "Split Voluntary Contribution (70% SA, 30% MA)",
                    benefit: "Optimize between 4% interest and maximum tax relief!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/account-services/make-voluntary-contributions"
                },
                {
                    title: "Nominate CPF Beneficiaries",
                    benefit: "Ensure smooth transfer of your CPF savings to loved ones!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/estate-planning/cpf-nomination-scheme"
                },
                {
                    title: "Review CPF LIFE Plans",
                    benefit: "Choose the best plan for your retirement needs!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/retirement-income/cpf-life"
                }
            ]
        },
        education: {
            quickWin: {
                title: "Make RSTU to Both MA and SA",
                benefit: "Maximize tax benefits while securing retirement and healthcare needs!",
                link: "https://www.cpf.gov.sg/member/retirement-income/retirement-sum-topping-up"
            },
            additional: [
                {
                    title: "Set up Monthly SA Top-ups",
                    benefit: "Build retirement funds systematically!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/account-services/giro-arrangements"
                },
                {
                    title: "Review Investment Portfolio",
                    benefit: "Ensure your investments align with retirement goals!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/investments/cpfis"
                },
                {
                    title: "Plan CPF LIFE Payouts",
                    benefit: "Optimize your retirement income stream!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/retirement-income/cpf-life"
                }
            ]
        }
    },

    // Pre-Retirees/Retirees (60+)
    senior: {
        retirement: {
            quickWin: {
                title: "Join CPF LIFE Standard Plan",
                benefit: "Secure lifetime monthly payouts from age 65!",
                link: "https://www.cpf.gov.sg/member/retirement-income/cpf-life"
            },
            additional: [
                {
                    title: "Set Aside 3-Month Emergency Fund in OA",
                    benefit: "Balance between accessible savings and retirement needs!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/account-services"
                },
                {
                    title: "Defer CPF LIFE Payouts",
                    benefit: "Get up to 7% more in monthly payouts for each year of deferment!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/retirement-income/cpf-life"
                },
                {
                    title: "Review Estate Planning",
                    benefit: "Ensure your CPF savings are distributed according to your wishes!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/estate-planning"
                }
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

function formatPossessive(name) {
    if (name.toLowerCase().endsWith('s')) {
        return `${name}' Quick Win`;  // For names ending in 's'
    } else {
        return `${name}'s Quick Win`; // For other names
    }
}

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

    // Update the header with properly formatted possessive
    const quickWinsHeader = document.getElementById('quick-wins-header');
    quickWinsHeader.textContent = formatPossessive(profile.nickname);

    // Generate and display recommendations
    generateRecommendations(profile);
});

function generateRecommendations(profile) {
    // Determine age category
    let ageCategory;
    if (profile.age.startsWith('2')) ageCategory = 'young';
    else if (profile.age.match(/3[1-9]|4[0-5]/)) ageCategory = 'midCareer';
    else if (profile.age.match(/4[6-9]|5[0-5]/)) ageCategory = 'mature';
    else ageCategory = 'senior';

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

    // Scroll to recommendations
    scrollToRecommendations();
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

