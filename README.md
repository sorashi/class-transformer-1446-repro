This repo replicated the following bug https://github.com/typestack/class-transformer/issues/1446

# Steps
1. `pnpm dev`
2. Open devtools console in the browser
3. Observe
```
Person { numbers: Set { 1, 2, 3, 4, 5 } }
{ numbers: [ 1, 2, 3, 4, 5 ] }
Person { numbers: [ 1, 2, 3, 4, 5 ] }
```

when we expected
```
Person { numbers: Set { 1, 2, 3, 4, 5 } }
{ numbers: [ 1, 2, 3, 4, 5 ] }
Person { numbers: Set { 1, 2, 3, 4, 5 } }
```

**Place of interest: ./src/App.tsx**