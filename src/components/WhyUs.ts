import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("why-us")
export class WhyUs extends TailwindElement(style) {

    render() {
        return html`
            <div class=" w-80 max-w-[90%] md:w-[600px] xl:w-[862px] m-auto mb-40 xl:mb-60">
                <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-4 md:mb-10 xl:mb-20">WHY US</h1>
                <p class="mb-6 md:mb-16 xl:mb-28 font-jose-400-it text-[14px] leading-[16px] md:text-[21px] md:leading-[26px] xl:text-[23px] xl:leading-[26px] text-center mx-auto">No matter if you are big business, SME, NGO, local or regional body, government, entrepreneur, academic institution or ambitious citizen, if you can answer yes to any of the questions below, why not contact us so we can jointly explore further?</p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Do you have great ideas?</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    With a great innovative idea, we will help develop your ambition into profitable business; no matter whether it is a new
                    product or service for your traditional customers or you want to enter a completely new market. We can assist you attain 
                    funding across Europe and help your organisation manage or lead the project at any stage or all the way.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Or, do you want to be part of a great project?</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    Under various project funding schemes, multi-party consortiums are necessary and an opportunity. Maybe your expertise is
                    exactly what is necessary. Why not send us your CV and a list of interests?
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Do you seek to engage in research?</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    R&I are essential to and growth and investment strategies. Why not, for example, open up new market frontiers or help 
                    make better policy decisions with your results?
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Do you seek to decide on the location of your European project hub based on ideal funding opportunities?</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    The variety of funding available across Europe, or administered at Brussels-Level, we identify variety of funding options 
                    which can determine the appropriate conditions for your preferences. Let us find the right pot in the right geography.
                </p>          
            </div>         
        `;
    }
}