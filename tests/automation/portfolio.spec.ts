/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { expect, test } from '@playwright/test';

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

  test('renders the not-found page for unknown routes', async ({ page }) => {
    await page.goto('/unknown-route');

    await expect(page.getByAltText('404')).toBeVisible();
  });
});
