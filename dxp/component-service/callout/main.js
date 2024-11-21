/**
 * Callout component
 * Common js module to support DXP Component Service.
 */
export default {
  async main(input, info) {
    return `
      <div class="callout">
          ${input.title ? `
            <h3 class="callout-title">${input.title}</h3>
            ` 
            : ''}
          <div class="callout-text">${input.content}</div>
      </div>
    `;
  }
}