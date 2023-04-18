With the ever-evolving world of web development, it can be difficult to keep up with the latest trends and technologies. F.R.A.M.E is a basic low-code web framework that can help you cut through the noise and focus on what matters to your users and business.

## System Requirements
### Deno
[Deno](https://deno.land/manual@v1.29.1/getting_started/installation)
## Getting Started

clone std libraries from https://github.com/codebenderhq/std to folder just outside project

initialize enviroment
```
deno task init
```

create .env file 
```
env=dev
```
start the development server
```
deno task  start
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



