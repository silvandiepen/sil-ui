# Vue

### Vue with Vite

vite.config.ts

```js
 plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('sil-')
        }
      }
    })
  ],
```

index.html

```html
<script type="module" src="https://load.ui.sil.mt/select.js"></script>
```

In your component:

```vue
<template>
  <sil-select .options="options"> </sil-select>
</template>

<script setup>
const options = [
  { name: "Something", value: "0" },
  { name: "Else", value: "2" },
  { name: "As", value: "4" },
  { name: "A", value: "6" },
  { name: "Value", value: "8" },
];
</script>
```
