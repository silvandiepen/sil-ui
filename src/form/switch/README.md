---
icon: S
---

# Switch

A simple text input field

## Example

<sil-switch id="my-switch" label="My Switch"></sil-switch>

```html
<sil-switch label="My Input"></sil-switch>
```

## Usage

Install

```html
<script type="module" src="https://load.ui.sil.mt/switch.js"></script>
```

Use

```html
<sil-switch></sil-switch>
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
