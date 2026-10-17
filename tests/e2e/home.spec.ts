import { expect, test } from '@playwright/test'

test('página inicial exibe marca e recursos', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Conecta\+ React Starter Kit/ })).toBeVisible()
  await expect(page.getByText('Arquitetura modular')).toBeVisible()
})

test('rota inexistente exibe página 404', async ({ page }) => {
  await page.goto('/nao-existe')
  await expect(page.getByRole('heading', { name: '404' })).toBeVisible()
})
