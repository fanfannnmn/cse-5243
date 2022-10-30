import { IsNotEmpty, IsNumberString } from 'class-validator';

export class PaymentDTO {
  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  @IsNumberString()
  exp_month: number;

  @IsNotEmpty()
  @IsNumberString()
  exp_year: number;

  @IsNotEmpty()
  cardName: string;

  @IsNotEmpty()
  @IsNumberString()
  payment_id: number;

  @IsNotEmpty()
  @IsNumberString()
  cvv: number;
}
