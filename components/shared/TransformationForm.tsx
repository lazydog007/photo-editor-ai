"use client"

import { Form } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  aspectRatioOptions,
  defaultValues,
  transformationTypes,
} from "@/constants"
import { AspectRatioKey, debounce, deepMergeObjects } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { CustomField } from "./CustomField"
export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
})

// note: Some props schemas are in index.d.ts
const TransformationForm = ({
  action,
  data = null,
  userId,
  type,
  creditBalance,
  config = null,
}: TransformationFormProps) => {
  const transformationType = transformationTypes[type]
  const [image, setImage] = useState(data)
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)
  const [transformationConfig, setTransformationConfig] = useState(config)
  const [isPending, startTransition] = useTransition()

  // we might have some data if we are editing
  const initialValues =
    data && action === "Update"
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : defaultValues

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void
  ): void => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey]

    setImage((prevState: any) => ({
      ...prevState, // this passes the previous values
      aspectRatio: imageSize.aspectRatio,
      width: imageSize.width,
      height: imageSize.height,
    }))

    setNewTransformation(transformationType.config)
    return onChangeField(value)
  }

  const onInputChangeHandler = (
    fieldName: string,
    value: string,
    type: string,
    onChangeField: (value: string) => void
  ) => {
    debounce(() => {
      setNewTransformation((prevState: any) => ({
        ...prevState, // this passes the previous values
        [type]: {
          ...prevState[type],
          [fieldName === "prompt" ? "prompt" : "color"]: value,
        },
      }))
    }, 1000) //waits a bit befre sending the request while tying

    return onChangeField(value)
  }

  const onTransformHandler = () => {
    setIsTransforming(true)

    setTransformationConfig(
      deepMergeObjects(newTransformation, transformationConfig)
    )

    setNewTransformation(null)

    startTransition(() => {
      // await updateCredits(userId, creditFee)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomField
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />

        {/* FILL*/}
        {type == "fill" && (
          <CustomField
            control={form.control}
            name="aspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({ field }) => (
              // Aspect Ratio Select Box
              <Select
                onValueChange={(value) =>
                  onSelectFieldHandler(value, field.onChange)
                }
              >
                {" "}
                <SelectTrigger className="select-field">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {/* mapping the constant is more efficient */}
                  {Object.keys(aspectRatioOptions).map((key) => (
                    <SelectItem key={key} value={key} className="select-item">
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}

        {(type == "remove" || type === "recolor") && (
          <div className="prompt-field">
            <CustomField
              control={form.control}
              name="prompt"
              formLabel={
                type === "remove" ? "Object to Remove" : "Object to recolor" // weird bug here
              }
              className="w-full"
              render={({ field }) => (
                <Input
                  value={field.value}
                  className="input-field"
                  onChange={(e) =>
                    onInputChangeHandler(
                      "prompt",
                      e.target.value,
                      type, //remove or recolor
                      field.onChange
                    )
                  }
                />
              )}
            />

            {type === "recolor" && (
              <CustomField
                control={form.control}
                name="color"
                formLabel="Replacement Color"
                className="w-full"
                render={({ field }) => (
                  <Input
                    value={field.value}
                    className="input-field"
                    onChange={(e) =>
                      onInputChangeHandler(
                        "color",
                        e.target.value,
                        "recolor",
                        field.onChange
                      )
                    }
                  />
                )}
              />
            )}
          </div>
        )}

        <div className="flex flex-col gap-4"></div>
        <Button
          type="button"
          className="submit-button capitalize"
          disabled={isTransforming || newTransformation === null}
          onClick={onTransformHandler}
        >
          {isTransforming ? "Transforming..." : "Apply Transformation"}
        </Button>

        <Button
          type="submit"
          className="submit-button capitalize"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Save Image"}
        </Button>
      </form>
    </Form>
  )
}

export default TransformationForm
