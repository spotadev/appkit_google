# UTU APP

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

## Instructions for setting up your .env file

1. Go to [Reown Cloud](https://cloud.reown.com) and create a new project.
2. Copy your `Project ID`
3. Copy `.env.staging` to `.env` and paste your `Project ID` as the value for `VITE_PROJECT_ID`
4. Run `pnpm install` to install dependencies
5. Run `pnpm run dev` to start the development server

Note that you can leave the VITE_PROJECT_ID blank if you are only in dev mode.

## Dev Instructions for running utu-app

Run pnpm instead of npm for better performance.  However you can still use the equivalent npm command:

```
pnpm install
pnpm run dev
```

When you run the above command it will tell you the url you can open the web page with.

In chrome, inspect so you can see the console.

Then Click on the "Connect / Login" button.

If you see no errors in the console it works for you.


## How was this project created:

See https://docs.reown.com/appkit/react/core/installation

```
npx @reown/appkit-cli
```

The above command will prompt you for project details and print the following to the console.

```
✔ Enter your project name:  utu-app
✔ Which framework will be used ? React
✔ wagmi, ethers, solana or EVM+Solana ? wagmi

Downloading the repository ...

cd utu-app
npm install
npm run dev
        
Your Project Id can be blank when working in dev.  However to deploy elsewhere you need a Project Id.

Go to: https://cloud.reown.com
To create a personal ProjectId
```

I created utu-app on Gitlab web interface:

https://gitlab.com/ututrust/utu-app#

Then to initialize git:

```
git init --initial-branch=main
git remote add origin https://gitlab.com/ututrust/utu-app.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin main
```

To change the remote:

```
git remote set-url origin https://gitlab.com/ututrust/utu-app-upgrade.git
```