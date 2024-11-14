const quickWins = [{
    title: "Make Voluntary Contributions to your Ordinary Account (OA)",
    benefit: "Earn higher interest while setting aside funds for mortgage payment!",
    link: "https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/top-up-cpf-accounts",
    conditions: {
        age: ['young'],
        savingsGoal: ['home'],
    },
}];

const getQuickWins = (age, savingsGoal) => {
    const result = [];
    // filter
    for (const each of quickWins) {
        if (!each.conditions.age.includes(age)) {
            continue;
        }
        if (!each.conditions.savingsGoal.includes(savingsGoal)) {
            continue;
        }
        result.push(each);
    }
    return result;
}

console.log(getQuickWins('young', 'home'))

