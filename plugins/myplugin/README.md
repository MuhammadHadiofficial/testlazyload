# gatsby-plugin-freshchat

Add Freshchat widget to your Gatsby site.

## Install

`npm install --save gatsby-plugin-freshchat`

## How to use

```js
// in your gatsby-config.js
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-freshchat`,
            options: {
                token: "FRESHCHAT_TOKEN",
                host: "FRESHCHAT_HOST",
            },
        },
    ]
}