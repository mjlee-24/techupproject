// Recommendation logic based on user profiles
const recommendations = {
    // Young Adults (20-30)
    young: {
        home: {
            quickWin: {
                title: "Make Voluntary Contributions to your Ordinary Account (OA)",
                benefit: "Earn higher interest while setting aside funds for mortgage payment!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-cpf-accounts"
            },
            additional: [
                {
                    title: "Set up GIRO for Monthly Top-ups (Part 1)",
                    benefit: "Automate your savings with just one form submission!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-cash-top-ups-for-retirement"
                },
                {
                    title: "Arrange for Recurring Top-Ups (Part 2)",
                    benefit: "Enjoy the convenience of automated top-ups to your CPF accounts!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/manage-recurring-cash-top-ups-for-retirement"
                },
                {
                    title: "Start CPF Investment Scheme (CPFIS)",
                    benefit: "Potential to earn higher returns while maintaining security!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings",
                    readmore: 'https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings/cpf-investment-scheme-options',
                }
            ]
        },
        retirement: {
            quickWin: {
                title: "Transfer $20,000 from Ordinary Account (OA) to Special Account (SA)",
                benefit: "Earn ~1.5-2% more interest annually - that's $300-400 extra per year, compounded!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
            },
            additional: [
                {
                    title: "Set up Monthly SA Top-up",
                    benefit: "Earn 4% interest with minimal effort!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/manage-recurring-cash-top-ups-for-retirement"
                },
                {
                    title: "Start Retirement Sum Topping-Up Scheme (RSTU)",
                    benefit: "Get up to $16,000 tax relief while building retirement funds for yourself & loved ones!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-cpf-accounts"
                },
                {
                    title: "Start CPF Investment Scheme (CPFIS)",
                    benefit: "Potential to earn higher returns while maintaining security!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings"
                }
            ]
        },
        healthcare: {
            quickWin: {
                title: "Top up MediSave Account (MA)",
                benefit: "Earn 4% on your savings for healthcare while enjoying tax benefits!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account-using-cpf-savings"
            },
            additional: [
                {
                    title: "Set up GIRO for Healthcare Premiums",
                    benefit: "Automate bank deductions to pay for MediShield Life and CareShield Life premiums!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-healthcare-premiums"
                },
                {
                    title: "Start CPF Investment Scheme (CPFIS)",
                    benefit: "Potential to earn higher returns while maintaining security!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings"
                }
            ]
        }
    },

    // Mid-Career Adults (31-45)
    midCareer: {
        home: {
            quickWin: {
                title: "Make Voluntary Contributions to your Ordinary Account (OA)",
                benefit: "Earn higher interest while setting aside funds for mortgage payment!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-cpf-accounts"
            },
            additional: [
                {
                    title: "Start Retirement Sum Topping-Up Scheme (RSTU) to Spouse's SA",
                    benefit: "Double your tax relief up to $14,000 while helping spouse build retirement funds!",
                    time: "5 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
                },
                {
                    title: "Make Voluntary Housing Refund",
                    benefit: "Boost your retirement savings while maintaining property ownership!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-voluntary-housing-refund"
                },
                {
                    title: "Review CPF Investments",
                    benefit: "Optimize your portfolio for long-term growth!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings"
                }
            ]
        },
        retirement: {
            quickWin: {
                title: "Make Retirement Sum Topping-Up Scheme (RSTU) Contributions to Your SA",
                benefit: "Get immediate tax relief while securing your retirement!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-cpf-accounts"
            },
            additional: [
                {
                    title: "Transfer up to the Full Retirement Sum (FRS) from Ordinary Account (OA) to Special Account (SA)",
                    benefit: "Earn ~1.5-2% more interest annually - for $20,000, that's $300-400 extra per year, compounded!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
                },
                {
                    title: "Set up Regular SA Top-ups",
                    benefit: "Earn higher interest while building retirement savings!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/manage-recurring-cash-top-ups-for-retirement"
                },
                {
                    title: "Review CPF Investments",
                    benefit: "Optimize your portfolio for long-term growth!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings"
                }
            ]
        },
        healthcare: {
            quickWin: {
                title: "Top up MediSave Account to Basic Healthcare Sum",
                benefit: "Maximize tax relief ($8,000 cap) while ensuring healthcare needs are covered!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-medisave-account"
            },
            additional: [
                {
                    title: "Set up GIRO for healthcare premiums",
                    benefit: "Automate bank deductions to pay for MediShield Life and CareShield Life premiums!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-healthcare-premiums"
                },
                {
                    title: "Review CPF Investments",
                    benefit: "Optimize your portfolio for long-term growth!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings"
                }
            ]
        }
    },

    // Mature Adults (46-55)
    mature: {
        retirement: {
            quickWin: {
                title: "Make Retirement Sum Topping-Up Scheme (RSTU) to Both MediSave Account (MA) and Special Account (SA)",
                benefit: "Maximize tax benefits while securing retirement and healthcare needs!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
            },
            additional: [
                {
                    title: "Transfer up to the Full Retirement Sum (FRS) from Ordinary Account (OA) to Special Account (SA)",
                    benefit: "Earn ~1.5-2% more interest annually - for $20,000, that's $300-400 extra per year, compounded!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
                },
                {
                    title: "Nominate CPF Beneficiaries",
                    benefit: "Ensure smooth transfer of your CPF savings to loved ones!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-cpf-nomination"
                },
                {
                    title: "Review Investment Portfolio",
                    benefit: "Ensure your investments align with saving goals!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings/cpf-investment-scheme-options"
                }
            ]
        },
        healthcare: {
            quickWin: {
                title: "Make Retirement Sum Topping-Up Scheme (RSTU) to Both MediSave Account (MA) and Special Account (SA)",
                benefit: "Maximize tax benefits while securing retirement and healthcare needs!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
            },
            additional: [
                {
                    title: "Set up GIRO for healthcare premiums",
                    benefit: "Automate bank deductions to pay for MediShield Life and CareShield Life premiums!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/set-up-giro-for-healthcare-premiums"
                },
                {
                    title: "Nominate CPF Beneficiaries",
                    benefit: "Ensure smooth transfer of your CPF savings to loved ones!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-cpf-nomination"
                },
                {
                    title: "Review Investment Portfolio",
                    benefit: "Ensure your investments align with saving goals!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings/cpf-investment-scheme-options"
                }
            ]
        },
        home: {
            quickWin: {
                title: "Make Retirement Sum Topping-Up Scheme (RSTU) to Both MediSave Account (MA) and Special Account (SA)",
                benefit: "Maximize tax benefits while securing retirement and healthcare needs!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
            },
            additional: [
                {
                    title: "Retirement Sum Topping-Up Scheme (RSTU) to Spouse's SA",
                    benefit: "Double your tax relief up to $14,000 while helping spouse build retirement funds!",
                    time: "5 mins or less",
                    link: "https://www.cpf.gov.sg/member/retirement-income/retirement-sum-topping-up"
                },
                {
                    title: "Make Voluntary Housing Refund",
                    benefit: "Boost your retirement savings while maintaining property ownership!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-voluntary-housing-refund"
                },
                {
                    title: "Review Investment Portfolio",
                    benefit: "Ensure your investments align with saving goals!",
                    time: "30-45 mins",
                    link: "https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings/cpf-investment-scheme-options"
                }
            ]
        }
    },

    // Pre-Retirees/Retirees (55+)
    senior: {
        retirement: {
            quickWin: {
                title: "Nominate CPF Beneficiaries",
                benefit: "Ensure smooth transfer of your CPF savings to loved ones!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-cpf-nomination"
            },
            additional: [
                {
                    title: "Top-up Your Retirement Account (RA)",
                    benefit: "Earn interest rates of up to 6% per annum on retirement savings!",
                    time: "5-10 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
                },
                {
                    title: "Defer CPF LIFE Payouts (if almost 65)",
                    benefit: "Get up to 7% more in monthly payouts for each year of deferment!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/plan-my-monthly-payouts"
                },
                {
                    title: "Withdraw CPF savings for immediate needs",
                    benefit: "With PayNow, you can receive your CPF savings almost instantaneously!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/withdraw-cpf-retirement-needs"
                }
            ]
        },
        
        home: {
            quickWin: {
                title: "Nominate CPF Beneficiaries",
                benefit: "Ensure smooth transfer of your CPF savings to loved ones!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-cpf-nomination"
            },
            additional: [
                {
                    title: "Top-up Your Retirement Account (RA)",
                    benefit: "Earn interest rates of up to 6% per annum on retirement savings!",
                    time: "5-10 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
                },
                {
                    title: "Defer CPF LIFE Payouts (if almost 65)",
                    benefit: "Get up to 7% more in monthly payouts for each year of deferment!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/plan-my-monthly-payouts"
                },
                {
                    title: "Withdraw CPF savings for immediate needs",
                    benefit: "With PayNow, you can receive your CPF savings almost instantaneously!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/withdraw-cpf-retirement-needs"
                }
            ]
        },

        healthcare: {
            quickWin: {
                title: "Nominate CPF Beneficiaries",
                benefit: "Ensure smooth transfer of your CPF savings to loved ones!",
                link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/make-a-cpf-nomination"
            },
            additional: [
                {
                    title: "Top-up Your MediSave Account (MA)",
                    benefit: "Earn interest rates of up to 6% per annum on retirement savings!",
                    time: "5-10 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/cash-top-ups-and-cpf-transfers-for-retirement"
                },
                {
                    title: "Defer CPF LIFE Payouts (if almost 65)",
                    benefit: "Get up to 7% more in monthly payouts for each year of deferment!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/plan-my-monthly-payouts"
                },
                {
                    title: "Withdraw CPF savings for immediate needs",
                    benefit: "With PayNow, you can receive your CPF savings almost instantaneously!",
                    time: "15-20 mins",
                    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/withdraw-cpf-retirement-needs"
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

const button = document.getElementById('profile-form');

if (button) {
    // Form submission handling
    button.addEventListener('submit', function(e) {
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
}

function generateRecommendations(profile) {
    // Determine age category
    const age =  parseInt(profile.age);

    let ageCategory;
    if (age > 55) {
        ageCategory = 'senior'
    } else if (age > 45) {
        ageCategory = 'mature'
    } else if (age > 30) {
        ageCategory = 'midCareer'
    } else {
        ageCategory = 'young'
    }

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
                ${rec.readmore ? `<a href="${rec.readmore}" target="_blank" class="read-more-btn">Read More</a>` : ''}
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

