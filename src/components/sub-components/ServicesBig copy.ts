import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

@customElement("services-big")
export class ServicesBig extends TailwindElement(style) {


    render() {
        return html`
            <div class="hidden md:block mt-14">
                <h1 class="text-center font-unna-700 text-[39px] xl:text-[50px] leading:-[45px] xl:leading-[57px]">OUR SERVICES</h1>
                <p class="mt-8 text-center font-jose-400-it text-[21px] xl:text-[23px] leading-[26px]">We can step in at any point of the cycle, <br>or provide relevant training</p>
                <div class="relative w-[770px] xl:w-[1050px] mx-auto mt-40 mb-60 select-none">
                    <img class="xl:hidden w-[680px] pr-[60px] mx-auto z-[-10]" src="../../images/our-services/arrows.png" alt="Arrows">
                    <img class="hidden xl:block w-[950px] pr-[60px] xl:pr-[100px] mx-auto z-[-10]" src="../../images/our-services/arrows-desktop.png" alt="Arrows">
                    <div class="absolute z-10 -top-32 xl:-top-16 right-8 xl:right-12 w-[160px] text-mygreen text-center font-unna-700 text-[31px] leading-[36px]">PROJECT INITIATION</div>
                    <div class="absolute z-10 -bottom-32 xl:-bottom-12 right-8 xl:right-12 w-[160px] text-primary text-center font-unna-700 text-[31px] leading-[36px]">PROJECT PLANNING</div>
                    <div class="absolute z-10 -bottom-32 xl:-bottom-12 left-6 xl:left-16 w-[160px] text-primary-dark2 text-center font-unna-700 text-[31px] leading-[36px]">PROJECT EXECUTION</div>
                    <div class="absolute z-10 -top-32 xl:-top-16 left-6 xl:left-16 w-[160px] text-mygrey/80 text-center font-unna-700 text-[31px] leading-[36px]">PROJECT CLOSURE</div>


                    <div class="-top-16 xl:-top-11 left-[310px] xl:left-[445px] tablet-services-btns tablet-project-initiation-btns services-project-initiation unfocused">Brainstorming</div>
                    <div class="top-3 right-36 xl:right-60 tablet-services-btns tablet-project-initiation-btns services-project-initiation unfocused">Idea Development</div>
                    <div class="top-[120px] xl:top-36 right-8 xl:right-24 tablet-services-btns tablet-project-initiation-btns services-project-initiation unfocused">Funding Match</div>
                    <div class="top-64 xl:top-[300px] right-8 xl:right-16 tablet-services-btns tablet-project-planning-btns services-project-planning unfocused">Idea to Project</div>
                    <div class="bottom-[72px] xl:bottom-24 right-[90px] xl:right-40 tablet-services-btns tablet-project-planning-btns services-project-planning unfocused">Project Development</div>
                    <div class="-bottom-7 right-52 xl:right-[330px] tablet-services-btns tablet-project-planning-btns services-project-planning unfocused">Project Proposal</div>
                    <div class="-bottom-7 left-[215px] xl:left-[345px] tablet-services-btns tablet-project-execution-btns services-project-execution unfocused">Contract Negotiation</div>
                    <div class="bottom-[72px] xl:bottom-24 left-[106px] xl:left-44 tablet-services-btns tablet-project-execution-btns services-project-execution unfocused">Project Implementation</div>
                    <div class="top-64 xl:top-[300px] left-10 xl:left-20 tablet-services-btns tablet-project-execution-btns services-project-execution unfocused">Project Communication</div>
                    <div class="top-[120px] xl:top-36 left-10 xl:left-28 tablet-services-btns tablet-project-closure-btns services-project-closure unfocused">Completion of Project</div>
                    <div class="-top-8 xl:top-6 left-0 xl:-left-20 tablet-services-btns tablet-project-closure-btns services-project-closure unfocused">Market Introduction</div>
                    <div class="top-3 left-40 xl:left-60 tablet-services-btns tablet-project-closure-btns services-project-closure unfocused">New Possibilities</div>


                    <img id="tablet-services-logo" class="block w-[425px] absolute z-10 top-20 xl:top-40 left-[178px] xl:left-80" src="../../images/our-services/T&P-Logo-services-tablet.png" alt="">


                    <div class="hidden absolute tablet-services-div tablet-project-initiation top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title  text-mygreen">BRAINSTORMING</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Creativity process to gather ideas, thoughts and inspiration</li>
                            <li>Structured process to find new ideas which can be filtered into a catalogue of concrete opportunities with the most potential</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-mygreen border-mygreen hover:text-white hover:bg-mygreen border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-initiation top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-mygreen">IDEA DEVELOPMENT</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Modification of the ideas / sorting out the best opportunities from the idea catalogue</li>
                            <li>What is possible, who is the customer, is there added value for your customer/end-user</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-mygreen border-mygreen hover:text-white hover:bg-mygreen border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-initiation top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-mygreen">FUNDING MATCH</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Searching the funding landscape for opportunities matching your idea</li>
                            <li>Evaluating opportunities according to your business strategy</li>
                            <li>Report including evaluation of the opportunities and funding scheme</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-mygreen border-mygreen hover:text-white hover:bg-mygreen border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-planning top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-primary-focus">IDEA TO PROJECT</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Breaking the idea down to major development stages, showing where or what development is needed to go from state-of-the-art 
                                to the expected outcomes and results
                            </li>
                            <li>Drafting first project structure</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-primary border-primary hover:text-white hover:bg-primary border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-planning top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-primary-focus">PROJECT DEVELOPMENT</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Building project structure and defining work-packages and tasks</li>
                            <li>Identifying available knowledge, assigning  task and needed knowledge from new partners</li>
                            <li>Partner search and Consortium building</li>                           
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-primary border-primary hover:text-white hover:bg-primary border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-planning top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-primary-focus">PROJECT PROPOSAL</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Managing the writing process, building project budget, proofreading input from partners, verification of alignment with EU national 
                                and regional policy, ongoing contact with the relevant authorities
                            </li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-primary border-primary hover:text-white hover:bg-primary border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-execution top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-primary-dark2/80">CONTRACT NEGOTIATION</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Responding to funding offer modifications in project description, according to offer</li>
                            <li>Finalisation of the Consortium agreement</li>
                            <li>Signing funding contracts and Consortium agreement by all partners</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-primary-dark2 border-primary-dark2 hover:text-white hover:bg-primary-dark2 border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-execution top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-primary-dark2/80">PROJECT IMPLEMENTATION</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Progress monitoring and management, including organising project meetings and the general assembly</li>
                            <li>Financial and administrative project management, including communication with funding authorities</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-primary-dark2 border-primary-dark2 hover:text-white hover:bg-primary-dark2 border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-execution top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-primary-dark2/80">PROJECT COMMUNICATION</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Internal communication management – e.g. data storage and email</li>
                            <li>External communication setup, dissemination and exploitation activities – e.g. social media, newsletters, websites</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-primary-dark2 border-primary-dark2 hover:text-white hover:bg-primary-dark2 border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-closure top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-mygrey">COMPLETION OF PROJECT</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Final reporting</li>
                            <li>Evaluation and measurement of main results compared to predefined expected outcome, listing and description of unexpected findings and side-results</li>
                            <li>Communication strategy for results</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-mygrey border-mygrey hover:text-white hover:bg-mygrey border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-closure top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-mygrey">MARKET INTRODUCTION</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Product introduction to market – i.e. development of business plan, market penetration strategy, marketing management strategy and product assortment (market) strategy</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-mygrey border-mygrey hover:text-white hover:bg-mygrey border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                    <div class="hidden absolute tablet-services-div tablet-project-closure top-44 xl:top-[200px] left-[210px] xl:left-[330px] z-20 w-[402px] h-[340px]">
                        <h6 class="tablet-services-div-title text-mygrey">NEW POSSIBILITIES</h6>
                        <ul class="font-jose-400 text-[17px] xl:text-[21px] leading-[21px] xl:leading-[24px] list-disc pl-4 xl:pl-6">
                            <li>Inspiration for further development – i.e. start the process all over again, with or without the brainstorming to extract and expand on the ideas coming out from the project.</li>
                        </ul>
                        <a  href="./contact.html" class="hidden xl:flex mx-auto mt-9 w-[181px] h-12  justify-center items-center pt-[2px] font-jose-600 text-[16px] leading-[21px] text-mygrey border-mygrey hover:text-white hover:bg-mygrey border-[3px] rounded-full">
                            <div>GET IN TOUCH</div>
                        </a>
                    </div>
                </div>
            </div>                
        `;
    }

}