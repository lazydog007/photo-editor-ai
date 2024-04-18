"use client"
import { CldImage, CldUploadWidget } from "next-cloudinary"
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { dataUrl, getImageSize } from "../../lib/utils"
import { useToast } from "../ui/use-toast"

type Props = {
  onValueChange: (value: string) => void
  setImage: React.Dispatch<any>
  image: any
  publicId: string
  type: string
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: Props) => {
  const { toast } = useToast()

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureUrl: result?.info?.secureUrl,
    }))

    onValueChange(result?.info?.public_id)

    toast({
      title: "Image uploaded successfully",
      description: "1 credit out of your account",
      duration: 5000,
      className: "success-toast",
    })
  }
  const onUploadeErrorHandler = (result: any) => {
    toast({
      title: "Something went wront uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    })
  }
  return (
    <CldUploadWidget
      uploadPreset="cerebro_photo-editor-ai"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadeErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">
            {publicId ? (
              <>
                <div className="cursor-pointer overflow-hidden rounded-[10px]">
                  <CldImage
                    width={getImageSize(type, image, "width")}
                    height={getImageSize(type, image, "height")}
                    src={publicId}
                    alt="image"
                    sizes={"(max-width: 767px 100vw, 50vw"}
                    placeholder={dataUrl as PlaceholderValue}
                    className="media-uploader_cldImage"
                  ></CldImage>
                </div>
              </>
            ) : (
              <div className="media-uploader_cta" onClick={() => open()}>
                <div className="media-uploader_cta-image">
                  <Image
                    src="/assets/icons/add.svg"
                    alt="Add Image"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="p-14-medium">Click here to upload image</p>
              </div>
            )}
          </h3>
        </div>
      )}
    </CldUploadWidget>
  )
}

export default MediaUploader
