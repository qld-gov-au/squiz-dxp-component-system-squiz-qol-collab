export const Header = `<!-- Main header container with banner role -->
<header class="qld__header" role="banner">

    <!-- Navigation bar for skip links -->
    <nav class="qld__skip-link" aria-label="skip links" tabindex="-1">
        <a class="qld__skip-link__link" href="#content">Skip to main content</a>
        <a class="qld__skip-link__link" href="#main-nav">Skip to main navigation</a>
    </nav>

    <!-- Pre-header section with logo and links -->
    <div class="qld__header__pre-header qld__header__pre-header--dark">
        <div class="container-fluid">

            <!-- Government link and logo used for mobile display -->
            <a href="https://www.qld.gov.au">
                <span class="qld__header__pre-header-url">qld.gov.au</span>
                <img class="qld__header__pre-header-brand-image" alt="Queensland Government" src="https://www.designsystem.qld.gov.au/__data/assets/file/0017/160271/Mobile-CoA-White.svg">
            </a>

            <!-- CTA wrapper for right aligned links in the preheader -->
            <div class="qld__header__cta-wrapper">
                <a class="qld__header__cta-link" href="javascript:void(0)">
                    <span class="qld__header__cta-link-icon">
                        <i class="fa-light fa-phone"></i>
                    </span>
                    <span class="qld__header__cta-link-text">Contact us</span>
                </a>
            </div>

            <!-- Main navigation controls (Search and Menu buttons on mobile and tablet screens) -->
            <div class="qld__header__main-nav-controls">
                <!-- Search button -->
                <button aria-controls="qld-header-search"
                    class="qld__header__toggle-main-nav qld__main-nav__toggle-search qld__main-nav__toggle-search--open"
                    aria-expanded="false">
                    <!-- Search and close icons -->
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                        class="qld__icon qld__icon--lg qld__main-nav__toggle-search-icon">
                        <use href="https://www.designsystem.qld.gov.au/__data/assets/file/0017/151118/QGDS-icons-v2.svg#icon-Search"></use>
                    </svg>
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                        class="qld__icon qld__icon--lg qld__main-nav__toggle-search-close-icon">
                        <use href="https://www.designsystem.qld.gov.au/__data/assets/file/0017/151118/QGDS-icons-v2.svg#icon-Close"></use>
                    </svg>
                    <!-- Search button label -->
                    <span class="qld__main-nav__toggle-text">Search</span>
                </button>

                <!-- Menu button -->
                <button aria-controls="main-nav" class="qld__header__toggle-main-nav qld__main-nav__toggle--open">
                    <!-- Menu icon -->
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                        class="qld__icon qld__icon--lg">
                        <use href="https://www.designsystem.qld.gov.au/__data/assets/file/0017/151118/QGDS-icons-v2.svg#icon-Menu"></use>
                    </svg>
                    <!-- Menu button label -->
                    <span class="qld__main-nav__toggle-text">Menu</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Main header section -->
    <div class="qld__header__main">
        <div class="container-fluid">

            <!-- Header brand section -->
            <div class="qld__header__brand">
              
                <a href="https://www.designsystem.qld.gov.au">
                    <!-- QLD Government logo -->
                    <div class="qld__header__brand-image">
                    <img src="https://www.designsystem.qld.gov.au/__data/assets/file/0018/160263/Coa-Landscape-2-Lines.svg" alt="A logo representing the Queensland Government">
                    </div>
                    <!-- Site name and description -->
                    <div class="qld__header__site-name">
                        <span class="qld__header__heading">Header</span>
                        <span class="qld__header__subline">Subheading</span>
                    </div>
                </a>
                
            </div>

            <!-- Search form section -->
            <div class="qld__header__search" id="qld-header-search">
                <div class="qld__main-nav__focus-trap-top"></div>
            
                <div class="qld__search-form--wrapper">
                    <form role="search" aria-label="sitewide" class="qld__search-form" id="search-input-global-header" action="#">
                        <label for="search-input-global-header-query"
                            class="qld__label qld__display-lg qld__search-form__label">Search this website</label>
                        <div class="qld__search-form__inner">
                            <input type="search" id="search-input-global-header-query" name="query"
                                class="qld__text-input data-hj-allow" autocomplete="off">
                            <input type="text" id="name" name="name" autocomplete="off" tabindex="-1"
                                class="qld__text-input--validation">
                            <div class="qld__search-form__btn">
                                <button class="qld__btn qld__btn--search" type="submit" aria-label="Search">
                                    <span class="qld__btn__icon"></span>
                                    <span class="qld__btn__text">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="qld__main-nav__focus-trap-bottom"></div>
            </div>
        </div>
    </div>

</header>


<!-- Main navigation bar -->
<nav class="qld__main-nav qld__main-nav--mega" id="mainmenu">
    <div class="container-fluid">
        <!-- Main navigation content wrapper -->
        <div class="qld__main-nav__content" id="main-nav">
            <!-- Navigation menu wrapper -->
            <div class="qld__main-nav__menu">
                <!-- Inner navigation menu wrapper -->
                <div class="qld__main-nav__menu-inner">
                    <!-- Focus trap for accessibility purposes (keyboard navigation) -->
                    <div class="qld__main-nav__focus-trap-top"></div>
                    <!-- Navigation header which contains menu title and close button -->
                    <div class="qld__main-nav__header">
                        <h6 class="qld__main-nav__menu-heading">Menu</h6>
                        <!-- Close button for the menu -->
                        <button aria-controls="main-nav" class="qld__main-nav__toggle qld__main-nav__toggle--close">
                            <!-- SVG icon for the close button -->
                            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                class="qld__icon qld__icon--md">
                                <use
                                    href="https://www.designsystem.qld.gov.au/__data/assets/file/0017/151118/QGDS-icons-v2.svg#icon-Close">
                                </use>
                            </svg>
                            <span class="qld__main-nav__toggle-text">Close</span>
                        </button>
                    </div>
                    <!-- Navigation link list -->
                    <ul class="qld__link-list qld__link-list--flex">
                        <!-- Here is a navigation item example -->
                        <li class="qld__main-nav__item ">
                            <div class="qld__main-nav__item-title">
                                <a class="qld__main-nav__item-home qld__main-nav__item-link" href="/">
                                    <!-- SVG icon for the link -->
                                    <span class="qld__main-nav__item-icon">
                                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                            class="qld__icon qld__icon--md">
                                            <use
                                                href="https://www.designsystem.qld.gov.au/__data/assets/file/0017/151118/QGDS-icons-v2.svg#icon-Home">
                                            </use>
                                        </svg>
                                    </span>
                                    <span class="qld__main-nav__item-text" data-name="">Home</span>
                                </a>
                            </div>
                        </li>
                        <li class="qld__main-nav__item">
                            <div class="qld__main-nav__item-title">
                                <a class="qld__main-nav__item-link" href="/homepage">Homepage</a>
                            </div>
                        </li>
                        <li class="qld__main-nav__item">
                            <div class="qld__main-nav__item-title">
                                <a class="qld__main-nav__item-link" href="/content">Content</a>
                            </div>
                        </li>
                    </ul>
                    <!-- ... More elements like call-to-action or additional navigations could go here ... -->
                    <!-- Focus trap for accessibility purposes (keyboard navigation) -->
                    <div class="qld__main-nav__focus-trap-bottom"></div>
                </div>
            </div>
            <!-- Overlay element, which usually displayed when menu is open -->
            <div class="qld__main-nav__overlay" aria-controls="main-nav"></div>
        </div>
    </div>
</nav>`;


