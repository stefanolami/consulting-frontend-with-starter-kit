import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("landing-page-list")
export class LandingPageList extends TailwindElement(style) {

    render() {
        return html`
        <div class="flex flex-col items-center w-[90%] sm:w-[80%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] m-auto">
            
            <style>
                ol {
                    counter-reset: ol;
                }
                ol li:before {
                    content: counter(ol);
                    counter-increment: ol;
                    position:absolute;
                    translate: -55px -6px;
                    font-style: normal;
                    font-size: 25px;
                    color: white;
                    background-color: #399AC2;
                    width: 35px;
                    height: 35px;
                    padding: 11px;
                    margin-bottom: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    text-align: center;
                }
                ol li:first-child:before {
                    padding-left: 13px;
                }
                @media only screen and (min-width: 768px) {
                    ol li:before {
                        font-size: 30px;
                        width: 50px;
                        height: 50px;
                        translate: -68px -12px;
                        padding: 18px;
                    }
                    ol li:first-child:before {
                        padding-left: 19px;
                    }
                }
                @media only screen and (min-width: 1280px) {
                    ol li:before {
                        font-size: 38px;
                        width: 64px;
                        height: 64px;
                        translate: -90px -18px;
                        padding: 22px;
                    }
                    ol li:first-child:before {
                        padding-left: 25px;
                    }
                }
            </style>
            <ol class="relative font-unna-700-it text-[17px] md:text-[23px] leading-5 md:leading-7 pl-[60px] md:pl-[72px] xl:pl-[92px]">
                <li class="responsive-ordered-list-items">We <span class="text-primary">"walk and talk"</span> you through the Project Life Cycle.</li>
                <li class="responsive-ordered-list-items">We identify your <span class="text-primary">public funding and investment</span> opportunities.</li>
                <li class="responsive-ordered-list-items">We <span class="text-primary">build your proposal</span> and form your consortium.</li>
                <li class="responsive-ordered-list-items">We <span class="text-primary">coordinate the project</span> and run the consortium.</li>
                <li class="responsive-ordered-list-items">We provide <span class="text-primary">training on all stages</span> of the Project Life Cycle.</li>
            </ol>
        </div>
        `;
    }
}