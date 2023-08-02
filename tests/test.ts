import { expect, test } from '@playwright/test';

// test example
test('index page has 🎉 icon in heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: '🎉' })).toBeVisible();
});
