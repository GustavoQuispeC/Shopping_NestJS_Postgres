import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/file.Filter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/file.Namer.helper';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get(`product/:imageName`)

  findProductImage(
    @Res() res: Response, // response object
    @Param('imageName') imageName: string) {
    const path = this.filesService.getStaticProductImage(imageName);
    // res.status(403).json({
    //   ok: false,
    //   path: path,
    // });
    res.sendFile(path);
  }

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      //limits: { fileSize: 1024 * 1024 },
      storage: diskStorage({
        destination: './static/products',
        filename: fileNamer,
      }),
    }),
  )
  uploadProductImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('make sure that file is an image');
    }
    const secureUrl = `${file.filename}`;

    return {
      secureUrl,
    };
  }
}
