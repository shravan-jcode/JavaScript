function getUser() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve({
        name: "John",
        age: 25
      });
    } else {
      reject(new Error("Failed to get user"));
    }
  });
}

async function main() {
  try {
    const user = await getUser();

    console.log("User:", user);
    console.log("Name:", user.name);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();