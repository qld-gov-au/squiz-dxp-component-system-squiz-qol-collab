import { formatMatrixURItoID } from "../../02_utils/dxp-utils";

/**
 * Accordion - dynamic component
 */
export default {
    async main(input, info) {
        try {
            const assetId = await formatMatrixURItoID(input.tagItems);
            const apiQuery = '/tag-dynamic?root=' + assetId;
            // ---------
            // SWITCH these over once the API becomes available
            // const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;
            const apiUrl = "http://localhost:5000/src/data/tag-dynamic.json";
            // ---------
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const output = `<!-- QGDS Component: Tag -->
                <ul class="tag-list ${input.variant}">
                    ${data.map((item) => {
                        return `<li class="tag-item ${item.classes}">
                            ${item.content}
                        </li>`;
                    }).join('')}
                </ul>
            `;


            return output;
        
        } catch (error) {
            console.error('Component render error', error);
        }
    }
}