document.getElementById('submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    let basePrice = 100; // Starting bid
    let total = basePrice;

    // Get education level
    const education = document.getElementById('education').value;
    let educationCoefficient = 1;
    if (education === 'bachelor') educationCoefficient = 1.5;
    else if (education === 'college') educationCoefficient = 1.2;
    else if (education === 'high_school') educationCoefficient = 1.05;
    else if (education === 'middle_school') educationCoefficient = 0.9;
    total *= educationCoefficient;

    // Get family net worth
    const networth = document.getElementById('networth').value;
    let networthCoefficient = 1;
    if (networth === 'upper_class') networthCoefficient = 2;
    else if (networth === 'middle_class') networthCoefficient = 1.5;
    else if (networth === 'lower_class') networthCoefficient = 1.2;
    total *= networthCoefficient;

    // Get caste
    const caste = document.getElementById('caste').value;
    if (caste === 'brahmin') total += 100;
    else if (caste === 'kshatriya') total += 50;
    else if (caste === 'vaishya') total += 20;
    else if (caste === 'shudra') total += 10;
    else if (caste === 'untouchable') total -= 50;

    // Add skills
    if (document.getElementById('musical').checked) total += 10;
    if (document.getElementById('cook').checked) total += 20;
    if (document.getElementById('easygoing').checked) total += 15;
    if (document.getElementById('singing').checked) total += 10;

    // Get age
    if (document.getElementById('age_18_23').checked) total *= 1.5;
    else if (document.getElementById('age_24_27').checked) total *= 1.2;
    else if (document.getElementById('age_28_plus').checked) total *= 0.95;

    // Handle reputation gossips
    if (document.getElementById('parents_attitude').checked) total *= 0.85;
    if (document.getElementById('character_gossip').checked) total *= 0.9;
    if (document.getElementById('general_gossip').checked) total -= 20;

    // Display the result
    document.getElementById('result').textContent = `The calculated price is: $${total.toFixed(2)}`;
}
