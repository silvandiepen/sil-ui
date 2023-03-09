---
list: /src/icons/icons.json
icon: i
---

# Icon

A styled card

## Example

<!-- <sil-icon icon="arrow-up"></sil-icon> -->

<!-- list -->
.icon-container
    each icon in list.icons
        .icon
            span.icon__icon
                | <sil-#{icon}></sil-#{icon}>
            span.icon__text=icon
<!-- /list -->

---

<sil-icon-arrow-down></sil-icon-arrow-down>

```html
<!-- <sil-icon icon="arrow-up"></sil-icon> -->
```

## Usage

Install

```html
<script type="module" src="https://load.ui.sil.mt/icon.js"></script>
```

Use

```html
<!-- <sil-icon icon="arrow-up"></sil-icon> -->
```

## Props

| prop | default | description                  |
| ---- | ------- | ---------------------------- |
| icon | `?`     | The icon you want to display |

