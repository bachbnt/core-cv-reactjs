/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { z } from 'zod';

export const chatProviderSchema = z.enum(['gemini', 'openai', 'claude']);
export type ChatProvider = z.infer<typeof chatProviderSchema>;

export const chatMessageSchema = z.object({
  id: z.string().max(64).optional(),
  role: z.enum(['user', 'model']),
  content: z.string().min(1).max(2000),
});
export type ChatMessage = z.infer<typeof chatMessageSchema>;

export const chatRequestSchema = z.object({
  provider: chatProviderSchema,
  messages: z.array(chatMessageSchema).min(1).max(40),
  systemPrompt: z.string().min(1).max(8000),
});
export type ChatRequest = z.infer<typeof chatRequestSchema>;

export const chatResponseSchema = z.object({
  text: z.string(),
});
export type ChatResponse = z.infer<typeof chatResponseSchema>;
