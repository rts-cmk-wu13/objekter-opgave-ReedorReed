// slå dig løs her...

//eksempel på at udskrive alle overskrifter i services i konsollen:
//services.forEach((service) => console.log(service.headline));

const wrapper = document.querySelector('.wrapper');
const headerSection = document.querySelector('.header');
const heroSection = document.querySelector('.hero');
const servicesSection = document.querySelector('.services');
const facilitiesSection = document.querySelector('.facilities');
const sitesSection = document.querySelector('.sites');
const advantagesSection = document.querySelector('.advantages');
const footerSection = document.querySelector('.footer');

console.log();

handleHero();
handleServices();
handleFacilities();
handleSites();
handleAdvantages();
handleFooter();

//Hero section

function handleHero() {
	const heroContent = /*html */ `
    <article class="hero__content">
        <img src="${hero.image}" class="hero__img">
        <div class="hero__textContent">
            <h2 class="hero__heading">${hero.headline}</h2>
            <p class="hero__text">${hero.copy}</p>
            <a href="#" class="hero__btn"><img src="${hero.icon}">Explore</a>
        </div>
    </article>
    `;

	heroSection.insertAdjacentHTML('afterbegin', heroContent);
}

// Services section

function handleServices() {
	const servicesContent = services.map((service) => {
	return	/*html */ `
    <article class="services__cards">
        <img src="${service['illustration']}" class="services__img">
        <div class="services__cardText">
            <h2 class="services__heading">${service.headline}</h2>
            <p class="services__text">${service.text}</p>
            <a href="#" class="services__link">${service.linktext}</a>
        </div>
    </article>
    `;
	}).join('');

	servicesSection.insertAdjacentHTML('afterbegin', servicesContent);
}
