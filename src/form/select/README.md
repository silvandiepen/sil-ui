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
<script type="module" src="https://load.ui.sil.mt/select.js"></script>
```

Use

```html
<sil-select></sil-select>
```

### Data examples

__Single level list:__

format: 
```
[{
  name: string,
  value: string
}]
```
example:
```js
const options = [
  { name: "Amsterdam", value: "AMS" },
  { name: "Paris", value: "PAR" },
  { name: "Berlin", value: "BER" },
  { name: "Yerevan", value: "EVN" },
];
```

__List with groups:__

format:
```
[{
  label: string
  items: [
    {
      name: string,
      value: string
    }
  ]
}]
```

example: 
```js
const groupedOptions = [
  {
    label: "Europe",
    items: [
      { name: "Amsterdam", value: "AMS" },
      { name: "Paris", value: "PAR" },
      { name: "Berlin", value: "BER" },
      { name: "Yerevan", value: "EVN" },
    ],
  },
  {
    label: "South America",
    items: [
      { name: "Quito", value: "QTO" },
      { name: "Willemstad", value: "WIL" },
      { name: "Valencia", value: "VAL" },
      { name: "Bogota", value: "BOG" },
    ],
  },
];
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
