---
icon: @
---

# E-mail

<script type="module" src="/assets/dist/text.js"></script>

A simple email input field

## Example

<sil-email id="my-input" label="My Input"></sil-email>

```html
<sil-email label="My Input"></sil-email>
```

## Usage

Install

```html
<script type="module" src="https://unpkg.com/@sil/ui/text.js"></script>
```

Use

```html
<sil-email></sil-email>
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
