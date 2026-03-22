import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads without errors
    await expect(page).toHaveTitle(/PoupaMais/);

    // Check for Portuguese content (key indicator the site loaded correctly)
    await expect(page.locator('body')).toContainText('financeira');

    // Check that no console errors occurred
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Reload to catch any initial console errors
    await page.reload();
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });

  test('health endpoint responds correctly', async ({ request }) => {
    const response = await request.get('/api/health');

    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.data.status).toBe('healthy');
    expect(data.data).toHaveProperty('database');
    expect(data.data).toHaveProperty('uptime');
    expect(data.data).toHaveProperty('timestamp');
  });

  test('stats API endpoint responds correctly', async ({ request }) => {
    const response = await request.get('/api/stats');

    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.data).toHaveProperty('page_views');
    expect(data.data).toHaveProperty('pricing_clicks');
    expect(data.data).toHaveProperty('affiliate_clicks');
  });

  test('sitemap.xml is accessible', async ({ request }) => {
    const response = await request.get('/sitemap.xml');

    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('xml');

    const content = await response.text();
    expect(content).toContain('<urlset');
    expect(content).toContain('https://poupamais.vercel.app');
  });

  test('robots.txt is accessible', async ({ request }) => {
    const response = await request.get('/robots.txt');

    expect(response.ok()).toBeTruthy();

    const content = await response.text();
    expect(content).toContain('User-agent');
    expect(content).toContain('Sitemap');
  });

  test('no JavaScript errors on homepage', async ({ page }) => {
    const jsErrors: string[] = [];

    page.on('pageerror', error => {
      jsErrors.push(error.message);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(jsErrors).toHaveLength(0);
  });

  test('page has proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/PoupaMais/);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /financeira/);

    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /PoupaMais/);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /financeira/);

    // Check JSON-LD structured data
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
  });
});