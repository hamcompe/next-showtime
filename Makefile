build:
	yarn build
export:
	yarn export -o docs
provide-deploy-stuff:
	git checkout docs/CNAME && git checkout docs/.nojekyll
commit:
	git add docs && git commit -m ':rocket: Launch site' && git push origin HEAD

deploy: build export provide-deploy-stuff commit
