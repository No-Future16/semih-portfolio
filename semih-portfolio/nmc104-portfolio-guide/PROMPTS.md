# NMC104 – How to Prompt Antigravity

This file gives you example prompts to use in Antigravity. A prompt is the message you type to the AI. The quality of your prompts directly affects the quality of your result.

---

## A shortcut worth knowing

You can load all four files in this folder directly into Antigravity as context. Open a new project, attach README.md, ASSIGNMENT.md, PROMPTS.md, and SUBMISSION.md, and start with something like:

```
I have attached my assignment brief and guide files. Read them, then help me build my portfolio website.
```

Antigravity will read the full brief and use it to guide the build. You can still give it your own content and direction on top of that.

---

## Before you start: prepare your content

Do this before opening Antigravity. Open a notes app and write down:

- Your name
- 2–3 sentences about yourself (who you are, what you study, what you care about)
- The names and short descriptions of 3 pieces of work you want to show
- Your contact info (email or social link)
- A color or mood you want the site to have (e.g. "minimal and dark", "warm and editorial", "clean and modern")

Having this ready means you can paste it directly into your prompts instead of making things up on the spot.

---

## Starter prompt (use this to begin)

Open Antigravity, create a new project (Workspace), and paste something like this:

```
I am a first-year Media and Communication student and I need to build a personal portfolio website.

Here is my content:
- Name: [your name]
- About me: [your 2–3 sentences]
- Work:
  1. [Project title] – [short description]
  2. [Project title] – [short description]
  3. [Project title] – [short description]
- Contact: [your email or link]

Design direction: I want the site to feel [your mood/style]. 
Color palette I like: [paste hex codes from Coolors, or describe colors]

Please build a single-page portfolio website in HTML, CSS, and JavaScript. 
The page should have sections for: About, Work, and Contact.
Make it clean, modern, and mobile-friendly.
```

Replace everything in `[brackets]` with your actual content.

---

## How to get your color palette

1. Go to [coolors.co/generate](https://coolors.co/generate)
2. Press the spacebar to generate random palettes until you find one you like
3. You can lock colors you like (click the lock icon) and keep generating
4. Copy the hex codes (e.g. `#2D3142`, `#EF8354`) and paste them into your prompt

Tell Antigravity: `Use this color palette: #2D3142, #EF8354, #F5F0F6, #4F5D75`

---

## How to pick fonts with Google Fonts

1. Go to [fonts.google.com](https://fonts.google.com/)
2. Browse or search — you can filter by category (Serif, Sans Serif, Monospace, Display, Handwriting)
3. Click on a font to preview it with your own text
4. When you find one you like, note its name
5. Use it in your prompt: `Use the font "Playfair Display" for headings and "DM Sans" for body text`

Antigravity knows how to load Google Fonts automatically — you just need to name them.

A good starting point: pair a **display or serif font** for headings with a **clean sans-serif** for body text. But there are no strict rules here — experiment.

---



Antigravity will generate a site. Look at the preview and then give it feedback. Here are examples:

**Changing colors:**
```
The background color feels too bright. Change it to something darker and more muted.
```

**Changing typography:**
```
The font feels generic. Use a more editorial serif font for the headings 
and keep a clean sans-serif for the body text.
```

**Changing layout:**
```
The About section feels cramped. Give it more space and center the text.
```

**Adding something:**
```
Add a thin horizontal line between each section as a divider.
```

**Changing the overall feel:**
```
The site looks too corporate. Make it feel more personal and handcrafted — 
like a designer's portfolio, not a company website.
```

---

## On avoiding the obvious

The biggest risk with AI tools is that everyone ends up with the same thing. Dark background, white text, a hero section with your name in large letters, three project cards in a row. It works — but it says nothing about you.

These tools are not just shortcuts. They are a medium. Use them to explore.

Some questions worth sitting with before you start:

- What does your work actually feel like? Is there a texture, a mood, a rhythm to it?
- What kind of websites have you seen that made you stop scrolling?
- Are you trying to look professional, or are you trying to look like *you*? (These are not the same thing.)

Some directions that break the default:

- A site built around a single strong typographic choice, very little else
- An asymmetric layout where not everything lines up on a grid
- A color palette pulled from a specific image that matters to you
- A site that behaves unexpectedly — something subtle that only appears on hover or scroll
- A structure that does not follow the standard About / Work / Contact order

You are not building a CV. You are building a space. The tools let you iterate fast — use that speed to try things you are not sure about, not just to arrive at the safest version quickly.

The first result is a draft. The interesting work starts when you push back on it.

---



**Be specific.** "Make it look better" is hard for the AI to act on. "Increase the spacing between sections and make the headings larger" is specific and actionable.

**One change at a time.** If you ask for 10 changes at once, some might be missed. Ask for a few things, review the result, then ask for more.

**Review the plan.** Antigravity shows you a plan before making changes. Read it. If something looks wrong, say so before approving.

**Use Component Gallery for vocabulary.** If you go to [component.gallery](https://component.gallery/) and see a pattern you like — for example, a "card grid" layout for your projects — you can use that exact term in your prompt: `Show my projects in a card grid layout.`

**Do not accept the first result.** The first version is a starting point. The real work is in the back-and-forth. Most good portfolio sites take 10–20 rounds of prompting.

---

## What to do if something goes wrong

- If the preview looks broken, try: `The layout is broken on mobile. Fix the responsive design.`
- If the AI generates something completely wrong, describe what you wanted more clearly and try again
- If you are stuck, ask: `What information do you need from me to improve this site?`
