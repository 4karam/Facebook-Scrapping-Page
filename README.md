# 📥 Facebook Page Scraper – Chrome Extension

A lightweight Chrome extension that scrapes posts from **public Facebook pages** while you browse. A floating button appears at the bottom-right corner of the page, allowing users to extract posts and export them in JSON format.

---
![Facebook Page Scraper Icon](assets/icon.png)

## ✅ Features

* Automatically activates when you visit any **public Facebook page**.
* Displays a floating button at the **bottom-right corner** of the page.
* Scrapes key post information including:

    * Poster name (page or person)
    * Post content
    * Number of likes
    * Number of comments
* Clean and simple JSON output.
* Supports **fullscreen mode** when the browser is launched via CLI.

---

## 🧩 Installation

1. Open Google Chrome.
2. Go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode** (top-right corner).
4. Click **Load unpacked**.
5. Select the main project folder that contains:

    * `manifest.json`
    * `script/content.js`
    * `assets/icon.png`

---

## 🚀 Usage

1. Open any **public Facebook page**.
2. A floating button will appear at the bottom-right corner.
3. Click the button to start scraping posts.
4. Posts will be shown or exported in JSON format.

---

## 🗃️ Sample Output

```json
[
  {
    "name": "Default Page Label",
    "content": "No text available",
    "comment": "No comments",
    "like": "No likes"
  },
  {
    "name": "Tech World",
    "content": "Exciting news! We’ve launched a new product.",
    "comment": "12 comments",
    "like": "150 likes"
  }
]
```

---

## 🖥️ Fullscreen Mode (Optional)

To launch Chrome in fullscreen with the extension loaded, use the following command:

```bash
chrome --start-fullscreen --load-extension="path/to/extension"
```

---

## 🛠 Development

* `manifest.json`: Metadata and permissions for the extension.
* `script/content.js`: Core script .
* `assets/icon.png`: Icon used for the extension.

---

## 📚 Keywords (SEO Tags)

```
facebook page scraper  
facebook public page post extractor  
chrome extension facebook pages  
scrape facebook public pages  
facebook page content downloader  
facebook post extractor tool  
json exporter facebook page  
page post scraper extension  
facebook automation chrome extension  
facebook page parser tool  
```

---

## 🪪 License

4karam © 2025
