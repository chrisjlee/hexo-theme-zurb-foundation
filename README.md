# Zurb Foundation

A brand new default theme for [Hexo]. This theme is <b>Work in progress</b>. It utilizes Zurb Foundation 5+.

- [Preview](http://hexo.io/hexo-theme-zurb-foundation/)
- [Demo](http://chrisjlee.github.io/hexo-theme-zurb-foundation/)

## Installation

### Install

``` bash
$ git clone https://github.com/chrisjlee/hexo-theme-zurb-foundation.git
```

**Landscape requires Hexo 3.0 and above.**

### Enable

Modify `theme` setting in `_config.yml` to `zurb-foundation`.

### Update

``` bash
cd themes/zurb-foundation
git pull
```

## Configuration

``` yml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archives
- recent_posts

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

### Layouts

Foundation provides 5 built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

## Development

Go ahead and use browser sync:

```
browser-sync start --server='../../public' --files="public/*.html,public/*.css"
```

In order to get started with hexo use gulp.

```
hexo generate --watch
```

### Requirements

- [Grunt] 0.4+
- Hexo 3.0+
