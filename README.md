## LeapfrogUI

This is a prototype frontend for @Defense-Unicorns LeapfrogAI.

## Run Locally

### With OpenAI

1. Create `.env` file.
2. Create an API Key from platform.opanai.com
3. Set `OPENAI_API_KEY=` to newly created API*KEY (\*\*\_THIS FILE IS IGNORED IN .GITIGNORE, BUT STILL BE CAREFUL!!!!*\*\*)
4. Set `BASE_URL=` to `https://api.openai.com/v1`.
5. `npm run dev`

### With LeapfrogAI

1. Create and deploy DUBBD onto local cluster. (I recommend the k3d with k3d-local setup).
2. Create zarf package and deploy from leapfrogai repo. Make sure to:
   - adjust the Kyverno policies for pulling from ghcr.io and nvcr.io
   - remove `leapfrogai.` from leapfrogai zarf-config.yaml (if still there), to avoid `leapfrogai.leapfrogai.bigbang.dev` domain which throws and SSL error.
3. Create `.env` file.
4. Set `OPENAI_API_KEY=` to a dummy key. (i.e. "my_key")
5. Set `BASE_URL=` to `https://leapfrogai.bigbang.dev`
6. `npm run dev`
