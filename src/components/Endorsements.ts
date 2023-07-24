import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-endorsements")
export class Endorsements extends TailwindElement(style) {

    render() {
        return html`
            <div class=" w-80 max-w-[90%] md:w-[600px] xl:w-[862px] m-auto mb-24 md:mb-32 xl:mb-40">
                <nav class="w-full flex xl:hidden flex-row justify-between items-center mb-6 md:mb-10">
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./client-codex.html">Client Codex</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./endorsements.html">Endorsements</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./partners-&-portfolios.html">Partners & Portfolios</a>
                </nav>
                <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-4 md:mb-10 xl:mb-20">ENDORSEMENTS</h1>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Experience</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    T&P Consulting is made up of former political decision-makers, Commission officials, association Directors and multinational CEOs, as well as 
                    award-winning lawyers. Activities such as high-level networking, translating policy output into business impact, and strategic outreach have been 
                    a daily affair for our team. We understand the context of the bigger picture and the value of the smallest detail.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Expertise</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    We have a variety of specific fields of expertise, such as Brexit, gambling and international trade. But, we also know how to give 
                    your expertise a voice and maximise the impact of your interests.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Geographic presence</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    With partner and satellite offices across globe (e.g. Galway, Kolkota, Vienna, Berlin, London, Milan, Managua & Jakarta) we are locally 
                    accessible and internationally present. 
                    One of many benefits: T&P can have an impact on EU decision-making processes directly through European capitals.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Integrity</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    At the heart of our approach are trust and long-term vision. We believe in solid relations both with our clients and the decision-makers we 
                    approach for your needs. Our client codex is a tribute to this. In the same spirit, we believe in making sure that you get the services you seek. 
                    We don’t pretend we can. We don’t waste your and our resources on activities we cannot provide. Instead, we are always happy to see how we could 
                    help find someone else for you.
                </p>  
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Adaptability</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    Our concept is based on the flexibility to adapt our consulting team of trusted partners to your needs. This lowers costs and allows 
                    independence to adapt to your needs rather than rigid organisational structures where costs for other potential non-profitable branches 
                    need to be covered by the client’s invoice.
                </p>  
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Languages</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    A new opportunity for communication is opened with every language that our team masters: English, German, French, Romanian, Dutch, Danish, Swedish, Italian, Estonian, Albanian and Spanish.
                </p>          
            </div>         
        `;
    }
}