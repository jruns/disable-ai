# disable-ai
This is a browser extension to disable AI features on various sites and search engines. AI is a large consumer of water and energy, and this is an attempt to reduce resource consumption during Internet searches.

Our goal is not to just hide AI-powered results on websites and search engines like other extensions, but to actually stop the browser or server requests that run behind the scenes. Otherwise resources are still consumed by AI to generate results, even if they are hidden visually.

## Search Engine Support

### DuckDuckGo
We disable DuckDuckGo's AI Assist by adding the `assist=false` and `kbe=0` url parameter to all DuckDuckGo search URLs. This tells DuckDuckGo to disable the AI Assist feature. We also turn off Duck.ai Chat by adding the `kbg=-1` url parameter.

### Google
We disable Google's AI Overview by adding the `udm=14` parameter to all Google search URLs. This tells Google to switch to their 'Web' view which is a stripped down results page without AI Overviews or instant answers.

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

## Troubleshooting
If you don't see AI features being disabled then you might be using another extension that sets browser blocking or redirect rules for Google or DuckDuckGo. Only one rule can run on a page, so their rule might be running.

## Future Updates
1. Disable AI results in Bing (if possible).
2. Ability to run the extension in mobile browsers.
3. Allow optionally disabling auto-suggest dropdowns to reduce resource utilization.
4. Allow optionally disabling instant answers to reduce search result clutter.