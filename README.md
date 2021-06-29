Experiments in data display.

An experimental playground for code that and examples that may find there way into Portal.js and DataHub.io.

## Motivating use case

> I want to turn a (data-oriented) markdown file into an elegant data-driven web page

Data-oriented markdown file is the kind of thing in https://github.com/datasets/awesome-data and its issue https://github.com/datasets/awesome-data/issues

I want things like:

* Auto-conversion of links to csv or excel files into nice tables or previews
* Create charts using react components (in markdown) a la MDX
* Have datasets as markdown files using the frontmatter for metadata
* Datasets within markdown files using backtick notation e.g. \`\`\`dataset
* Embedded csv or json data turned into nie tables

## Data Literate Documents

Our "data literate" document is a markdown (or MDX) file with the following additional features:

* :rocket: **Table of Contents**: quickly add a table of contents by adding a markdown heading 'Table of Contents', 'toc', or 'table-of-contents' (thanks to `remark-toc`)
* Table rendering: TODO
* :construction: Auto-render linked tables: auto-convert links to CSV or Excel into inline tables. [in progress]
