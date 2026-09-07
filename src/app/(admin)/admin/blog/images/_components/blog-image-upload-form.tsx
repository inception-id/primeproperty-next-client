"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { uploadS3ImagesMutationOptions } from "@/lib/hooks";
import { useMutation } from "@tanstack/react-query";
import {
  CopyIcon,
  LoaderCircleIcon,
  RotateCcwIcon,
  UploadIcon,
} from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { getUploadedImagePath } from "../_lib/get-uploaded-image-path";
import { getBlogImageValidationError } from "../_lib/validate-blog-image";

const acceptedImageTypes =
  ".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp";

export function BlogImageUploadForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedPath, setUploadedPath] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const uploadImage = useMutation(uploadS3ImagesMutationOptions());

  const resetUpload = () => {
    setSelectedFile(null);
    setUploadedPath(null);
    setErrorMessage(null);
    uploadImage.reset();

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile || uploadImage.isPending) {
      return;
    }

    const validationError = getBlogImageValidationError(selectedFile);
    if (validationError) {
      setErrorMessage(validationError);
      toast.error(validationError);
      return;
    }

    setErrorMessage(null);

    try {
      const response = await uploadImage.mutateAsync([selectedFile]);
      const path = getUploadedImagePath(response);

      if (!path) {
        const message = response.message || "Image could not be uploaded.";
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      setUploadedPath(path);
      setSelectedFile(null);
      toast.success("Image uploaded successfully");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Image could not be uploaded. Try again.";
      setErrorMessage(message);
      toast.error(message);
    }
  };

  const copyPath = async () => {
    if (!uploadedPath) {
      return;
    }

    try {
      await navigator.clipboard.writeText(uploadedPath);
      toast.success("S3 path copied to clipboard");
    } catch (error) {
      console.error("Unable to copy the S3 path.", error);
      toast.error("S3 path could not be copied. Copy it manually instead.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Upload an image</CardTitle>
          <CardDescription>
            Choose one PNG, JPEG/JPG, or WebP image.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            {uploadedPath ? (
              <Field>
                <FieldLabel htmlFor="blog-image-path">S3 path</FieldLabel>
                <Input
                  id="blog-image-path"
                  value={uploadedPath}
                  readOnly
                  aria-describedby="blog-image-path-description"
                />
                <FieldDescription id="blog-image-path-description">
                  This is the raw path returned by the upload API.
                </FieldDescription>
              </Field>
            ) : (
              <Field
                data-invalid={Boolean(errorMessage)}
                data-disabled={uploadImage.isPending}
              >
                <FieldLabel htmlFor="blog-image">Image</FieldLabel>
                <Input
                  ref={inputRef}
                  id="blog-image"
                  type="file"
                  accept={acceptedImageTypes}
                  disabled={uploadImage.isPending}
                  aria-invalid={Boolean(errorMessage)}
                  onChange={(event) => {
                    const file = event.target.files?.[0] ?? null;
                    const validationError = file
                      ? getBlogImageValidationError(file)
                      : null;

                    setSelectedFile(file);
                    setErrorMessage(validationError);
                    uploadImage.reset();

                    if (validationError) {
                      toast.error(validationError);
                    }
                  }}
                />
                <FieldDescription>
                  The file will be uploaded when you submit this form.
                </FieldDescription>
                {errorMessage ? <FieldError>{errorMessage}</FieldError> : null}
              </Field>
            )}
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          {uploadedPath ? (
            <>
              <Button type="button" variant="outline" onClick={resetUpload}>
                <RotateCcwIcon data-icon="inline-start" />
                Upload another image
              </Button>
              <Button type="button" onClick={copyPath}>
                <CopyIcon data-icon="inline-start" />
                Copy path
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                disabled={!selectedFile || uploadImage.isPending}
                onClick={resetUpload}
              >
                <RotateCcwIcon data-icon="inline-start" />
                Reset
              </Button>
              <Button
                type="submit"
                disabled={
                  !selectedFile ||
                  Boolean(errorMessage) ||
                  uploadImage.isPending
                }
              >
                {uploadImage.isPending ? (
                  <LoaderCircleIcon
                    data-icon="inline-start"
                    className="animate-spin"
                  />
                ) : (
                  <UploadIcon data-icon="inline-start" />
                )}
                {uploadImage.isPending ? "Uploading..." : "Upload image"}
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
