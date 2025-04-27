export const objectURLToBuffer = async (objectUrl: string) => {
  try {
    const response = await fetch(objectUrl);
    const blob = await response.blob();
    return Buffer.from(await blob.arrayBuffer());
  } catch (error) {
    console.error("Error converting object URL to buffer:", error);
    throw error;
  }
};
