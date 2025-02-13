/**
 * Blockquote component
 */

// Utility function to render raw HTML without extra parsing
import { html } from '../../02_utils/html';
// Sanitizes dynamic content to prevent XSS attacks
import { xssSafeContent } from '../../02_utils/xss';

export default {
    async main(input) {
        return html`
            <figure class="blockquote ${input.classes}">            
                <blockquote cite="${input.citeUrl}">
                    ${xssSafeContent(input.content)}
                </blockquote>
                <figcaption class="quote-source">
                    ${xssSafeContent(input.citeText)}                    
                </figcaption>
            </figure>
        `;
    }
};