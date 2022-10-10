const React = require('react')

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */


exports.onRenderBody = ({ setHtmlAttributes ,setHeadComponents, setPostBodyComponents}) => {
  setHtmlAttributes({ lang: `en` })


  const freshchatHost =  `https://wchat.freshchat.com`

  const renderHTML = () => `
    window.fcWidget.init({
      token: "eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiJlNDJkNThkNi00ODhjLTQ2Y2UtYTAwNy0zOTg2NWYxZTdlNzQiLCJjbGllbnRJZCI6ImZjLWRkNjAzNjBhLTA4ZTgtNDE4MS04NTQ2LTM0MDRkNWEyN2Q2YSIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGFjY291bnQ6cmVhZCBkYXNoYm9hcmQ6cmVhZCB1c2VyOnJlYWQgdXNlcjpjcmVhdGUgdXNlcjp1cGRhdGUgdXNlcjpkZWxldGUgb3V0Ym91bmRtZXNzYWdlOnNlbmQgb3V0Ym91bmRtZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6bWVzc2FnZTpzZW5kIG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOmdldCBtZXNzYWdpbmctY2hhbm5lbHM6dGVtcGxhdGU6Y3JlYXRlIG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpnZXQgZmlsdGVyaW5ib3g6cmVhZCBmaWx0ZXJpbmJveDpjb3VudDpyZWFkIHJvbGU6cmVhZCBpbWFnZTp1cGxvYWQiLCJpc3MiOiJmcmVzaGNoYXQiLCJ0eXAiOiJCZWFyZXIiLCJleHAiOjE5ODEwNDQ5ODYsImlhdCI6MTY2NTQyNTc4NiwianRpIjoiMTI4NDI4MTUtY2RlOC00ZDMwLWFmMWQtZTllY2E3OTc5MjY1In0.hfTzF-NkX7dodRbz-WS2eU6ftW5FAa1QRzg17eD2U64",
          host: "https://wchat.freshchat.com",
    })
  `

  setHeadComponents([
    <script
      key={`gatsby-plugin-freshchat`}
      src={`https://wchat.freshchat.com/js/widget.js`}
      defer
    />
  ])
  setPostBodyComponents([
    <script
      key={`gatsby-plugin-freshchat-init`}
      dangerouslySetInnerHTML={{ __html: renderHTML() }}
      defer
    />
  ])
}
