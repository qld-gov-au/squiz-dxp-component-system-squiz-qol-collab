import { formatMatrixURItoID } from "../../02_utils/dxp-utils";

/**
 * Accordion - dynamic component
 */
export default {
    async main(input, info) {
        try {
            const {component_options, previous_options, next_options} = input;
            const assetId = await formatMatrixURItoID(component_options.pages);
            const apiQuery = '/pagination?root=' + assetId;
            // ---------
            // SWITCH these over once the API becomes available
            const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;
            //const apiUrl = "http://localhost:5000/src/data/pagination.json";
            // ---------
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const output = `<nav aria-label="${component_options.arialabel}">
                <ul class="pagination">
            
                    ${previous_options ? `
                    <li class="page-item previous">
                        <a class="page-link" href="${previous_options.prevHref}" aria-label="${previous_options.prevAriaLabel}">
                        <span>${previous_options.prevLinkText}</span>
                        </a>
                    </li>
                    ` : ''}
                    ${data.map((page) => { 
                        return `<li class="page-item ${page.customClasses}">
                            ${page.more ? `
                            <span></span>
                            ` : `
                            <a class="page-link" href="${page.href}" aria-label="${page.arialabel}">${page.linktext}</a>
                            `}
                        </li>`;}).join('')}
            
                    ${next_options ? `
                    <li class="page-item next">
                        <a class="page-link" href="${next_options.nextHref}" aria-label="${next_options.nextAriaLabel}">
                        <span>${next_options.nextLinkText}</span>
                        </a>
                    </li>
                    ` : ''}
            
                </ul>
                </nav>
                
            `;


            return output;
        
        } catch (error) {
            console.error('Component render error', error);
        }
    }
};