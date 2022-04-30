import { AdPaymentOptions } from '../entities/ad.entity';

export class CreateAdDto {
  title: string;
  description: string;
  streetNumber: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  website: string;
  paymentOptions: AdPaymentOptions[];
  businessPhoneNumber: string;
}
