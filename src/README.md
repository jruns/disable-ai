# disable-ai
This is a browser extension to disable AI features on various sites and search engines. AI is a large consumer of water and energy, and this is an attempt to reduce resource consumption during Internet searches.

Our goal is not to just hide AI-powered results on websites and search engines like other extensions, but to actually stop the browser or server requests that run behind the scenes. Otherwise resources are still consumed by AI to generate results, even if they are hidden visually.

## Search Engine Support

### Brave Search
We disable Brave Search's `Answer with AI` by adding the `summary=0` url parameter to the main Brave Search URL. We also remove the Answer with AI button in the search bar next to the search icon, and the Answer with AI search suggestion.

### DuckDuckGo
We disable DuckDuckGo's `AI Assist` by adding the `assist=false` and `kbe=0` url parameter to all DuckDuckGo search URLs. This tells DuckDuckGo to disable the AI Assist feature. We also turn off Duck.ai Chat by adding the `kbg=-1` url parameter.

### Google
We disable Google's `AI Overview` by adding the `udm=14` parameter to the default Google search URLs. This tells Google to switch to their 'Web' view which is a stripped down results page without AI Overviews or instant answers.

## Troubleshooting
If you don't see AI features being disabled then you might be using another extension that sets browser blocking or redirect rules for the URL you are accessing. Only one rule can run on a page, so their rule might be running.