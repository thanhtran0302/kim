import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntity } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private _reviewRepository: Repository<ReviewEntity>,
  ) {}

  create({
    adId,
    service,
    cleanliness,
    valueForMoney,
    title,
    message,
  }: CreateReviewDto) {
    const overrall = (service + cleanliness + valueForMoney) / 3;

    return this._reviewRepository.save({
      ad: {
        id: adId,
      },
      title,
      message,
      service,
      cleanliness,
      valueForMoney,
      overrall,
    });
  }

  findAll() {
    return this._reviewRepository.find();
  }

  findOne(id: string) {
    return this._reviewRepository.findOneBy({ id });
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: string) {
    return `This action removes a #${id} review`;
  }
}
