import { v2 as cloudinary } from "cloudinary";

console.log({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  console.log("is worink");
  const formData = await request.formData();
  console.log({ formData });
  const file = formData.getAll("file")[0] as File;
  console.log({ file });
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const results = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(function (error, result) {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });
  const url = (results as any).secure_url;
  return Response.json({ url });
}
