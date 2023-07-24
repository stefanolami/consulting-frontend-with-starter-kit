import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("client-codex")
export class ClientCodex extends TailwindElement(style) {

    render() {
        return html`
            <div class=" w-80 max-w-[90%] md:w-[600px] xl:w-[862px] m-auto mb-24 md:mb-32 xl:mb-40">
                <nav class="w-full flex xl:hidden flex-row justify-between items-center mb-6 md:mb-10">
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./client-codex.html">Client Codex</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./endorsements.html">Endorsements</a>
                    <a class="font-jose-600-it text-[9px] md:text-[12px] w-[32%] md:w-[30%] flex items-center justify-center h-7 md:h-9 pt-1 text-primary border-primary border-2 rounded-full" href="./partners-&-portfolios.html">Partners & Portfolios</a>
                </nav>
                <h1 class="font-unna-700 text-xl md:text-[39px] md:leading-[45px] xl:text-[50px] xl:leading-[75px] text-center mb-4 md:mb-10 xl:mb-20">CLIENT CODEX</h1>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px] mt-7 xl:mt-9">
                    The relations we establish with our clients are just as important as our relations with governmental decision-makers. Our concerns are not only about 
                    those of reputation. Public Affairs and Public Relations are about communication, and therefore about people. 
                    So, we focus on trust and long-term vision which are key to any healthy business based on human interaction. An excellent reputation is one of many symptoms thereof. 
                    <br><br>Our client codex is a tribute to this.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">We don't sell opportunities where there are none</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    Our goal is to provide you added value and results. Creating an opportunity and failing to carry it out 
                    as there was none in the first place is counter to a positive progress report which is important for any standing.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">We don't look to maximize billable days</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    Our competitive edge is primarily our experience and our long-term approach to all stakeholders we engage with, but no partnership goes without a 
                    discussion about a competitive price. This is also why we promote a flexible workforce policy where contracts do not have to cover non-profitable 
                    branches of one’s organisation.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">If we can't do it, we don't pretend we can</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    We don’t do learning as we go along at the expense of our clients. If our experience, networks and understanding are not suitable to carry out 
                    your needs, we don’t accept the project. Instead, we try our best to help you find someone that can.
                </p>
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">Who you meet is who you get</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    We don’t push our tasks to colleagues with less experience pretending to take on the work ourselves.
                </p>  
                <h3 class="font-unna-700-it text-xl xl:text-[25px] mt-7 xl:mt-9 mb-3 xl:mb-4">We avoid conflicts of interest</h3>
                <p class="font-jose-400 text-[15px] xl:text-[17px] xl:leading-[21px]">
                    If potential new clients could create a conflict of interest, we double check with our clientele before taking on new projects.
                </p>         
            </div>         
        `;
    }
}