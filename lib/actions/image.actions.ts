"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import Image from "../database/models/image.model"
import User from "../database/models/user.model"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"

// modifies a Mongoose query object to include additional data when the query is executed
const populateUser = (query: any) =>
  query.populate({
    path: "author",
    model: User,
    select: "_id firstName lastName",
  })

// ADD IMAGE
export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase()
    const author = await User.findById(userId)

    if (!author) {
      throw new Error("User not found")
    }

    const newImage = await Image.create({
      ...image,
      author: author._id,
    })

    revalidatePath(path) // show new image

    return JSON.parse(JSON.stringify(image))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE IMAGE
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await connectToDatabase()

    const imageToUpdate = await Image.findById(image._id)

    if (!imageToUpdate || imageToUpdate.author.toHexString() !== userId) {
      throw new Error("Image not found")
    }

    const updatedImage = await Image.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      { new: true }
    )

    revalidatePath(path) // show new image

    return JSON.parse(JSON.stringify(updatedImage))
  } catch (error) {
    handleError(error)
  }
}

// ADD IMAGE
export async function deleteImage(imageId: string) {
  try {
    await connectToDatabase()
    await Image.findByIdAndDelete(imageId)
  } catch (error) {
    handleError(error)
  } finally {
    redirect("/") // back to homepage
  }
}

// GET IMAGE
export async function getImageById(imageId: string) {
  try {
    await connectToDatabase()

    // Sets up a Mongoose query to include user data
    const image = await populateUser(Image.findById(imageId))

    return JSON.parse(JSON.stringify(image))
  } catch (error) {
    handleError(error)
  }
}
