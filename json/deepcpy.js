const original = {
    name: "Rahul",
    address: {
        city: "Pune"
    }
};

const copy = JSON.parse(JSON.stringify(original));

// original → { address: { city: "Pune" } }

// copy     → { address: { city: "Pune" } }