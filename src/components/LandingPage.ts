import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("landing-page")
export class LandingPage extends TailwindElement(style) {

    render() {
        return html`
            <div>
                <h1 class="md:hidden text-center font-unna-700 text-xl my-2">TIME&PLACE FUNDING</h1>
                <p class="text-center font-jose-400-it text-sm md:text-[21px] xl:text-2xl my-5 md:my-7">Our presence, your opportunities</p>
                <p class="w-4/5 md:w-[70%] m-auto my-10 xl:my-20 font-unna-700 text-center text-xl md:text-[27px] xl:text-[31px] leading-6 md:leading-8 xl:leading-[42px]">
                    As big business, SME, entrepreneur, academic institution, NGO, government, local or regional body you can benefit from International, EU, national, regional and local funding schemes
                </p>
                <landing-page-list></landing-page-list>
                <a href="../html/who-we-are.html#map-container" class="block mt-14 md:mt-24 xl:mt-40 mb-14 md:mb-24 xl:mb-40 font-unna-700 text-primary text-xl md:text-[25px] xl:text-[31px] text-center m-auto">Check out our international presence!</a>
                <landing-page-mobile-newsroom></landing-page-mobile-newsroom>
                <landing-page-big-newsroom></landing-page-big-newsroom>
            </div>           
        `;
    }
}