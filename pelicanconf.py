AUTHOR = "esonusharma.github.io"
SITENAME = "esonusharma.github.io"
SITEURL = "https://esonusharma.github.io"

PATH = "content"
THEME = "es-theme"
TIMEZONE = "Asia/Kolkata"
DEFAULT_LANG = "en"

SLUGIFY_SOURCE = "title"
SLUGIFY_USE_UNICODE = False
SLUGIFY_PRESERVE_CASE = False

ARTICLE_URL = "posts/{slug}/"
ARTICLE_SAVE_AS = "posts/{slug}/index.html"

PAGE_URL = "pages/{slug}/"
PAGE_SAVE_AS = "pages/{slug}/index.html"

USE_FOLDER_AS_CATEGORY = True
DEFAULT_CATEGORY = "misc"
CATEGORY_URL = "category/{slug}/"
CATEGORY_SAVE_AS = "category/{slug}/index.html"

TAG_URL = "tag/{slug}/"
TAG_SAVE_AS = "tag/{slug}/index.html"

DRAFT_URL = "drafts/{slug}/"
DRAFT_SAVE_AS = "drafts/{slug}/index.html"

DRAFT_PAGE_URL = "drafts/pages/{slug}/"
DRAFT_PAGE_SAVE_AS = "drafts/pages/{slug}/index.html"

FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

FEED_MAX_ITEMS = 30

DEFAULT_PAGINATION = 4

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = False

DEFAULT_METADATA = {
  "description": "Dr. Sonu Sharma is a coder and researcher.",
  "status": "draft"
}

SITEMAP = {
    "format": "xml",
    "priorities": {
        "articles": 0.5,
        "indexes": 0.5,
        "pages": 0.5
    },
    "changefreqs": {
        "articles": "monthly",
        "indexes": "daily",
        "pages": "monthly"
    }
}