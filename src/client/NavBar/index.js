import GlobalEvents from '../Events/index.js';

export default class NavBar {
  #routes;
  #navBarElm;

  constructor() {
    this.#routes = [
      { name: 'Map', target: 'map' },
      { name: 'Village', target: 'village' },
    ];
  }

  async render() {
    const navBarElm = document.createElement('nav');
    this.#navBarElm = navBarElm;
    navBarElm.id = 'navbar';

    this.#routes.forEach((route) => {
      const navLink = document.createElement('a');
      navLink.innerText = route.name;
      navLink.href = `#${route.target}`;

      navBarElm.appendChild(navLink);

      navLink.addEventListener('click', (e) => {
        e.preventDefault();
        GlobalEvents.navigate(route.target);
      });
    });

    return navBarElm;
  }

  setActive(routeKey) {
    const activeNavLinks = this.#navBarElm.querySelectorAll(`a.active`);

    if (activeNavLinks.length > 0) {
      activeNavLinks.forEach((navLink) => navLink.classList.remove('active'));
    }

    const activeNavLink = this.#navBarElm.querySelector(
      `a[href="#${routeKey}"]`,
    );

    if (activeNavLink) {
      activeNavLink.classList.add('active');
    }
  }
}
