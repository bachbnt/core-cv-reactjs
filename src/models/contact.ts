/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

export interface Contact {
  id: string;
  icon: string;
  index: number;
  name: string;
  nameVisible: boolean;
  type: string;
  url: string;
  urlEnable: boolean;
  visible: boolean;
}

export enum ContactType {
  CONTACT = 'contact',
  SOCIAL = 'social',
}
