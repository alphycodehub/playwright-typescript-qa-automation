import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  // readonly username: Locator;
  // readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.username = page.locator('#username');
    // this.password = page.locator('#password');
    this.loginBtn = page.locator('//*[@id="content"]/div/div/section[1]/div/div[1]/nav/ul/li[1]/a');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(user: string, pass: string) {
    // await this.username.fill(user);
    // await this.password.fill(pass);
    await this.loginBtn.click();
  }
}