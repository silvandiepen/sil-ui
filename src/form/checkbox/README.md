---
icon: ✓
---

# Checkbox

A simple checkbox

## Example

<sil-checkbox label="My Checkbox"></sil-checkbox>

```html
<sil-checkbox label="My Checkbox"></sil-checkbox>
```

## Usage

Install

```html
<script type="module" src="https://load.ui.sil.mt/checkbox.js"></script>
```

Use

```html
<sil-checkbox></sil-checkbox>
```

## Props

| prop          | default                  | description                                        |
| ------------- | ------------------------ | -------------------------------------------------- |
| label         | `""`                     | Label shown                                        |
| value         | `false`                  | Default value                                      |
| required      | `false`                  | Is the field required?                             |
| requiredError | `This field is required` | Error shown when the field is required and not set |
| name          | `""`                     | Name of element                                    |
| id            | `""`                     | Id of element                                      |
