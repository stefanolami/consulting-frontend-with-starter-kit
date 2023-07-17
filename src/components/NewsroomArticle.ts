import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("newsroom-article")
export class NewsroomArtcile extends TailwindElement(style) {

    render() {
        return html`
            <div class="relative w-[90%] xl:w-4/5 mx-auto">
                <p class="absolute -top-3 right-0 md:-top-7 xl:-top-20 -xl:right-6 w-3/5 md:w-full md:pl-[82%] xl:pl-[88%] mx-auto text-center md:text-right font-jose-300-it md:font-jose-400-it text-[13px] md:text-[15px] leading-[13px] md:leading-[15px]">PRESS RELEASE 15th of October 2020 Brussels</p>
                <h1 class="w-[80%] mx-auto pt-7 md:pt-4 xl:pt-0 font-unna-700 text-center text-[20px] md:text-[39px] xl:text-[50px] leading-[23px] md:leading-[45px] xl:leading-[57px]">TIME&PLACE CONSULTING COLLABORATION WITH PR SIGNAL IN INDIA</h1>
                <p class="w-[95%] md:w-4/5 md:mx-auto mt-5 md:mt-7 xl:mt-16 font-jose-400-it text-[14px] md:text-[17px] leading-4 md:leading-[21px] text-center">Time&Place Consulting sets up EU-India trade and business development division with satellite office in Kolkata through its cooperation with PR Signal</p>
                <div class="md:w-4/5 xl:w-[70%] md:mx-auto md:mt-10 xl:mt-20 font-jose-400 text-[15px] md:text-[17px] leading-[17px] md:leading-[21px]">
                    <p class="mt-5">On 15 October 2020, Time&Place Consulting and PR Signal entered into an agreement to cooperate with the purpose of providing business 
                        development and management advice to Indian and European companies looking to enter the European and Indian markets respectively. 
                        Furthermore, a key element of cooperation will be to strengthen EU-India trade ties and to advise on political developments to this 
                        end, with a view of impacting relations between the two geographies at government, business and civil society levels. Time&Place is 
                        setting up a trade and business development division to fulfil these aims. </br></br>The division will be led by:
                    </p>
                    <ul class="mt-2 list-disc pl-5">
                        <li>Sumit Agarwal who will also be joining the Time&Place network as Senior Counsellor, India.</li>
                        <li>Kjeld Olesen, Senior Associate at Time&Place and Co-Founder of Time&Place Funding. He will become Member of PR Signal’s Advisory Board.</li>
                        <li>Glenn Cezanne, Managing Director at Time&Place and Co-Founder of Time&Place Funding will also become Member of PR Signal’s Advisory Board.</li>
                    </ul>
                    <p class="mt-5">PR Signal and its team will therefore join the high-level network of Consultants and Advisors that is 
                        the fabric of Time&Place. Time&Places new partners will also function as a satellite office allowing for structured and continuous business capacities and 
                        synergies between Europe and India, tailored to the needs of clients.
                    </p>
                </div>                
                <p class="w-[70%] md:w-[90%] mt-4 md:mt-10 xl:mt-20 mx-auto font-unna-700-it text-center text-[17px] md:text-[29px] leading-[20px] md:leading-[33px]">“PR Signal’s clients have significant business development ambitions in Europe. Once looking for partners, it was very easy for me to decide for Time&Place 
                    Consulting. The first time I encountered them was when Time&Place became Official Partner of the European Paralympics Committee following which they 
                    organised a high-level webinar on the future of the Paralympic Movement from the perspective of youth. After that, the more I looked into Time&Place, 
                    the more I saw synergies with our core beliefs and business ambitions.”
                </p>
                <p class="w-[40%] mt-5 md:mt-8 mx-auto font-jose-300-it text-center text-[13px] md:text-[19px] leading-[15px] md:leading-[19px]">S. Agarwal Founder, PR Signal</p>
                <img class="w-[95%] xl:w-4/6 mt-6 md:mt-16 xl:mt-20 mx-auto" src="../../images/newsroom/newsroom-signature-mobile.png" alt="Signature Image">
                <p class="w-[70%] md:w-[90%] mt-4 md:mt-10 xl:mt-20 mx-auto font-unna-700-it text-center text-[17px] md:text-[29px] leading-[20px] md:leading-[33px]">“It is especially in these times of COVID and the ongoing trade wars 
                    where we believe there is a responsibility as Time&Place Consulting to keep pushing for economic growth and erode trade barriers. There are too many forces 
                    pushing in the opposite direction. This is why we are delighted to announce our cooperation with our Kolkata-based business partners PR Signal, founded and 
                    led by Sumit Agarwal, a regional heavyweight in public relations and communications.”                    
                </p>
                <p class="w-[40%] mt-5 md:mt-8 mx-auto font-jose-300-it text-center text-[13px] md:text-[19px] leading-[15px] md:leading-[19px]">G. Cezanne Founder, Time&Place Consulting</p>
                <div class="md:w-4/5 xl:w-[70%] md:mx-auto md:mt-10 xl:mt-20 font-jose-400 text-[15px] md:text-[17px] leading-[17px] md:leading-[21px]">
                    <h6 class="mt-10 font-unna-700-it text-[20px] md:text-[25px] leading-[23px] md:leading-[29px]">About PR Signal</h6>
                    <p class="mt-3">PR Signal studies the ways in which companies build relationships with the public, to reinvent the dynamics of making it better or 
                        do necessary course corrections. They leverage their contacts with major publications, influential blogs, and opinion leaders who 
                        matter in public relations. They have, in their ambit of expertise, social media marketing and strategic magazine collaboration for 
                        special press coverage and brand communication support services to maximize client's benefits, cost effectively.
                        In short, they solve business challenges with insight, ingenuity, determination and teamwork.
                    </p>
                    <h6 class="mt-10 font-unna-700-it text-[20px] md:text-[25px] leading-[23px] md:leading-[29px]">About Time&Place Consulting</h6>
                    <p class="mt-3">Time&Place is a strategic communications and public affairs agency which brings together a 
                        global network of experts in government relations, legal affairs, association management, EU funding, corporate management, crisis management and reputation management.
                        The select network includes former Ministers and Member of Parliament, European Commission officials, association directors and multinational CEOs, 
                        as well as active university professors and award-winning lawyers. The consultancy combines tacit knowledge, sectoral expertise, and professional 
                        prowess to give tailored and holistic solutions.
                    </p>
                    <h6 class="mt-10 font-unna-700-it text-[20px] md:text-[25px] leading-[23px] md:leading-[29px]">For further information please contact:</h6>
                    <div class="md:w-full md:pr-24 xl:pr-[20%] xl:mt-6 md:flex md:flex-row md:justify-between">
                        <div class="mx-[15%] md:mx-0 flex flex-col">
                            <span class="mt-7 font-unna-700 text-[17px] xl:text-[21px] leading-[20px] xl:leading-[24px]">Sumit Agarwal</span>
                            <span class="mt-2 font-jose-300-it text-[15px] xl:text-[19px] leading-[18px] xl:leading-[22px]">Founder</span>
                            <span class="mt-2 font-jose-400 text-[14px] xl:text-base leading-[17px]">
                                PR Signal </br></br>
                                Tel: +91 (0) 33 400 864 47</br>
                                sumit@prsignal.com</br>
                                www.prsignal.com
                            </span>
                        </div>
                        <div class="mx-[15%] md:mx-0 flex flex-col mb-20">
                            <span class="mt-7 font-unna-700 text-[17px] xl:text-[21px] leading-[20px] xl:leading-[24px]">Glenn Cezanne</span>
                            <span class="mt-2 font-jose-300-it text-[15px] xl:text-[19px] leading-[18px] xl:leading-[22px]">Founder & Managing Director</span>
                            <span class="mt-2 font-jose-400 text-[14px] xl:text-base leading-[17px]">
                                Time&Place Consulting </br></br>
                                Tel: +32 (0) 2 401 61 31</br>
                                cezanne@timeandplaceconsulting.com</br>
                                www.timeandplaceconsulting.com
                            </span>
                        </div>
                    </div> 
                </div>
            </div>          
        `;
    }
}