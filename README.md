## My personal portfolio

This is my personal portfolio website. You can visit it [here](https://ivanaf03.github.io/my-portfolio).

### How to deploy a React app to GitHub Pages

1. Create a new repository on GitHub.
2. Clone the repository to your local machine.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm install gh-pages --save-dev` to install the `gh-pages` package.
5. Add to package.json the following script:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

6. Add, commit, and push the changes to the repository.
7. Run `npm run deploy` to deploy the app to GitHub Pages.
7. Go to the repository settings and enable GitHub Pages.
8. Go to the repository's GitHub Pages URL and you should see your portfolio.
