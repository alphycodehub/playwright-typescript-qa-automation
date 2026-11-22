import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});