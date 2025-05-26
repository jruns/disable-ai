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
3. Disable AI results in more search engines.
4. Ability to run the extension in mobile browsers.
5. Allow optionally disabling auto-suggest dropdowns to reduce resource utilization.
6. Make disabling non-AI instant answers optional where possible.