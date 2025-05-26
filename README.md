# disable-ai
This is a browser extension to disable AI features on various sites and search engines. AI is a large consumer of water and energy.

Our goal is not to just hide AI-powered results on websites and search engines, but to actually disable the browser requests that run behind the scenes. Otherwise resources are still consumed by AI to generate results, even if they are hidden visually. And we will also remove links and buttons that if clicked would activate an AI-powered feature on a website.

## Search Engine Support

### DuckDuckGo
We disable DuckDuckGo's AI Assist by adding the `assist=false` parameter to all DuckDuckGo search URLs. This tells DuckDuckGo to disable the AI Assist feature.

### Google
We disable Google's AI Overview by adding the `udm=14` parameter to all Google search URLs. This tells Google to switch to their 'Web' view which is a stripped down results page without AI Overviews or interactive cards.

## Coming Soon
1. Support for the Chrome browser.
2. Disable AI results in more search engines.
3. Ability to run the extension in mobile browsers.
4. Allow optionally disabling auto-suggest dropdowns to reduce resource utilization.
