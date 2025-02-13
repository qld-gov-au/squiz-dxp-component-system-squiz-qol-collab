export const DesignPreviewHeader = (params) => {
    //const {url, funcName, componentFnName,funcStr, urlArr, urlIncludes} = params;
    return `<div class="design-preview-header">
                <p><strong>Choose a design to apply:</strong></p>
            <div class="design-preview-header__controls">
                <select>
                    <option value="ssq_design_system">SSQ Design System</option>
                    <option value="qld_arts">QLD Arts</option>
                </select>                
            </div>
        </div>`;
  }