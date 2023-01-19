

## System Requirements
### Deno
[Deno](https://deno.land/manual@v1.29.1/getting_started/installation)

### Grape
```
deno install -n grape https://github.com/codebenderhq/backpack/releases/latest/download/grape.js
```

## Getting Started

create a new project 
```
grape new 'project_name'
```

or create template from this repository

initialize enviroment
```
grape init
```

install libraries
```
grape std
```
create .env file 
```
env=dev
```
start the development server
```
grape dev
```

### Release

Nice to have, enable push to allwaus follow
```
git config --global push.followTags true
```

create a release
```
deno task release  0.0.1-pre -m"hello world"
```

deploy release
```
git push --follow-tags
```



