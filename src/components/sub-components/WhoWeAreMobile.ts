import { html } from "lit";
import { customElement, property, state, query, queryAll } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../../shared/tailwind.element";

import style from "../../shared/tailwind.global.css";

import { countriesData } from "../../data/countriesData";

interface ICountry {
    name: string,
    education: string,
    ease: string,
    individuals: string,
    cohesion: string,
    rrf: string
}

@customElement("who-we-are-mobile")
export class WhoWeAreMobile extends TailwindElement(style) {

    @property({type: String})
    searchInput: string = "";

    @property()
    private countrySelected: string

    @state()
    private countries: ICountry[] = Object.values(countriesData)

    @state()
    lastSearchInput:string = ""

    /* @property()
    filteredCountries: ICountry[] = this.countries.filter(country => country.name.toLowerCase().includes(this.searchInput)) */

    @state()
    private cardsArray: HTMLDivElement[]

   
    render() {
        console.log('rendering')
        this.cardsArray = Array.from(this.renderRoot.querySelectorAll('.who-we-are-card'));
        console.log(this.cardsArray)
        /* const cardsArr = Array.from(this.cards)
        console.log(cardsArr)
        console.log(Array.from(this.renderRoot.querySelectorAll('.who-we-are-card'))) */

        /* const filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(this.searchInput)) */
        
        return html`
            <div class="md:hidden w-[90%] mx-auto mt-10 mb-10">
                <div class="relative w-full h-[26px] mb-6">
                    <input @input=${this.handleSearch} value="" type="text" id="who-we-are-search" class="bg-primary/20 w-full h-full rounded-full pl-3 pr-20 font-jose-400 text-sm text-primary" />
                    <div class="absolute top-[4px] right-[4px] bg-primary rounded-full w-[69px] h-[20px]  font-jose-600 text-[10px] leading-[12px] text-white flex justify-center items-center pt-[3px]">SEARCH</div>
                </div>
                <div class="flex flex-row justify-between flex-wrap">
                    ${map(this.countries.filter(country => country.name.toLowerCase().includes(this.searchInput)), (country, index) => {
                        if (this.countries.filter(country => country.name.toLowerCase().includes(this.searchInput)).length == 1) {
                            this.countrySelected = this.formatCountry(country.name)
                            return html `
                                <div class="who-we-are-card my-[6px] w-full">
                                    <div class="flex items-center h-[26px] pl-5 rounded-full bg-primary/60 font-unna-700 text-sm text-white select-none">${country.name}</div>
                                    <div class="w-[90%] mx-auto">
                                        <p class="who-we-are-card-p">Education Expenditure (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.education}</span>
                                        <p class="who-we-are-card-p">Ease of doing business (world) ranking (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.ease}</span>
                                        <p class="who-we-are-card-p">Individuals using the internet (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.individuals}</span>
                                        <p class="who-we-are-card-p">Cohesion Policy total allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.cohesion}</span>
                                        <p class="who-we-are-card-p">RRF funds allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.rrf}</span>
                                    </div>
                                    <a href="./contact.html" >
                                        <div class="w-[119px] h-[40px] pt-1 mt-6 mb-8 flex justify-center items-center font-jose-600 text-primary-dark2 text-[10px] leading-[12px] border-2 border-primary-dark2 rounded-full mx-auto text-center">GET IN TOUCH</br> TO FIND OUT MORE</div>
                                    </a>
                                </div>                      
                            `
                        } else if (country.name == "EU Administrated") {
                            return html`
                                <div @click=${() => this.handleClick(this.formatCountry(country.name), index)} id="${this.formatCountry(country.name)}-btn" class="${classMap({'block': this.countrySelected != this.formatCountry(country.name), 'hidden': this.countrySelected == this.formatCountry(country.name)})} z-50 flex flex-row items-center w-full h-[26px] mt-[6px] pl-3 border-[1px] border-primary rounded-full bg-white cursor-pointer select-none">                       
                                    <svg fill="#399AC299" class="mr-2 pb-[2px]" width="40" height="20" viewBox="0 0 61 38" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.3508 5.37268C32.3508 5.37268 30.1773 10.3419 29.6251 11.4877C28.6567 13.4968 27.5449 14.283 24.9266 14.6761C23.7005 14.8602 1.90088 15.8991 1.90088 15.8991L2.12694 33.6191L32.3079 33.6145L32.3508 5.37268Z"/>
                                        <path d="M32.8533 8.69205L36.117 9.04139L36.1887 33.6322H32.8174L32.8533 8.69205Z"/>
                                        <path d="M41.6401 9.39084L44.366 9.47811L44.8322 33.6271L41.6761 33.6322L41.6401 9.39084Z"/>
                                        <path d="M36.8343 8.29892L40.8512 8.69202L40.9946 33.6322L36.7983 33.6268L36.8343 8.29892Z"/>
                                        <path d="M45.0112 6.28964L45.1548 6.246L45.5144 15.3133L58.8916 16.3794L59.6441 33.6322H45.5136L45.0112 6.28964Z"/>
                                        <path d="M32.7812 7.5126C33.678 6.24589 35.9732 4.89191 36.7623 4.62984C37.5515 4.36777 39.7393 4.36777 40.8511 4.5862C41.9629 4.80464 42.7521 5.24138 43.0031 6.11498C43.2541 6.98859 42.9313 8.16777 42.8237 8.69191L41.6401 8.64827V8.0805L36.1885 7.6L36.1527 8.4736L32.8172 8.0805L32.7812 7.5126Z"/>
                                    </svg>
                                    <p class="font-jose-600 text-sm pt-[2px]">Brussels administrated</p>
                                </div>
                                <div id="${this.formatCountry(country.name)}-card" class="${classMap({'hidden': this.countrySelected != this.formatCountry(country.name), 'block': this.countrySelected == this.formatCountry(country.name)})} who-we-are-card my-[6px] w-full">
                                    <div class="flex items-center h-[26px] pl-5 rounded-full bg-primary/60 font-unna-700 text-sm text-white select-none">${country.name}</div>
                                    <div class="w-[90%] mx-auto">
                                        <p class="who-we-are-card-p">Education Expenditure (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.education}</span>
                                        <p class="who-we-are-card-p">Ease of doing business (world) ranking (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.ease}</span>
                                        <p class="who-we-are-card-p">Individuals using the internet (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.individuals}</span>
                                        <p class="who-we-are-card-p">Cohesion Policy total allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.cohesion}</span>
                                        <p class="who-we-are-card-p">RRF funds allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.rrf}</span>
                                    </div>
                                    <a href="./contact.html" >
                                        <div class="w-[119px] h-[40px] pt-1 mt-6 mb-8 flex justify-center items-center font-jose-600 text-primary-dark2 text-[10px] leading-[12px] border-2 border-primary-dark2 rounded-full mx-auto text-center">GET IN TOUCH</br> TO FIND OUT MORE</div>
                                    </a>
                                </div>
                            `
                        } else if (index % 2 === 0) {
                            return html`
                                <div id="${this.formatCountry(country.name)}-card" class="${classMap({'hidden': this.countrySelected != this.formatCountry(country.name), 'block': this.countrySelected == this.formatCountry(country.name)})} who-we-are-card my-[6px] w-full">
                                    <div class="flex items-center h-[26px] pl-5 rounded-full bg-primary/60 font-unna-700 text-sm text-white select-none">${country.name}</div>
                                    <div class="w-[90%] mx-auto">
                                        <p class="who-we-are-card-p">Education Expenditure (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.education}</span>
                                        <p class="who-we-are-card-p">Ease of doing business (world) ranking (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.ease}</span>
                                        <p class="who-we-are-card-p">Individuals using the internet (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.individuals}</span>
                                        <p class="who-we-are-card-p">Cohesion Policy total allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.cohesion}</span>
                                        <p class="who-we-are-card-p">RRF funds allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.rrf}</span>
                                    </div>
                                    <a href="./contact.html" >
                                        <div class="w-[119px] h-[40px] pt-1 mt-6 mb-8 flex justify-center items-center font-jose-600 text-primary-dark2 text-[10px] leading-[12px] border-2 border-primary-dark2 rounded-full mx-auto text-center">GET IN TOUCH</br> TO FIND OUT MORE</div>
                                    </a>
                                </div>
                                <div @click=${() => this.handleClick(this.formatCountry(country.name), index)} id="${this.formatCountry(country.name)}-btn" class="${classMap({'block': this.countrySelected != this.formatCountry(country.name), 'hidden': this.countrySelected == this.formatCountry(country.name)})} h-[26px] w-[49%] my-[6px] pl-5 pt-[1px] bg-primary rounded-full flex items-center text-white font-unna-700 text-sm">${country.name}</div>
                                <div id="${this.formatCountry(country.name)}-btn-placeholder" class="${classMap({'hidden': this.countrySelected != this.formatCountry(country.name), 'block': this.countrySelected == this.formatCountry(country.name)})} h-[26px] w-[49%] my-[6px] pl-5 pt-[1px] bg-white rounded-full text-white font-unna-700 text-sm"></div>
                            `
                        } else {
                            return html`
                                <div @click=${() => this.handleClick(this.formatCountry(country.name), index)} id="${this.formatCountry(country.name)}-btn" class="${classMap({'block': this.countrySelected != this.formatCountry(country.name), 'hidden': this.countrySelected == this.formatCountry(country.name)})} h-[26px] w-[49%] my-[6px] pl-5 pt-[1px] bg-primary rounded-full flex items-center text-white font-unna-700 text-sm">${country.name}</div>
                                <div id="${this.formatCountry(country.name)}-btn-placeholder" class="${classMap({'hidden': this.countrySelected != this.formatCountry(country.name), 'block': this.countrySelected == this.formatCountry(country.name)})} h-[26px] w-[49%] my-[6px] pl-5 pt-[1px] bg-white rounded-full text-white font-unna-700 text-sm"></div>
                                <div id="${this.formatCountry(country.name)}-card" class="${classMap({'hidden': this.countrySelected != this.formatCountry(country.name), 'block': this.countrySelected == this.formatCountry(country.name)})} who-we-are-card my-[6px] w-full">
                                    <div class="flex items-center h-[26px] pl-5 rounded-full bg-primary/60 font-unna-700 text-sm text-white select-none">${country.name}</div>
                                    <div class="w-[90%] mx-auto">
                                        <p class="who-we-are-card-p">Education Expenditure (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.education}</span>
                                        <p class="who-we-are-card-p">Ease of doing business (world) ranking (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.ease}</span>
                                        <p class="who-we-are-card-p">Individuals using the internet (World Bank):</p>
                                        <span class="who-we-are-card-span">${country.individuals}</span>
                                        <p class="who-we-are-card-p">Cohesion Policy total allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.cohesion}</span>
                                        <p class="who-we-are-card-p">RRF funds allocation (in million EUR):</p>
                                        <span class="who-we-are-card-span">${country.rrf}</span>
                                    </div>
                                    <a href="./contact.html" >
                                        <div class="w-[119px] h-[40px] pt-1 mt-6 mb-8 flex justify-center items-center font-jose-600 text-primary-dark2 text-[10px] leading-[12px] border-2 border-primary-dark2 rounded-full mx-auto text-center">GET IN TOUCH</br> TO FIND OUT MORE</div>
                                    </a>
                                </div>
                            `
                        }
                    })}
                </div>
            </div>
        `;
    }

    firstUpdated() {
        this.cardsArray = Array.from(this.renderRoot.querySelectorAll('.who-we-are-card'));
    }

    formatCountry(country: string) {
        return country.replace(" ", "").toLowerCase()
    }

    handleSearch(e: Event) {
        const input = e.target as HTMLInputElement;
        this.lastSearchInput = this.searchInput
        this.searchInput = input.value.toLowerCase();
        /* if (this.searchInput.length < this.lastSearchInput.length) {
            this.requestUpdate()
        } */
    }

    hideSelected() {
        this.renderRoot.querySelector(`#${this.countrySelected}-card`).classList.add('hidden')
        this.renderRoot.querySelector(`#${this.countrySelected}-btn`).classList.remove('hidden')
        this.renderRoot.querySelector(`#${this.countrySelected}-btn-placeholder`).classList.add('hidden')
    }

    showCard(country: string, index: number) {
        console.log(this.cardsArray[index].classList)
        this.cardsArray[index].classList.remove('hidden')
        console.log(this.cardsArray[index].classList)
        this.renderRoot.querySelector(`#${country}-btn`).classList.add('hidden')
        this.renderRoot.querySelector(`#${country}-btn-placeholder`).classList.remove('hidden')
    }

    handleClick(country: string, index: number) {
        /* console.log(this.countrySelected)
        if (this.countrySelected != undefined) {
            this.hideSelected()
        } */
        this.countrySelected = this.formatCountry(country)
        /* this.showCard(country, index) */
        

    }

}