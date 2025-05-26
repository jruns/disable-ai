const searchContainer = document.querySelector("textarea[aria-label=Search]")?.parentElement.parentElement.parentElement;

if ( searchContainer ) {
    const autoCompleteContainer = searchContainer?.nextElementSibling;
    const parentContainer = autoCompleteContainer?.parentElement;

    if ( autoCompleteContainer && parentContainer ) {
        const autoCompleteContainerSelector = "." + autoCompleteContainer.classList.value.replace(" ", ".");
        const searchContainerSelector = "." + searchContainer.classList.value.replace(" ", ".");

        const style = document.createElement( 'style' );
        style.textContent = `
                ${autoCompleteContainerSelector} {
                    display: none !important;
                }
                ${searchContainerSelector} {
                    border-bottom-left-radius: 24px !important;
                    border-bottom-right-radius: 24px !important;
                }
            `;
        parentContainer.appendChild( style );
    }
}