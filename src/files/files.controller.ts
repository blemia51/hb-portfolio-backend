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
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { MulterError, diskStorage } from 'multer';
import { extname, join } from 'path';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0];
    const extension = extname(file.originalname);
    cb(null, `${name}${extension}`);
  },
});

const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|webp|jpeg|png|gif)$/)) {
    return callback(new MulterError('LIMIT_UNEXPECTED_FILE', 'file'), false);
  }
  callback(null, true);
};

@Controller('/files')
export class FilesController {
  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage,
      fileFilter: imageFileFilter,
      limits: {
        fileSize: 1 * 1024 * 1024,
      },
    }),
  )
  uploadFile(@UploadedFile() file) {
    if (!file) throw new BadRequestException('file is required');
    console.log(file);
    return {
      message: 'File uploaded successfully!',
      filename: file.filename,
      file,
    };
  }

  @Get('image/:imageFileName')
  async getImage(
    @Param('imageFileName') imageFileName: string,
    @Res() res: Response,
  ) {
    const filepath = join(process.cwd(), './uploads', imageFileName);
    console.log(filepath);
    console.log(imageFileName);
    return res.sendFile(filepath);
  }
}
