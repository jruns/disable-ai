# disable-ai
This is a browser extension to disable AI features on various sites and search engines. AI is a large consumer of water and energy, and this is an attempt to reduce resource consumption during Internet searches.

Our goal is not to just hide AI-powered results on websites and search engines like other extensions, but to actually stop the browser or server requests that run behind the scenes. Otherwise resources are still consumed by AI to generate results, even if they are hidden visually.

**Search Engines Supported:**  
Brave Search, DuckDuckGo, Ecosia, Google, Qwant

## How to Install
- Firefox and Firefox for Android: [Official Firefox Add-ons link](https://addons.mozilla.org/en-US/firefox/addon/disable-ai/)
- Chrome: [Official Chrome Web Store link](https://chromewebstore.google.com/detail/disable-ai/blhpdcldeaiejfmdfbjonoafgkndhfcg)

## How it Works

### Brave Search
We disable Brave Search's `Answer with AI` by adding the `summary=0` url parameter to the main Brave Search URL. We also hide the `Answer with AI` button in the search bar next to the search icon, and the Answer with AI search suggestion.

### DuckDuckGo
We disable DuckDuckGo's `AI Assist` by adding the `assist=false` and `kbe=0` url parameter to all DuckDuckGo search URLs. This tells DuckDuckGo to disable the AI Assist feature. We also turn off Duck.ai Chat by adding the `kbg=-1` url parameter. And we hide AI images from the Images search by adding the `kbj=1` url parameter

### Ecosia
We disable Ecosia's `AI Overview` by blocking the AI Overview data request to their API. We also hide the `AI Chat` tab under the search bar.

### Google
We disable Google's `AI Overview` by adding the `udm=14` parameter to the default Google search URLs. This tells Google to switch to their 'Web' view which is a stripped down results page without AI Overviews or instant answers. We also hide the `AI Mode` button on the homepage and the `AI Mode` tab in the search bar on results pages.

### Qwant
We disable Qwant's `Flash Answer` by adding the `llm=0` parameter to the default Qwant All/Web search URLs. This disables the AI overview in regions where it is active and removes the AI summarize buttons next to search results.

## Troubleshooting
If you don't see AI features being disabled then you might be using another extension that sets browser blocking or redirect rules for the URL you are accessing. Only one rule can run on a page, so their rule might be running.

## Future Updates
Disable AI results in Bing (if possible).
