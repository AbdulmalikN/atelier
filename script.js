const products = document.querySelector(".productHolder");

function createCard([img, product, text]) {
  let code = `
  <div class="card">
  <img src="${img}" alt="${product}" />
  <p class="imageText">${text}</p>
</div>
`;

  products.innerHTML += code;
}

let item1 = ["/assets/all-images/image-02.png", "webSiteOne", "Landing vr.1"];
let item2 = ["/assets/all-images/IMAGE-03.png", "webSite2", "Landing vr.2"];
let item3 = ["/assets/all-images/IMAGE-04.png", "webSite3", "Landing vr.3"];
let item4 = ["/assets/all-images/IMAGE-05.png", "webSite4", "Portfolio 1"];
let item5 = ["/assets/all-images/IMAGE-06.png", "webSite5", "Portfolio 1"];
let item6 = ["/assets/all-images/IMAGE-07.png", "webSite6", "Portfolio 1"];
let item7 = ["/assets/all-images/IMAGE-08.png", "webSite7", "Portfolio 1"];
let item8 = ["/assets/all-images/IMAGE-09.png", "webSite8", "Single Project"];
let item9 = ["/assets/all-images/IMAGE-10.png", "webSite9", "About Company"];
let item10 = ["/assets/all-images/IMAGE-11.png", "webSite10", "About TEam"];
let item11 = [
  "/assets/all-images/IMAGE-12.png",
  "webSite11",
  "Single Team Member",
];
let item12 = ["/assets/all-images/IMAGE-13.png", "webSite12", "FAQ PAge"];
let item13 = ["/assets/all-images/IMAGE-14.png", "webSite13", "Contact Us"];
let item14 = ["/assets/all-images/IMAGE-15.png", "webSite15", "Blog 1"];
let item15 = ["/assets/all-images/IMAGE-16.png", "webSite16", "Blog 2"];
let item16 = ["/assets/all-images/IMAGE-17.png", "webSiteOne", "Blog 3"];
let item17 = [
  "/assets/all-images/IMAGE-18.png",
  "webSite17",
  "Blog Categories",
];
let item18 = ["/assets/all-images/IMAGE-19.png", "webSite18", "Single Blog"];
let item19 = ["/assets/all-images/IMAGE-20.png", "webSite19", "Pricing"];
let item20 = ["/assets/all-images/IMAGE-21.png", "webSite20", "Style guide"];
let item21 = ["/assets/all-images/IMAGE-22.png", "webSite21", "Licenses"];

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item5);
createCard(item6);
createCard(item7);
createCard(item8);
createCard(item9);
createCard(item10);
createCard(item11);
createCard(item12);
createCard(item13);
createCard(item14);
createCard(item15);
createCard(item16);
createCard(item17);
createCard(item18);
createCard(item19);
createCard(item20);
createCard(item21);

const types = document.querySelector(".holder");

function createIconCard([img, name, paragraph, texter, texter2]) {
  let frame = `
  <div class="card2">
            <img src="${img}" alt="${name}" />
            <p>${paragraph}</p>
            <p>${texter}</p>
            <p>${texter2}</p>
          </div>
`;

  types.innerHTML += frame;
}

let cards = [
  "/assets/icons/web-design-triangle.svg",
  "triangle-Icon",
  "Web Design",
  "Suspendisse varius enim in ",
  "cursus id rutrum imperdiet. eros elementum tristique.",
];

let cards2 = [
  "/assets/icons/ux-design-half-moon.svg",
  "half-moon",
  "UI/UX Design",
  "Suspendisse varius enim in ",
  "cursus id rutrum imperdiet. eros elementum tristique.",
];

let cards3 = [
  "/assets/icons/seo-marketing-diamond-ring.svg",
  "diamonRing-Icon",
  "SEO & Marketing",
  "Suspendisse varius enim in ",
  "cursus id rutrum imperdiet. eros elementum tristique.",
];

createIconCard(cards);
createIconCard(cards2);
createIconCard(cards3);
