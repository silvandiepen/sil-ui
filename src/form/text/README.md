---
icon: T
---

# Text

A simple text input field

## Example

<sil-text id="my-input" label="My Input"></sil-text>

```html
<sil-text label="My Input"></sil-text>
```

## Usage

Install

```html
<script type="module" src="https://unpkg.com/@sil/ui/text.js"></script>
```

Use

```html
<sil-text></sil-text>
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
