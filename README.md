# appkit_google

## Abstract

When I login in with Reown's Appkit using the Google option, and sign some text it works for me on 
a Mac using Chrome.

However it is not working on another Operating System using Chrome.

I have removed everything in the application apart from the bare essentials to reproduce the problem
for those not on a mac.

## What is Reown and AppKit?

Wallet Connect was rebranded as Reown.  They have reworked their architecture so they can support 
Non EVM chains like Solana.

AppKit is a library that provides a way to connect to your wallets and perform social logins into 
platforms like Google.

## Resources

- [Reown — Docs](https://docs.reown.com)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)

## Use pnpm

This project uses pnpm instead of npm. Install it:

```
npm install -g pnpm
```

## Use node v18.16.0

If are you using nvm to choose the version, you can check your version:

```
nvm list
```

If you have it in the list but it is not chosesn, type:

```
nvm use 18.16.0
```

If it is not in the list type this to install it and choose it:

```
nvm install v18.16.0
```

## Instructions for setting up your .env file

1. Go to [Reown Cloud](https://cloud.reown.com) and create a new project.
2. Copy your `Project ID`
3. Copy `.env.staging` to `.env` and paste your `Project ID` as the value for `VITE_PROJECT_ID`
4. Run `pnpm install` to install dependencies
5. Run `pnpm run dev` to start the development server

## Dev Instructions for running appkit_google

Run this:

```
pnpm install
pnpm run dev
```

When you run the above command it will tell you the url you can open the web page with.

In chrome, inspect so you can see the console.

Then Click on the "Connect / Login" button.

**Choose the Google Login option.**

If you see no errors in the console it works for you.

The console looks like this without errors:

```
addressCalledDirect: 0x1dC917DC5826C6dfdbb1cf7De8F60DF03ceD6a83

signer: JsonRpcSigner {provider: BrowserProvider, address: ‘0x1dC917DC5826C6dfdbb1cf7De8F60DF03ceD6a83’}

Page.tsx:21 provider: BrowserProvider {}

addresss 0x1dC917DC5826C6dfdbb1cf7De8F60DF03ceD6a83

signature 0x5618047faa602e8d80346a4b9f24b2e313790b04347cd2fc8c0dd0b03f4ef00746f13126a78653591c4b94862e4852804b02ba92405e547bc5f6bf6aa40fc5b31b
```

## How was this project created:

See https://docs.reown.com/appkit/react/core/installation

```
npx @reown/appkit-cli
```

The above command will prompt you for project details and print the following to the console.

```
✔ Enter your project name:  appkit_google
✔ Which framework will be used ? React
✔ wagmi, ethers, solana or EVM+Solana ? wagmi

Downloading the repository ...

cd appkit_google
npm install
npm run dev
        

Go to: https://cloud.reown.com
To create a personal ProjectId
```

I created appkit_google on Github web interface:

https://github.com/spotadev/appkit_google

Then to initialize git:

```
git init --initial-branch=main
git remote add origin https://github.com/spotadev/appkit_google.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin main
```

To change the remote:

```
git remote set-url origin https://github.com/spotadev/appkit_google.git
```