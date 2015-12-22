### Version 2.1.7 - Dec 19, 2015

- **Menu** - Fixed `1px` offset when `attached segment` follows `tabular menu` (max of 2 consecutive segments) [#3479](https://github.com/Semantic-Org/Semantic-UI/issues/3479)

### Version 2.1.5 - Nov 1, 2015

- **Grid** - Fixes attached segment 1px offset inside grid column [#3226](https://github.com/Semantic-Org/Semantic-UI/issues/3226)
- **Segment** - Fixes border on `horizontal segment` when they are `:first-child` inside `segments` group

### Version 2.1.4 - Sep 13, 2015

- **Table** - Fixed issue where `(x) column segment table` was inheriting accidentally inheriting some grid styles

### Version 2.0.4 - July 17, 2015

- **Segment** - Added additional variables for `inverted` segment.
- **Segment* - `horizontal segments` in IE will no longer stretch to the natural width of child imgs [#2550](https://github.com/Semantic-Org/Semantic-UI/issues/2550) [flexbug [#1](h](https://github.com/Semantic-Org/Semantic-UI/issues/1](h)ttps://github.com/philipwalton/flexbugs[#1-mi](https://github.com/Semantic-Org/Semantic-UI/issues/1-mi)nimum-content-sizing-of-flex-items-not-honored)
- **Menu/Segment/Table** - Consolidated `attached` logic for all components using attached. [#2599](https://github.com/Semantic-Org/Semantic-UI/issues/2599)

### Version 2.0.1 - July 6, 2015

- **Segment** - Fixed incorrect margin set on `attached segment` [#2503](https://github.com/Semantic-Org/Semantic-UI/issues/2503)

### Version 2.0.0 - June 30, 2015

- **Segment** - Segment no longer includes a [clearfix](http://learnlayout.com/clearfix.html) by default. You will need to specify a `clearing segment` to clear floated content.
- **Segment** - Segments now support complex nesting, many new rules for how segment groups should appear inside groups
- **Segment** - New `horizontal segment` groups make laying out auto resizing text columns much easier.
- **Segment** - Added `padded` and `very padded` segment variations
- **Segment** - Added `clearing` segment for cases that need a [clearfix](http://learnlayout.com/clearfix.html).
- **Steps** - Added `attached` steps, which can now be attached to other UI like `segment`
- **Button** - Fixed `attached buttons` 1px offset when attached to segment and menu (border vs box shadow border)
- **Segment** - Segment groups can now be `raised` or `piled` or `stacked`
- **Segment** - **Clearfix** has been removed from `ui segment`
- **Segment** - Segment now uses `border` for border instead of a second `box-shadow`, this may adjust position by 1pixel

### Version 1.11.0 - March 3, 2015

- **Segment** - Fix first/last margins on `ui segments`

### Version 1.10.0 - February 23, 2015

- **Grid** - Stackable grid now has horizontal padding by default on mobile unless nested inside a `ui grid` or `ui segment` (not vertical)

### UI Changes

- **Segment** - Added plural variation `ui segments` that stack together in groups without using additional class names

### Version 1.7.0 - January 14, 2015

- **Segment** - ``ui tabular menu`` now correctly aligns with attached segment when using fluid variation *Thanks @MohammadYounes*
- **Segment** - `basic segment` no longer removes padding on first and last elements

### Version 1.6.3 - January 12, 2015

- **Label** - Fix attached labels to have correct border radius inside of attached segments of all kinds

### Version 1.6.0 - January 05, 2015

- **Tab/Segment** - Fixes first tab being 1pixel taller than all other tabs

### Version 1.3.0 - December 17, 2014

- **Label** - Corner attached labels now display correctly inside of attached segments
- **Segment** - Vertical segments now have padding on first/last element, fixing issues when using with grids

### Version 1.1.0 - December 02, 2014

- **Menu/Segment** Fixes double border on pointing menu with attached segment **Thanks davialexandre**

### Version 0.15.2 - Mar 28, 2014

- **Menu** - Fixes formatting of attached segments with menus

### Version 0.9.6 - Dec 04, 2013

- **Header, Grid, Segment** - Adds justified alignment

### Version 0.9.5 - Nov 25, 2013

- **Segment** - Segments now have a circular variation

### Version 0.9.3 - Nov 17, 2013

- **Segment** - Fixes segment text color when nested inside inverted segment

### Version 0.9.0 - Nov 5, 2013

- **Segment** - Segments can now be used with ``ui grid`` and ``ui grid column/row``

### Version 0.6.1 - Oct 15, 2013

- Adds orange label/segment

### Version 0.1.0 - Sep 25, 2013