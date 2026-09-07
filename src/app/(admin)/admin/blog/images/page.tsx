import { BlogImageUploadForm } from "./_components/blog-image-upload-form";

export default function BlogImagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Blog images</h1>
        <p className="text-sm text-muted-foreground">
          Upload an image and copy its S3 path for use in blog content.
        </p>
      </div>

      <BlogImageUploadForm />
    </div>
  );
}
