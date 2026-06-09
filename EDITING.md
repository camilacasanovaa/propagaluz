# How to edit propagaluz.com without breaking anything

## The setup, in plain language

Your website lives in one file: `site/index.html`.

You have **two parallel copies** of that file on GitHub:

| Branch    | What it powers                  | Who sees it           |
| --------- | ------------------------------- | --------------------- |
| `main`    | `propagaluz.com` (production)   | Everyone in the world |
| `drafts`  | a private preview URL on Vercel | Only you              |

The rule: **always edit on `drafts` first.** When you like what you see on the preview, you "merge `drafts` into `main`" and production updates in 30 seconds.

---

## The minimal editing workflow

### 1. Open the file on GitHub on the drafts branch

Go to: **https://github.com/camilacasanovaa/propagaluz/blob/drafts/site/index.html**

(Note the `/blob/drafts/` part — that's how GitHub knows you're editing the drafts copy, not production.)

### 2. Click the pencil icon ✏️ at the top right of the file view

GitHub opens its built-in text editor. The HTML is long (~1000 lines) but you don't need to read all of it.

### 3. Find what you want to change using Cmd+F

Press **Cmd + F** (Mac) or **Ctrl + F** (Windows). A search box appears. Type the exact text you see on the site — like `Cada niño` or `Reserve your` or `Because a generation` — and GitHub jumps to that line.

### 4. Change the text

Just type over what's there. Don't touch the `<tags>` around it — only edit the words between them.

**Safe to change:**
- Words between `>` and `<`. Example: `<h1>Cada niño, una luz.</h1>` — you can change "Cada niño, una luz." but leave `<h1>` and `</h1>` alone.

**Don't touch:**
- Anything inside `< >` brackets (those are HTML tags)
- The big `<style>` block at the top (that's the CSS)
- The `<script>` block at the bottom (that's the JavaScript)

If you accidentally break it, no problem — production stays safe; only your preview URL breaks. We can always reset.

### 5. Scroll down, write a short description, click "Commit changes"

Two options when committing:
- **"Commit directly to the drafts branch"** ← pick this one
- ~~"Create a new branch"~~ ← skip this

Click the green **Commit changes** button.

### 6. Wait ~30 seconds, then refresh your preview URL

Your preview URL (the one you got from the Vercel dashboard) updates with your change. Production stays the same.

### 7. When you're happy with your changes, merge to production

- Go to **https://github.com/camilacasanovaa/propagaluz/pull/new/drafts**
- GitHub shows you a "Compare changes" page with all your edits
- Click **Create pull request**, then **Merge pull request**, then **Confirm merge**
- 30 seconds later, `propagaluz.com` shows your changes

---

## Where common things live in `index.html`

(Use Cmd+F to jump to them. The text you search for is in **bold**.)

| You want to change…              | Search for…                                              |
| -------------------------------- | -------------------------------------------------------- |
| Hero headline                    | **`Cada niño`**                                          |
| Hero subhead                     | **`Propagaluz acompaña`**                                |
| "Reserve your seat" title        | **`Reserve your`**                                       |
| Donation card lede               | **`Registration as a 501`**                              |
| Amount buttons ($10/$25/$50)     | **`$10`** (then look at the four lines together)         |
| Tax-deductible disclaimer        | **`Tax-deductible once`**                                |
| "Why education" section title    | **`Because a generation`**                               |
| 3M / 200K+ / 40% / 37% stats     | **`3M`**, **`200K+`**, **`40%`**, **`37%`**              |
| UNICEF source citations          | **`UNICEF`**                                             |
| "Our intention" section title    | **`A word in its proper place`**                         |
| "Our intention" body paragraph   | **`We exist for the children`**                          |
| "Two foundations" section title  | **`Two foundations`**                                    |
| Fe y Alegría partner card        | **`Fe y Alegría`**                                       |
| CECODAP partner card             | **`CECODAP`**                                            |
| "Our story" section title        | **`Same conviction`**                                    |
| Eladio quote                     | **`Es para servir`**                                     |
| "Para Opa" sign-off              | **`Para Opa`**                                           |
| Footer tagline                   | **`propaga la luz`**                                     |
| Footer email                     | **`camila@propagaluz.com`**                              |
| Color: butter yellow (the luz)   | **`#fceaa8`** (anywhere that color appears)              |
| Color: ink (the black text)      | **`#1a1a1a`**                                            |
| Color: pale blue (Eladio quote)  | **`#94a8c0`**                                            |

---

## If something breaks

Two safety nets:

1. **The preview URL is the playground.** If your draft preview looks broken, production is fine. Don't merge until the preview looks right.

2. **Every commit is reversible.** On GitHub, click any older commit in the history → "Revert this commit" → done. Nothing is ever truly lost.

If you ever genuinely panic, message me. The whole site is one file; restoring it is a 10-second operation on my end.

---

## Quick reference

| Thing                         | URL                                                          |
| ----------------------------- | ------------------------------------------------------------ |
| Production (what world sees)  | https://propagaluz.com                                       |
| Your drafts preview           | (get from Vercel dashboard → Deployments)                    |
| Edit drafts on GitHub         | https://github.com/camilacasanovaa/propagaluz/edit/drafts/site/index.html |
| Merge drafts → production     | https://github.com/camilacasanovaa/propagaluz/pull/new/drafts |
| Vercel dashboard              | https://vercel.com/camilacasanovaa/propagaluz                |
