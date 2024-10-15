document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.05
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    function updatePassionText() {
        const passionOneElement = document.querySelector('.my-passion-one');
        const passionTwoElement = document.querySelector('.my-passion-two');
        const veganismOne = document.querySelector('.veganism-one');
        const veganismTwo = document.querySelector('.veganism-two');
        const veganismTree = document.querySelector('.veganism-tree');
        if (window.innerWidth <= 992) {
            passionOneElement.textContent = "Music's in my blood. I'm all about good vibes, any genre (except metal, not my thing). Lo-fi's my go-to—whether I’m grinding or chilling, it always hits right.";
            passionTwoElement.textContent = "Anime's my other love. Anything by Hayao Miyazaki is pure magic. His stories? Unbeatable. But I’m still diving deeper into the anime world—who knows what gems are out there waiting?";
            veganismOne.textContent = "I dream of a world where animals and humans are equals, free from exploitation. The myths around veganism have built walls of fear, making people think animal products are the only way to stay healthy—but that’s far from true."
            veganismTwo.textContent = "I see a future where cruelty-free is the norm, not the exception. But in my country, vegan options are scarce, even finding plant-based milk is a struggle."
            veganismTree.textContent = "While I'm not fully vegan yet, I've followed a vegan diet for years. Embracing vegetarianism is just the start. Every step brings me closer to living fully vegan, and nothing will stop me from getting there."
        } else {
            veganismOne.textContent = "I dream of a world where animals and humans stand as equals, free from exploitation in any form. The myths surrounding veganism have built walls of fear and misunderstanding, convincing many that consuming animals is the only path to health. But this couldn’t be further from the truth.";
            veganismTwo.textContent = "I envision a future where cruelty-free choices aren’t rare, but abundant—where plant-based products are the norm, not the exception. Yet, in my country, veganism remains in the shadows, depriving people of real options. Even finding something as simple as plant-based milk is a challenge.";
            veganismTree.textContent = "While I’m not fully vegan at the moment, I’ve followed a vegan diet for a long time, and it continues to shape how I live and think. I’ve embraced vegetarianism, but this is just the beginning. With every step I take, I’m moving closer to fully embodying the vegan lifestyle. One day, I will stand there, unwavering, as a true vegan—because this is the path I’ve chosen, and nothing will hold me back.";
            passionOneElement.textContent = "Music runs through my veins. I'm all about anything that sounds good—no limits, just pure vibes (except metal, not my scene). If I had to pick a favorite, it's gotta be lo-fi. Whether I’m deep into work or winding down for the night, those chill, mellow beats set the perfect tone every time.";
            passionTwoElement.textContent = "But it doesn’t stop at music—I'm a huge fan of anime too. If you asked me to pick a favorite, I'd say anything by the legendary Hayao Miyazaki. His storytelling is unmatched, and no other anime has captured my heart quite like his. That said, I’m still exploring the world of anime, and I'm sure there are more soul-stirring creations waiting for me. Time will tell!";
        }
    }

    window.addEventListener('resize', updatePassionText);
    updatePassionText();
});
