---
icon: T
---

# TextArea

<script type="module" src="/assets/dist/textarea.js"></script>

A simple large text input field

## Example

<sil-textarea id="my-textarea" label="My Input"></sil-textarea>

```html
<sil-textarea label="My Input"></sil-textarea>
```

## Usage

Install

```html
<script type="module" src="https://unpkg.com/@sil/ui/textarea.js"></script>
```

Use

```html
<sil-textarea></sil-textarea>
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
| resize        | `true`                   | Should the element resize based on content?        |
