export class CreateMassageDto {
  title: string;
  description: string;
  price: number;
  duration: number;
  adId: string;
  priceDiscount?: number;
}
