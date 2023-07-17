import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-services")
export class Services extends TailwindElement(style) {

    render() {
        return html`
            <services-big class="hidden md:block"></services-big>                
        `;
    }
}