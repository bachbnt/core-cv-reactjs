/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { expect, test, type Locator } from '@playwright/test';

const getBox = async (locator: Locator) => {
  const box = await locator.boundingBox();
  if (!box) throw new Error('Expected locator to have a bounding box');
  return box;
};

test.describe('portfolio app', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/__chat-proxy/chat', async (route) => {
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ text: 'Mock assistant reply' }),
      });
    });
  });

  test('renders the mocked home page', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Bach Bui/);
    await expect(
      page.getByRole('heading', { name: 'Bach Bui', exact: true }),
    ).toBeVisible();
    await expect(page.getByText('Software Engineer')).toBeVisible();
    await expect(page.getByRole('button', { name: 'About me' })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Contact me' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open chat' })).toBeVisible();
  });

  test('keeps home CTA button heights stable on outlined hover', async ({
    page,
  }) => {
    await page.goto('/');

    const filledButton = page.getByRole('button', { name: 'About me' });
    const outlinedButton = page.getByRole('button', { name: 'Contact me' });
    const filledBox = await getBox(filledButton);
    const outlinedBoxBefore = await getBox(outlinedButton);

    expect(Math.abs(filledBox.height - outlinedBoxBefore.height)).toBeLessThan(
      1,
    );

    await outlinedButton.hover();
    const outlinedBoxAfter = await getBox(outlinedButton);

    expect(
      Math.abs(outlinedBoxBefore.height - outlinedBoxAfter.height),
    ).toBeLessThan(1);
    expect(Math.abs(filledBox.height - outlinedBoxAfter.height)).toBeLessThan(
      1,
    );
  });

  test('constrains the layout frame on wide desktop screens', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto('/');

    const contentBox = await getBox(page.locator('.MuiContainer-root').first());
    const toolbarBox = await getBox(page.locator('.MuiToolbar-root').first());

    expect(contentBox.width).toBeLessThanOrEqual(1441);
    expect(toolbarBox.width).toBeLessThanOrEqual(1441);
    expect(contentBox.x).toBeGreaterThan(500);
    expect(toolbarBox.x).toBeGreaterThan(500);
  });

  test('navigates between desktop pages from the header', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByText('Hello World!')).toBeVisible();
    await expect(page.getByText(/My name is Bach Bui/)).toBeVisible();

    await page.getByRole('button', { name: 'Resume', exact: true }).click();
    await expect(page).toHaveURL(/\/resume$/);
    await expect(
      page.getByRole('heading', { name: 'Education' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Experience' }),
    ).toBeVisible();

    await page.getByRole('button', { name: 'Project', exact: true }).click();
    await expect(page).toHaveURL(/\/project$/);
    await expect(page.getByText('VenusAI')).toBeVisible();
  });

  test('opens mobile drawer and navigates to contact', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Open menu' }).click();
    await page
      .getByRole('button', { name: 'Contact', exact: true })
      .last()
      .click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByText('Leave me a message')).toBeVisible();
  });

  test('validates the contact message form', async ({ page }) => {
    await page.goto('/contact');

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByText('Leave me a message')).toBeVisible();

    await page.getByRole('button', { name: 'Send' }).click();

    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Message is required')).toBeVisible();
  });

  test('submits a valid contact message with mock data enabled', async ({
    page,
  }) => {
    await page.goto('/contact');

    await page.getByRole('textbox', { name: 'Name' }).fill('Bach');
    await page.getByRole('textbox', { name: 'Message' }).fill('Hello');
    await page.getByRole('button', { name: 'Send' }).click();

    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('');
    await expect(page.getByRole('textbox', { name: 'Message' })).toHaveValue(
      '',
    );
  });

  test('renders project and payment data from mock data', async ({ page }) => {
    await page.goto('/project');

    await expect(
      page.getByRole('heading', { name: 'Freelance' }),
    ).toBeVisible();
    await expect(page.getByText('VenusAI')).toBeVisible();
    await expect(page.getByText('AI avatars creation app')).toBeVisible();

    await page.goto('/payment');

    await expect(page.getByText('BIDV')).toBeVisible();
    await expect(page.getByText('6010822107')).toBeVisible();
  });

  test('opens chatbot and receives a mocked assistant reply', async ({
    page,
  }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Open chat' }).click();
    await expect(page.getByText('Portfolio assistant')).toBeVisible();
    await expect(page.getByText('Hi, how can I help?')).toBeVisible();

    await page.getByPlaceholder(/Ask me anything/).fill('Who is Bach?');
    await page.getByRole('button', { name: 'Send chat message' }).click();

    await expect(page.getByText('Mock assistant reply')).toBeVisible();
  });

  test('opens the CV preview from the header', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'My CV' }).click();

    await expect(page.getByText('CV Preview')).toBeVisible();
    const downloadLink = page.getByRole('link', { name: /Download|Preparing/ });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute(
      'download',
      'bui-ngo-ton-bach-cv.pdf',
    );
    await expect(page.locator('iframe')).toBeVisible();
    await expect(page.locator('iframe')).toHaveAttribute('src', /^blob:/);
  });

  test('renders the not-found page for unknown routes', async ({ page }) => {
    await page.goto('/unknown-route');

    await expect(page.getByAltText('404')).toBeVisible();
  });
});
