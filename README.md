# disable-ai
This is a browser extension to disable AI features on various sites and search engines. AI is a large consumer of water and energy. Our goal is not to just hide AI-powered results on websites and search engines, but to actually disable the browser requests that run behind the scenes. And we will also remove links and buttons that if clicked would activate an AI-powered feature on a website.

## Search Engine Support

### Google
We disable Google's AI Overview by adding the `udm=14` parameter to all Google Search URLs. This tells Google to switch to their 'Web' view which is a stripped down results page without AI Overviews or interactive cards.
