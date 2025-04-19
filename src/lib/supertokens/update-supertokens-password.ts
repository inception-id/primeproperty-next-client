"use server";
import { RecipeUserId } from "supertokens-node";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { initializeSupertokens } from "./initialize-supertokens";

initializeSupertokens();

export const updateSupertokensPassword = async (
  userId: string,
  newPassword: string,
) => {
  try {
    const recipeUserId = new RecipeUserId(userId);
    return await EmailPassword.updateEmailOrPassword({
      recipeUserId,
      password: newPassword,
      tenantIdForPasswordPolicy: "public",
    });
  } catch (error) {
    throw error;
  }
};
