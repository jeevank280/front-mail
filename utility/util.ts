import { formatDistanceToNow } from "date-fns";
// import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
// import { Upload } from "@aws-sdk/lib-storage";
// import { v4 as uuidv4 } from "uuid";

const timeAgo = (date: any) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export default timeAgo;

// interface S3UploadResult {
//   Location: string;
//   Key: string;
//   Bucket: string;
//   ETag: string;
// }

// export const uploadImageToS3 = async (file: File): Promise<S3UploadResult> => {
//   const s3Client = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//     },
//   });

//   const fileExtension = file.name.split(".").pop();
//   const fileName = `${uuidv4()}.${fileExtension}`;
//   const bucketName = process.env.S3_BUCKET_NAME!;

//   const params = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: file,
//     ContentType: file.type,
//   };

//   try {
//     const upload = new Upload({
//       client: s3Client,
//       params: params,
//     });

//     const result = await upload.done();

//     return {
//       Location: `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`,
//       Key: fileName,
//       Bucket: bucketName,
//       ETag: result.ETag!,
//     };
//   } catch (error) {
//     console.error("Error uploading image to S3:", error);
//     throw error;
//   }
// };

// export const deleteImageFromS3 = async (filename: string): Promise<void> => {
//   const s3Client = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//     },
//   });

//   const bucketName = process.env.S3_BUCKET_NAME!;

//   const params = {
//     Bucket: bucketName,
//     Key: filename,
//   };

//   try {
//     const command = new DeleteObjectCommand(params);
//     await s3Client.send(command);
//     console.log(
//       `Successfully deleted file: ${filename} from S3 bucket: ${bucketName}`
//     );
//   } catch (error) {
//     console.error(`Error deleting file: ${filename} from S3:`, error);
//     throw error;
//   }
// };
