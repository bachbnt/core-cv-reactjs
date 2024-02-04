export interface Payment {
  id: string;
  account: string;
  accountVisible: boolean;
  index: number;
  logo: string;
  logoVisible: boolean;
  name: string;
  nameVisible: boolean;
  qrCode: string;
  qrCodeVisible: boolean;
  type: PaymentType;
  user: string;
  userVisible: boolean;
  visible: boolean;
}

export enum PaymentType {
  BANK = 'bank',
  WALLET = 'wallet',
}
