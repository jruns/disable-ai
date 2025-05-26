# disable-ai
This is a browser extension to disable AI features on various sites and search engines. AI is a large consumer of water and energy, and this is an attempt to reduce resource consumption during Internet searches.

Our goal is not to just hide AI-powered results on websites and search engines, but to actually disable the browser requests that run behind the scenes. Otherwise resources are still consumed by AI to generate results, even if they are hidden visually. And we will also remove links and buttons that if clicked would activate an AI-powered feature on a website.

## Search Engine Support

### DuckDuckGo
We disable DuckDuckGo's AI Assist by adding the `assist=false` and `kbe=0` url parameter to all DuckDuckGo search URLs. This tells DuckDuckGo to disable the AI Assist feature. We also turn off Duck.ai Chat by adding the `kbg=-1` url parameter. And we disable instant answers by adding the `kz=1` url parameter. We add these parameters to the DuckDuckGo homepage and all search pages.

We also disable DuckDuckGo's autocomplete/autosuggest feature.

### Google
We disable Google's AI Overview by adding the `udm=14` parameter to all Google search URLs. This tells Google to switch to their 'Web' view which is a stripped down results page without AI Overviews or instant answers.

We also disable Google's autocomplete/autosuggest feature.

### Bing
We disable Bing's Copilot AI assistant by adding the `copilot=0` and `showconv=0` parameters to all Bing search URLs. This prevents Copilot from appearing in search results and disables conversational search features.

We also block Bing's autocomplete/autosuggest API endpoints and use content scripts to hide any remaining Copilot UI elements, chat buttons, and AI-generated summaries.

### Yahoo
Since Yahoo Search is powered by Bing's technology, we apply the same Copilot-disabling parameters (`copilot=0` and `showconv=0`) to Yahoo search URLs. This effectively disables AI features on Yahoo Search.

We also block Yahoo's autocomplete/autosuggest endpoints.

### Yandex
We disable Yandex's search suggestions and AI-powered features by adding the `suggest=0` and `lr=0` parameters to Yandex search URLs. This reduces AI-powered autocomplete and suggestion features.

We also block Yandex's suggestion API endpoints for both yandex.com and yandex.ru domains.

### Baidu
We disable Baidu's AI-powered search suggestions by adding multiple parameters: `rsp=0`, `rsv_sug1=0`, `rsv_sug3=0`, `rsv_sug4=0`, and `rsv_sug7=0` to Baidu search URLs. These parameters disable various suggestion and AI-powered features.

We also block Baidu's autocomplete API endpoints.

### Brave Search
We disable Brave Search's AI features by adding the `ai=0` and `summary=0` parameters to search URLs. This disables Leo AI assistant and AI-generated summaries.

We also use content scripts to hide Leo AI interface elements and block suggestion API endpoints.

### Startpage
Since Startpage uses Google's search results, we apply the same `udm=14` parameter to disable AI Overviews. This ensures users get clean, non-AI search results even when using Startpage.

We also block Startpage's suggestion endpoints.

### Ecosia
Since Ecosia Search is powered by Bing's technology, we apply the same Copilot-disabling parameters (`copilot=0` and `showconv=0`) to Ecosia search URLs. This effectively disables AI features on Ecosia Search while maintaining their tree-planting mission.

We also block Ecosia's autocomplete/suggestion endpoints.

## Firefox Installation instructions
1. Download a release xpi file from this github repo
2. Go to `about:addons`
3. Click the gear icon next to the "Manage Your Extensions" heading
4. Select "Install Add-on From File..." and select the release file you downloaded
5. Pin the extension to the Toolbar

## Chrome Installation instructions
1. Download the `src` folder from this github repo
2. Go to `chrome://extensions/`
3. Activate "Developer mode"
4. Click the "Load unpacked" button
5. Select the `src` folder you saved locally
6. Pin the extension to the Toolbar

## Coming Soon
1. Support for the Chrome browser.
2. Add International support
3. Ability to run the extension in mobile browsers.
4. Allow optionally disabling auto-suggest dropdowns to reduce resource utilization.
5. Make disabling non-AI instant answers optional where possible.
6. Support for additional search engines (Searx, Kagi, etc.)