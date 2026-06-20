# Deploying Anchor Property Group's site

This is a Next.js project. Everything in this folder is the actual source code
for the site we designed — homepage, pricing, how it works, FAQ, about, areas
we serve, and the get-started intake form.

## 1. Get the code onto GitHub

Vercel deploys from a GitHub repo, so the code needs to live there first.

1. Go to [github.com/new](https://github.com/new) and create a new repository
   (e.g. `anchor-site`). Leave it empty — no README, no .gitignore — since
   this folder already has those.
2. In a terminal, inside this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/anchor-site.git
   git push -u origin main
   ```

   (Replace the URL with the one GitHub shows you after creating the repo.)

## 2. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and log in (or sign up —
   it's free for this).
2. Click "Import" next to the `anchor-site` repo you just pushed.
3. Vercel auto-detects it's a Next.js project. Don't change any settings —
   just click **Deploy**.
4. In about a minute, you'll get a live URL like `anchor-site.vercel.app`.
   Click it. That's your real, live site.

## 3. Connect your domain

You said you already bought the domain. Here's how to point it at this site:

1. In your Vercel project, go to **Settings → Domains**.
2. Type in your domain (e.g. `anchorpropertygroup.com`) and click **Add**.
3. Vercel will show you either:
   - An **A record** to add (pointing to an IP address), or
   - Vercel **nameservers** to switch to.
4. Go to wherever you bought the domain (GoDaddy, Namecheap, Google Domains,
   etc.), find the DNS settings, and add whichever record Vercel showed you.
5. This can take anywhere from a few minutes to a few hours to propagate.
   Vercel's domain page will show a green checkmark once it's live.

## 4. Making changes going forward

This is the part that matters for "I want to constantly update it":

- Edit any file in `src/app/` (each folder is a page) or `src/components/`
  (shared pieces like the nav and the form).
- Run `npm run dev` locally to preview changes at `localhost:3000` before
  pushing.
- When you're happy, run:

  ```bash
  git add .
  git commit -m "describe what you changed"
  git push
  ```

  Vercel automatically redeploys within about a minute of every push. No
  manual redeploy step, no server to restart.

- You can also come back to a chat like this one, describe what you want
  changed, and I can write the updated code directly into these files for
  you to commit and push.

## Where things live

| What | Where |
|---|---|
| Homepage | `src/app/page.tsx` |
| Pricing | `src/app/pricing/page.tsx` |
| How it works | `src/app/how-it-works/page.tsx` |
| FAQ | `src/app/faq/page.tsx` |
| About | `src/app/about/page.tsx` |
| Areas we serve | `src/app/areas-we-serve/page.tsx` |
| Get started form | `src/app/get-started/page.tsx` + `src/components/GetStartedForm.tsx` |
| Lead form submission handler | `src/app/api/lead/route.ts` |
| Nav (top menu, every page) | `src/components/Nav.tsx` |
| Footer (every page) | `src/components/Footer.tsx` |
| Colors, fonts, base styles | `src/app/globals.css` |

## Important: the lead form doesn't notify anyone yet

Right now, when someone submits the "Get started" form, the data is only
written to Vercel's server logs (visible in your Vercel dashboard under the
project's **Logs** tab) — nobody gets an email or text. That's not a finished
lead pipeline, just the plumbing for one. Before this goes live for real
customers, you'll want one of:

**Option A — Email notification (simplest, ~15 minutes)**
Use [Resend](https://resend.com) (free tier covers this easily):
1. Sign up at resend.com, verify a sending domain or use their test domain.
2. Get an API key.
3. Add it to Vercel: **Settings → Environment Variables** → add
   `RESEND_API_KEY`.
4. In `src/app/api/lead/route.ts`, replace the `console.log` line with a
   call to Resend's API to email the team. I can write this code for you
   when you're ready — just say so.

**Option B — Save to a database**
If you want a dashboard of leads rather than just emails, Vercel Postgres or
Supabase both integrate directly with Vercel in a few clicks. Also happy to
wire this up when you get there.

Either way: don't point real ad spend or marketing at this form until one of
these is in place, or you'll lose leads without knowing it.

## Things from our design conversation still worth finalizing

These aren't code issues, but they're baked into the copy on the live site,
so worth resolving before launch:

- The written service agreement backing "no lock-in / cancel anytime"
  (referenced on the homepage, pricing, and FAQ pages).
- Confirming the city list on `areas-we-serve` matches where you actually
  operate today.
- Double-checking team titles on `about` are final — this page has changed
  several times during our design process.
