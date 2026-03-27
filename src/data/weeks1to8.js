/**
 * Week 1-8 Task Definitions for all 3 members
 * Each week has 6 days × 3 members = 18 tasks per week
 */

// [week][dayOfWeek (1-6)][memberId] => { title, description, category, priority, timeEstimate }
export const WEEKS_1_8 = {
  1: {
    1: {
      membera: { title: 'Figma Design System Setup', description: 'Create shared Figma file. Define color tokens (hex values for all palette). Set up typography scale H1 to Caption. Create 8pt grid layout guides. Export design tokens as JSON.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Repository & Project Init', description: 'Create GitHub org hura-group. Init monorepo with pnpm workspaces. Create /apps/mobile (Expo) and /apps/web (Next.js). Init Supabase project, copy keys to .env. Install Supabase CLI.', category: 'DevOps', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Competitor Research & Planning', description: 'Audit all competitors — DeHaat, BigHaat, AgriBazaar. Document their UX flows and feature gaps. Create competitor comparison spreadsheet. Draft KrishiSahayak differentiators doc.', category: 'Research', priority: 'high', timeEstimate: 4 },
    },
    2: {
      membera: { title: 'Component Library Kickoff', description: 'Install NativeWind v4 in Expo project. Create theme files for colors, spacing, typography. Build Button component with variants. Build Card component with shadow elevation.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Database Schema Design', description: 'Write all SQL migrations (users, farms, market_prices etc.). Enable RLS on all tables. Create service and anon role policies. Write seed.sql with crop list and govt schemes data.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Technical Documentation Setup', description: 'Write CONTRIBUTING.md with branch naming, PR template, commit format. Configure ESLint and Prettier. Add Husky pre-commit hooks. Create README.md for both apps.', category: 'DevOps', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Onboarding Screen Designs', description: 'Design splash screen in Figma with animation concept. Design language selection screen. Design walkthrough screens 1-3 with illustration placeholders. Design OTP login screen.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Supabase Edge Functions Setup', description: 'Create price-cache function (Agmarknet API hourly). Create news-fetch function (NewsAPI daily). Set up cron schedules via pg_cron. Test edge functions locally.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'CI/CD Pipeline Setup', description: 'Create GitHub Actions CI workflow: checkout, install, lint, type-check, test. Create build workflow (EAS build trigger). Set up branch protection on main.', category: 'DevOps', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Mobile Project Architecture', description: 'Set up React Navigation v6 (Stack + Tabs). Create screen stubs for all 12 screens. Set up Zustand stores. Install TanStack Query v5. Set up Sentry for RN.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'API Keys & Third-Party Setup', description: 'Register OpenWeatherMap, Plant.id, Twilio, NewsAPI. Store all keys in Supabase secrets. Test all APIs via Postman. Document expected response shapes.', category: 'Backend', priority: 'high', timeEstimate: 3 },
      memberc: { title: 'PostHog & Analytics Setup', description: 'Create PostHog project, add React Native SDK. Define 15 core events. Add PostHog provider to App root. Create typed track() function. Test event firing.', category: 'Research', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Next.js Web Project Setup', description: 'Init Next.js 14 with App Router and TypeScript. Configure Tailwind CSS and shadcn/ui. Set up Supabase client for web. Create shared UI component library structure.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Supabase Auth Configuration', description: 'Enable Phone OTP provider in Supabase. Configure Twilio SMS integration. Set up auth redirect URLs. Write AuthContext and useAuth hook. Test OTP flow end-to-end.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Design System Documentation', description: 'Document all color tokens with hex and usage rules. Document typography scale. Document component props. Create icon list using Phosphor Icons. Review Figma file.', category: 'Research', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 1 Sync — Frontend Review', description: 'Verify all environment setups. Confirm app runs locally. Review all design tokens committed. Merge open PRs to main. Plan Week 2 frontend tasks.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 1 Sync — Backend Review', description: 'Verify Supabase schema is live. Confirm all third-party API keys working. Review CI pipeline status. Resolve blockers. Plan Week 2 backend architecture.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 1 Sync — QA & Docs Review', description: 'Verify all documentation is complete. Review competitor analysis. Confirm analytics is tracking. Update sprint board for Week 1. Write Week 2 QA test scripts.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  2: {
    1: {
      membera: { title: 'Splash Screen Implementation', description: 'Build animated splash screen with logo. Implement Lottie animation. Add loading states. Set up SplashScreen API for Expo. Test on both iOS and Android.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Auth Backend — OTP Flow', description: 'Implement phone number validation. Build OTP send function with Twilio. Create verify OTP endpoint. Handle session creation with Supabase Auth. Add rate limiting.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Farmer Persona Research', description: 'Interview 5 farmers about smartphone usage. Document pain points with current apps. Create farmer journey map. Identify key accessibility needs.', category: 'Research', priority: 'high', timeEstimate: 4 },
    },
    2: {
      membera: { title: 'Language Selection Screen', description: 'Build language selection UI with 6 language cards. Implement i18n provider using react-i18next. Create translation structure. Add language persistence.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'User Profile Table & API', description: 'Create users profile table with farm details. Build profile CRUD endpoints. Add avatar upload with Supabase Storage. Implement profile validation.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'i18n Translation Files Setup', description: 'Create Hindi, Marathi, Tamil, Telugu, Kannada translation stubs. Set up translation workflow. Document translation guidelines. Create glossary.', category: 'Research', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Onboarding Walkthrough Screens', description: 'Build 3-step walkthrough with swipeable pages. Add illustrations and animations. Implement skip button. Track onboarding completion state.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Supabase Realtime Setup', description: 'Configure realtime subscriptions for user status. Set up presence tracking. Build connection status handler. Test websocket connections.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Accessibility Audit Framework', description: 'Set up accessibility testing tools. Create a11y checklist for all screens. Document WCAG compliance targets. Test with screen readers.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'OTP Login Screen UI', description: 'Build phone number input with country code. Create OTP digit input component (4-6 digits). Add timer for resend OTP. Handle keyboard behavior.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Farm Data Schema & Seeding', description: 'Create farm details table (location, size, crops). Build crop master data table. Seed crop database with 50+ Indian crops. Add soil type data.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Test Plan for Auth Flow', description: 'Write test cases for login flow (happy path + edge cases). Document OTP timeout scenarios. Create test data fixtures. Set up test environment.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Profile Setup Screen', description: 'Build multi-step profile form: personal info, farm details, crop selection. Add form validation. Implement image picker for avatar. Save to Supabase.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'JWT Token & Session Management', description: 'Implement refresh token rotation. Build secure session storage. Add auto-logout on expiry. Create session middleware. Test token lifecycle.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Profile Validation Tests', description: 'Write unit tests for profile validation. Test image upload edge cases. Verify form field constraints. Document test results.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 2 Sync — Auth & Onboarding Review', description: 'Demo complete auth flow. Review onboarding UX feedback. Merge PRs. Fix visual bugs. Plan dashboard screens for Week 3.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 2 Sync — Backend Auth Review', description: 'Verify OTP flow in production. Load test auth endpoints. Review security policies. Fix rate limiting issues. Plan Week 3 APIs.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 2 Sync — QA Sign-off', description: 'Execute all auth test cases. Document bugs found. Verify translations load correctly. Update sprint board. Write Week 3 test plan.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  3: {
    1: {
      membera: { title: 'Bottom Tab Navigation', description: 'Build bottom tab bar with 5 tabs: Home, Market, Camera, Community, Profile. Add animated icons. Implement tab switching with transitions.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Dashboard Data API', description: 'Build aggregated dashboard endpoint. Create weather summary cache. Build recent activity feed query. Optimize with database views.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Navigation Flow Testing', description: 'Test all navigation paths. Verify deep linking works. Test back button behavior. Document navigation state edge cases.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Home Screen — Hero Section', description: 'Build greeting header with farmer name. Add weather widget preview card. Create quick action buttons grid. Implement pull-to-refresh.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Realtime Dashboard Subscriptions', description: 'Set up realtime listeners for price updates. Build notification count subscription. Create activity feed realtime channel. Handle reconnections.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Skeleton Loading States', description: 'Design skeleton screens for Home, Market, Profile. Build reusable Skeleton component. Add shimmer animation. Test loading transitions.', category: 'Frontend', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Home Screen — Sections Layout', description: 'Build "Today\'s Weather" section. Add "Market Prices" summary section. Create "Latest News" horizontal scroll. Add "My Farm" stats card.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Push Token Registration', description: 'Set up FCM token registration. Build token storage table. Create notification preferences API. Handle token refresh logic.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Notification Bell Component', description: 'Build notification bell icon with badge count. Create notification dropdown/modal. Style unread vs read states. Add mark-all-read action.', category: 'Frontend', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Dark Mode Implementation', description: 'Create dark/light color schemes. Build theme toggle component. Implement system preference detection. Persist theme choice. Test all screens.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Caching Layer Setup', description: 'Implement response caching with TTL. Build cache invalidation logic. Add offline cache headers. Create cache warming function.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Dark Mode Visual QA', description: 'Test all screens in both light and dark mode. Document contrast issues. Verify text readability. Check image visibility in dark mode.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Empty States & Error Screens', description: 'Design empty state illustrations for all sections. Build error boundary component. Create "No Internet" screen. Add retry mechanisms.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Error Logging & Monitoring', description: 'Set up Sentry for backend. Create error tracking middleware. Build health check endpoint. Set up uptime monitoring alerts.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Error Handling Test Suite', description: 'Test network error scenarios. Verify error boundaries catch crashes. Test offline behavior. Document error recovery flows.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 3 Sync — Dashboard Review', description: 'Demo full home screen experience. Review dark mode polish. Verify all sections render correctly. Merge PRs. Plan weather module.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 3 Sync — API Review', description: 'Load test dashboard APIs. Review caching effectiveness. Verify realtime connection stability. Plan weather integration.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 3 Sync — QA Dashboard', description: 'Full dashboard regression test. Verify skeleton states. Test pull-to-refresh. Update test coverage report. Plan Week 4 tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  4: {
    1: {
      membera: { title: 'Weather Screen UI — Current', description: 'Build current weather display with large temp, condition icon, humidity, wind speed. Add "feels like" and UV index. Create location header.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'OpenWeatherMap Integration', description: 'Build weather service wrapper. Implement geocoding for farm location. Create hourly forecast endpoint. Add weather caching (30 min TTL).', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Weather Data Translation', description: 'Translate all weather conditions to Hindi, Marathi, Tamil. Create weather advisory templates. Document weather API response mapping.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Hourly & 7-Day Forecast UI', description: 'Build horizontal scrollable hourly forecast. Create 7-day forecast list with min/max temps. Add weather condition icons. Implement animated transitions.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'GPS Location Service', description: 'Build location permission handler. Create GPS coordinates service. Implement fallback to stored farm location. Add location update logic.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Weather Alert System', description: 'Define weather alert thresholds (heavy rain, frost, heatwave). Create alert notification templates. Build alert display component. Test scenarios.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Weather Widgets & Charts', description: 'Build rainfall chart with bar graph. Create humidity gauge visualization. Add sunrise/sunset times display. Build wind direction compass.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Weather History Storage', description: 'Create weather history table. Build daily weather snapshot cron. Implement 30-day trend calculation. Add weather comparison query.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Farming Advisory Generator', description: 'Create weather-based farming advice rules. Map weather to farming actions. Build advisory text templates in multiple languages.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Weather Advisory Section', description: 'Build "Farming Advisory" card on weather screen. Display crop-specific weather tips. Add irrigation recommendation. Style with condition colors.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Weather Edge Function Optimization', description: 'Optimize weather caching strategy. Implement batch location queries. Add error recovery. Set up monitoring for API quota usage.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Weather Unit Tests', description: 'Write tests for temperature conversion. Test forecast parsing logic. Verify caching behavior. Test GPS fallback scenarios.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Weather Screen Polish', description: 'Add animated weather backgrounds (rain, sun, clouds). Implement smooth transitions between forecast types. Polish responsiveness.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Weather Notification Rules', description: 'Build weather alert push notification trigger. Create notification scheduling for daily forecasts. Test notification delivery.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Weather Accessibility Review', description: 'Verify weather icons have alt-text. Test with screen readers. Check color contrast for condition displays. Document fixes needed.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 4 Sync — Weather Review', description: 'Demo complete weather module. Review animations and polish. Test on real device with GPS. Merge all PRs. Plan market price module.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 4 Sync — Backend Weather', description: 'Verify API quota usage. Review caching hit rates. Test edge function reliability. Plan market price API integration.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 4 Sync — QA Weather', description: 'Execute full weather test suite. Verify translations. Test offline weather experience. Update quality metrics. Plan Week 5 tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  5: {
    1: {
      membera: { title: 'Market Screen — Crop List', description: 'Build market price list with crop images. Add search and filter bar. Create category tabs (Grains, Vegetables, Fruits). Implement price trend arrows.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Agmarknet/eNAM API Integration', description: 'Build market price scraper/API wrapper. Parse Agmarknet data format. Create price normalization layer. Set up hourly price refresh.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Market Price Data Validation', description: 'Verify price data accuracy against published mandi rates. Document data discrepancies. Create validation rules for outlier detection.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Price Detail & Charts', description: 'Build crop detail screen with price history chart. Add 7-day, 30-day, 90-day chart toggles. Show min/max/avg prices. Add mandi selection.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Price Trend Calculation', description: 'Build price trend algorithm (moving average). Create daily price comparison function. Implement price alert threshold system.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Market Screen Filter Tests', description: 'Test search functionality with Hindi crop names. Verify category filters. Test sorting by price change. Document edge cases.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Price Comparison View', description: 'Build mandi-to-mandi price comparison. Create side-by-side price cards. Add transport cost estimation. Implement best-price recommendation.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Price Alert Edge Function', description: 'Build price threshold alert system. Create user price watchlist table. Implement push notification triggers. Add SMS fallback for alerts.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Mandi Map Integration', description: 'Add map view with nearby mandi locations. Show prices on map pins. Implement distance-based filtering. Test with different locations.', category: 'Frontend', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Market Dark Mode & Polish', description: 'Apply dark mode to all market screens. Polish chart colors for readability. Add price animation on load. Fix responsive issues.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Historical Price Database', description: 'Build historical price archive table. Create batch import for past prices. Implement data retention policies. Optimize query performance.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Price Alert Integration Tests', description: 'Test price alert trigger accuracy. Verify notification delivery. Test watchlist CRUD operations. Check alert frequency limits.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Market Favorites & Watchlist', description: 'Build "My Watchlist" section on market screen. Add bookmark button on each crop. Create personalized price dashboard. Implement quick-compare.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Market API Rate Limiting', description: 'Implement API rate limiting for price queries. Add request queuing. Build fallback to cached data. Monitor API health status.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Market Module Regression Tests', description: 'Full regression of market features. Test with slow network. Verify data freshness indicators. Document remaining bugs.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 5 Sync — Market Review', description: 'Demo market price module end-to-end. Review chart accuracy. Test watchlist functionality. Merge PRs. Plan news module layout.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 5 Sync — Backend Market', description: 'Review price data pipeline reliability. Check API quotas and costs. Optimize database queries. Plan news API integration.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 5 Sync — QA Market', description: 'Final market module QA pass. Verify all filters and search. Test price alerts end-to-end. Update quality dashboard. Plan Week 6 tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  6: {
    1: {
      membera: { title: 'News Feed Screen Layout', description: 'Build news feed with card layout. Add featured article hero card. Create category tabs (Agriculture, Weather, Policy, Technology). Implement infinite scroll.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'NewsAPI Edge Function', description: 'Build news aggregation from NewsAPI and custom sources. Create content curation pipeline. Implement auto-translation to Hindi. Cache articles for 6 hours.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'News Source Verification', description: 'Audit news sources for reliability. Create source trust scoring. Document content moderation guidelines. Set up flagging mechanism.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Government Schemes Screen', description: 'Build schemes list with status badges (Active, Upcoming, Expired). Create scheme detail page with eligibility criteria. Add apply button with deep link.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Schemes Database & Seeding', description: 'Create government schemes table. Seed 20+ schemes (PM-KISAN, PMFBY, KCC etc.). Build eligibility checker function. Add scheme notification triggers.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Scheme Translation & Verification', description: 'Translate all scheme descriptions to 5 languages. Verify eligibility criteria accuracy. Cross-check with official government sources.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Article Detail & WebView', description: 'Build article reader with clean typography. Implement WebView for external links. Add share button. Create save/bookmark functionality.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Content Recommendation Engine', description: 'Build simple recommendation based on crop type and location. Create "For You" personalized feed. Track article read events for improvement.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'News Feed Accessibility', description: 'Test article readability at different font sizes. Verify image alt text. Test with VoiceOver/TalkBack. Fix contrast issues.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'News Sharing & Social', description: 'Implement native share sheet integration. Build "Share as Image" feature for schemes. Add WhatsApp direct share. Track share analytics.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Content Cache & Offline', description: 'Cache articles for offline reading. Implement image pre-loading. Build offline article queue. Add sync status indicator.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Scheme Eligibility Tests', description: 'Test eligibility checker with different farmer profiles. Verify scheme status accuracy. Test deep links to government portals.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'News & Schemes Polish', description: 'Add reading time estimates. Implement font size adjustment. Polish empty states. Add skeleton loading for articles. Fix responsive layout.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Scheme Update Automation', description: 'Build scheme status auto-update based on dates. Create new scheme notification pipeline. Monitor government portals for changes.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'News Module End-to-End Tests', description: 'Full testing of news and schemes modules. Verify offline reading works. Test bookmark persistence. Document known issues.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 6 Sync — News Review', description: 'Demo news feed and schemes module. Review reading experience. Test sharing features. Merge PRs. Plan AI pest detection UI.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 6 Sync — Backend News', description: 'Review content pipeline reliability. Check API costs. Verify caching effectiveness. Plan Plant.id API integration.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 6 Sync — QA News', description: 'Final news module QA pass. Verify all translations. Test scheme notifications. Update test coverage. Plan Week 7 tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  7: {
    1: {
      membera: { title: 'Camera & Scan UI', description: 'Build camera capture screen with crop frame guide. Add gallery upload option. Create scanning animation (progress ring). Style photo preview with crop.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Plant.id API Integration', description: 'Build Plant.id service wrapper. Implement image upload and base64 encoding. Parse disease identification response. Create disease info database.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'AI Detection Test Data', description: 'Collect 20+ test images (healthy and diseased crops). Document expected identification results. Create test benchmark. Set accuracy targets.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Scanning Animation & Results', description: 'Build animated scanning overlay (DNA helix / radar sweep). Create results card with disease name, confidence %. Add treatment recommendations section.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Disease Database Schema', description: 'Create disease details table (symptoms, treatments, prevention). Seed 30+ common crop diseases. Build organic remedy suggestions. Add regional remedies.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Detection Accuracy Testing', description: 'Test Plant.id with benchmark images. Measure accuracy rates. Document misidentifications. Create confidence threshold recommendations.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Detection History Screen', description: 'Build scan history list with thumbnail, date, result. Add re-scan button. Create detailed view for past scans. Implement delete history.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Image Processing Pipeline', description: 'Build image compression before upload. Create thumbnail generation. Implement image storage in Supabase Storage. Add cleanup cron for old images.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Camera Permission Flows', description: 'Test camera permission on iOS and Android. Verify gallery access. Test denial flows. Document fallback behavior for web view.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Treatment Detail Screen', description: 'Build treatment detail view with steps, products, timeline. Add nearby agri-store finder. Create shopping list from treatments. Link to marketplace.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'API Cost Control System', description: 'Implement daily scan limit per user (free tier: 5/day). Build usage tracking dashboard. Create cost alert thresholds. Add premium tier logic.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Treatment Recommendation QA', description: 'Verify treatment accuracy with agricultural experts. Cross-check organic remedies. Test product links. Document review feedback.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'AI Module Polish & Animation', description: 'Add confidence meter animation. Polish scanning effect. Implement result reveal animation. Fix dark mode styles. Test camera on real device.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Detection Analytics Pipeline', description: 'Track most common diseases detected. Build regional disease heatmap data. Create crop health index. Generate weekly disease reports.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'AI Module Regression Tests', description: 'Full regression of camera + detection flow. Test with poor lighting images. Verify offline handling. Benchmark response times.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 7 Sync — AI Module Review', description: 'Demo pest detection end-to-end. Review accuracy with test images. Polish animations. Merge PRs. Plan marketplace design.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 7 Sync — Backend AI', description: 'Review API usage and costs. Verify cost control limits work. Check disease database completeness. Plan marketplace backend.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 7 Sync — QA AI Module', description: 'Present detection accuracy report. Verify cost controls prevent overuse. Test treatment recommendations. Plan Week 8 tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  8: {
    1: {
      membera: { title: 'Marketplace Home Screen', description: 'Build marketplace grid with category sections (Seeds, Fertilizers, Equipment, Produce). Add search bar with voice input. Create featured listings carousel.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Listings Table & CRUD API', description: 'Create marketplace listings table. Build create/read/update/delete endpoints. Add image upload for listings. Implement status workflow.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Marketplace UX Research', description: 'Analyze OLX, Meesho, Kisan Mandi app flows. Document best practices for rural marketplace UX. Create listing creation guidelines.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Listing Detail Screen', description: 'Build product detail view with image gallery. Add seller info section. Create price quote request button. Implement share listing feature.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Image Upload & Storage', description: 'Build multi-image upload with compression. Create image cdn pipeline. Implement image moderation check. Add watermark for product images.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Listing Validation Tests', description: 'Test listing creation with various image sizes. Verify price validation. Test contact information handling. Document edge cases.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Create Listing Flow', description: 'Build multi-step listing creation form. Add photo capture and crop. Implement price input with unit selector. Create preview before publishing.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Equipment Rental System', description: 'Create rental listings table. Build availability calendar. Implement booking request flow. Create rental agreement template.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Search & Filter Testing', description: 'Test marketplace search with Hindi/English queries. Verify category filters. Test location-based sorting. Benchmark search performance.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Marketplace Dark Mode', description: 'Apply dark mode to marketplace screens. Fix image contrast in dark mode. Polish listing cards. Add price badge animations.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Listing Recommendation', description: 'Build location-based listing recommendations. Create "similar items" algorithm. Implement recently viewed. Add trending listings.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Rental Flow Testing', description: 'Test rental booking flow end-to-end. Verify calendar availability. Test conflict handling. Document payment flow requirements.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Marketplace Polish', description: 'Add empty state illustrations. Polish transitions between screens. Implement pull-to-refresh. Fix responsive layout issues on tablets.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Listing Moderation System', description: 'Build report listing functionality. Create admin moderation queue. Implement auto-flag for prohibited items. Add listing expiry logic.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Marketplace E2E Tests', description: 'Full end-to-end marketplace testing. Test create, browse, search, contact flow. Verify image uploads on slow network. Final bug report.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 8 Sync — Marketplace Review', description: 'Demo marketplace features. Review listing creation flow. Test rental system. Merge PRs. Plan community feed design.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 8 Sync — Backend Market', description: 'Review image storage costs. Verify moderation system. Check listing query performance. Plan community realtime backend.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 8 Sync — QA Marketplace', description: 'Present marketplace test results. Verify all critical flows work. Update bug tracker. Plan Week 9 community testing.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
};
