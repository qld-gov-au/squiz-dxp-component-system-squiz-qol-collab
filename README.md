# QGDS Bootstrap 5 - Squiz DXP Component System

This library is for dxp.squiz.cloud to generate the required html structure to use the QGDS Bootstrap5 css/javascript.

There are two namespaces:

- qgds-bs5 (-dev): Used for WYSIWYG editor drag and drop components
- qgds-bs5-layout (-dev): Used for page template embeds

---

## Getting Started

Follow these steps to get started with coreDXP on your local machine:

1. **Clone the repository:**
    ```bash
    git clone git@github.com:qld-gov-au/squiz-dxp-component-system-squiz-qol-collab.git
    ```

2. **Navigate into the project directory:**
    ```bash
    cd squiz-dxp-component-system-squiz-qol-collab
    nvm use
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```


4. **Create a local .env file**

    ```bash
    touch .env
    ```

5.  **Add the contents below to the .env and save**
    ```
    BASE_DOMAIN="https://ssqld-web-uat.matrix.squiz.cloud"
    API_PATH="/cmp-data-api"
    API_IDENTIFIER="matrixIdentifier"
    AUTH_TOKEN="Bearer xxxxxx"
    env="dev"
    ```

6. **Start the development server:**
    ```bash
    npm run dev
    ```

**When you run ```npm run dev``` two servers get spun up**

- DXP Preview: http://localhost:3000/
- Frontend Design Preview: http://localhost:4000/

View the index page for more information on how to use http://localhost:4000/


# Repository Folder Structure
The Kernel repository has the following key folders and files:

- /dxp - Houses DXP-related code, such as:
    - /component-service - Code for the Component Service.
    - ...and any other DXP services.
- /src - Contains all working files, including:
    - entry-server.js - Defines the viewable page templates, such as the index, homepage, and content pages.
    - /global-components - Contains global template elements like the header and footer that are not part of the component service.
    - /html - Contains JavaScript files representing HTML templates.
    - /image - Stores any required images.
    - /scripts - Contains the main JavaScript files for the application build.
        - main.js - The entry point for bundling into the final export, client.js. It imports the working files needed for production.
        - /components - Contains all JavaScript related to site components and templates, which are bundled and sent to the front end.
    - /styles - Contains all CSS, with main.scss as the entry point.

## Using it
Create a new component or copy an existing component to get started. Place it under /dxp/component-service/

**:warning: Warning:** When you create a new component, you may need to run: ```npm run dev``` again.

- Configure the manifest.json
- Add frontend CSS to /src/styles/
- Add frontend JS to /src/scripts/
- Set up the component main.js to export HTML

## How to preview the component
Open a template from /src/html/ (Example: /src/html/homepage.js)

- Add the component import reference. Example: ```<!--@@ cmp kernel/hello-world @@-->```
- Start up the local dev server: ```npm run dev```
- Preview the front end! Visit http://localhost:4000/

## Bundling for deployment
To package the project for production: 

```bash
npm run build
```

- Generates a /dist folder containing client.js and client.css
- Push changes to GIT
- Deploy components!

## DXP Command cheat sheet
 
```bash
# Login to the DXP
dxp-next auth login --tenant=ssqld-1854
```

Ensure the component's version is updated according to semantic versioning (SemVer). Then, deploy the component using:

```bash
npm run deploy --name=<component_name>
```

This command runs all the tests before deploying the specified component:

```bash
npm run deploy:all-tests --name=<component_name>
```


## Aliases

Within the `/src` folder and styles, you can use aliases defined in vite.config.js. Avoid deep relative paths by using aliases like `@images/logo.svg`.

## Utils

Utility functions for components are stored in `dxp/component-service/utils`:

`xss.js` - Prevents XSS attacks by sanitizing inputs.
`html.js` - Tags template literals for syntax highlighting, readability, and structured HTML generation.



## IDE Config Suggestions

### Format on save

It is recommended to use the Prettier's - `Format on save` settings that should be available for your IDE.

For VS code please follow these steps:

To change this setting, press `COMMAND + ,` on macOS, or `CTRL + ,` on Windows to open the Settings menu.
Once the menu is open, search for `Editor: Format On Save` and make sure that option is checked.

### Highlighting template literals

To ensure you have properly highlighted HTML template literals install `es6-string-html` or `lit-html` extension.

- `es6-string-html` - by adding `/* HTML */` before template literal you will have your template literal highlighted. If used with Prettier you will have formatted and highlighted text.
- `lit-html` - by exporting util variable and adding it as `html` before template literal you will have your template literal highlighted and it will auto-close your HTML elements. If used with Prettier you will have formatted and highlighted text.

## Linters & Formatters

The project uses Prettier, ESLint, and Stylelint. Review the `package.json` to find commands to run these before pushing changes.

## Unit Tests 

The project includes tests written in Vitest. They cover all main.js files and additional scripts related to the components.

To run the tests locally, use:

```bash
npm run test
```


## Useful References

### Component Service Documentation
- https://docs.squiz.net/component-service/latest/index.html
- https://docs.squiz.net/component-service/latest/tutorials/components-at-edge/index.html

### Example CSCs
- https://ssqld-web-uat.matrix.squiz.cloud/qgds-site/component-examples
- https://ssqld-web-uat.matrix.squiz.cloud/qgds-bs5/demo/mvaldman/accordion-example/
- https://ssqld-web-uat.matrix.squiz.cloud/qgds-bs5/demo/mvaldman/accordion-dynamic-example/
- https://ssqld-web-uat.matrix.squiz.cloud/qgds-bs5/demo/component-service-components/test-dynamic-card/

### Example APIs
- https://ssqld-web-uat.matrix.squiz.cloud/cmp-data-api/accordions-dynamic?root=11692
- https://ssqld-web-uat.matrix.squiz.cloud/cmp-data-api/card-dynamic?root=11653

### DXP Component Service 
- https://dxp.squiz.cloud/organization/ssqld-1854/component-service/component-sets/qol-component-set-dev