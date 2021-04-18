# wf

Previous version [here](https://github.com/ayakovlenko/wf-go).

---

```sh
# install wf
deno install -f --allow-run main.ts
```

`wf` needs the run permission only to execute a template.
By default, template execution is fully sandboxed.
Users need to specify template permissions in the template files:

```typescript
// --allow-net=api.openweathermap.org

Template([]);
```

```sh
# run example
$ wf ./examples/templates/daily.ts

<?xml version="1.0"?>
<opml version="2.0">
  <body>
    <outline text="2021-04-18" _note="Sunday">
      <outline text="Weather: 11.17°C"></outline>
      <outline text="TO DO"></outline>
      <outline text="DONE"></outline>
    </outline>
  </body>
</opml>
```
