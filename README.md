# wf

Previous version [here](https://github.com/ayakovlenko/wf-go).

---

```sh
# install wf
deno install -f --allow-run main.ts
```

`wf` needs the run permission only to execute a template.
Template execution is fully sandboxed.

```sh
# run example
$ wf ./examples/templates/daily.ts

<?xml version="1.0"?>
<opml version="2.0">
  <body>
    <outline text="2021-04-18" _note="Sunday">
      <outline text="TO DO"></outline>
      <outline text="DONE"></outline>
    </outline>
  </body>
</opml>
```
