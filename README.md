# Webshot
Screenshot websites as a service.

The images are getting cached for 1 minute and only the first load takes some time to process.

## How to Use
Simply add the link of the website you want to screenshot to the end of https://webshot.deam.io/.

Example, to grab a screenshot of https://www.google.com/ use: https://webshot.deam.io/https://www.google.com/

### Other examples
```
https://webshot.deam.io/ + https://www.google.com/
https://webshot.deam.io/ + zeit.co/blog/ + ?type=png
https://webshot.deam.io/ + zeit.co/about/ + ?fullPage=true
https://webshot.deam.io/ + stripe.com/ + ?fullPage=true
https://webshot.deam.io/ + ceriously.com/ + ?type=jpeg&quality=75&fullPage=true
https://webshot.deam.io/ + https://hacktoberfest.digitalocean.com/ + ?height=1000&width=1000
```

## Use cases
- You could use this as a preview image for your website in `og:image` or `twitter:image` (tutorial [here](https://dev.to/deam/easy-social-media-preview-card-generation-1ln7))
- Grab a screenshot of a bug in production, send the link instead of an image
- Constantly updated site showcasing for your portfolio
- Hotlink images directly to blog posts

## Workflow

### Development
- First install all dependencies. `npm install`
- You can then run `npm run api` to play around with the API itself.
- If you want to preview the landing page, you can run `npm run start`.

### Production
- Install `now` globally. `npm install now -g`
- Create an account at https://zeit.co/signup and then run `now login`.
- Finally you can run the `now` command in terminal and it will begin to deploy.

## Used in
- https://github.com/deamme/usecrypto

## Credits
- https://github.com/styfle/screenshot-v2
