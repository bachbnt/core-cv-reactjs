export interface Payment {
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
  visible: boolean;
}

export enum PaymentType {
  BANK = 'bank',
  WALLET = 'wallet',
}
