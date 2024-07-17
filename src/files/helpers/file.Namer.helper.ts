import {v4 as uuid} from 'uuid';


//! This is a helper function that is used to rename the file that is being uploaded to the server. This function is used in the multer middleware to rename the file that is being uploaded to the server.
export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('No file uploaded'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const newFileName = `${uuid()}.${fileExtension}`;	

  callback(null, newFileName);
};
