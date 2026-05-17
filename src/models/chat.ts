/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export type ChatProvider = 'gemini' | 'openai' | 'claude';
