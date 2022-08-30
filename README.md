# riot-games
I will try to clone "Riot Games" website from scratch. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- [Live Site URL](https://mouad-p7.github.io/riot-games/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- jQuery
- Desktop-first workflow

### What I learned

I learned how to set favicon image:

```html
<link rel="icon" type="image/x-icon" href="images/favicon.ico">
```

I learned how to zoom in image:

```css
#star-guardian-section{
    transform: scale(1.05);
}
```

I learned how to controle header element with jQuery:

```javascript
$(document).ready(function(){
    $(window).bind('scroll', function(){
        let gap = 100;
        if($(window).scrollTop() > gap){
            $('.home-header').addClass('scroll-down');
        } else{
            $('.home-header').removeClass('scroll-down');
        }
    });
});
```

### Continued development

I'm now understanding the basic concepts of HTML5 and CSS3, but I still need practice. 
*Good practice makes you perfect*.

### Useful resources

- [W3 schools](https://www.w3schools.com/) - This helped to find and understand every property in css and every tag in html5.
- [Font Awesome](https://fontawesome.com/) - This helped me to use icons.

## Author

- Twitter - [mouad_p7](https://www.twitter.com/mouad_p7)
- LinkedIn - [mouad-p7](https://www.linkedin.com/in/mouad-p7-51b088229/)
