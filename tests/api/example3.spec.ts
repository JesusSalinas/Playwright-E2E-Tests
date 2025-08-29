import { test, expect } from "@playwright/test";
import { validateSchema } from "../../utils/validateSchema";
import { postSchema } from "../../schemas/postSchema";
import { API_BASE_URL } from '../../config/env';

test.describe('API - JSONPlaceholder Posts', () => {
  test('should return a valid post schema', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    validateSchema(postSchema, body);
  });

  test('should return a list of valid posts', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    validateSchema(postSchema, body[0]);
  });
});
