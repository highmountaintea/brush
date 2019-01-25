# brushi

CSS library back to basics

## Features
* No compilation needed
* Localized styling, no name collision
* Intuitive styling of nested structures
* framework agnostic

## Rationale

A well designed web application requires well thought out styling. We organize JS code in components, and we would like to do the same with CSS code. There are various CSS libraries on the landscape, but there are some shortcomings:
* requires pre-processors
* not as intuitive as normal CSS
* cascading CSS not working as well
* decorates DOM with verbose styles everywhere
* not handling dynamic user interactions well
* UI libraries end up with hard coded CSS, or complicated to style

Most CSS libraries do have the following benefits:
* ability to separate CSS into modules
* localized CSS development to avoid name collision
* some ability to handle calculated attributes

`brushi` is designed to be a CSS library that is dead simple to use and understand, but allows all the benefits of CSS componentization.

## Status

`brushi` is being actively worked on. I am personally using it with much success, but would like to firm up the API and usage pattern before releasing it to the public.
