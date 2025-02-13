import {formatMatrixURItoID} from '../../02_utils/dxp-utils';

/**
 * Events list - dynamic component
 */
export default {
    async main(input, info) {
        try {
            const assetId = await formatMatrixURItoID(input.root);
            const apiQuery = '/latest-news?root=' + assetId;
            // ---------
            // SWITCH these over once the API becomes available
            const apiUrl = `${info.env.BASE_DOMAIN}${info.env.API_PATH}${apiQuery}`;
            // const apiUrl = 'http://localhost:5000/src/data/events-list.json';
            // ---------
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const output = `${
                data
                    ? `
                    <div class="container-fluid qld-banner ${input.bgColour}">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    ${input.sectionTitle !== '' ? `<h2>${input.sectionTitle}</h2>` : ''} 
      
                                    <!-- QGDS Component: Card list -->
                                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                        ${data
                                            .map((item) => {
                                                return `
                                                    <!-- QGDS Partial: card -->
                                                    <div class="col">
                                                        <div class="card card-default default card-single-action h-100">
                                                            <div class="card-img ratio ratio-16x9">
                                                                <div class="card-img-top" style="background-image: url(${item.image})" alt=""></div>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="card-date">${item.publishedDate}</div>
                                                                <h3 class="card-title">
                                                                    <a href="${item.link}" class="stretched-link">${item.heading}</a>
                                                                </h3>
                                                                <div class="card-text">
                                                                    ${item.leadText}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                            })
                                            .join('')}
                                    </div>

                                    <div style="margin-top: 1.5rem; display: flex; justify-content: end;">
                                        <a href="${input.CTALink}" class="qld__cta-link qld__cta-link--view-all">${input.CTAText}</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    : ``
            }
            `;

            return output;
        } catch (error) {
            console.error('Component render error', error);
        }
    },
};
