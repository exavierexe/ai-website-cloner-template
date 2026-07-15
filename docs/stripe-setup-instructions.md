# Stripe Setup Instructions

I need two pieces of information from your Stripe account to enable payments on your website. Please follow the steps below.

## 1. Stripe Secret Key

1. Go to **https://dashboard.stripe.com/apikeys**
2. Log in with your Stripe account
3. Under the **Secret key** row, click **Reveal test key** (or **Reveal live key** if you're ready to accept real payments)
4. The key will start with `sk_test_` (test mode) or `sk_live_` (live mode)
5. Copy and send me that full key

> **Note:** If you don't see a secret key, click **"Create secret key"** to generate one.

## 2. Stripe Webhook Secret

1. Go to **https://dashboard.stripe.com/webhooks**
2. Click **"Add endpoint"** (or click on an existing endpoint if one exists)
3. In the **Endpoint URL** field, enter: `https://yourdomain.com/api/webhooks` (replace `yourdomain.com` with your actual website address)
4. Under **Events to send**, select these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **Add endpoint**
6. On the endpoint detail page, look for the **Signing secret** section
7. Click **Reveal** to show the secret (it starts with `whsec_`)
8. Copy and send me that full secret

> **For local testing:** If you want to test payments locally before the site is live, download the [Stripe CLI](https://stripe.com/docs/stripe-cli) and run `stripe listen --forward-to localhost:3000/api/webhooks`. The webhook secret will be printed in the terminal output.

## Summary — please send me:

- [ ] **Secret key** (starts with `sk_test_` or `sk_live_`)
- [ ] **Webhook signing secret** (starts with `whsec_`)

## Important security notes

- **Never share these keys publicly** or post them in group chats
- Send them via a secure channel (e.g. encrypted email, password-protected document, or a secure messaging app)
- The **publishable key** (starts with `pk_`) is safe to share publicly — I may also ask for that separately
