import Inspire from "../../src/inspire.mjs";
import $$ from "../../slides/bliss/src/$$";

export const hasCSS = false;

Inspire.hooks.add("slidechange", env => {
	$$("[data-src]", env.slide).forEach(element => {
		element.src = element.dataset.src;
	});
});
