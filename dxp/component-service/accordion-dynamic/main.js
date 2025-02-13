import { formatMatrixURItoID } from "../../02_utils/dxp-utils";

/**
 * Accordion - dynamic component
 */
export default {
    async main(input, info) {
        try {

            const assetId = await formatMatrixURItoID(input.root);
            const apiQuery = '/accordions-dynamic?root=' + assetId;
            //const apiQuery = '/accordions-dynamic?root=' + assetId;
            // ---------
            // SWITCH these over once the API becomes available
            const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;            
            //const apiUrl = "http://localhost:5000/src/data/accordion-dynamic.json";
            // ---------
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const output = `${data ? `<!-- QGDS Component: Accordion -->
                <div class="accordion-group">

                    ${input['expand-collapse-option'] === 'Yes' ? `<div class="accordion-toggle">
                            <button class="accordion-toggle-btn accordion-toggle-btn--closed" type="button">Open all</button>
                        </div>` : ''}

                    <div class="accordion" id="${data.groupid}">
                        
                    ${data.accordionItems.map((item) => {
                        return `<div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-${item.id}">
                                        <button class="accordion-button ${!item.expanded ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${item.id}" aria-expanded="${item.expanded}" aria-controls="collapse-${item.id}">
                                            ${item.title}
                                        </button>
                                    </h2>

                                    <div id="collapse-${item.id}" class="accordion-collapse collapse ${item.expanded ? 'show' : ''}" aria-labelledby="heading-${item.id}">
                                        <div class="accordion-body">
                                            ${item.content}
                                        </div>
                                    </div>
                                </div>
                        `;
                    }).join('')}
                        
                    </div>

                </div>` : ``}
            `;

            return output;
        
        } catch (error) {
            console.error('Component render error', error);
        }
    }
};