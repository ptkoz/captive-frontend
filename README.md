# Captive portal frontend for OpenWRT written in LUA

This is simple captive portal used by me in conjunction with my [Lua Captive Portal](https://github.com/pamelus/lua-captive-portal)
and [AVR token generator](https://github.com/pamelus/avr-token-generator) for [OpenWRT](http://openwrt.org/). It provides
nice client-side rendered frontend for my WiFi captive portal. See [Lua Captive Portal](https://github.com/pamelus/lua-captive-portal)
for more info.

## Building

In order to build the frontend, you need to have node.js and yarn. First, install NPM packages:

```bash
yarn install
```

Then you need to find out Captive Portal API URL. If you followed Lua Captive Portal guide it's `http://192.168.1.1:6820`,
assuming yours router IP is `192.168.1.1`. Build the frontend package like this:

```bash
TOKEN_API="http://192.168.1.1:6820/captive.lua/auth.token" yarn build 
```

Once build finished, you have the frontend ready in the `public_html` directory.

## Development

To start local development server, you need to have docker and docker-compose installed.

To start the web server run:

```bash
docker-compose up -d
```

Then, to start live builds run:

```bash
TOKEN_API="http://192.168.1.1:6820" yarn watch
```
