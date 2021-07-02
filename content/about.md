---
title: About
---

Data Literate is an experiment in [data+content](#datacontent) display.

## Motivation

> I want to turn a (data-oriented) markdown file into an elegant data-driven web page

Data-oriented markdown file is the kind of thing in https://github.com/datasets/awesome-data or one of the issues https://github.com/datasets/awesome-data/issues

I want things like:

* Auto-conversion of links to csv or excel files into nice tables or previews
* Create charts using react components (in markdown) a la MDX
* Have datasets as markdown files using the frontmatter for metadata
* Datasets within markdown files using backtick notation e.g. \`\`\`dataset
* Embedded csv or json data turned into nie tables

> I want to publish a dataset to the web quickly, elegantly (and potentially interactively)

## Data Literate Documents

We term these kind of markdown documents with additional data-oriented functionality "data literate".

Our "data literate" document is a markdown (or MDX) file with the following additional features:

* [x] **Table of Contents**: quickly add a table of contents by adding a markdown heading 'Table of Contents', 'toc', or 'table-of-contents' (thanks to `remark-toc`)
* [x] Table rendering
* [ ] Auto-render linked tables: auto-convert links to CSV or Excel into inline tables. [in progress]

## Use cases (in full)

### Researching or writing up a (data-heavy) topic and sharing it

I want to jot down, notes and links, preview data, display or graph data etc. I want to do this in markdown as that's what i work in. I want to be able to preview and then share this with others.

### Curating data

I want to quickly turn some data I've found into a properly curated dataset. I might want to do this iteratively: starting with the minimum e.g. just a link and a few notes, then moving to caching the data, then previewing the data etc. The kind of thing you find in the issues of github.com/datasets/awesome-data/issues. I want to view this dataset as i've developing it and publish this dataset when its down (or as i go along)

## Data+Content

In reality, data and content usually go together. For example, consider two main and common use cases:

* Data-driven content: this is the case of research, data journalism, high end visualization etc.
* Data with content: most datasets end up with some content in the form of documentation. In fact, many datasets start out as content e.g. a few notes and a link to a possible data source and then evolve into a fully polished dataset.

## Desired features of the tooling:

* Extensible
* Open source
* Simple

## How is this different from ...

So one big thing is I've no interest to tackle interactivity like Jupyter or ObservableHQ. The aim is for the documents and the data themselves to be static. Any processing you do of them is done elsewhere and any loading and procesing of data is purely declarative (ie. here's the url of the data).


## Inspiration

* Bl.ocks https://bl.ocks.org/
* ObservableHQ https://observablehq.com/
* Jupyter Notebooks
* [DataHub.io v2](https://datahub.io/)
* RMarkdown
