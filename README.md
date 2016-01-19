# reveal.js template

> To do: Add instructions here.

## How to deploy to Github pages

In case you want to deploy this presentation into Github pages, you should ensure that the `gh-page` exists in your repository.

```text
git checkout --orphan gh-pages
git rm -rf .
touch .gitkeep
git add .gitkeep
git commit -m "Initial commit for Github pages"
git push origin gh-pages --set-upstream
git checkout master
```

Then you'll be able to run:

```text
gulp clean
gulp build
gulp gh-deploy
```
