/**
 * Week 9-16 Task Definitions for all 3 members
 */

export const WEEKS_9_16 = {
  9: {
    1: {
      membera: { title: 'Community Feed Layout', description: 'Build social feed with post cards (text, image, poll). Create post composer with rich text. Add like, comment, share buttons. Implement infinite scroll feed.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Posts Table & Realtime', description: 'Create posts table with Supabase Realtime. Build post CRUD with image attachments. Implement like counter with optimistic updates. Create comment thread system.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Community Guidelines Doc', description: 'Draft community guidelines in all languages. Create content moderation rules. Document reporting workflow. Set up moderation admin panel requirements.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Post Composer & Media', description: 'Build rich post creation screen. Add image picker with multi-select. Create poll creation UI. Implement location tagging. Add content preview.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Chat Backend Infrastructure', description: 'Create chat rooms and messages tables. Build one-to-one messaging API. Implement Realtime message delivery. Add typing indicators and read receipts.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Social Feature Testing', description: 'Test post creation with various media types. Verify like/comment functionality. Test feed pagination. Benchmark feed loading time.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Chat UI Implementation', description: 'Build chat list screen with recent conversations. Create chat bubble UI with timestamps. Add message input with image attach. Implement real-time message updates.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Chat Media & Notifications', description: 'Build image message handling in chat. Create chat push notification triggers. Implement message delivery status (sent, delivered, read). Add chat search.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Chat Flow Testing', description: 'Test real-time message delivery between users. Verify read receipts. Test image sharing in chat. Measure message latency.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Like & Comment System UI', description: 'Build animated like button (heart burst). Create threaded comment view. Add reply to comment. Implement comment moderation flags.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Content Moderation Backend', description: 'Build report post/comment system. Create moderation action queue. Implement auto-flag for offensive content. Add user block functionality.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Moderation Flow Testing', description: 'Test report submission and resolution. Verify block user functionality. Test content filtering. Document moderation response times.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Community Polish', description: 'Add post animations and transitions. Implement pull-to-refresh on feed. Polish chat bubbles. Add emoji reactions. Fix responsive layouts.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Community Analytics', description: 'Track post engagement metrics. Build trending posts algorithm. Create community health dashboard. Monitor chat usage patterns.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Community E2E Tests', description: 'Full end-to-end community testing. Test multiple users interacting. Verify notifications for social events. Final bug report.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 9 Sync — Community Review', description: 'Demo community features. Review chat experience. Test realtime updates. Merge PRs. Plan gamification UI.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 9 Sync — Backend Community', description: 'Review Realtime performance. Check message delivery rates. Verify moderation system. Plan gamification backend.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 9 Sync — QA Community', description: 'Present community test results. Verify chat reliability. Update quality metrics. Plan Week 10 gamification tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  10: {
    1: {
      membera: { title: 'Expense Tracker Screen', description: 'Build expense input form with categories (Seeds, Fertilizer, Labor, Equipment). Create monthly expense summary with chart. Add photo receipt capture.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'XP & Leveling System', description: 'Create XP points table. Define XP awards for actions (scan crop: 10xp, post: 5xp, daily login: 15xp). Build level progression system with 10 levels.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Gamification Research', description: 'Research successful gamification in farming apps. Define badge criteria and icons. Create level naming system (Seedling → Harvest King). Document reward structure.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Leaderboard UI', description: 'Build leaderboard screen with ranked farmer list. Create weekly and monthly views. Add XP progress animations. Implement level badges display.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Leaderboard Backend', description: 'Build leaderboard query with ranking. Create weekly reset mechanism. Implement anti-gaming measures. Add regional leaderboards.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Expense Tracker Testing', description: 'Test expense entry with various categories. Verify monthly calculations. Test receipt image upload. Benchmark report generation.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Streak & Daily Rewards', description: 'Build daily login reward animation. Create streak counter with fire emoji. Add streak milestone celebrations. Implement streak recovery option.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Expense Analytics Backend', description: 'Build expense report generation. Create category-wise spending analytics. Implement season-over-season comparison. Add export as PDF/CSV.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Leaderboard Fairness Audit', description: 'Verify XP calculation accuracy. Test ranking algorithms. Check for gaming exploits. Document fairness recommendations.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Achievement Badges UI', description: 'Build achievement gallery with locked/unlocked states. Create badge detail modal. Add badge earn animation (confetti + sound). Show badges on profile.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Achievement Engine', description: 'Build achievement tracking system. Create trigger-based badge awards. Implement badge notification pipeline. Store achievement history.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Achievement Test Suite', description: 'Test all achievement trigger conditions. Verify badge award accuracy. Test edge cases (simultaneous achievements). Document results.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Gamification Polish', description: 'Polish all animations for XP gains, level ups, streaks. Add haptic feedback. Fix dark mode styles. Ensure smooth transitions.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Gamification Edge Cases', description: 'Handle timezone issues for daily login. Fix streak calculation across DST. Implement retroactive badge awards. Add admin XP management.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Gamification Regression', description: 'Full regression of expense, leaderboard, streaks, badges. Verify XP totals match expected. Test with multiple users. Final report.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 10 Sync — Gamification', description: 'Demo gamification features. Review badge animations. Test leaderboard accuracy. Merge PRs. Plan notifications UI.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 10 Sync — Backend Gamification', description: 'Review XP system performance. Verify leaderboard queries. Check expense report accuracy. Plan push notification infrastructure.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 10 Sync — QA Gamification', description: 'Present gamification test results. Verify all badges trigger correctly. Update quality dashboard. Plan Week 11 notification tests.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  11: {
    1: {
      membera: { title: 'Notification Centre UI', description: 'Build notification list screen with categories (Weather, Market, Social, System). Create notification card with icon, title, time. Add swipe to dismiss.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'FCM Infrastructure', description: 'Set up Firebase Cloud Messaging. Build notification send service. Create notification templates. Implement topic-based subscriptions.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Notification Types Catalog', description: 'Document all notification types (30+). Define priority levels. Create copy for each notification. Translate notifications to all languages.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Settings Screen', description: 'Build settings page with sections: Profile, Notifications, Language, Theme, Privacy, About. Create toggle switches for each setting. Add version info.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Deep Linking Setup', description: 'Configure deep links for all major screens. Build universal links for iOS and app links for Android. Create link routing logic. Test all deep link paths.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Notification Delivery Tests', description: 'Test push notification delivery on iOS and Android. Verify deep link navigation from notifications. Test notification grouping. Measure delivery time.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Notification Preferences UI', description: 'Build granular notification preferences screen. Create time-based quiet hours. Add channel-based toggles. Implement preview notification.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Account Management APIs', description: 'Build account deletion request flow. Create data export feature (GDPR). Implement account deactivation. Add multi-device session management.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Settings Validation Tests', description: 'Test all settings toggles persist correctly. Verify language change applies everywhere. Test theme switching. Verify quiet hours work.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'In-App Update Prompt', description: 'Build app update available modal. Create force update screen for critical updates. Add "What\'s New" changelog view. Implement review prompt.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Scheduled Notifications', description: 'Build notification scheduling system. Create morning weather brief (7 AM). Implement mandi price alert (8 AM). Set up weekly summary notification.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Analytics tracking Audit', description: 'Verify all 15 core analytics events fire correctly. Check event properties are complete. Test user identification. Review PostHog dashboard.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Settings & Notifications Polish', description: 'Polish settings transitions. Add haptic feedback for toggles. Implement animated header. Fix responsive issues. Dark mode verification.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Notification Rate Limiting', description: 'Implement per-user notification throttling. Build batch notification sender. Create notification analytics. Set up delivery monitoring.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Notification E2E Tests', description: 'Full end-to-end notification testing. Test all notification types trigger correctly. Verify preference changes are respected. Final report.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 11 Sync — Notifications', description: 'Demo notification system. Review settings UX. Test deep links. Merge PRs. Plan multilingual audit.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 11 Sync — Backend Notifications', description: 'Review notification delivery rates. Check FCM costs. Verify scheduled notifications. Plan offline-first architecture.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 11 Sync — QA Notifications', description: 'Present notification test results. Verify analytics tracking. Update quality metrics. Plan Week 12 offline testing.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  12: {
    1: {
      membera: { title: 'Translation Audit — All Screens', description: 'Audit every screen for missing translations. Fix text truncation in Hindi. Verify RTL placeholder support. Update translation files.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'WatermelonDB Integration', description: 'Install and configure WatermelonDB for offline storage. Define local schemas mirroring Supabase tables. Build model classes for all entities.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Offline Scenario Documentation', description: 'Document all offline use cases. Define data staleness thresholds. Create offline test matrix. Identify critical vs optional offline features.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Language Switcher Polish', description: 'Build in-app language switcher with instant preview. Test all 6 languages display correctly. Fix font rendering for Devanagari and Tamil.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Offline Data Sync Engine', description: 'Build bi-directional sync between WatermelonDB and Supabase. Implement conflict resolution strategy. Create sync status tracking. Handle merge conflicts.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Translation Quality Review', description: 'Review Hindi translations with native speaker. Verify Marathi translations for accuracy. Cross-check Tamil technical terms. Document corrections.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Offline Status Indicator', description: 'Build network status bar component. Create offline mode badge. Add sync progress indicator. Implement queued actions UI (pending uploads count).', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Offline Cache Strategy', description: 'Implement smart caching for weather (cache last 7 days). Cache market prices (last 24 hours). Pre-cache user\'s crop disease history. Add cache size management.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Offline Feature Tests', description: 'Test app in airplane mode. Verify cached data displays correctly. Test write queue when offline. Verify sync on reconnection.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Offline Write Queue UI', description: 'Build pending actions queue view. Show queued posts, messages, expense entries. Add manual sync trigger button. Create sync conflict resolution UI.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Background Sync Worker', description: 'Create background sync task for pending writes. Implement retry with exponential backoff. Build sync conflict detection. Add data integrity checks.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Sync Conflict Testing', description: 'Create deliberate sync conflicts. Test resolution strategies. Verify no data loss occurs. Document conflict handling behavior.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Multilingual & Offline Polish', description: 'Fix remaining translation gaps. Polish offline indicator animations. Test language switching with offline mode. Fix edge case crashes.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Data Migration & Compression', description: 'Implement local database migration system. Add data compression for offline storage. Build cache cleanup scheduler. Optimize storage footprint.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Multilingual & Offline Regression', description: 'Full regression of all features in offline mode. Test all languages end-to-end. Verify sync after extended offline period. Final report.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 12 Sync — Multilingual & Offline', description: 'Demo offline mode experience. Review language rendering. Test sync reliability. Merge PRs. Plan UI polish sprint.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 12 Sync — Backend Offline', description: 'Review sync engine performance. Check offline storage size. Verify background sync reliability. Plan performance optimization.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 12 Sync — QA Offline', description: 'Present offline test results. Verify sync reliability metrics. Update quality dashboard. Plan Week 13 polish testing.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  13: {
    1: {
      membera: { title: 'Animation Audit — All Screens', description: 'Review all screen transitions. Add missing entrance animations. Implement shared element transitions. Create animation timing guidelines.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Performance Profiling', description: 'Run React Native performance profiler. Identify render bottlenecks. Optimize heavy components with React.memo. Reduce unnecessary re-renders.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Skeleton Audit — All Screens', description: 'Verify skeleton states exist for every data-dependent screen. Fix skeleton dimensions to match real content. Test skeleton-to-content transitions.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Micro-Interactions Sprint', description: 'Add button press animations across all CTAs. Implement pull-to-refresh custom animation. Add scroll-based header collapse. Create haptic feedback patterns.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Image Optimization Pipeline', description: 'Implement progressive image loading. Add WebP format support. Create image CDN with transforms. Reduce average image load time by 50%.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Performance Benchmark', description: 'Measure app startup time. Benchmark Time to Interactive. Record frame rates during animations. Document performance baseline.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Empty & Error State Illustrations', description: 'Create custom illustrations for all empty states. Design error state graphics. Build "no internet" illustration. Add motivational empty state copy.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Bundle Size Optimization', description: 'Analyze bundle with webpack-bundle-analyzer. Remove unused dependencies. Implement code splitting. Tree shake unused imports.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Toast & Feedback System Audit', description: 'Verify toast notifications for all user actions. Test success/error/warning toast variants. Check toast timing and dismissal. Fix inconsistencies.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Typography & Spacing Pass', description: 'Audit all typography for consistency. Fix spacing using 8pt grid. Verify heading hierarchy on all screens. Polish text alignment in cards.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'API Response Optimization', description: 'Implement response pagination everywhere. Add GraphQL-like field selection. Compress API responses with gzip. Reduce average payload size.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Cross-Device Testing', description: 'Test on 5+ Android devices (different sizes). Test on iPhone SE, 13, 15. Test on iPad. Document device-specific issues.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Web App Polish', description: 'Polish Next.js web app responsive layouts. Add hover states for desktop. Implement keyboard navigation. Fix print stylesheet.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Database Query Optimization', description: 'Add missing database indexes. Optimize slow queries. Implement materialized views. Reduce average query time below 100ms.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Web App Browser Testing', description: 'Test web app in Chrome, Safari, Firefox, Edge. Verify responsive breakpoints. Test keyboard accessibility. Document browser-specific issues.', category: 'QA', priority: 'medium', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 13 Sync — Polish Review', description: 'Full app walkthrough for visual polish. Review animations on real devices. Verify dark mode everywhere. Merge PRs. Plan testing sprint.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 13 Sync — Performance Review', description: 'Review performance benchmarks. Verify optimization improvements. Check bundle size reduction. Plan testing infrastructure.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 13 Sync — QA Polish', description: 'Present cross-device test results. Verify all UI fixes. Update quality dashboard. Plan comprehensive Week 14 test plan.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  14: {
    1: {
      membera: { title: 'Unit Test Coverage — Components', description: 'Write unit tests for 20+ UI components. Achieve 70% component test coverage. Test all component variants. Add snapshot tests.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Backend Integration Tests', description: 'Write integration tests for all API endpoints. Test database operations. Verify RLS policies work correctly. Test edge function responses.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'E2E Test Setup — Detox', description: 'Install and configure Detox for React Native. Create test device configuration. Write first E2E test (login flow). Set up CI E2E pipeline.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Unit Test — Hooks & Context', description: 'Test all custom hooks (useAuth, useWeather, useMarket). Test context providers. Verify state management logic. Mock API calls.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Load Testing Setup', description: 'Set up k6 load testing. Define test scenarios (100, 500, 1000 concurrent users). Run baseline load test. Document performance under load.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'E2E Tests — Core Flows', description: 'Write E2E for: login, dashboard navigation, weather view, market prices, pest scan. Verify critical user journeys. Run on CI.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'UAT Preparation', description: 'Create UAT test scripts for 10 farmer beta testers. Prepare test devices. Build feedback collection form. Create UAT schedule.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Security Testing', description: 'Run OWASP security checklist. Test for SQL injection in all inputs. Verify token expiration. Audit API rate limiting. Test CORS configuration.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'E2E Tests — Social & Market', description: 'Write E2E for: community post creation, marketplace listing, chat messaging. Test notification interaction. Achieve 80% journey coverage.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'UAT Execution — Day 1', description: 'Conduct UAT with 5 farmers. Observe app usage patterns. Note confusion points. Record feedback on voice recorder. Document improvement ideas.', category: 'QA', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Penetration Testing', description: 'Test authentication bypass attempts. Try to access other users\' data. Test file upload security. Verify API input sanitization.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Test Coverage Report', description: 'Generate full test coverage report. Identify untested critical paths. Create coverage improvement plan. Set up coverage badges.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'UAT Execution — Day 2', description: 'Continue UAT with 5 more farmers. A/B test onboarding variants. Measure task completion rates. Collect Net Promoter Score.', category: 'QA', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Stress Testing & Recovery', description: 'Test app behavior under extreme load. Verify graceful degradation. Test database failover. Verify error recovery mechanisms.', category: 'QA', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'UAT Findings Report', description: 'Compile all UAT feedback into priority list. Create bug tickets for critical issues. Rank improvements by farmer impact. Present to team.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 14 Sync — Testing Review', description: 'Review UAT results. Prioritize P1 bugs. Plan bug fix sprint. Review test coverage goals. Merge test infrastructure PRs.', category: 'QA', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 14 Sync — Security Review', description: 'Present security audit findings. Prioritize security fixes. Review load test results. Plan production hardening.', category: 'QA', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 14 Sync — QA Summary', description: 'Present comprehensive quality report. Review E2E test suite. Verify test coverage targets. Plan Week 15 bug fix priorities.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  15: {
    1: {
      membera: { title: 'P1 Bug Fix Sprint — UI', description: 'Fix top 10 UI bugs from UAT. Address farmer feedback on navigation. Fix dark mode contrast issues. Resolve crash-causing UI bugs.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Database Optimization Sprint', description: 'Optimize the 5 slowest database queries. Add missing indexes. Implement connection pooling. Reduce average API response time by 40%.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Store Listing Screenshot Prep', description: 'Take Play Store screenshots on Pixel 7. Create feature graphic (1024x500). Write store description in Hindi and English. Prepare promo video script.', category: 'Design', priority: 'high', timeEstimate: 3 },
    },
    2: {
      membera: { title: 'Store Listing Copy & Assets', description: 'Write compelling app description (short + long). Create whats-new changelog. Design promo banner. Prepare app icon variations.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Production Environment Setup', description: 'Set up production Supabase project. Configure production API keys. Set up CDN for static assets. Configure production domain and SSL.', category: 'DevOps', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Privacy Policy & Legal', description: 'Draft privacy policy for Indian regulations. Create terms of service. Add data collection disclosures. Prepare DPDPA compliance documentation.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'EAS Build Configuration', description: 'Configure EAS Build profiles (development, preview, production). Set up Android keystore. Configure iOS certificates. Run first production build.', category: 'DevOps', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Production Data Migration', description: 'Migrate seed data to production. Verify all RLS policies on production. Test production API endpoints. Set up database backups.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'App Store Compliance Check', description: 'Review Google Play policy compliance. Check content rating requirements. Verify permission usage justifications. Prepare data safety form.', category: 'QA', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'P2 Bug Fix Sprint', description: 'Fix remaining P2 bugs (visual glitches, alignment issues). Polish onboarding animations. Fix text truncation in Hindi. Verify all device sizes.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Monitoring & Alerting Setup', description: 'Set up Sentry production monitoring. Configure uptime alerts. Build error rate dashboard. Set up Slack notifications for critical errors.', category: 'DevOps', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Landing Page Development', description: 'Build simple landing page with app preview, features, download link. Add press kit section. Create social media preview cards.', category: 'Frontend', priority: 'high', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Final Production Build', description: 'Generate signed APK and AAB. Generate iOS build. Run smoke tests on production build. Prepare for store submission. Create release notes.', category: 'DevOps', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Production Load Test', description: 'Run load tests against production. Verify auto-scaling works. Test CDN cache hit rates. Document production capacity limits.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Play Store Submission', description: 'Submit app to Google Play. Fill all store listing fields. Upload screenshots and feature graphic. Set up staged rollout (10%). Submit for review.', category: 'DevOps', priority: 'high', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Week 15 Sync — Pre-Launch', description: 'Verify production build is stable. Review store submission status. Plan launch day activities. Prepare launch announcement.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Week 15 Sync — Production Ready', description: 'Verify production environment health. Review monitoring dashboards. Confirm backup systems. Prepare for launch traffic.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Week 15 Sync — Launch Prep', description: 'Review store submission status. Prepare social media posts. Finalize press outreach list. Plan launch day monitoring.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
  16: {
    1: {
      membera: { title: 'Play Store Launch Day', description: 'Release app to 100% on Play Store. Monitor crash reports in real-time. Respond to first user reviews. Post launch announcement on social media.', category: 'DevOps', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Launch Monitoring Dashboard', description: 'Monitor server health during launch. Watch error rates and response times. Scale infrastructure if needed. Handle any production incidents.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'PR & Social Launch', description: 'Send press releases to agricultural media. Post on ProductHunt. Share on Twitter, LinkedIn. Reach out to farming influencers. Monitor social mentions.', category: 'Research', priority: 'high', timeEstimate: 4 },
    },
    2: {
      membera: { title: 'Product Hunt Submission', description: 'Create Product Hunt listing with demo GIF. Write compelling tagline. Prepare for Q&A. Engage with comments. Track upvotes and traffic.', category: 'Frontend', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Post-Launch Hot Fixes', description: 'Fix any critical bugs from launch day. Address user-reported crashes. Optimize slow endpoints discovered under real load. Push OTA updates.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Launch Analytics Review', description: 'Review day-1 analytics: downloads, DAU, retention. Analyze user behavior patterns. Document top user flows. Identify drop-off points.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    3: {
      membera: { title: 'Demo Video Production', description: 'Record app demo video (2 min). Edit with captions in Hindi and English. Create feature highlight reels for social media. Upload to YouTube.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Phase 2 Technical Planning', description: 'Design Phase 2 architecture (IoT sensors, drone imagery, AI chatbot). Create technical feasibility study. Estimate development timelines.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'User Feedback Analysis', description: 'Compile first week user reviews. Categorize feedback (bugs, features, praise). Create priority list for Phase 2 features. Document key insights.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    4: {
      membera: { title: 'Phase 2 UI Concepts', description: 'Design wireframes for Phase 2 features (IoT dashboard, drone analysis, AI chatbot). Create mood board. Present concepts to team for feedback.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Infrastructure Review & Scaling', description: 'Review infrastructure costs at scale. Plan auto-scaling strategies. Evaluate CDN alternatives. Create cost projection for 100K users.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Investor Deck — Market Research', description: 'Research TAM/SAM/SOM for Indian AgriTech. Gather user traction metrics. Document competitive advantages. Prepare market size slides.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    5: {
      membera: { title: 'Investor Pitch Deck Design', description: 'Design 15-slide investor pitch deck. Create compelling visuals with app screenshots. Add traction metrics charts. Polish presentation animations.', category: 'Design', priority: 'high', timeEstimate: 4 },
      memberb: { title: 'Phase 2 Backend Architecture', description: 'Design microservices architecture for scale. Plan data pipeline for IoT. Create ML model serving infrastructure design. Document API versioning strategy.', category: 'Backend', priority: 'high', timeEstimate: 4 },
      memberc: { title: 'Investor Outreach Prep', description: 'Create list of 50 AgriTech investors in India. Draft email templates. Prepare one-pager summary. Set up investor CRM. Schedule first meetings.', category: 'Research', priority: 'high', timeEstimate: 3 },
    },
    6: {
      membera: { title: 'Final Sync — Retrospective & Celebration', description: 'Present KrishiSahayak journey (Day 1 to Day 96). Share launch metrics. Discuss lessons learned. Celebrate team achievement. Plan Phase 2 kickoff date.', category: 'Frontend', priority: 'high', timeEstimate: 6 },
      memberb: { title: 'Final Sync — Technical Retrospective', description: 'Review technical debt accumulated. Document architecture decisions. Create Phase 2 tech roadmap. Assign preliminary Phase 2 ownership areas.', category: 'Backend', priority: 'high', timeEstimate: 6 },
      memberc: { title: 'Final Sync — Quality & Growth Report', description: 'Present final quality metrics. Share user growth numbers. Review investor outreach progress. Document team retrospective action items.', category: 'QA', priority: 'high', timeEstimate: 6 },
    },
  },
};
