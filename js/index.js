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

document.addEventListener('DOMContentLoaded', function () {
	handleHero();
	handleServices();
	handleFacilities();
	handleSites();
	handleAdvantages();
	handleFooter();
});

//Hero section

function handleHero() {
	const heroContent = /*html */ `
    <article class="hero__content">
        <img src="${hero.image}" class="hero__img">
        <div class="hero__textContent">
            <h2 class="hero__heading">${hero.headline.replace(
							'save your time',
							`<span class="colored-text">save your time</span>`
						)}</h2>
            <p class="hero__text">${hero.copy}</p>
            <a href="#" class="hero__btn"><img src="${hero.icon}" class="hero__btn-icon">Explore</a>
        </div>
    </article>
    `;

	heroSection.insertAdjacentHTML('afterbegin', heroContent);
}

// Services section

function handleServices() {
	const servicesContent = services
		.map((service) => {
			return /*html */ `
    <article class="services__cards">
        <img src="${service['illustration']}" class="services__img">
        <div class="services__cardText">
            <h2 class="services__heading">${service.headline}</h2>
            <p class="services__text">${service.text}</p>
            <a href="#" class="services__link">${service.linktext}</a>
        </div>
    </article>
    `;
		})
		.join('');

	servicesSection.insertAdjacentHTML('afterbegin', servicesContent);
}

//Facilities section

function handleFacilities() {
	const facilitiesContent = /*html */ `
    <h2 class="facilities__heading">${facilities.headline}</h2>
    `;
	const facilitiesCardContent = facilities.options
		.map((facility) => {
			return /*html */ `
        <article class="facilities__CardContent">
    <div class="facilities__textContent">
            <img src="${facility.icon}" class="facilities__icon">
            <h2 class="facilities__cardHeadline">${facility.headline}</h2>
            <p class="facilities__cardText">${facility.text}</p>
            <a href="#" class="facilities__link">Show me more</a>
        </div>
    </article>
    `;
		})
		.join('');

	facilitiesSection.insertAdjacentHTML(
		'afterbegin',
		facilitiesContent + facilitiesCardContent
	);
}

//Sites section

function handleSites() {
	const sitesContent = /*html */ `
    <h2 class="sites__heading">${sites.headline}</h2>
    <p class="sites__headingText">${sites.text}</p>
    <a href="#" class="sites__btn"><img src="${sites.btnicon}">Start</a>
    `;
	const sitesCardContent = sites.places
		.map((place) => {
			return /*html */ `
        <article class="sites__CardContent">
    <div class="sites__textContent">
            <img src="${place.img}" class="sites__icon">
            <h2 class="sites__cardHeadline">${place.name}</h2>
            <p class="sites__cardText">${place.city}</p>
            <a href="#" class="sites__link">View the Site</a>
        </div>
    </article>
    `;
		})
		.join('');

	sitesSection.insertAdjacentHTML(
		'afterbegin',
		sitesContent + sitesCardContent
	);
}

//Advantages section

function handleAdvantages() {
	const advantagesHeadline = /*html */ `
    <h2 class="advantages__heading">Our Advantages</h2>
    `;
	const advantagesCardContent = advantages
		.map((advantage) => {
			return /*html */ `
        <article class="advantages__CardContent">
            <img src="${advantage.icon}" class="advantages__icon">
            <h2 class="advantages__cardHeadline">${advantage.headline}</h2>
            <p class="advantages__cardText">${advantage.text}</p>
    </article>
    `;
		})
		.join('');

	advantagesSection.insertAdjacentHTML(
		'afterbegin',
		advantagesHeadline + advantagesCardContent
	);
}

//Footer section

function handleFooter() {
	const footerHeadline = /*html */ `
    <div class="footer__header">
    <h2 class="footer__headline">${footer.name}</h2>
    <h3 class="footer__title">${footer.title}</h3>
    </div>
    `;

	const footerColumnsContent = footer.footerColumns
		.map((column) => {
			return /*html */ `
        <div class="footer__nav">
        <h3 class="footer__navHeading">${column.title}</h3>
        <ul class="footer__ul">
        ${column.links
					.map((link) => {
						return /*html */ `<li class="footer__li"><a href="#" class="footer__li-links">${link}</a></li>`;
					})
					.join('')}
            
        </ul>
        </div>
        `;
		})
		.join('');

	const footerBottomBar = /*html */ `
        <div class="footer__bottomNav">
        <p class="footer__copyright">${footer.bottomBar.copyright}</p>
        <ul class="footer__bottomUl">
        ${footer.bottomBar.links
					.map((link) => {
						return /*html */ `<li class="footer__bottomLi"><a href="#" class="footer__bottomLi-links">${link}</a></li>`;
					})
					.join('')}
        </ul>
        </div>
        `;

	footerSection.insertAdjacentHTML(
		'afterbegin',
		footerHeadline + footerColumnsContent + footerBottomBar
	);
}
