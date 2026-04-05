# Portfolio Design Token System

Figma file: https://www.figma.com/design/Z1w45vZdzISEhxuV6nx8Wz/Untitled
Variables created as Figma local variables. Naming uses `/` separators for hierarchy (maps to `--css-custom-properties` with `/` → `-`).

---

## 🎨 Color — Collection: `Color`

### Neutrals (warm undertone)
| Token | Value |
|---|---|
| `color/neutral/000` | `#FFFFFF` |
| `color/neutral/050` | `#F7F6F4` |
| `color/neutral/100` | `#EEECEA` |
| `color/neutral/200` | `#DDD9D5` |
| `color/neutral/300` | `#C4BFB9` |
| `color/neutral/400` | `#9E9890` |
| `color/neutral/500` | `#78726A` |
| `color/neutral/600` | `#5C5650` |
| `color/neutral/700` | `#403B36` |
| `color/neutral/800` | `#2A2520` |
| `color/neutral/900` | `#1A1612` |
| `color/neutral/950` | `#100D0A` |

### Brand — Primary (teal)
| Token | Value |
|---|---|
| `color/brand/primary/default` | `#2B6B6B` |
| `color/brand/primary/hover` | `#1E5252` |
| `color/brand/primary/active` | `#164040` |
| `color/brand/primary/light` | `#4A9090` |
| `color/brand/primary/lighter` | `#A8D4D4` |
| `color/brand/primary/subtle` | `#EAF4F4` |

### Brand — Secondary (amber)
| Token | Value |
|---|---|
| `color/brand/secondary/default` | `#E8B84B` |
| `color/brand/secondary/hover` | `#CF9E32` |
| `color/brand/secondary/light` | `#F0CC7A` |
| `color/brand/secondary/subtle` | `#FDF5DC` |

### Brand — Accent (purple)
| Token | Value |
|---|---|
| `color/brand/accent/default` | `#6941C6` |
| `color/brand/accent/hover` | `#53389E` |
| `color/brand/accent/active` | `#42307D` |
| `color/brand/accent/light` | `#9B8AFB` |
| `color/brand/accent/subtle` | `#F4F3FF` |

### Semantic — Background
| Token | Value |
|---|---|
| `color/semantic/bg/default` | `#FFFFFF` |
| `color/semantic/bg/secondary` | `#F7F6F4` |
| `color/semantic/bg/tertiary` | `#EEECEA` |
| `color/semantic/bg/inverse` | `#1A1612` |
| `color/semantic/bg/brand` | `#EAF4F4` |

### Semantic — Border
| Token | Value |
|---|---|
| `color/semantic/border/subtle` | `#EEECEA` |
| `color/semantic/border/default` | `#DDD9D5` |
| `color/semantic/border/strong` | `#C4BFB9` |
| `color/semantic/border/focus` | `#2B6B6B` |

### Semantic — Text
| Token | Value |
|---|---|
| `color/semantic/text/primary` | `#1A1612` |
| `color/semantic/text/secondary` | `#5C5650` |
| `color/semantic/text/tertiary` | `#9E9890` |
| `color/semantic/text/placeholder` | `#C4BFB9` |
| `color/semantic/text/disabled` | `#C4BFB9` |
| `color/semantic/text/inverse` | `#FFFFFF` |
| `color/semantic/text/link` | `#2B6B6B` |
| `color/semantic/text/link-hover` | `#1E5252` |
| `color/semantic/text/on-brand` | `#FFFFFF` |

### Semantic — Interactive
| Token | Value |
|---|---|
| `color/semantic/interactive/default` | `#2B6B6B` |
| `color/semantic/interactive/hover` | `#1E5252` |
| `color/semantic/interactive/active` | `#164040` |

### Feedback
| Token | Default | Light | Subtle | Text |
|---|---|---|---|---|
| Success | `#2D7D46` | `#D4EDDA` | `#F0FAF3` | `#1A4D2B` |
| Warning | `#E8B84B` | `#FDF3CE` | `#FFFBEC` | `#7A5C00` |
| Error | `#C0392B` | `#FAD9D5` | `#FEF2F0` | `#6B1515` |
| Info | `#2A6B9B` | `#D1ECF1` | `#EEF6FB` | `#154B6E` |

---

## 📝 Typography — Collection: `Typography`

### Font Family (string)
| Token | Value |
|---|---|
| `typography/family/sans` | `Inter` |
| `typography/family/serif` | `Lora` |
| `typography/family/mono` | `JetBrains Mono` |

### Font Size (px)
| Token | Value |
|---|---|
| `typography/size/2xs` | 10px |
| `typography/size/xs` | 12px |
| `typography/size/sm` | 14px |
| `typography/size/base` | 16px |
| `typography/size/md` | 18px |
| `typography/size/lg` | 20px |
| `typography/size/xl` | 24px |
| `typography/size/2xl` | 30px |
| `typography/size/3xl` | 36px |
| `typography/size/4xl` | 48px |
| `typography/size/5xl` | 60px |
| `typography/size/6xl` | 72px |

### Font Weight
| Token | Value |
|---|---|
| `typography/weight/light` | 300 |
| `typography/weight/regular` | 400 |
| `typography/weight/medium` | 500 |
| `typography/weight/semibold` | 600 |
| `typography/weight/bold` | 700 |
| `typography/weight/extrabold` | 800 |

### Line Height (% of font size)
| Token | Value |
|---|---|
| `typography/line-height/none` | 100% |
| `typography/line-height/tight` | 110% |
| `typography/line-height/snug` | 125% |
| `typography/line-height/normal` | 150% |
| `typography/line-height/relaxed` | 162% |
| `typography/line-height/loose` | 200% |

### Letter Spacing (% of font size)
| Token | Value | em equivalent |
|---|---|---|
| `typography/letter-spacing/tighter` | -4% | -0.04em |
| `typography/letter-spacing/tight` | -2% | -0.02em |
| `typography/letter-spacing/normal` | 0% | 0 |
| `typography/letter-spacing/wide` | 2% | 0.02em |
| `typography/letter-spacing/wider` | 4% | 0.04em |
| `typography/letter-spacing/widest` | 8% | 0.08em |
| `typography/letter-spacing/caps` | 12% | 0.12em |

---

## 📐 Spacing — Collection: `Spacing`
4pt grid. All values in px.

| Token | Value |
|---|---|
| `spacing/0px` | 0 |
| `spacing/1px` | 1 |
| `spacing/4px` | 4 |
| `spacing/8px` | 8 |
| `spacing/12px` | 12 |
| `spacing/16px` | 16 |
| `spacing/20px` | 20 |
| `spacing/24px` | 24 |
| `spacing/28px` | 28 |
| `spacing/32px` | 32 |
| `spacing/36px` | 36 |
| `spacing/40px` | 40 |
| `spacing/44px` | 44 |
| `spacing/48px` | 48 |
| `spacing/56px` | 56 |
| `spacing/64px` | 64 |
| `spacing/80px` | 80 |
| `spacing/96px` | 96 |
| `spacing/112px` | 112 |
| `spacing/128px` | 128 |
| `spacing/144px` | 144 |
| `spacing/160px` | 160 |
| `spacing/192px` | 192 |
| `spacing/224px` | 224 |
| `spacing/256px` | 256 |
| `spacing/288px` | 288 |
| `spacing/320px` | 320 |
| `spacing/384px` | 384 |

---

## 🔲 Border Radius — Collection: `Border Radius`

| Token | Value |
|---|---|
| `radius/none` | 0px |
| `radius/xs` | 2px |
| `radius/sm` | 4px |
| `radius/md` | 8px |
| `radius/lg` | 12px |
| `radius/xl` | 16px |
| `radius/2xl` | 20px |
| `radius/3xl` | 24px |
| `radius/4xl` | 32px |
| `radius/full` | 9999px |

---

## 🌫 Elevation — Collection: `Elevation`
Stored as strings for reference. Apply via Figma drop shadow effects.

| Token | Value |
|---|---|
| `shadow/none` | `none` |
| `shadow/xs` | `0 1px 2px 0 rgba(26,22,18,0.05)` |
| `shadow/sm` | `0 1px 3px 0 rgba(26,22,18,0.10), 0 1px 2px -1px rgba(26,22,18,0.10)` |
| `shadow/md` | `0 4px 6px -1px rgba(26,22,18,0.08), 0 2px 4px -2px rgba(26,22,18,0.08)` |
| `shadow/lg` | `0 10px 15px -3px rgba(26,22,18,0.08), 0 4px 6px -4px rgba(26,22,18,0.08)` |
| `shadow/xl` | `0 20px 25px -5px rgba(26,22,18,0.08), 0 8px 10px -6px rgba(26,22,18,0.08)` |
| `shadow/2xl` | `0 25px 50px -12px rgba(26,22,18,0.25)` |
| `shadow/inner` | `inset 0 2px 4px 0 rgba(26,22,18,0.08)` |
