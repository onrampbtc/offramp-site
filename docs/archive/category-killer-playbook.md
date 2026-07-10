# The Category Killer Playbook
## How to Build a World-Class Scoring Site That Dominates Search, Steals Competitor Traffic, and Becomes the #1 Source of Truth in Any Market

*A complete, replicable framework. Built from a live case study: proofofcustody.io (Bitcoin custody market). Adapt it to any vertical.*

---

## TABLE OF CONTENTS

1. The Strategy (Why This Works)
2. Competitive Intelligence with Semrush API
3. Scoring Framework Design
4. Website Architecture + Technical Build
5. Platform Data + Category Expansion
6. SEO Execution Plan
7. Content Engine + Distribution
8. Automation Pipeline (Scraping + AI Scoring)
9. Newsletter (Beehiiv) Setup
10. Social Media Growth Engine
11. CMS Migration (Sanity)
12. Step-by-Step Execution Timeline
13. Cost Breakdown
14. Appendix: Complete Platform Data Templates

---

## 1. THE STRATEGY (WHY THIS WORKS)

### The Core Thesis

Most industries have a question that incumbents don't want consumers to ask. In Bitcoin, it's "where are the keys?" In insurance, it's "what's actually covered?" In SaaS, it's "who owns the data?" In food, it's "what's actually in this?"

**The Category Killer Playbook builds a website that asks that question on behalf of the consumer, scores every company in the market against it, and captures all of the search traffic around that question.**

### Why It Works

1. **You create the narrative.** You define what "good" looks like by publishing a scoring methodology. The market starts using your framework.

2. **You own the comparison traffic.** "[Company A] vs [Company B]" searches are massive, high-intent, and almost always uncontested. Each comparison is a new indexed page.

3. **Independent validation at scale.** Instead of saying "we're the best," an independent-looking scoring site says it. Third-party credibility without third-party cost.

4. **Compound SEO.** Every new platform review, comparison page, and article creates another indexed URL targeting another keyword. The site gets stronger every week.

5. **The flywheel.** Scoring data feeds the newsletter, the newsletter builds the email list, the email list feeds the sales pipeline, the pipeline converts to revenue, and the revenue funds more scoring.

### What You're Building

A "NerdWallet for [your industry]" site that:
- Scores 50-100+ companies/products across 6-8 categories
- Updates scores weekly via automated scraping + AI
- Publishes SEO-optimized articles targeting 100K+ monthly search volume
- Runs a weekly newsletter building an owned audience
- Distributes content through Twitter/X and LinkedIn
- Generates leads for your primary business

---

## 2. COMPETITIVE INTELLIGENCE WITH SEMRUSH API

### Phase 1: Find the Opportunity

Before building anything, you need to know where the traffic gaps are. Semrush is the tool.

### Setting Up Semrush

1. Get a Semrush account (Pro plan at minimum: $129/mo, or use free trial for initial research)
2. If you have the Semrush MCP connector in Claude, you can query it directly
3. Otherwise, use the Semrush web UI or API

### Step-by-Step Competitor Analysis

**Step 1: List your top 7-10 competitors**

For each competitor, pull these Semrush reports:
- Domain Overview (authority score, organic traffic, total keywords)
- Organic Research > Positions (what keywords they rank for)
- Organic Research > Competitors (who else ranks for the same keywords)
- Backlink Analytics (referring domains, authority of backlinks)

**Step 2: Build the competitor matrix**

Create a spreadsheet with these columns for each competitor:

| Competitor | Auth Score | Organic Traffic/mo | Total Keywords | Referring Domains | Paid Traffic | Paid Cost/mo |
|-----------|-----------|-------------------|---------------|-------------------|-------------|-------------|
| Company A | 81 | 2,700,000 | 477,000 | 45,000 | 500,000 | $1.2M |
| Company B | 36 | 34,000 | 2,462 | 2,100 | 0 | $0 |
| Your site | 23 | 445 | 236 | 1,017 | 0 | $0 |

**Step 3: Find undefended keywords**

This is the gold. Pull each competitor's top organic keywords and look for:
- High volume (1,000+ monthly searches)
- Low-to-medium keyword difficulty (KD < 60)
- Competitor ranking at position 6+ (weak position, vulnerable to displacement)
- No paid spend from any competitor on that keyword

Example from the Bitcoin custody case study:

| Keyword | Volume | KD | Best Competitor Position | CPC |
|---------|--------|-----|--------------------------|-----|
| cold wallet crypto | 8,100 | 72 | BitGo at #10 | $2.50 |
| bitcoin ira | 6,600 | 55 | Nobody scoring well | $24.85 |
| crypto ira | 2,400 | 48 | Nobody scoring well | $24.85 |
| best place to buy bitcoin | 18,100 | 70 | Generic listicles | $8.00 |
| custodial vs non custodial | 720 | 59 | BitGo at #6 | $3.20 |

**Step 4: Calculate total addressable keyword volume**

Add up all relevant keywords you could realistically target. In our case study, this was 150,000+ monthly searches across 6 categories. Even capturing 5% = 7,500 monthly organic visits.

**Step 5: Identify the zero-competition zones**

The most valuable finding: which keywords have ZERO paid spend from any competitor? These are free money. In the Bitcoin custody case study, not a single competitor was running paid ads on custody, IRA, yield, or lending keywords. The entire space was completely uncontested.

### Semrush API Queries (If Using Programmatically)

```
# Domain overview
GET /analytics/v1/?type=domain_ranks&key=YOUR_KEY&domain=competitor.com

# Organic keywords
GET /analytics/v1/?type=domain_organic&key=YOUR_KEY&domain=competitor.com&database=us

# Keyword difficulty
GET /analytics/v1/?type=phrase_all&key=YOUR_KEY&phrase=bitcoin+custody&database=us

# Competitor discovery
GET /analytics/v1/?type=domain_organic_organic&key=YOUR_KEY&domain=competitor.com
```

### What to Do with This Data

Your Semrush research produces three outputs:

1. **Priority keyword list** (ranked by volume x attainability x relevance)
2. **Content calendar** (which articles to write first, targeting which keywords)
3. **Competitor vulnerability map** (where each competitor is weak, where you can win)

---

## 3. SCORING FRAMEWORK DESIGN

### Principles

1. **Weight your differentiator highest.** Whatever question the market doesn't want asked, make that 30-40% of the score. This is what makes you different from every other review site.

2. **Use measurable criteria.** Every scoring factor should be verifiable by a third party. "Great UX" is subjective. "Time to first transaction under 5 minutes" is measurable.

3. **Include yourself and be transparent about it.** Publish the methodology. Show the math. Let anyone challenge it. This builds more trust than pretending to be unaffiliated.

4. **Partial credit.** Don't use binary scoring (yes/no). Use a 0-100 scale with partial credit for partial implementation.

### Framework Template

**Main Categories (must total 100%):**

| Category | Weight | Why |
|----------|--------|-----|
| [Your core differentiator] | 30-40% | This is the question nobody wants to ask |
| Ease of Use | 15-20% | Accessibility matters to mainstream users |
| Pricing / Fees | 10-15% | Everyone cares about cost |
| Features | 10-15% | Product breadth and depth |
| Transparency | 10% | Trust signals, audits, disclosures |
| Support | 5-10% | Response time, quality, channels |

**Sub-criteria for your core differentiator (example from Bitcoin custody):**

| Sub-criterion | Points | Notes |
|--------------|--------|-------|
| [Architecture quality] | +15-25 | The structural question |
| [No single point of failure] | +20-25 | Inverse: penalty if present |
| [Key distribution] | +15-20 | How risk is distributed |
| [Insurance/protection] | +10 | What happens when things go wrong |
| [Regulatory status] | +10 | Compliance and oversight |
| [Inheritance/succession] | +10 | Long-term considerations |
| [Physical exposure] | +10 | Real-world attack vectors |

Total sub-criteria points normalized to 0-100 scale.

### Tier System

| Tier | Score Range | Color |
|------|------------|-------|
| A+ | 93-100 | Green |
| A | 87-92 | Green |
| A- | 82-86 | Lime |
| B+ | 77-81 | Lime |
| B | 72-76 | Yellow |
| B- | 67-71 | Yellow |
| C+ | 62-66 | Orange |
| C | 57-61 | Orange |
| C- | Below 57 | Red |

### How to Score Fairly

1. Research each company's public documentation, security pages, pricing pages, legal disclosures
2. Document your evidence for each sub-criterion score
3. Flag any score that relies on claims you can't independently verify
4. Re-score quarterly or when significant changes occur
5. Publish change logs so users can see what moved and why

---

## 4. WEBSITE ARCHITECTURE + TECHNICAL BUILD

### Technology Stack

| Component | Tool | Cost |
|-----------|------|------|
| Framework | Next.js | Free |
| Hosting | Vercel | Free (hobby) or $20/mo (pro) |
| CMS (later) | Sanity | Free tier (3 users) |
| Domain | Namecheap | ~$12/yr |
| Analytics | Plausible | $9/mo |
| Search | Google Search Console | Free |

### Site Structure

```
/                           Homepage (hero, top scores preview, manifesto, newsletter)
/scores                     All platforms, sortable/filterable by category
/scores/buy                 Buy category filtered view
/scores/custody             Custody category filtered view
/scores/etfs                ETF category filtered view
/scores/fintech             Fintech category filtered view
/scores/yield               Yield category filtered view
/scores/ira                 IRA category filtered view
/platform/[slug]            Individual platform review page
/compare/[slug-vs-slug]     Head-to-head comparison page
/methodology                Scoring framework, weights, sub-criteria
/learn                      Educational articles hub
/learn/[article-slug]       Individual article
/podcast                    Podcast episodes
/report                     Annual report (email-gated)
/sitemap.xml                Auto-generated sitemap
```

### Design System

**Fonts:**
- Display/headings: Cormorant Garamond (serif, editorial, elegant)
- Monospace labels: DM Mono (scores, data, badges)
- Body: Sora (clean sans-serif)

**Colors:**
- Background: #080808 (near-black)
- Primary accent: Your brand color (Bitcoin orange #f7931a in the case study)
- Score colors: Green (#22c55e) > Lime (#84cc16) > Yellow (#eab308) > Orange (#f97316) > Red (#ef4444)
- Text hierarchy: White at varying opacities (0.6, 0.45, 0.35, 0.25, 0.15)

**Components to build:**
- ScoreRing (circular score visualization with animated fill)
- TierBadge (colored letter grade)
- Bar (horizontal score bar with label)
- SPOF Badge (red/green indicator for risk status)
- Platform Card (expandable card with score breakdown)
- Comparison View (side-by-side platform comparison)
- Quiz (3-question flow with recommendation routing)
- Email Capture (newsletter signup with confirmation state)

### How to Build It

**Option A: Claude Code (recommended for speed)**

Open Claude Code in your project directory and give it the complete design spec, platform data, and scoring framework. It will build the entire site in a single session. This is how proofofcustody.io was built.

**Option B: Claude Artifacts**

For prototyping, use Claude.ai to build a React artifact with all components. Export and integrate into your Next.js project.

**Option C: Hire a developer**

Give them this playbook as the spec document. The design system, data structure, and page architecture are all defined above.

### Critical Technical Details

1. **All platform data in one file.** Create `src/data/platforms.ts` with every platform. This makes it easy to update scores, add platforms, and eventually migrate to CMS.

2. **Category tags, not separate arrays.** Each platform gets a `categories: ["buy", "etf"]` array so a single platform can appear in multiple categories (e.g., Fidelity appears in Buy, Custody, and IRA).

3. **Dynamic comparison pages.** The /compare/[slug-vs-slug] route auto-generates from platform data. No manual creation needed. Each comparison is a unique indexed page.

4. **Structured data (JSON-LD).** Add schema.org Review markup to every platform page. This makes scores appear directly in Google search results.

5. **Sitemap auto-generation.** Use next-sitemap to auto-generate sitemap.xml on every build. Submit to Google Search Console.

---

## 5. PLATFORM DATA + CATEGORY EXPANSION

### Category Design

Start with 4-6 categories at launch. Add more quarterly.

**How to choose categories:**
1. Map the user journey (awareness > research > purchase > management)
2. Each category should target a distinct keyword cluster
3. Each category should have 8-15 platforms minimum
4. Categories should overlap (platforms appear in multiple categories)

**Example from Bitcoin custody (6 categories at launch):**

| Category | Platforms | Target Keywords | Monthly Volume |
|----------|-----------|----------------|----------------|
| Buy Bitcoin | 15 | "best place to buy bitcoin", "buy bitcoin" | 50,000+ |
| Custody Solutions | 17 | "bitcoin custody", "cold wallet" | 30,000+ |
| Bitcoin ETFs | 12 | "best bitcoin etf", "bitcoin etf comparison" | 25,000+ |
| Fintech & Banking | 11 | "bitcoin bank", "bitcoin fintech" | 15,000+ |
| Yield & Earn | 12 | "bitcoin lending", "earn bitcoin" | 15,000+ |
| IRA & Retirement | 8 | "bitcoin ira", "crypto ira" | 10,000+ |

### Platform Data Schema

Every platform needs this data:

```typescript
interface Platform {
  name: string;              // "Coinbase"
  slug: string;              // "coinbase"
  categories: string[];      // ["buy", "fintech"]
  score: number;             // 0-100 overall
  custodyScore: number;      // 0-100 (or your core differentiator)
  feeScore: number;          // 0-100
  easeScore: number;         // 0-100
  featureScore: number;      // 0-100
  transparencyScore: number; // 0-100
  supportScore: number;      // 0-100
  custodyType: string;       // "Single Custodian"
  spof: boolean;             // Single point of failure flag
  highlight: string;         // One-line strength
  risk: string;              // One-line risk
  fees: string;              // Fee summary
  minInvestment: string;     // "$0" or "$100K"
  url: string;               // "coinbase.com"
  audienceTag: string;       // "Mass Market"
  // Category-specific fields (optional)
  custodyDetails?: object;   // Detailed sub-criteria flags
  etfFields?: object;        // ETF-specific data
  iraFields?: object;        // IRA-specific data
}
```

### Comparison Page Generation

Auto-generate high-value comparison pages from platform data. Priority comparisons ranked by search volume:

**Template for /compare/[a]-vs-[b]:**
```
[Platform A] vs [Platform B]: Complete Comparison

Score summary (side by side)
All 6 category scores (bar chart comparison)
Core differentiator details (checklist comparison)
Fees comparison
Strengths and risks (side by side)
"Which is right for you?" recommendation based on user type
```

Each comparison page targets "[A] vs [B]" search queries. 20 comparison pages = 20 new keyword targets with zero incremental data cost.

---

## 6. SEO EXECUTION PLAN

### Phase 1: Technical SEO (Day 1)

1. **Sitemap:** Install next-sitemap, configure priority levels (homepage 1.0, category pages 0.9, platform pages 0.8, comparisons 0.7)
2. **Google Search Console:** Verify domain via DNS TXT record, submit sitemap, request indexing for top 10 pages
3. **Structured data:** JSON-LD Review schema on every platform page
4. **Page speed:** Verify Vercel edge caching, optimize images, minimize bundle
5. **Robots.txt:** Auto-generated by next-sitemap

### Phase 2: Content SEO (Weeks 1-4)

Write and publish the first 15 pieces of content, ranked by search volume and keyword difficulty:

| Priority | Content | Target Keywords | Volume |
|----------|---------|----------------|--------|
| 1 | Category overview (your core differentiator explained) | [core concept] + variants | 20,000+ |
| 2 | Best [product] 2026 (your industry) | "best [product]" | 15,000+ |
| 3 | [Product] comparison guide | "[product] comparison" | 10,000+ |
| 4 | [Category] complete guide | "[category] guide" | 8,000+ |
| 5 | Top 5 comparison pages | "[A] vs [B]" | 5,000+ each |
| 6 | Educational cornerstone piece | [educational keyword] | 5,000+ |
| 7 | Annual industry report (email-gated) | "[industry] report" | 3,000+ |
| 8-15 | Long-tail articles targeting specific keywords | Various | 1,000-5,000 each |

### Phase 3: Link Building (Ongoing)

1. **Podcast appearances.** Pitch your scoring framework as a guest topic on 10-15 industry podcasts. Each appearance = a backlink + authority.
2. **Annual report.** Publish a "State of [Industry]" report. Journalists cite it, creating high-authority backlinks.
3. **Data citations.** When you publish original scoring data, other sites reference it. This happens naturally if the data is useful.
4. **Comparison pages.** These naturally attract links from "which should I choose" forum discussions and blog posts.

### SEO KPIs

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Indexed pages | 30 | 80 | 150+ |
| Organic traffic/mo | 500 | 3,000 | 7,500+ |
| Referring domains | 50 | 150 | 300+ |
| Domain authority | 15 | 25 | 35+ |
| Top 10 keywords | 10 | 50 | 150+ |

---

## 7. CONTENT ENGINE + DISTRIBUTION

### Content Pillars

1. **Score cards** (visual, shareable platform reviews)
2. **Comparison articles** ("[A] vs [B]: Complete Comparison")
3. **Educational guides** ("What is [concept]? A Complete Guide")
4. **Data threads** (original insights from scoring data)
5. **Reactive takes** (industry news through your scoring lens)
6. **Annual report** (comprehensive, email-gated)

### Content Production Workflow

```
MONDAY (60 min):
  Review weekly score changes from automation pipeline
  Pick 1 deep dive topic for newsletter
  Pre-batch 5-6 social posts for the week using templates

TUESDAY (45 min):
  Finalize and send weekly newsletter
  Post newsletter teaser to X + LinkedIn

WEDNESDAY-FRIDAY (15 min/day):
  Post scheduled content (score cards, comparisons, reactive takes)
  Engage in relevant industry conversations on X

TOTAL WEEKLY TIME: ~3 hours
```

### Distribution Channels

| Channel | Frequency | Content Type | Purpose |
|---------|-----------|-------------|---------|
| Website (SEO) | Continuous | Articles, reviews, comparisons | Organic traffic |
| Twitter/X | 12-14/week | Score cards, data threads, reactive takes | Awareness, traffic |
| LinkedIn | 5/week | Data carousels, institutional insights | Institutional audience |
| Newsletter | 1/week | Weekly intelligence report | Owned audience |
| Podcasts | 2-3/month | Guest appearances, own show | Backlinks, authority |

---

## 8. AUTOMATION PIPELINE (SCRAPING + AI SCORING)

### Architecture

Weekly cycle (every Monday):

```
6:00 AM  FIRECRAWL SCRAPE
         Crawl security, custody, pricing, legal pages for all platforms
         Output: Markdown files per platform in /data/raw/

7:00 AM  PERPLEXITY INTELLIGENCE
         Query recent incidents, audits, regulatory actions per platform
         Output: Intelligence briefs in /data/intel/

8:00 AM  CLAUDE SCORING
         Read scrape + intel, re-score each platform
         Flag changes >5 points with reasoning
         Output: Scored JSON in /data/scored/

10:00 AM HUMAN REVIEW (30-60 min)
         Content team reviews flagged changes
         Approves or adjusts scores with editorial notes

10:30 AM CMS UPLOAD
         Approved scores pushed to Sanity CMS
         Site auto-rebuilds on Vercel (~30 seconds)
         Sitemap regenerated, Google pinged

TUESDAY  DISTRIBUTION
         Score change summary posted to social
         Newsletter updated with changes
```

### Tool Costs

| Tool | Purpose | Monthly Cost |
|------|---------|-------------|
| Firecrawl | Web scraping | $19-99 |
| Perplexity API | Intelligence gathering | $10-30 |
| Claude API (Sonnet) | Automated scoring | $15-40 |
| Sanity CMS | Content management | Free tier |
| Vercel | Hosting + deploys | $0-20 |
| GitHub Actions | Pipeline orchestration | Free |
| **Total** | | **$44-189/mo** |

### Firecrawl Setup

```javascript
// scrape_targets.json
{
  "platforms": [
    {
      "name": "Coinbase",
      "slug": "coinbase",
      "urls": [
        "https://coinbase.com/security",
        "https://coinbase.com/legal/insurance",
        "https://coinbase.com/fees",
        "https://coinbase.com/about"
      ]
    }
    // ... all 65+ platforms
  ]
}
```

### Claude Scoring Prompt Template

```
You are scoring {platform_name} against our framework.

CURRENT SCORES: {previous_scores}
SCRAPED DATA: {firecrawl_output}
INTELLIGENCE BRIEF: {perplexity_output}

Score this platform on each criterion (0-100):
1. [Core differentiator] (weight: 35%)
2. Ease of Use (weight: 20%)
3. Fees (weight: 15%)
4. Features (weight: 10%)
5. Transparency (weight: 10%)
6. Support (weight: 10%)

For each score, provide:
- The score (0-100)
- One-sentence justification
- Whether this changed from previous score
- If changed, flag with reason

Output as JSON matching our schema.
```

### GitHub Actions Workflow

```yaml
# .github/workflows/weekly-score.yml
name: Weekly Platform Scoring
on:
  schedule:
    - cron: '0 11 * * 1'  # 6 AM CT (11 UTC) every Monday
  workflow_dispatch:  # Manual trigger

jobs:
  score:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: node scripts/scrape.js
        env:
          FIRECRAWL_API_KEY: ${{ secrets.FIRECRAWL_API_KEY }}
      - run: node scripts/intel.js
        env:
          PERPLEXITY_API_KEY: ${{ secrets.PERPLEXITY_API_KEY }}
      - run: node scripts/score.js
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
      - name: Create PR with score updates
        uses: peter-evans/create-pull-request@v5
        with:
          title: "Weekly score update - ${{ github.event.schedule }}"
          body: "Automated score update. Review flagged changes before merging."
          branch: weekly-scores
```

---

## 9. NEWSLETTER (BEEHIIV) SETUP

### Why Beehiiv

- Built-in growth tools (Boosts, Recommendations)
- Ad network for future monetization
- SEO-optimized web pages (Google indexes newsletter archives)
- Referral program built in
- Free tier up to 2,500 subscribers
- Native analytics, A/B testing

### Newsletter Structure

**Name:** The [Your Industry] Report (e.g., "The Custody Report")
**Frequency:** Weekly (Tuesday mornings)
**Length:** 800-1,200 words, 5-minute read

### Issue Template

```
Subject: [Provocative stat or question] - The [Name] Report #[XX]

---

THIS WEEK'S NUMBERS
[2-3 data points. Short and punchy.]

---

THE DEEP DIVE
[400-500 words on one topic. This is the editorial heart.
Always connects back to your core question.]

---

SCORE UPDATES
[Any score changes this week with brief reasoning]
| Platform | Old | New | Why |
Full scores: yoursite.com/scores

---

[INDUSTRY] IN THE NEWS
[3-4 bullets linking to external stories with your lens added]

---

FROM THE PODCAST
[If applicable, 2-3 sentence summary + link]

---

That's the report for this week.
Got a company you want us to score? Reply to this email.
```

### Growth Levers

1. **Boosts** (paid acquisition): Pay $1-3 per subscriber to acquire from other newsletters
2. **Recommendations network**: Recommend 3-5 aligned newsletters, they recommend you back
3. **Referral program**: Refer 3 = PDF score card, Refer 10 = annual report early access, Refer 25 = consultation
4. **Welcome sequence**: 4 automated emails over 14 days introducing your framework
5. **Email gates**: Gate the annual report behind email capture
6. **Every site page has capture**: Inline signup on every article, review, and comparison page

### Growth Targets

| Milestone | Timeline | How |
|-----------|----------|-----|
| 100 subscribers | Week 1 | Existing audience, personal network |
| 500 subscribers | Month 1 | Boosts, social promotion, site capture |
| 2,500 subscribers | Month 3 | Enable Beehiiv Ad Network |
| 5,000 subscribers | Month 6 | Compounding from all channels |

---

## 10. SOCIAL MEDIA GROWTH ENGINE

### Twitter/X Strategy

**Account setup:**
- Handle: @[YourBrandName]
- Bio: One sentence about what you score + site URL
- Pinned: Manifesto thesis as a thread (8-10 tweets)
- X Premium: $16/mo (required for reach)

**Content calendar (12-14 tweets/week):**

| Day | Content | Time |
|-----|---------|------|
| Mon | Weekly score update thread | 9 AM |
| Mon | Reactive take on industry news | 12 PM |
| Tue | Score card visual (platform graphic) | 9 AM |
| Tue | Reactive take | 12 PM |
| Wed | Comparison hook | 9 AM |
| Thu | Score card visual | 9 AM |
| Thu | Reactive take | 12 PM |
| Fri | Data thread (weekly insight) | 9 AM |
| Fri | Comparison hook | 12 PM |
| Sat | Repost best performer | 10 AM |
| Sun | "This week in [industry]" summary | 6 PM |

**Semi-automated content engine:**
1. Set up Google Alerts for your industry keywords + every platform name
2. Alerts feed a Slack channel
3. Every morning, Claude API drafts 2-3 reactive tweets from overnight news
4. Human reviews, edits, posts. 15 min/day.

**Never fully automate.** X is killing bot accounts. Semi-automated (AI drafts, human approves) is the right approach.

### LinkedIn Strategy

Different audience, different content. LinkedIn is where institutional buyers live.

- Company page + founder's personal account (personal gets 5-10x more reach)
- 5 posts/week: data insights, comparisons, educational, news reaction, newsletter teaser
- PDF carousels perform 3x better than text posts
- Tag prospects from your sales pipeline when relevant

---

## 11. CMS MIGRATION (SANITY)

### When to Migrate

Not at launch. Launch with hardcoded data for speed. Migrate to CMS in weeks 3-4 when:
- You need non-technical team members to update scores
- The automation pipeline is ready
- You have 50+ platforms and manual updates are painful

### Sanity Schema

```javascript
// schemas/platformReview.js
export default {
  name: 'platformReview',
  title: 'Platform Review',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'categories', type: 'array', of: [{ type: 'string' }] },
    { name: 'scores', type: 'object', fields: [
      { name: 'overall', type: 'number' },
      { name: 'core', type: 'number' },     // Your differentiator
      { name: 'fees', type: 'number' },
      { name: 'ease', type: 'number' },
      { name: 'features', type: 'number' },
      { name: 'transparency', type: 'number' },
      { name: 'support', type: 'number' },
    ]},
    { name: 'custodyType', type: 'string' },
    { name: 'spof', type: 'boolean' },
    { name: 'highlight', type: 'text' },
    { name: 'risk', type: 'text' },
    { name: 'fees', type: 'string' },
    { name: 'minInvestment', type: 'string' },
    { name: 'url', type: 'url' },
    { name: 'audienceTag', type: 'string' },
    { name: 'lastUpdated', type: 'datetime' },
    { name: 'changeLog', type: 'array', of: [{ type: 'object', fields: [
      { name: 'date', type: 'datetime' },
      { name: 'change', type: 'text' },
    ]}]},
  ]
}
```

### Migration Steps

1. Set up Sanity project: `npx sanity init`
2. Create schema files
3. Write migration script that reads your platforms data file and uploads to Sanity
4. Update Next.js to read from Sanity via GROQ queries
5. Set up Vercel webhook for auto-rebuild on Sanity publish
6. Deploy Sanity Studio to studio.yoursite.com

---

## 12. STEP-BY-STEP EXECUTION TIMELINE

### DAY 1: Foundation

- [ ] Run Semrush competitor analysis (2 hours)
- [ ] Define scoring framework and category weights (1 hour)
- [ ] Score all platforms in a spreadsheet (3-4 hours)

### DAY 2-3: Build

- [ ] Open Claude Code, paste complete spec + platform data
- [ ] Claude Code builds the entire site (2-3 hours of iteration)
- [ ] Review locally, fix any issues
- [ ] Push to GitHub, deploy on Vercel
- [ ] Purchase and connect domain

### DAY 4: SEO

- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing for top 10 pages
- [ ] Verify structured data with Google's Rich Results Test

### DAY 5: Distribution Setup

- [ ] Register social handles (X, LinkedIn)
- [ ] Set up Beehiiv account + custom domain
- [ ] Create welcome email sequence
- [ ] Post manifesto thread on X
- [ ] Create LinkedIn company page

### WEEK 2: Content Velocity

- [ ] Publish first 3 articles from priority content list
- [ ] Send first newsletter issue
- [ ] Post 12-14 tweets following weekly calendar
- [ ] Generate first 5 comparison pages
- [ ] Start reply strategy on X (10 min/day)

### WEEK 3-4: CMS + Scale

- [ ] Migrate to Sanity CMS
- [ ] Set up automation pipeline (Firecrawl + Claude)
- [ ] Publish 5 more articles
- [ ] Enable Beehiiv Boosts + Referral program
- [ ] Pitch annual report to 5 industry podcasts

### MONTH 2-3: Compound

- [ ] Scale to 2 new comparison pages/week
- [ ] Scale to 1 new article/week
- [ ] Launch annual report (email-gated)
- [ ] Enable Beehiiv Ad Network (at 2,500 subscribers)
- [ ] 10+ podcast guest appearances

### MONTH 6 TARGETS

| Metric | Target |
|--------|--------|
| Organic traffic | 5,000-10,000/mo |
| Indexed pages | 150+ |
| X followers | 5,000-10,000 |
| Newsletter subscribers | 5,000-7,500 |
| LinkedIn followers | 1,000-2,000 |
| Referring domains | 200+ |
| Podcast appearances | 10-15 |

---

## 13. COST BREAKDOWN

### Monthly Operating Costs

| Item | Cost |
|------|------|
| Vercel hosting | $0-20 |
| Sanity CMS | $0 (free tier) |
| Plausible Analytics | $9 |
| Firecrawl (scraping) | $19-99 |
| Perplexity API (intel) | $10-30 |
| Claude API (scoring) | $15-40 |
| X Premium | $16 |
| Beehiiv (Scale plan) | $40 |
| Typefully or Buffer | $10-15 |
| Canva Pro | $13 |
| Domain | ~$1 (annual amortized) |
| **Total** | **$133-283/mo** |

### What This Replaces

- A single "bitcoin ira" Google Ad click costs $24.85
- A single "crypto custody" click costs $8.00
- Capturing even 100 organic visits/month from these keywords saves $800-2,500/month in ad spend
- At 5,000 monthly organic visits, this replaces $40,000-125,000/year in paid advertising

---

## 14. APPENDIX: COMPLETE PLATFORM DATA TEMPLATES

### Platform Data Spreadsheet Template

Create a Google Sheet or Excel file with these columns:

```
| Name | Slug | Categories | Overall Score | [Core] Score | Fee Score |
| Ease Score | Feature Score | Transparency Score | Support Score |
| [Core] Type | SPOF | Highlight | Risk | Fees | Min Investment |
| URL | Audience Tag | Last Updated | Change Notes |
```

### Scoring Worksheet Template

For each platform, fill out:

```
PLATFORM: [Name]
DATE SCORED: [Date]
SCORER: [Name]

CORE DIFFERENTIATOR (35%):
  Sub-criterion 1: [Score] / [Max] - [Evidence]
  Sub-criterion 2: [Score] / [Max] - [Evidence]
  ...
  Subtotal: [X] / [Max] -> Normalized: [Y] / 100

EASE OF USE (20%):
  Onboarding time: [Score] / 25 - [Evidence]
  Interface quality: [Score] / 25 - [Evidence]
  Documentation: [Score] / 25 - [Evidence]
  Mobile experience: [Score] / 25 - [Evidence]
  Subtotal: [X] / 100

[Repeat for all categories]

OVERALL SCORE: [Weighted average]
TIER: [Letter grade]
```

### Claude Code Prompt Template

Copy and customize this for your industry:

```
Build a scoring/review website for [your industry].

Tech stack: Next.js on Vercel.

Design: Dark theme (#080808 background), [your brand color] accent.
Fonts: Cormorant Garamond (display), DM Mono (data), Sora (body).

Pages:
- Homepage with hero, top scores preview, manifesto section, newsletter signup
- /scores with sortable/filterable platform rankings
- /methodology with scoring framework explanation
- /learn with educational articles
- /compare for head-to-head platform comparisons

Platform data: [paste your complete platform data here]

Scoring categories:
- [Your differentiator]: [weight]%
- Ease of Use: [weight]%
- Fees: [weight]%
- Features: [weight]%
- Transparency: [weight]%
- Support: [weight]%

Include:
- Animated score rings
- Tier badges (A+ through C-)
- Risk indicator badges
- Expandable platform cards with full score breakdown
- 3-question quiz with recommendation routing
- Email capture for newsletter
- Responsive design

Build the complete site as a single React component with all data included.
```

---

## THE FLYWHEEL (How Everything Connects)

```
SEMRUSH RESEARCH (find uncontested keywords)
  |
  v
SCORING FRAMEWORK (define what "good" looks like)
  |
  v
WEBSITE BUILD (65+ platforms, 6 categories, 150+ pages)
  |
  v
SEO (sitemap, structured data, Search Console)
  |
  v
WEEKLY AUTOMATION (Firecrawl + Perplexity + Claude)
  |  generates fresh content + score updates
  v
SANITY CMS (human review + publish)
  |  triggers site rebuild (30 seconds)
  v
GOOGLE INDEXES NEW CONTENT (organic traffic grows)
  |
  v
TWITTER/X (score cards, data threads, reactive takes)
  |  drives site traffic + newsletter signups
  v
LINKEDIN (institutional audience, carousel data)
  |  feeds sales pipeline
  v
BEEHIIV NEWSLETTER (weekly report)
  |  builds owned email list
  |  Boosts + Recommendations = subscriber growth
  v
ANNUAL REPORT (email-gated)
  |  captures leads + gets cited by journalists
  v
PODCAST APPEARANCES (backlinks + authority)
  |
  v
SALES PIPELINE (leads from all channels)
  |
  v
REVENUE (AUC, subscriptions, fund commitments, whatever your business model is)
```

Every piece feeds every other piece. The site generates the data. Social distributes it. Newsletter owns the audience. Report captures the leads. Podcasts build the backlinks. Pipeline converts. Revenue compounds.

Total investment: ~$200/month in tools + 3-5 hours/week of human time.

That's the playbook. Execute it.
