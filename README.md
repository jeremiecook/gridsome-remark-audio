## @jeremiecook/gridsome-remark-audio

Ported from [gatsby-remark-video](https://github.com/rehat101/gatsby-remark-video)

This is a Gridsome remark plugin that creates HTML5 audio tags from local or remote audio sources.

## Installation

```
npm install https://github.com/jeremiecook/gridsome-remark-audio
yarn add https://github.com/jeremiecook/gridsome-remark-audio
```

## Usage

In your markdown:

```markdown
`audio: /static/test.mp3`

`audio: https://www.mytestaudiosource.com/test.mp3`
```

Add the following in your `gridsome-config.js` (must be included under the `plugins` key on gridsome-transformer-remark)
```javascript
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-audio',
        options: {
          preload: 'auto',
          loop: false,
          controls: true,
          muted: false,
          autoplay: false
        }
      },
    ...skipped lines
    ]
  }
}
```


## Resources
* https://github.com/rehat101/gatsby-remark-video
* https://github.com/mrinalini-m/gridsome-remark-embed-snippet/