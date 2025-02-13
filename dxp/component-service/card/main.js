//import { formatMatrixURItoID } from "../../02_utils/dxp-utils";

/**
 * Accordion - dynamic component
 */
export default {
    async main(input) {
        try {

            const output = `<!-- QGDS Partial: card -->
                <div class="col${input.feature ? '-md-12 col-lg-12' : ''}">
                <div class="card card-${input.variantClass} ${input.variantClass} ${input.iconPosition} card-${input.action}-action${input.arrow === "Yes" ? ' card-arrow' : ''}${input.equalHeight === "Yes" ? ' h-100' : ''}${input.feature ? ` card-feature card-feature-${input.featureImagePosition}` : ''}${input.video === "Yes" ? ' card-video' : ''}">
                    
                    ${input.image ? `
                    <div class="card-img ratio ratio-16x9">
                        <div class="${input.feature ? `card-img-${input.featureImagePosition}` : 'card-img-top'}" 
                        style="--card-image:url(${input.image.imageVariations.original.url})" alt="${input.image.alt}">
                        </div>
                        ${input.video === "Yes" ? `
                        <div class="video-overlay">
                            <div class="video-nav">
                            <div class="video-watch"><span class="icon"></span><span>Watch</span></div>
                            ${input.videoDuration ? `
                                <div title="Video duration" class="video-duration"><span class="icon"></span><span>${input.videoDuration}</span></div>
                            ` : ''}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                    ` : ''}

                    ${input.iconClasses ? `
                    <div class="card-icon ${input.iconPosition} ${input.iconClasses}"></div>
                    ` : ''}

                    ${input.feature ? '<div class="card-inner">' : ''}
                    
                    <div class="card-body">
                        ${input.date ? `
                        <div class="card-date">${new Date(input.date).toLocaleDateString()}</div>
                        ` : ''}

                        <h3 class="card-title">
                        ${input.link ? `
                            <a href="${input.link}" ${input.action === 'single' ? 'class="stretched-link"' : ''}>${input.title}</a>
                        ` : `${input.title}`}
                        </h3>

                        ${input.description ? `
                        <p class="card-text">${input.description}</p>
                        ` : ''}

                        ${input.arrow === "Yes" ? `
                        <div class="card-icon icon-arrow"></div>
                        ` : ''}
                    </div>

                    ${input.footer ? `
                        <div class="card-footer">
                        ${input.footer}
                        </div>
                    ` : ''}

                    ${input.feature ? '</div>' : ''}
                </div>
                </div>
            `;

            return output;
        
        } catch (error) {
            console.error('Component render error', error);
        }
    }
};