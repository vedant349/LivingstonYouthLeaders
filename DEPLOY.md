# Putting the site online with GitHub Pages

Everything the site needs is already in this folder. Follow these steps in order.

## What you need before starting

- A **GitHub account**. Free. Use an address the whole board can reach, not a personal one,
  so the site does not get locked to one student who graduates.
- Access to the **DNS settings for leadforfuture.org**, wherever the domain was bought
  (GoDaddy, Namecheap, Squarespace, and so on). You need to be able to edit A records.
- Nothing else. No hosting bill, no server, no build tools.

## Step 1, create the repository

1. Go to github.com and click **New repository**.
2. Name it `leadforfuture` or `lyl-website`. The name does not appear in your web address
   because you are using a custom domain.
3. Set it to **Public**. GitHub Pages is only free on public repositories.
4. Do not tick "Add a README", the folder already has one.
5. Click **Create repository**.

## Step 2, upload the files

The easiest route with no command line:

1. On the new empty repository page, click **uploading an existing file**.
2. Open this `lyl-site` folder on your computer, select **everything inside it**, and drag it
   into the browser window. Do not drag the folder itself, drag its contents, so that
   `index.html` sits at the top level of the repository.
3. Wait for the upload. It is about 33 MB, so give it a few minutes.
4. Write "First version of the site" in the description box and click **Commit changes**.

If a file called `.gitignore` did not come across, that is fine, but see the note about
`images/events` below.

## Step 3, turn on Pages

1. In the repository, go to **Settings**, then **Pages** in the left sidebar.
2. Under "Build and deployment", set Source to **Deploy from a branch**.
3. Set Branch to **main** and folder to **/ (root)**. Click **Save**.
4. Wait two or three minutes. The page will show a live link like
   `https://yourname.github.io/leadforfuture/`.
5. Open it and click through all five pages before going further.

## Step 4, point leadforfuture.org at it

The `CNAME` file in this folder already contains `leadforfuture.org`, so GitHub will pick up
the domain automatically. You still need to update DNS at your registrar.

Add these four **A records** for the root domain, host `@`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

And one **CNAME record** so the www address works too:

```
Host: www      Value: yourname.github.io
```

Replace `yourname` with your actual GitHub username.

Then in **Settings, Pages**, confirm `leadforfuture.org` shows under Custom domain, and tick
**Enforce HTTPS** once it becomes available. HTTPS can take up to 24 hours to activate, which
is normal.

DNS changes usually take 15 minutes to a few hours, occasionally longer.

## Step 5, retire the old site

Only once the new site is live and correct. Cancel or stop the old WordPress hosting so the
two do not fight over the domain. Keep a backup of the old site first.

## The archive folder

`images/events/` holds the full resolution originals of every photo and flyer. Nothing on the
website links to it. `.gitignore` tells GitHub to skip it, which keeps the repository light.

**Keep your own copy of that folder** in Google Drive or similar. It is the only complete
archive of the group's photos, and rebuilding it would mean chasing everyone's phones again.

## Making changes later

Edit files directly on GitHub, in the browser. Click a file, click the pencil icon, edit,
then Commit. The live site updates in a minute or two.

To add a new project, copy an existing `<article class="card">` block in `projects.html`.
To add photos, upload them to `images/gallery/` and add a tile to `gallery.html`.
See `README.md` for the detail.

## If something looks wrong after publishing

- **Page loads but has no styling.** `styles.css` was not uploaded, or it sits in a subfolder.
  It must be at the top level next to `index.html`.
- **Images missing.** Check capitalisation. GitHub is case sensitive, so `Hero.jpg` and
  `hero.jpg` are different files.
- **Custom domain will not verify.** Confirm the four A records are on `@` and not on `www`,
  and that no old A record is left behind pointing at the previous host.
- **Old site still showing.** Your browser is caching it. Try a private window.
