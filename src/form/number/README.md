---
icon: 1
---

# Number

A simple number input field

## Example

<sil-number id="my-input" label="My Input"></sil-number>

```html
<sil-number label="My Input"></sil-number>
```

## Usage

Install

```html
<script type="module" src="https://unpkg.com/@sil/ui/dist/number.js"></script>
```

Use

```html
<sil-number></sil-number>
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
| min           | `null`                   | Minimum number                                     |
| max           | `null`                   | Maximum number                                     |
