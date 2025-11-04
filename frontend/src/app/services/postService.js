const PATH = process.env.NEXT_PUBLIC_BASE_PATH;

export const create = async (formData) => {
  try {
    const res = await fetch(`${PATH}/post`, {
      method: "POST",
      body: formData, 
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Gönderim başarısız: ${errorText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("❌ create hata:", error);
    throw error;
  }
};
export const get = async () => {
  try {
    const res = await fetch(`${PATH}/post`, {
      method: "GET",
      cache: "no-store", 
    });

    if (!res.ok) {
      const errorText = await res.json();
      throw new Error(`Veri çekme başarısız: ${errorText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("❌ get hata:", error);
    throw error;
  }
};
