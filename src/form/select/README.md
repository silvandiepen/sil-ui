---
icon: ↓
---

# Select

A styled select which accepts an array of objects

## Example

<sil-select id="my-select" label="My Select"></sil-select>

<script>
const select = document.querySelector('#my-select');

select.items = [{
    name: 'Amsterdam',
    value: 'AMS'
},{
    name: 'Paris',
    value: 'PRS'
},{
    name: 'Berlin',
    value: 'BRL'
},{
    name: 'London',
    value: 'LDN'
}];
</script>


```html
<sil-select id="my-select" .items="items" label="My Input"></sil-select>
```

```js
const select = document.querySelector("#my-select");

select.items = [
  {
    name: "Amsterdam",
    value: "AMS",
  },
  {
    name: "Paris",
    value: "PRS",
  },
  {
    name: "Berlin",
    value: "BRL",
  },
  {
    name: "London",
    value: "LDN",
  },
];
```


## Usage

Install

```html
<script type="module" src="https://unpkg.com/@sil/ui/dist/select.js"></script>
```

Use

```html
<sil-select></sil-select>
```

## Props

| prop          | default                  | description                                        |
| ------------- | ------------------------ | -------------------------------------------------- |
| label         | `""`                     | Label shown                                        |
| value         | `false`                  | Default value                                      |
| placeholder   | `""`                     | Placeholder shown value                            |
| required      | `false`                  | Is the field required?                             |
| requiredError | `This field is required` | Error shown when the field is required and not set |
| name          | `""`                     | Name of element                                    |
| id            | `""`                     | Id of element                                      |
| items         | `{}`                     | List of options                                    |
