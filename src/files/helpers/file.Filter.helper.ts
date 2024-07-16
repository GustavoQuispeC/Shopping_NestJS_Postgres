import { BadRequestException } from '@nestjs/common';

//! fileFilter function is used to filter the files that are being uploaded to the server.
export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void, // callback function
) => {
  if (!file) return callback(new Error('No file uploaded'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  if (!validExtensions.includes(fileExtension)) {
    return callback(
      new BadRequestException(
        'Invalid file type. Only jpg, jpeg, png, gif files are allowed',
      ),
      false,
    );
  }

  callback(null, true);
};
